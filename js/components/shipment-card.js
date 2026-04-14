//  components/shipment-card.js 
function createShipmentCard(){
const shipmentCardHTML = `
    <div class="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">

    <!-- Header -->
    <div class="flex justify-between items-start mb-4">
        <div>
            <h3 class="text-lg font-bold text-neutral-900 dark:text-white">Tracking ID: {{id}}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{sender}} → {{receiver}}</p>
        </div>
        <span class="px-3 py-1 rounded-full text-sm font-medium {{statusBadgeClass}}">
            {{status}}
        </span>
    </div>

    <!-- Progress Bar -->
    <div class="mb-4">
        <div class="flex justify-between items-center mb-2">
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
            <span class="text-sm font-bold text-primary">{{progress}}%</span>
        </div>
        <div class="w-full h-2 bg-gray-200 dark:bg-neutral-700 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                style="width: {{progress}}%"></div>
        </div>
    </div>

    <!-- Details Grid -->
    <div class="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
            <p class="text-gray-500 dark:text-gray-400">Weight</p>
            <p class="font-semibold text-neutral-900 dark:text-white">{{weight}}</p>
        </div>
        <div>
            <p class="text-gray-500 dark:text-gray-400">Declared Value</p>
            <p class="font-semibold text-neutral-900 dark:text-white">{{value}}</p>
        </div>
        <div>
            <p class="text-gray-500 dark:text-gray-400">From</p>
            <p class="font-semibold text-neutral-900 dark:text-white">{{fromLocation}}</p>
        </div>
        <div>
            <p class="text-gray-500 dark:text-gray-400">To</p>
            <p class="font-semibold text-neutral-900 dark:text-white">{{toLocation}}</p>
        </div>
    </div>

    <!-- Timeline Preview -->
    <div class="border-t border-gray-200 dark:border-neutral-700 pt-4">
        <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Latest Update</p>
        <div class="relative pl-6 text-sm">
            <div class="absolute left-0 top-0 w-3 h-3 bg-success rounded-full"></div>
            <p class="font-medium text-neutral-900 dark:text-white">{{latestStatus}}</p>
            <p class="text-gray-600 dark:text-gray-400 text-xs">{{latestDate}}</p>
        </div>
    </div>

    <!-- Action Button -->
    <button
        class="w-full mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
        View Full Details
    </button>
</div>

`;
return shipmentCardHTML;
}

function insertShipmentCard() {
  document.body.insertAdjacentHTML('afterbegin', createShipmentCard());
}

// Load when page is ready
document.addEventListener('DOMContentLoaded', insertShipmentCard);