    // Sample data for offices
    const offices = {
      state1: [
        { name: "Office Location 1", address: "Some address in State 1", contact: "1234567890", whatsapp: "9876543210" }
      ],
      state2: [
        { name: "Office Location 2", address: "Some address in State 2", contact: "1234567890", whatsapp: "9876543210" }
      ],
      state3: [
        { name: "Office Location 3", address: "Some address in State 3", contact: "1234567890", whatsapp: "9876543210" }
      ]
    };

    // Function to update the map and office locations
    function updateOfficeLocations(state) {
      const officeLocationsDiv = document.getElementById('officeLocations');
      officeLocationsDiv.innerHTML = '';

      // Filter offices based on selected state
      let filteredOffices = [];
      if (state === 'all') {
        // Show all offices
        filteredOffices = Object.values(offices).flat();
      } else {
        // Show offices for selected state
        filteredOffices = offices[state] || [];
      }

      // Populate the right column with office locations
      filteredOffices.forEach((office) => {
        const officeDiv = document.createElement('div');
        officeDiv.classList.add('office-div');
        officeDiv.innerHTML = `
          <h5>${office.name}</h5>
          <p>Address: ${office.address}</p>
          <p>Contact: ${office.contact}</p>
          <p>WhatsApp: ${office.whatsapp}</p>
        `;
        officeDiv.addEventListener('click', function () {
          updateMap(state);
        });
        officeLocationsDiv.appendChild(officeDiv);
      });
    }

    // Function to update the map based on the selected state
    function updateMap(state) {
      const mapElement = document.getElementById('map');
      mapElement.innerHTML = `<h4>Map for ${state}</h4>`;
      // You can integrate a real map here (Google Maps, Leaflet, etc.)
    }

    // Event listener for the state dropdown
    document.getElementById('stateDropdown').addEventListener('change', function (e) {
      const selectedState = e.target.value;
      updateOfficeLocations(selectedState);
      updateMap(selectedState);
    });

    // Initialize with all locations and map
    updateOfficeLocations('all');
    updateMap('all');

    $(document).ready(function() {
        // Set the width of the mega menu dynamically to 70% of the screen width in pixels
        function setMegaMenuWidth() {
            const megaMenus = document.querySelectorAll('.mega-menu');  // Select all mega-menu elements
            const screenWidth = window.innerWidth;
            const width = screenWidth * 0.7;  // 70% of the screen width
        
            megaMenus.forEach(function(megaMenu) {
                // Reset any existing styles that could cause the issue
                megaMenu.style.position = 'absolute';  // Ensure it's absolutely positioned
                megaMenu.style.left = '50%';  // Center it horizontally
                megaMenu.style.transform = 'translateX(-50%)';  // Adjust to center it
                megaMenu.style.width = `${width}px`;  // Set the width for each mega-menu
            });
        }
    
        // Call the function on page load and window resize
        window.addEventListener('load', setMegaMenuWidth);
        window.addEventListener('resize', setMegaMenuWidth);
    
        // For hovering functionality
        const dropdown = document.querySelector('.nav-item.dropdown');
        dropdown.addEventListener('mouseenter', () => {
          const megaMenu = dropdown.querySelector('.mega-menu');
          megaMenu.style.display = 'block';
        });
        dropdown.addEventListener('mouseleave', () => {
          const megaMenu = dropdown.querySelector('.mega-menu');
          megaMenu.style.display = 'none';
        });
    })