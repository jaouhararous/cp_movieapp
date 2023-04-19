import React from 'react';
import Button from 'react-bootstrap/Button';
//delete button 
const Del = ({ del }) => {
  return (
    <Button variant="danger" onClick={del}>
      X
    </Button>
  );
};

export default Del;
