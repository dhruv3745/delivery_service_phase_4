"use client"
import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import Table from '../components/Table';
import axios from 'axios';

function ServicePage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const columns = [
    'Identifier',
    'Name',
    'Home base',
    'Manager',
    'Total Sales',
    'Products',
    'Total Sost',
    'Weight',
  ];

  const keys = ["id", "long_name", "home_base", "manager", "revenue", "products_carried", "cost_carried", "weight_carried"];
  const createFields = ['ID', 'Long Name', 'Home Base', 'Manager'];


  const createService = async (newService) => {
    const payload = {
      ip_id: newService["ID"],
      ip_long_name: newService["Long Name"],
      ip_home_base: newService["Home Base"],
      ip_manager: newService["Manager"]
    };
  

    try {
      const response = await axios.post('http://localhost:4321/add_service', payload);
      console.log('Driver added successfully:', response.data);
      setModalOpen(false); // Close modal
      alert('Service added successfully!'); // Display success alert
      // After adding the driver, fetch the latest data
      fetchDriverData();
    } catch (error) {
      console.error('Error adding service:', error.response ? error.response.data : error.message);
      alert('Error adding service. Please try again.'); // Display error alert
    }
  };

  useEffect(() => {
    axios.get('http://localhost:4321/service_view')
        .then(response => {
          const data = response.data;
          setData(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
  }, []);

  return (
    <div className="container centered">
      <h1>Services</h1>
      <Table data={data} columns={columns} keys = {keys}/>
      <button className="button" onClick={() => setModalOpen(true)}>
        New Service
      </button>
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

export default ServicePage;
