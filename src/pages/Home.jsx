import React, { useEffect, useState } from 'react';
import '../App.css';
import { motion } from 'framer-motion';
import { Link,Element } from 'react-scroll';
import './Home.css';
import ImageSlider from '../components/ImageSlider';
import bannerImage1 from '../Asset/bannerImg1.jpg';
import bannerImage3 from '../Asset/bannerImg3.jpg';
import logoImg2 from '../Asset/logoImg2.jpg'
import Navbar from '../components/Navbar';
import FooterForm from '../components/FooterForm';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Home = () => {
    const services = [
    "Social Media Handling",
    "Advertising",
    "Instagram",
    "Facebook",
    "Website Creation",
    "SEO Optimization",
    "Google Ads",
    "YouTube Marketing",
  ];

  const [currentZoomIndex, setCurrentZoomIndex] = useState(0);

// Random shifts (instead of absolute positions)
const [randomShifts] = useState(() =>
  services.map(() => ({
    x: Math.floor(Math.random() * 50 - 25), // shift -25 to +25 px
    y: Math.floor(Math.random() * 30 - 15),
  }))
);

useEffect(() => {
  const interval = setInterval(() => {
    const next = Math.floor(Math.random() * services.length);
    setCurrentZoomIndex(next);
  }, 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <div id='home' style={{ padding: '1rem', color: 'white' }}>
      <Navbar />
      {/* Hero Section */}
      <motion.section
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '0.5rem' }}
      >
        {/* <Element name="home"> */}
        <h1 className="white-text" style={{ fontSize: '4rem' }}>
          Welcome to SM Marketing
        </h1>
        {/* </Element> */}
        <h3 className="white-text" style={{ fontSize: '1rem' }}>
          Empowering your brand with digital solutions that deliver results.
        </h3>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
            duration: 0.8,
          }}
          style={{
            backgroundColor: '#1e1e2f',
            padding: '1rem',
            margin: '1rem auto 1rem',
            maxWidth: '70%',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            justifyContent: 'center'
            // color: 'rgb(27, 138, 228)',
          }}
        >
          <h2 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              25% Discount
            </motion.span>
          </h2>
          <p style={{ fontSize: '1.5rem' }}>Offer for Limited Time Period</p>
        </motion.div>


        <div style={{ marginTop: '2rem'}}>
          {/* <img
            src={bannerImage1}
            alt="SM Marketing Banner"
            style={{ maxWidth: '80%', height: 'auto', borderRadius: '20px' }}
          /> */}
          <ImageSlider />

        </div>
        <div id='service'
          style={{
            display: 'bock',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '4rem',
            padding: '2rem',
            gap: '2rem',
            flexWrap: 'nowrap', // ❗ prevent wrapping
          }}
        >
          {/* Left: Image (60%) */}
          {/* <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: '60%' }}
          >
            <img
              src={bannerImage3}
              alt="Marketing Visual"
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </motion.div> */}
          {/* Upper: Animated Text (40%) */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 10,
              duration: 0.6,
            }}
            style={{
              width: '100%',
              textAlign: 'center',
            }}
          >
            
            <h2
              style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              We Provide
            </h2>
          </motion.div>
          {/* Lower: Zooming Services (60%) */}
          <div
          style={{
            width: '100%',
            minHeight: '250px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5rem',
            backgroundColor: 'transparent',
            position: 'relative',
          }}
        >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ scale: 1 }}
                animate={{ scale: currentZoomIndex === index ? 1.6 : 0.8 }}
                transition={{ duration: 0.6 }}
                style={{
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  color: 'white',
                  transform: `translate(${randomShifts[index].x}px, ${randomShifts[index].y}px)`,
                  transition: 'transform 0.5s ease',
                }}
              >
                {service}
              </motion.div>
            ))}
          </div>
        </div>

      </motion.section>

      {/* Services Highlights */}
      <motion.section
        style={{
          display: 'flex',
          gap: '3rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '4rem',
        }}
      >
        {[
          {
            title: 'Social Media Management',
            desc: 'We handle your social platforms to boost engagement and grow your audience.',
          },
          {
            title: 'Digital Advertising',
            desc: 'Targeted ad campaigns across Google, Facebook, Instagram & more.',
          },
          {
            title: 'Brand Strategy',
            desc: 'Crafting the perfect brand voice and online presence for your business.',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.20,
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 15,
              },
            }}
            style={{
              backgroundColor: '#1e1e2f',
              padding: '1.5rem',
              borderRadius: '10px',
              width: '250px',
              textAlign: 'center',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              color: 'white',
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </motion.section>


      {/* CTA Button */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginTop: '3rem' }}
      >
        <Link to="/services">
          <button style={ctaButtonStyle}>Explore Our Services</button>
        </Link>
      </motion.div>

        <div id='about'
          style={{
            padding: '4rem 2rem',
            backgroundColor: '#transperent',
            color: 'white',
          }}
        >
          <h2
            style={{
              fontSize: '3rem',
              textAlign: 'center',
              marginBottom: '3rem',
              fontWeight: 'bold',
            }}
          >
            Meet Our Team
          </h2>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '2.5rem',
            }}
          >
            {[logoImg2, logoImg2, logoImg2, logoImg2].map((img, index) => (
            <div
              key={`team-${index}`}
              style={{
                width: '250px',
                textAlign: 'center',
                backgroundColor: '#46454510',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              }}
            >
              <img
                src={img}
                alt={`Team member ${index + 1}`}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '1rem',
                }}
              />
              <p style={{ fontSize: '1rem', color: '#ccc', lineHeight: '1.5' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tristique, nulla non facilisis, lorem nisi tincidunt odio.
              </p>
            </div>
          ))}

          </div>
        </div>

        <div id="contact">
            <FooterForm />
        </div>
      {/* <footer id='contact' className="site-footer">
        <div className="footer-content">
          <div className="footer-info">
            <h2>Contact Us</h2>
            <p><strong>Name:</strong> XYZ</p>
            <p><strong>Mobile:</strong> 123456789</p>
            <p><strong>Email:</strong> <a href="mailto:xyz@gmail.com">xyz@gmail.com</a></p>
          </div>

          <div className="footer-form-section">
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Get in Touch</h2>
            <form style={{ display: 'flex', flexDirection: 'row', gap: '1rem', width: '100%', maxWidth: '1000px' }}>
              <input
                type="text"
                placeholder="Your Name"
                style={{
                  padding: '0.8rem 1rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '1rem'
                }}
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                style={{
                  padding: '0.8rem 1rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '1rem'
                }}
              />
              <input
                type="email"
                placeholder="Gmail Address"
                style={{
                  padding: '0.8rem 1rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '1rem'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '0.8rem',
                  width: '12rem',
                  backgroundColor: '#00BFFF', // sky blue
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Submit
              </button>
            </form>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SM Marketing. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
    
  );
  
};

const cardStyle = {
  backgroundColor: '#1e1e2f',
  padding: '1.5rem',
  borderRadius: '10px',
  width: '250px',
  textAlign: 'center',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
};

const ctaButtonStyle = {
  backgroundColor: '#00bfff',
  color: 'white',
  padding: '0.8rem 1.5rem',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

export default Home;
