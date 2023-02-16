import React, { useState } from 'react';

// Form component
function Form(props) {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Age, setAge] = useState('0-15');
  const [TextArea, setTextArea] = useState('');

  // Handle form submit
  function handleSubmit(event) {
    event.preventDefault();
    const formData = { FirstName,LastName, Age, TextArea };
    props.onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>FirstName:</label>
      <input type="text" value={FirstName} onChange={e => setFirstName(e.target.value)} />
      <br />
      <label>LastName:</label>
      <input type="text" value={LastName} onChange={e =>setLastName(e.target.value)} />
      <br />
     
      <label>Age:</label>
      <select value={Age} onChange={e => setAge(e.target.value)}>
        <option value="0-15">0-15</option>
        <option value="15-30">15-30</option>
        <option value="30-45">30-45</option>
      </select>
      <br />
      <label>FreeText:</label>
      <textarea value={TextArea} onChange={e => setTextArea(e.target.value)} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

// Review component
function Review(props) {
  const { FirstName,LastName,Age, TextArea } = props.data;

  // Handle form edit
  function handleEdit() {
    props.onEdit();
  }

  return (
    <div>
      <p>FirstName: {FirstName}</p>
      <p>LastName: {LastName}</p>
     
      <p>Age: {Age}</p>
      <p>TextArea: {TextArea}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

// App component
function App() {
  const [formData, setFormData] = useState(null);

  // Handle form submit
  function handleSubmit(data) {
    setFormData(data);
  }

  // Handle form edit
  function handleEdit() {
    setFormData(null);
  }

  return (
    <div>
      {formData ? ( <Review data={formData} onEdit={handleEdit} />) : (<Form onSubmit={handleSubmit} />)}
    </div>
  );
}

export default App;