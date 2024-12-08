"use client"
import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';

const actions = [
  { name: 'add_business', action: 'addBusiness' },
  { name: 'add_van', action: 'addVan' },
  { name: 'add_worker_role', action: 'addWorkerRole' },
  { name: 'drive_van', action: 'driveVan' },
  { name: 'fire_employee', action: 'fireEmployee' },
  { name: 'hire_employee', action: 'hireEmployee' },
  { name: 'load_van', action: 'loadVan' },
  { name: 'manage_service', action: 'manageService' },
  { name: 'purchase_product', action: 'purchaseProduct' },
  { name: 'refuel_van', action: 'refuelVan' },
  { name: 'remove_driver_role', action: 'removeDriverRole' },
  { name: 'remove_product', action: 'removeProduct' },
  { name: 'remove_van', action: 'removeVan' },
  { name: 'start_funding', action: 'startFunding' },
  { name: 'takeover_van', action: 'takeoverVan' },
];

function ActionMenu() {
  // Define the functions for each action
  // const addBusiness = () => console.log('Adding business...');
  // const addVan = () => console.log('Adding van...');
  // const addWorkerRole = () => console.log('Adding worker role...');
  // const driveVan = () => console.log('Driving van...');
  // const fireEmployee = () => console.log('Firing employee...');
  // const hireEmployee = () => console.log('Hiring employee...');
  // const loadVan = () => console.log('Loading van...');
  // const manageService = () => console.log('Managing service...');
  // const purchaseProduct = () => console.log('Purchasing product...');
  // const refuelVan = () => console.log('Refueling van...');
  // const removeDriverRole = () => console.log('Removing driver role...');
  // const removeProduct = () => console.log('Removing product...');
  // const removeVan = () => console.log('Removing van...');
  // const startFunding = () => console.log('Starting funding...');
  // const takeoverVan = () => console.log('Taking over van...');

  // Function to handle button click based on action
  const handleClick = (action) => {

    // You can also call the respective action here if needed
    switch (action) {
      case 'addBusiness':
        addBusiness();
        break;
      case 'addVan':
        addVan();
        break;
      case 'addWorkerRole':
        addWorkerRole();
        break;
      case 'driveVan':
        driveVan();
        break;
      case 'fireEmployee':
        fireEmployee();
        break;
      case 'hireEmployee':
        hireEmployee();
        break;
      case 'loadVan':
        loadVan();
        break;
      case 'manageService':
        manageService();
        break;
      case 'purchaseProduct':
        purchaseProduct();
        break;
      case 'refuelVan':
        refuelVan();
        break;
      case 'removeDriverRole':
        removeDriverRole();
        break;
      case 'removeProduct':
        removeProduct();
        break;
      case 'removeVan':
        removeVan();
        break;
      case 'startFunding':
        startFunding();
        break;
      case 'takeoverVan':
        takeoverVan();
        break;
      default:
        console.log('Unknown action');
    }

    // Open the modal when any button is clicked
    setModalOpen(true);
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [columns, setColumns] = useState([]);

  // Example function to create service (for the Modal)
  const createService = () => {
    console.log('Creating service...');
  };

  // Example fields for the modal
  // const [createFields,setCreateFields] = useState([]);

  const fieldMappings = {
    add_van: ['ID', 'Tag', 'Fuel Type', 'Capacity', 'Sales', 'Driven By'],
    add_worker_role: ['Username'],
    drive_van: ['ID', 'Tag', 'Destination'],
    fire_employee: ['Username', 'ID'],
    hire_employee: ['Username', 'ID'],
    load_van: ['ID', 'Tag', 'Barcode', 'More Packages', 'Price'],
    manage_service: ['Username', 'ID'],
    purchase_product: ['Long Name', 'ID', 'Tag', 'Barcode', 'Quantity'],
    refuel_van: ['ID', 'Tag', 'More Fuel'],
    remove_driver_role: ['Username'],
    remove_product: ['Barcode'],
    remove_van: ['ID', 'Tag'],
    start_funding: ['Owner', 'Amount', 'Long Name', 'Fund Date'],
    takeover_van: ['Username', 'ID', 'Tag']
  };
  
  const [createFields, setCreateFields] = useState([]);
  
  const updateFields = (action) => {
    if (fieldMappings[action]) {
      setCreateFields(fieldMappings[action]);
    } else {
      setCreateFields([]);
    }
  };
  
  const addBusiness = () => {
    console.log('Adding business...');
    updateFields('add_van');
  };
  
  const addVan = () => {
    console.log('Adding van...');
    updateFields('add_van');
  };
  
  const addWorkerRole = () => {
    console.log('Adding worker role...');
    updateFields('add_worker_role');
  };
  
  const driveVan = () => {
    console.log('Driving van...');
    updateFields('drive_van');
  };
  
  const fireEmployee = () => {
    console.log('Firing employee...');
    updateFields('fire_employee');
  };
  
  const hireEmployee = () => {
    console.log('Hiring employee...');
    updateFields('hire_employee');
  };
  
  const loadVan = () => {
    console.log('Loading van...');
    updateFields('load_van');
  };
  
  const manageService = () => {
    console.log('Managing service...');
    updateFields('manage_service');
  };
  
  const purchaseProduct = () => {
    console.log('Purchasing product...');
    updateFields('purchase_product');
  };
  
  const refuelVan = () => {
    console.log('Refueling van...');
    updateFields('refuel_van');
  };
  
  const removeDriverRole = () => {
    console.log('Removing driver role...');
    updateFields('remove_driver_role');
  };
  
  const removeProduct = () => {
    console.log('Removing product...');
    updateFields('remove_product');
  };
  
  const removeVan = () => {
    console.log('Removing van...');
    updateFields('remove_van');
  };
  
  const startFunding = () => {
    console.log('Starting funding...');
    updateFields('start_funding');
  };
  
  const takeoverVan = () => {
    console.log('Taking over van...');
    updateFields('takeover_van');
  };
  


  return (
    <div className="action-menu">
      <div className="button-container">
      {actions.map((action) => {
        console.log('action.name:', action.name);  // Log this value to check the type
        return (
          <button
            key={action.name}  // Ensure action.name is a string and unique
            className="action-btn"
            onClick={() => handleClick(action.action)}
          >
            {action.name.replace(/_/g, ' ')}
          </button>
        );
      })}

      </div>

      {/* Modal component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Service"
        fields={createFields}
        createFunction={createService}
      />
    </div>
  );
}

export default ActionMenu;
