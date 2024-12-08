"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../components/Modal';
import Table from '../components/Table';

function LocationPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const columns = [
    'Label',
    'Entity Name',
    'X-coordinate',
    'Y-coordinate',
    'Space',
    'Vans Occupied',
    'Vans',
    'Remaining Space',
  ];

  const keys = ["label", "long_name", "x_coord", "y_coord", "space", "num_vans", "van_ids", "remaining_capacity"];
  const createFields = ['Label', 'X Coordinate', 'Y Coordinate', 'Space'];

  const createLocation = async (newLocation) => {
    const payload = {
      ip_label: newLocation["Label"],
      ip_x_coord: newLocation["X Coordinate"],
      ip_y_coord: newLocation["Y Coordinate"],
      ip_space: newLocation["Space"]
    };
  

    try {
      const response = await axios.post('http://localhost:4321/add_location', payload);
      console.log('Driver added successfully:', response.data);
      setModalOpen(false); // Close modal
      alert('Location added successfully!'); // Display success alert
      // After adding the driver, fetch the latest data
      fetchLocationData();
    } catch (error) {
      console.error('Error adding location:', error.response ? error.response.data : error.message);
      alert('Error adding location. Please try again.'); // Display error alert
    }
  };

  useEffect(() => {
    axios.get('http://localhost:4321/location_view')
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
      <h1>Locations</h1>
      <Table data={data} columns={columns} keys = {keys} />
      <button className="button" onClick={() => setModalOpen(true)}>
        New Location
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Location"
        fields={createFields}
        createFunction={createLocation}
      />
    </div>
  );
}

export default LocationPage;
