import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailParams = {
      from_name: formData.firstName + " " + formData.lastName,
      to_name: 'Himanshi Kushwaha',  // You can change this to any name
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        'hkushwah_iu_portfolio',
        'template_jgn65ib',
        emailParams,
        'U6bvhNY2hMwDsxraJ'
      );
      
      if (response.status === 200) {
        alert('Message Sent Successfully');
      } else {
        alert('Error in sending the message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send the message.');
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <form className="mx-auto max-w-lg text-center" onSubmit={handleSubmit}>
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2"> {/* Updated grid layout */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 mb-4 text-black rounded bg-neutral-800 text-white" 
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 mb-4 text-black rounded bg-neutral-800 text-white" 
          />
        </div>
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2"> {/* Updated grid layout */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 mb-4 text-black rounded bg-neutral-800 text-white"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 mb-4 text-black rounded bg-neutral-800 text-white" 
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 mb-4 text-black rounded bg-neutral-800 text-white"
            rows="5"
          />
        </div>
        <button type="submit" className="px-6 py-2 bg-purple-600 rounded text-white hover:bg-purple-700">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
