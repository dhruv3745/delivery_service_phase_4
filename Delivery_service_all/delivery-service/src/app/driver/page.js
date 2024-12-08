"use client"
import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import Table from '../components/Table';
import axios from 'axios';

function DriverPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const columns = ['Username', 'License ID', 'Successful Trips', 'Vans'];
  const keys = ['username', 'licenseID', 'successful_trips', 'num_vans'];
  const createFields = ['Username', 'License ID', 'License Type', 'Experience'];

  // Function to fetch and set driver data
  const fetchDriverData = async () => {
    try {
      const response = await axios.get('http://localhost:4321/driver_view');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching drivers:', error);
      alert('Failed to load data.');
    }
  };

  const createDriver = async (newDriver) => {
    const payload = {
      ip_username: newDriver["Username"],
      ip_licenseID: newDriver["License ID"],
      ip_license_type: newDriver["License Type"], 
      ip_driver_experience: newDriver["Experience"]
    };

    try {
      const response = await axios.post('http://localhost:4321/add_driver', payload);
      console.log('Driver added successfully:', response.data);
      setModalOpen(false); // Close modal
      alert('Driver added successfully!'); // Display success alert
      // After adding the driver, fetch the latest data
      fetchDriverData();
    } catch (error) {
      console.error('Error adding driver:', error.response ? error.response.data : error.message);
      alert('Error adding driver. Please try again.'); // Display error alert
    }
  };

  useEffect(() => {
    fetchDriverData();
  }, []);

  return (
    <div className="container centered">
      <h1>Drivers</h1>
      <Table data={data} columns={columns} keys={keys} />
      <button className="button" onClick={() => setModalOpen(true)}>
        New Driver
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Driver"
        fields={createFields}
        createFunction={createDriver}
      />
    </div>
  );
}

export default DriverPage;
