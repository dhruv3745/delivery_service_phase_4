"use client"
import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import Table from '../components/Table';
import axios from 'axios';

function EmployeePage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const columns = [
    'Username',
    'Tax ID',
    'Salary',
    'Date Hired',
    'Experience',
    'Driver License ID',
    'Successful Trips',
    'Manager',
  ];

  const keys = [
    'username',
    'taxID',
    'salary',
    'hired',
    'employee_experience',
    'licenseID',
    'driving_experience',
    'manager_status',
  ];
  const createFields = ['Username', 'First Name', 'Last Name', 'Address', 'Birthdate', 'Tax ID', 'Hired', 'Employee Experience', 'Salary'];


  const fetchEmployeeData = async () => {
    axios.get('http://localhost:4321/employee_view')
        .then(response => {
          const data = response.data;
          console.log(data[0].hired.substring(0,10));
          setData(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);


  const createEmployee = async (newEmployee) => {
    const payload = {
      ip_username: newEmployee["Username"],
      ip_first_name: newEmployee["First Name"],
      ip_last_name: newEmployee["Last Name"],
      ip_address: newEmployee["Address"],
      ip_birthdate: newEmployee["Birthdate"],
      ip_taxID: newEmployee["Tax ID"],
      ip_hired: newEmployee["Hired"],
      ip_employee_experience: newEmployee["Employee Experience"],
      ip_salary: newEmployee["Salary"]
  };
  


    try {
      const response = await axios.post('http://localhost:4321/add_employee', payload);
      console.log('Driver added successfully:', response.data);
      setModalOpen(false); // Close modal
      alert('Employee added successfully!'); // Display success alert
      // After adding the driver, fetch the latest data
      fetchEmployeeData();
    } catch (error) {
      console.error('Error adding employee:', error.response ? error.response.data : error.message);
      alert('Error adding employee. Please try again.'); // Display error alert
    }

  };

  return (
    <div className="container centered">
      <h1>Employees</h1>
      <Table data={data} columns={columns} keys = {keys} />
      <button className="button" onClick={() => setModalOpen(true)}>
        New Employee
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Employee"
        fields={createFields}
        createFunction={createEmployee}
      />
    </div>
  );
}

export default EmployeePage;
