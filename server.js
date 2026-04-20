// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs-extra');
const path = require('path');

const app = express();
const PORT = 3000;

// ===== CORS Configuration =====
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:5500', 'http://127.0.0.1:5500', '*'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static('./'));

// ===== Data File Path - Changed to js/data.json =====
const dataFilePath = path.join(__dirname, 'js', 'data.json');

console.log(`Data file path: ${dataFilePath}`);

// ===== Helper Functions =====

async function readData() {
  try {
    if (!await fs.pathExists(dataFilePath)) {
      console.log('Creating new data.json in js folder...');
      await fs.ensureFile(dataFilePath);
      await fs.writeJSON(dataFilePath, { users: [] });
    }
    const data = await fs.readJSON(dataFilePath);
    console.log(`Read ${data.users.length} users from database`);
    return data;
  } catch (error) {
    console.error('x Error reading data:', error);
    return { users: [] };
  }
}

async function writeData(data) {
  try {
    await fs.ensureDir(path.dirname(dataFilePath));
    await fs.writeJSON(dataFilePath, data, { spaces: 2 });
    console.log(`Data saved! Total users: ${data.users.length}`);
    console.log(`📄 File: ${dataFilePath}`);
    return true;
  } catch (error) {
    console.error('x Error writing data:', error);
    return false;
  }
}

// ===== Test Route =====
app.get('/api/test', (req, res) => {
  console.log('Test endpoint hit');
  res.json({ success: true, message: 'Backend is working!' });
});

// ===== Sign Up =====
app.post('/api/signup', async (req, res) => {
  try {
    console.log('[SIGNUP] Request received');
    console.log('📦 Data:', req.body);

    const { email, phone, password, confirmPassword, recoveryHint } = req.body;

    // Validation
    if (!email || !phone || !password || !recoveryHint) {
      console.log('x Missing required fields');
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    if (password !== confirmPassword) {
      console.log('x Passwords do not match');
      return res.status(400).json({
        success: false,
        message: 'Passwords do not match'
      });
    }

    if (password.length < 6) {
      console.log('x Password too short');
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters'
      });
    }

    // Read current data
    const data = await readData();

    // Check if user exists
    const userExists = data.users.some(user => user.email === email);
    if (userExists) {
      console.log('x User already exists:', email);
      return res.status(409).json({
        success: false,
        message: 'Email already registered'
      });
    }

    // Create new user
    const newUser = {
      id: data.users.length + 1,
      email: email,
      phone: phone,
      password: password, // In production, hash this!
      recoveryHint: recoveryHint,
      createdAt: new Date().toISOString()
    };

    console.log('Creating new user:', newUser.email);
    data.users.push(newUser);

    // Write to file
    const success = await writeData(data);

    if (success) {
      console.log('[SIGNUP SUCCESS] User created:', email);
      return res.status(201).json({
        success: true,
        message: 'Account created successfully',
        user: {
          id: newUser.id,
          email: newUser.email,
          phone: newUser.phone
        }
      });
    } else {
      console.log('x [SIGNUP ERROR] Failed to save user');
      return res.status(500).json({
        success: false,
        message: 'Error saving user data'
      });
    }

  } catch (error) {
    console.error('x [SIGNUP ERROR]', error);
    res.status(500).json({
      success: false,
      message: 'Server error: ' + error.message
    });
  }
});

// ===== Login =====
app.post('/api/login', async (req, res) => {
  try {
    console.log(' [LOGIN] Request received');
    console.log(' Data:', req.body);

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    const data = await readData();
    const user = data.users.find(u => u.email === email);

    if (!user) {
      console.log('x User not found:', email);
      return res.status(401).json({
        success: false,
        message: 'Email not found'
      });
    }

    if (user.password !== password) {
      console.log('x Wrong password for user:', email);
      return res.status(401).json({
        success: false,
        message: 'Incorrect password'
      });
    }

    console.log('[LOGIN SUCCESS]', email);
    return res.status(200).json({
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        phone: user.phone,
        createdAt: user.createdAt
      }
    });

  } catch (error) {
    console.error('x [LOGIN ERROR]', error);
    res.status(500).json({
      success: false,
      message: 'Server error: ' + error.message
    });
  }
});

// ===== Get All Users =====
app.get('/api/users', async (req, res) => {
  try {
    console.log('[GET USERS] Request received');
    const data = await readData();
    res.json({
      success: true,
      count: data.users.length,
      users: data.users.map(u => ({
        id: u.id,
        email: u.email,
        phone: u.phone,
        createdAt: u.createdAt
      })) // Don't expose passwords
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error reading users'
    });
  }
});

// ===== Get User by Email =====
app.get('/api/user/:email', async (req, res) => {
  try {
    const email = decodeURIComponent(req.params.email);
    const data = await readData();
    const user = data.users.find(u => u.email === email);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        phone: user.phone,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// ===== Delete User (For testing) =====
app.delete('/api/user/:email', async (req, res) => {
  try {
    const email = decodeURIComponent(req.params.email);
    const data = await readData();

    const userIndex = data.users.findIndex(u => u.email === email);
    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    const deletedUser = data.users[userIndex];
    data.users.splice(userIndex, 1);
    await writeData(data);

    res.json({
      success: true,
      message: 'User deleted',
      deletedUser: deletedUser.email
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// ===== Start Server =====
app.listen(PORT, () => {
  console.log('\n========================================');
  console.log(` DolNow Backend Server Running!`);
  console.log(` URL: http://localhost:${PORT}`);
  console.log(` Data: ${dataFilePath}`);
  console.log('========================================\n');
});