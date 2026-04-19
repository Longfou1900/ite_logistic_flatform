// js/auth.js

class AuthManager {
  constructor(apiUrl = 'http://localhost:3000') {
    this.apiUrl = apiUrl;
    this.currentUser = localStorage.getItem('dolnow_currentUser');
    console.log('🔐 AuthManager initialized. Current user:', this.currentUser);
  }

  // Check if user is logged in
  isLoggedIn() {
    return !!this.currentUser;
  }

  // Get current user
  getCurrentUser() {
    return this.currentUser;
  }

  // Login user
  login(email) {
    this.currentUser = email;
    localStorage.setItem('dolnow_currentUser', email);
    console.log('✅ User logged in:', email);
  }

  // Logout user
  logout() {
    console.log('🔴 Logging out user:', this.currentUser);
    
    this.currentUser = null;
    localStorage.removeItem('dolnow_currentUser');
    
    console.log('✅ User logged out');
    console.log('🔄 Clearing cache...');
    
    // Clear any other session data
    sessionStorage.clear();
    
    // Small delay to ensure cleanup
    setTimeout(() => {
      console.log('🔄 Redirecting to auth page...');
      // Use absolute path to be safe
      window.location.replace('./pages/auth.html');
    }, 100);
  }

  // Fetch user from backend
  async fetchUser() {
    if (!this.currentUser) return null;

    try {
      const response = await fetch(
        `${this.apiUrl}/api/user/${encodeURIComponent(this.currentUser)}`
      );
      const data = await response.json();
      
      if (data.success) {
        console.log('✅ User data fetched:', data.user);
        return data.user;
      } else {
        console.log('❌ Could not fetch user:', data.message);
        return null;
      }
    } catch (error) {
      console.error('❌ Error fetching user:', error);
      return null;
    }
  }
}

// Create global instance
const auth = new AuthManager();
console.log('✅ Global auth object created');