// src/App.js
import React, { useState } from 'react';
import Modal from '../src/Components/Modal';
import './App.css';
import ScrollableTable from './Components/ScrollTable';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleConfirmDelete = () => {
    console.log('Deleting item:', selectedItem);
    setShowModal(false);
    setSelectedItem(null);
  };

  const data = [
    { id: 1, title: 'IPL-2022 First 4 Match Package' },
    { id: 2, title: 'IPL-2023 First 4 Match Package' },
    { id: 3, title: 'IPL-2022 First 4 Match Package' },
  ];

  return (
    <div className="App">
      {/* <table>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>
                <button className="delete-btn" onClick={() => handleDeleteClick(item)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        show={showModal}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirmDelete}
      /> */}
      <ScrollableTable/>
    </div>
  );
};

export default App;
