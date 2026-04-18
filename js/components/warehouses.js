// js/components/warehouses.js
import { warehouses } from '../../data/warehouses.js';

function createWarehouses() {
  return warehouses.map(w => {
    const usage = Math.round(
      ((w.currentUsage || w.currentusage) / w.capacity) * 100
    );

    return `
    <div class="bg-white mt-10 dark:bg-neutral-900 rounded-2xl shadow-md p-6 border border-gray-200 dark:border-neutral-800 hover:shadow-lg transition">

      <div class="mb-4">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">${w.name}</h2>
        <p class="text-sm text-gray-500">${w.location}</p>
      </div>

      <div class="mb-4">
        <div class="flex justify-between text-sm mb-1">
          <span class="text-gray-600 dark:text-gray-400">Usage</span>
          <span class="font-medium text-gray-800 dark:text-white">${usage}%</span>
        </div>
        <div class="w-full bg-gray-200 dark:bg-neutral-800 rounded-full h-2">
          <div class="bg-blue-500 h-2 rounded-full" style="width: ${usage}%"></div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 text-sm mb-4">
        <div>
          <p class="text-gray-500">Capacity</p>
          <p class="font-semibold text-gray-800 dark:text-white">${w.capacity.toLocaleString()}</p>
        </div>
        <div>
          <p class="text-gray-500">Efficiency</p>
          <p class="font-semibold text-green-600">${w.efficiency}%</p>
        </div>
        <div>
          <p class="text-gray-500">Inbound</p>
          <p class="font-semibold text-gray-800 dark:text-white">${w.inbound}</p>
        </div>
        <div>
          <p class="text-gray-500">Outbound</p>
          <p class="font-semibold text-gray-800 dark:text-white">${w.outbound}</p>
        </div>
      </div>

      <div class="mb-4">
        <p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Inventory</p>
        <div class="space-y-1 text-sm">
          ${Object.entries(w.inventory).map(([key, val]) => `
            <div class="flex justify-between">
              <span class="text-gray-600 dark:text-gray-400">${key}</span>
              <span class="font-medium text-gray-800 dark:text-white">${val}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="text-xs text-gray-400 border-t pt-3 dark:border-neutral-800">
        Last update: ${w.lastUpdate}
      </div>

    </div>
    `;
  }).join('');
}

function insertWarehouses() {
  const grid = document.getElementById('warehouseGrid'); // ✅ moved inside
  if (!grid) return;

  grid.innerHTML = createWarehouses();
}

// ✅ Run immediately (no DOMContentLoaded needed for module at bottom)
insertWarehouses();