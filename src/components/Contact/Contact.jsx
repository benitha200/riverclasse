import react, { useState } from 'react'

import React from 'react'

const Contact = () => {

  const [formData, setFormData] = useState({ recipient: '', message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/api/sendmessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Sucess:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>

      <h3 className="text-black mb-4 p-4">Contact us</h3>

      <div className="mx-auto mt-2" style={{ maxWidth: '70%', display: 'block', backgroundColor: 'white', padding: '20px', boxShadow: "2px 4px 5px 1px solid black" }}>

        <p>Contact us for any support! we are here to help you :)</p>


        <form onSubmit={handleSubmit}>
          <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your phone number ex: +250785283918"
            name='recipient' onChange={handleChange} value={formData.recipient}
          /><br></br>
          <textarea className='form-control bg-transparent w-100 py-3 ps-4 pe-5' placeholder='Message...' name="message" onChange={handleChange} value={formData.message}></textarea>
          <input type="submit" class="btn btn-primary w-50 top-0 end-0 mt-2 me-2" value="submit" />
        </form>
      </div>

    </div>
  )
}

export default Contact
