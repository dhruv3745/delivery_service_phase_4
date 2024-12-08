"use client"
import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import axios from 'axios';
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

  const handleClick = (action) => {

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

    setModalOpen(true);
  };

  

  const [isModalOpen, setModalOpen] = useState(false);
  const [columns, setColumns] = useState([]);
  const [title, setTitle] = useState("");

  const createService = () => {
    console.log('Creating service...');
  };


  const fieldMappings = {
    add_business: ['Name', 'Rating', 'Spent', 'Location'],
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

  const submitButton = (formData) => {
    handleSubmit(title, formData)
  };
  
  const updateFields = (action) => {
    if (fieldMappings[action]) {
      setCreateFields(fieldMappings[action]);
    } else {
      setCreateFields([]);
    }
  };
  const handleSubmit = (buttonName, formData) => {
    switch (buttonName) {
      case 'Add Business':
        submitAddBusiness(formData);
        break;
      case 'Add Van':
        submitAddVan(formData);
        break;
      case 'Add Worker':
        submitAddWorkerRole(formData);
        break;
      case 'Drive Van':
        submitDriveVan(formData);
        break;
      case 'Fire Employee':
        submitFireEmployee(formData);
        break;
      case 'Hire Employee':
        submitHireEmployee(formData);
        break;
      case 'Load Van':
        submitLoadVan(formData);
        break;
      case 'Manage Service':
        submitManageService(formData);
        break;
      case 'Purchase Product':
        submitPurchaseProduct(formData);
        break;
      case 'Refuel Van':
        submitRefuelVan(formData);
        break;
      case 'Remove Driver':
        submitRemoveDriverRole(formData);
        break;
      case 'Remove Product':
        submitRemoveProduct(formData);
        break;
      case 'Remove Van':
        submitRemoveVan(formData);
        break;
      case 'Start Funding':
        submitStartFunding(formData);
        break;
      case 'Takeover Van':
        submitTakeoverVan(formData);
        break;
      default:
        console.log('Unknown action');
    }
  
    setModalOpen(false);
  };

  

  const addBusiness = () => {
    setTitle("Add Business")

    updateFields('add_business');
  };
  
  const addVan = () => {
    setTitle("Add Van")

    updateFields('add_van');
  };
  
  const addWorkerRole = () => {
    setTitle("Add Worker")

    updateFields('add_worker_role');
  };
  
  const driveVan = () => {

    setTitle("Drive Van")

    updateFields('drive_van');
  };
  
  const fireEmployee = () => {

    setTitle("Fire Employee")

    updateFields('fire_employee');
  };
  
  const hireEmployee = () => {
    setTitle("Hire employee")

    updateFields('hire_employee');
  };
  
  const loadVan = () => {
    setTitle("Load Van")

    updateFields('load_van');
  };
  
  const manageService = () => {
    setTitle("Manage Service")

    updateFields('manage_service');
  };
  
  const purchaseProduct = () => {

    setTitle("Purchase Product")

    updateFields('purchase_product');
  };
  
  const refuelVan = () => {
    setTitle("Refuel Van")

    updateFields('refuel_van');
  };
  
  const removeDriverRole = () => {
    setTitle("Remove Driver")

    updateFields('remove_driver_role');
  };
  
  const removeProduct = () => {
    setTitle("Remove Product")

    updateFields('remove_product');
  };
  
  const removeVan = () => {
    setTitle("Remove Van")

    updateFields('remove_van');
  };
  
  const startFunding = () => {
    setTitle("Start Funding")

    updateFields('start_funding');
  };
  
  const takeoverVan = () => {
    setTitle("Takeover Van")

    updateFields('takeover_van');
  };
  



  const submitAddVan = async (newVan) => {
    const payload = {
      ip_id: newVan["ID"],
      ip_tag: newVan["Tag"],
      ip_fuel: newVan["Fuel Type"],
      ip_capacity: newVan["Capacity"],
      ip_sales: newVan["Sales"],
      ip_driven_by: newVan["Driven By"]
    };
  
    try {
      const response = await axios.post('http://localhost:4321/add_van', payload);
      console.log('Van added successfully:', response.data);
      setModalOpen(false); 
      alert('Van added successfully!');
    } catch (error) {
      console.error('Error adding van:', error.response ? error.response.data : error.message);
      alert('Error adding van. Please try again.');
    }
  };

  
  const submitAddWorkerRole = async (newWorker) => {
    const payload = {
      ip_username: newWorker["Username"]
    };
  
    try {
      const response = await axios.post('http://localhost:4321/add_worker_role', payload);
      console.log('Worker role added successfully:', response.data);
      setModalOpen(false); 
      alert('Worker role added successfully!');
    } catch (error) {
      console.error('Error adding worker role:', error.response ? error.response.data : error.message);
      alert('Error adding worker role. Please try again.');
    }
  };
  const submitDriveVan = async (vanDrive) => {
    const payload = {
      ip_id: vanDrive["ID"],
      ip_tag: vanDrive["Tag"],
      ip_destination: vanDrive["Destination"]
    };
  
    try {
      const response = await axios.post('http://localhost:4321/drive_van', payload);
      console.log('Van driven successfully:', response.data);
      setModalOpen(false); 
      alert('Van driven successfully!');
    } catch (error) {
      console.error('Error driving van:', error.response ? error.response.data : error.message);
      alert('Error driving van. Please try again.');
    }
  };
  const submitFireEmployee = async (employeeFire) => {
    const payload = {
      ip_username: employeeFire["Username"],
      ip_id: employeeFire["ID"]
    };
  
    try {
      const response = await axios.post('http://localhost:4321/fire_employee', payload);
      console.log('Employee fired successfully:', response.data);
      setModalOpen(false); 
      alert('Employee fired successfully!');
    } catch (error) {
      console.error('Error firing employee:', error.response ? error.response.data : error.message);
      alert('Error firing employee. Please try again.');
    }
  };
  const submitHireEmployee = async (employeeHire) => {
    const payload = {
      ip_username: employeeHire["Username"],
      ip_id: employeeHire["ID"]
    };
  
    try {
      const response = await axios.post('http://localhost:4321/hire_employee', payload);
      console.log('Employee hired successfully:', response.data);
      setModalOpen(false); 
      alert('Employee hired successfully!');
    } catch (error) {
      console.error('Error hiring employee:', error.response ? error.response.data : error.message);
      alert('Error hiring employee. Please try again.');
    }
  };
  const submitLoadVan = async (vanLoad) => {
    const payload = {
      ip_id: vanLoad["ID"],
      ip_tag: vanLoad["Tag"],
      ip_barcode: vanLoad["Barcode"],
      ip_more_packages: vanLoad["More Packages"],
      ip_price: vanLoad["Price"]
    };
  
    try {
      const response = await axios.post('http://localhost:4321/load_van', payload);
      console.log('Van loaded successfully:', response.data);
      setModalOpen(false); 
      alert('Van loaded successfully!');
    } catch (error) {
      console.error('Error loading van:', error.response ? error.response.data : error.message);
      alert('Error loading van. Please try again.');
    }
  };
  const submitManageService = async (serviceManager) => {
    const payload = {
      ip_username: serviceManager["Username"],
      ip_id: serviceManager["ID"]
    };
  
    try {
      const response = await axios.post('http://localhost:4321/manage_service', payload);
      console.log('Service managed successfully:', response.data);
      setModalOpen(false); 
      alert('Service managed successfully!');
    } catch (error) {
      console.error('Error managing service:', error.response ? error.response.data : error.message);
      alert('Error managing service. Please try again.');
    }
  };
  const submitPurchaseProduct = async (productPurchase) => {
    const payload = {
      ip_long_name: productPurchase["Long Name"],
      ip_id: productPurchase["ID"],
      ip_tag: productPurchase["Tag"],
      ip_barcode: productPurchase["Barcode"],
      ip_quantity: productPurchase["Quantity"]
    };
  
    try {
      const response = await axios.post('http://localhost:4321/purchase_product', payload);
      console.log('Product purchased successfully:', response.data);
      setModalOpen(false); 
      alert('Product purchased successfully!');
    } catch (error) {
      console.error('Error purchasing product:', error.response ? error.response.data : error.message);
      alert('Error purchasing product. Please try again.');
    }
  };
  const submitRefuelVan = async (vanRefuel) => {
    const payload = {
      ip_id: vanRefuel["ID"],
      ip_tag: vanRefuel["Tag"],
      ip_more_fuel: vanRefuel["More Fuel"]
    };
  
    try {
      const response = await axios.post('http://localhost:4321/refuel_van', payload);
      console.log('Van refueled successfully:', response.data);
      setModalOpen(false); 
      alert('Van refueled successfully!');
    } catch (error) {
      console.error('Error refueling van:', error.response ? error.response.data : error.message);
      alert('Error refueling van. Please try again.');
    }
  };
  const submitRemoveDriverRole = async (removeDriver) => {
    const payload = {
      ip_username: removeDriver["Username"]
    };
  
    try {
      const response = await axios.post('http://localhost:4321/remove_driver_role', payload);
      console.log('Driver role removed successfully:', response.data);
      setModalOpen(false); 
      alert('Driver role removed successfully!');
    } catch (error) {
      console.error('Error removing driver role:', error.response ? error.response.data : error.message);
      alert('Error removing driver role. Please try again.');
    }
  };
  const submitRemoveProduct = async (productRemove) => {
    const payload = {
      ip_barcode: productRemove["Barcode"]
    };
  
    try {
      const response = await axios.post('http://localhost:4321/remove_product', payload);
      console.log('Product removed successfully:', response.data);
      setModalOpen(false); 
      alert('Product removed successfully!');
    } catch (error) {
      console.error('Error removing product:', error.response ? error.response.data : error.message);
      alert('Error removing product. Please try again.');
    }
  };
  const submitRemoveVan = async (vanRemove) => {
    const payload = {
      ip_id: vanRemove["ID"],
      ip_tag: vanRemove["Tag"]
    };
  
    try {
      const response = await axios.post('http://localhost:4321/remove_van', payload);
      console.log('Van removed successfully:', response.data);
      setModalOpen(false); 
      alert('Van removed successfully!');
    } catch (error) {
      console.error('Error removing van:', error.response ? error.response.data : error.message);
      alert('Error removing van. Please try again.');
    }
  };
  const submitStartFunding = async (fundingStart) => {
    const payload = {
      ip_owner: fundingStart["Owner"],
      ip_amount: fundingStart["Amount"],
      ip_long_name: fundingStart["Long Name"],
      ip_fund_date: fundingStart["Fund Date"]
    };
  
    try {
      const response = await axios.post('http://localhost:4321/start_funding', payload);
      console.log('Funding started successfully:', response.data);
      setModalOpen(false); 
      alert('Funding started successfully!');
    } catch (error) {
      console.error('Error starting funding:', error.response ? error.response.data : error.message);
      alert('Error starting funding. Please try again.');
    }
  };
  const submitTakeoverVan = async (vanTakeover) => {
    const payload = {
      ip_username: vanTakeover["Username"],
      ip_id: vanTakeover["ID"],
      ip_tag: vanTakeover["Tag"]
    };
  
    try {
      const response = await axios.post('http://localhost:4321/takeover_van', payload);
      console.log('Van takeover successful:', response.data);
      setModalOpen(false); 
      alert('Van takeover successful!');
    } catch (error) {
      console.error('Error taking over van:', error.response ? error.response.data : error.message);
      alert('Error taking over van. Please try again.');
    }
  };

  const submitAddBusiness = async (businessAdd) => {
    console.log("called")
    const payload = {
      ip_long_name: businessAdd["Name"],
      ip_rating: businessAdd["Rating"],
      ip_spent: businessAdd["Spent"],
      ip_location: businessAdd["Location"]
    };
  
    try {
      const response = await axios.post('http://localhost:4321/add_business', payload);
      console.log('business add successful:', response.data);
      setModalOpen(false); 
      alert('Business added!');
    } catch (error) {
      console.error('Error adding business:', error.response ? error.response.data : error.message);
      alert('Error adding business. Please try again.');
    }
  };
                            





  return (
    <div className="action-menu">
      <div className="button-container">
      {actions.map((action) => {
        return (
          <button
            key={action.name}  
            className="action-btn"
            onClick={() => handleClick(action.action)}
          >
            {action.name.replace(/_/g, ' ')}
          </button>
        );
      })}

      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={title || "item"}
        fields={createFields}
        createFunction={submitButton}
      />
    </div>
  );
}

export default ActionMenu;