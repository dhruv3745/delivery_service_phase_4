"use client";

import React, { useState } from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, title, fields, createFunction }) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field] = '';
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    createFunction(formData);
    onClose();
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <h2>{`New ${title}`}</h2>
          </div>
          <div className="modal-body">
            {fields.map((field) => (
              <div key={field} className="modal-field">
                <label htmlFor={field}>{field}</label>
                <input
                  type="text"
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <div className="modal-footer">

            <button onClick={onClose} className="exit-btn">
              Exit
            </button>
            <button onClick={handleSubmit} className="create-btn">
              Create
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
