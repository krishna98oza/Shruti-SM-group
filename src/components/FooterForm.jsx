import React, { useState } from 'react';

const FooterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScuvylmHoygUN-1rIt9A1A5Dt9-FWeL67H-BPe6VtLpGeFwtw/formResponse';

    const formDataToSend = new FormData();
    formDataToSend.append('entry.866144846', formData.name);
    formDataToSend.append('entry.1700527630', formData.mobile);
    formDataToSend.append('entry.1017378855', formData.email);

    fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formDataToSend,
    })
      .then(() => {
        setShowPopup(true);
        setFormData({ name: '', mobile: '', email: '' });
        setTimeout(() => setShowPopup(false), 2000);
      })
      .catch((err) => console.error('Error submitting:', err));
  };

  return (
    <div style={{ backgroundColor: '#111', color: '#fff', padding: '3rem 1rem' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '2rem',
          width: '80%',
          margin: '0 auto',
        }}
      >
        {/* 👉 Contact Info Block */}
        <div className="footer-info" style={{ flex: 1 }}>
          <h2>Contact Us</h2>
          <p><strong>Name:</strong> XYZ</p>
          <p><strong>Mobile:</strong> 123456789</p>
          <p><strong>Email:</strong> <a href="mailto:xyz@gmail.com" style={{ color: '#00BFFF' }}>xyz@gmail.com</a></p>
        </div>

        {/* 👉 Contact Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '400px',
          }}
        >
            <h2 style={{ color: '#fff', marginBottom: '10px' }}>Get in Touch</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            style={inputStyle}
          />
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Gmail Address"
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div style={popupContainerStyle}>
            <div style={popupBoxStyle}>
            🎉 Our team will reach out to you shortly!
            </div>
        </div>
        )}

    </div>
  );
};

const inputStyle = {
  padding: '0.8rem 1rem',
  borderRadius: '8px',
  border: '1px solid white',
  fontSize: '1rem',
  backgroundColor: 'transparent',
  color: 'white'
};

const buttonStyle = {
  padding: '0.9rem',
  backgroundColor: '#00BFFF',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const popupContainerStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 9999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const popupBoxStyle = {
  padding: '1.5rem 2rem',
  backgroundColor: '#00BFFF',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  borderRadius: '12px',
  boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
  animation: 'fadeinout 3s ease-in-out',
};


export default FooterForm;
