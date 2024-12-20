"use client"
import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import Table from '../components/Table';
import axios from 'axios';


function OwnerPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const columns = [
    'Username',
    'First name',
    'Last name',
    'Address',
    'Businesses',
    'Locations',
    'Highest rating',
    'Lowest rating',
    'Debt',
  ];

  const keys = ["username", "first_name", "last_name", "address", "businesses", "locations", "highest_rating", "lowest_rating", "debt"];
  const createFields = ['Username', 'First Name', 'Last Name', 'Address', 'Birthdate'];

  const createOwner = async (newOwner) => {
    const payload = {
      ip_username: newOwner["Username"],
      ip_first_name: newOwner["First Name"],
      ip_last_name: newOwner["Last Name"],
      ip_address: newOwner["Address"],
      ip_birthdate: newOwner["Birthdate"]
    };
  

    try {
      const response = await axios.post('http://localhost:4321/add_owner', payload);
      console.log('Driver added successfully:', response.data);
      setModalOpen(false); 
      alert('Owner added successfully!'); 

      fetchOwnerData();
    } catch (error) {
      console.error('Error adding owner:', error.response ? error.response.data : error.message);
      alert('Error adding owner. Please try again.'); 
    }
  };

  const fetchOwnerData = async () => {
    try {
      const response = await axios.get('http://localhost:4321/owner_view');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching driver data:', error);
    }
  };

  useEffect(() => {
    fetchOwnerData();
  }, []);

  return (
    <div className="container centered">
      <h1>Owners</h1>
      <Table data={data} columns={columns} keys = {keys}/>
      <button className="button" onClick={() => setModalOpen(true)}>
        New Owner
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Owner"
        fields={createFields}
        createFunction={createOwner}
      />
    </div>
  );
}

export default OwnerPage;
