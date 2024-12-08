"use client"
import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import Table from '../components/Table';
import axios from 'axios';

function ProductPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const columns = [
    'Name', 
    'Location', 
    'Quantity', 
    'Maximum Price', 
    'Minimum Price'];

  const keys = ["product_name", "location", "amount_available", "low_price", "high_price"];
  const createFields = ['Barcode', 'Name', 'Weight'];


  const createProduct = async (newProduct) => {
    const payload = {
      ip_barcode: newProduct["Barcode"],
      ip_name: newProduct["Name"],
      ip_weight: newProduct["Weight"]
   };
  

    try {
      const response = await axios.post('http://localhost:4321/add_product', payload);
      console.log('Driver added successfully:', response.data);
      setModalOpen(false); // Close modal
      alert('Product added successfully!'); // Display success alert
      // After adding the driver, fetch the latest data
      fetchProductData();
    } catch (error) {
      console.error('Error adding product:', error.response ? error.response.data : error.message);
      alert('Error adding product. Please try again.'); // Display error alert
    }
  };

  const fetchProductData = async () => {
    try {
      const response = await axios.get('http://localhost:4321/product_view');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  useEffect(() => {
    fetchProductData();
    
  }, []);

  return (
    <div className="container centered">
      <h1>Products</h1>
      <Table data={data} columns={columns} keys = {keys}/>
      <button className="button" onClick={() => setModalOpen(true)}>
        New Product
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Product"
        fields={createFields}
        createFunction={createProduct}
      />
    </div>
  );
}

export default ProductPage;
