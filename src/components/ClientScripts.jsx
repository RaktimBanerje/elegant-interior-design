'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
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

    function updateOfficeLocations(state) {
      const officeLocationsDiv = document.getElementById('officeLocations');
      if (!officeLocationsDiv) return;
      officeLocationsDiv.innerHTML = '';

      let filteredOffices = state === 'all'
        ? Object.values(offices).flat()
        : offices[state] || [];

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

    function updateMap(state) {
      const mapElement = document.getElementById('map');
      if (!mapElement) return;
      mapElement.innerHTML = `<h4>Map for ${state}</h4>`;
    }

    const dropdown = document.getElementById('stateDropdown');
    if (dropdown) {
      dropdown.addEventListener('change', function (e) {
        const selectedState = e.target.value;
        updateOfficeLocations(selectedState);
        updateMap(selectedState);
      });
    }

    updateOfficeLocations('all');
    updateMap('all');

    // Mega Menu behavior
    const setMegaMenuWidth = () => {
      const megaMenus = document.querySelectorAll('.mega-menu');
      const screenWidth = window.innerWidth;
      const width = screenWidth * 0.7;

      megaMenus.forEach((megaMenu) => {
        megaMenu.style.position = 'absolute';
        megaMenu.style.left = '50%';
        megaMenu.style.transform = 'translateX(-50%)';
        megaMenu.style.width = `${width}px`;
      });
    };

    // window.addEventListener('load', setMegaMenuWidth);
    // window.addEventListener('resize', setMegaMenuWidth);

    const dropdownHover = document.querySelector('.nav-item.dropdown');
    if (dropdownHover) {
      const megaMenu = dropdownHover.querySelector('.mega-menu');
      dropdownHover.addEventListener('mouseenter', () => {
        if (megaMenu) megaMenu.style.display = 'block';
      });
      dropdownHover.addEventListener('mouseleave', () => {
        if (megaMenu) megaMenu.style.display = 'none';
      });
    }

    setMegaMenuWidth()

    // return () => {
    //   window.removeEventListener('load', setMegaMenuWidth);
    //   window.removeEventListener('resize', setMegaMenuWidth);
    // };
  }, [pathname]); // 👈 Triggers every time route/path changes

  return null; // No visual output, just side effects
}
