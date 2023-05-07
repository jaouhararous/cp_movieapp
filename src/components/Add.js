import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const Add = ({ addMovie }) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [poster, setPoster] = useState('');
  const [rating, setRating] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setName('');
    setPoster('');
    setRating('');
    setYear('');
    setDirector('');
    setGenre('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = {
      name,
      poster,
      rating,
      year,
      director,
      genre
    };
    addMovie(newMovie);
    handleClose();
  }

  return (
    <div className='mbody'>
      <Button className='addbtn'  variant="primary" onClick={handleShow}>Add Movie</Button>

      <Modal show={showModal} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control className='input' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="poster">
              <Form.Label>Poster</Form.Label>
              <Form.Control className='input' type="text" value={poster} onChange={(e) => setPoster(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="rating">
              <Form.Label>Rating</Form.Label>
              <Form.Control className='input' type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="year">
              <Form.Label>Year</Form.Label>
              <Form.Control className='input' type="text" value={year} onChange={(e) => setYear(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="director">
              <Form.Label>Director</Form.Label>
              <Form.Control className='input' type="text" value={director} onChange={(e) => setDirector(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="genre">
              <Form.Label>Genre</Form.Label>
              <Form.Control className='input' type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">Add</Button>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Add;
