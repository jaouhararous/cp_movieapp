import React from 'react';
import Button from 'react-bootstrap/Button';
//delete button 
const Del = ({ handleDelete }) => {
  return (
    <Button variant="danger" onClick={handleDelete}>
      X
    </Button>
  );
};

export default Del;
