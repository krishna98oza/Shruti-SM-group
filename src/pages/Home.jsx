import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';
import ImageSlider from '../components/ImageSlider';
import bannerImage1 from '../Asset/bannerImg1.jpg';
import bannerImage3 from '../Asset/bannerImg3.jpg';
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
    <div style={{ padding: '1rem', color: 'white' }}>
      
      {/* Hero Section */}
      <motion.section id="home-section"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '0.5rem' }}
      >
        <h1 className="white-text" style={{ fontSize: '5rem' }}>
          Welcome to SM Marketing
        </h1>
        <h3 className="white-text" style={{ fontSize: '2.5rem' }}>
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
        <div
          style={{
            display: 'flex',
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
          {/* Left: Zooming Services (60%) */}
          <div
  style={{
    width: '80%',
    minHeight: '250px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '3rem',
    backgroundColor: 'transparent',
    position: 'relative',
  }}
>
  {services.map((service, index) => (
    <motion.div
      key={index}
      initial={{ scale: 1 }}
      animate={{ scale: currentZoomIndex === index ? 1.5 : 1 }}
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




          {/* Right: Animated Text (40%) */}
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
              width: '20%',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontSize: '5.5rem',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              We Provide
            </h2>
          </motion.div>
        </div>


      </motion.section>

      {/* Services Highlights */}
      <motion.section id="services-section"
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

      <footer className="site-footer" id="about-section">
  <div className="footer-content">
    <div className="footer-info">
      <h2>Contact Us</h2>
      <p><strong>Name:</strong> Shruti Oza</p>
      <p><strong>Mobile:</strong> 9730385112</p>
      <p><strong>Email:</strong> <a href="mailto:shrutiroza@gmail.com">shrutiroza@gmail.com</a></p>
    </div>

    <div className="footer-desc">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
      </p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} SM Marketing. All rights reserved.</p>
  </div>
</footer>

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
