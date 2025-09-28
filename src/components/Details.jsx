// Details.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Details.css';

function Details() {
  const { id } = useParams(); // This extracts the ID from the URL

  const navigate = useNavigate();
  const gotobook = () =>{
    navigate('/Order');
  }
  

  const services = [
    {
      id: 1,
      image: '/images/pj.jpg',
      title: 'Private Jet Charter',
      description: 'Experience unparalleled luxury with our global fleet of meticulously maintained aircraft. From light jets to spacious VIP airliners.',
      features: ['Global Network', '24/7 Availability', 'Multiple Aircraft Categories'],
      detailedDescription: 'Our Private Jet Charter service offers the ultimate in luxury air travel. With access to over 5,000 airports worldwide, we provide seamless travel experiences tailored to your specific needs. Enjoy complete privacy, flexibility, and personalized service from takeoff to landing.',
      benefits: [
        'Access to 5,000+ airports worldwide',
        'Complete privacy and confidentiality',
        'Flexible scheduling',
        'Personalized catering',
        'Luxury ground transportation'
      ]
    },
    {
      id: 2,
      image: '/images/vip.jpeg',
      title: 'VIP Concierge Service',
      description: 'Your dedicated personal concierge handles every detail - from ground transportation to luxury catering and hotel arrangements.',
      features: ['Personal Assistant', 'Custom Itineraries', 'Worldwide Support'],
      detailedDescription: 'Our VIP Concierge Service ensures every aspect of your journey is meticulously planned and executed. From the moment you book until you return home, our dedicated team handles all arrangements including luxury accommodations, exclusive experiences, and seamless logistics.',
      benefits: [
        'Dedicated 24/7 concierge',
        'Custom travel itineraries',
        'Exclusive access to events',
        'Luxury hotel partnerships',
        'Multilingual support'
      ]
    },
    {
      id: 3,
      image: '/images/corporate_service.jpeg',
      title: 'Corporate Solutions',
      description: 'Tailored aviation programs for businesses seeking efficiency, security, and premium travel experiences for executives.',
      features: ['Dedicated Account Manager', 'Volume Discounts', 'Custom Reporting'],
      detailedDescription: 'Our Corporate Solutions program is designed for businesses requiring efficient, secure, and premium travel for executives. We offer customized aviation programs with comprehensive reporting, volume-based pricing, and dedicated account management.',
      benefits: [
        'Customized corporate programs',
        'Volume-based discounts',
        'Detailed usage reporting',
        'Dedicated account manager',
        'Multi-aircraft access'
      ]
    },
    {
      id: 4,
      image: '/api/placeholder/400/250',
      title: 'Global Membership',
      description: 'Join our exclusive membership program for priority access, preferential rates, and personalized aviation services worldwide.',
      features: ['Priority Booking', 'Member Benefits', '24/7 Support Line'],
      detailedDescription: 'Our Global Membership program offers exclusive benefits including priority booking, preferential rates, and personalized services. Members enjoy access to our global network with enhanced privileges and dedicated support.',
      benefits: [
        'Priority booking access',
        'Exclusive member rates',
        'Personalized service team',
        'Global network access',
        'Enhanced privacy features'
      ]
    }
  ];

  // Find the service with the matching ID
  const service = services.find(service => service.id === parseInt(id));

  // If service not found, show error message
  if (!service) {
    return (
      <div className="details-container">
        <div className="error-message">
          <h2>Service Not Found</h2>
          <p>The service you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="details-container">
      {/* Hero Section */}
      <section className="detail-hero">
        <div className="hero-background">
          <img src={service.image} alt={service.title} />
          <div className="gradient-overlay"></div>
        </div>
        
        <div className="detail-content">
          <h1 className="detail-title">{service.title}</h1>
          <p className="detail-subtitle">{service.description}</p>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="detail-content-section">
        <div className="container">
          <div className="detail-grid">
            <div className="detail-main">
              <h2>Service Overview</h2>
              <p>{service.detailedDescription}</p>
              
              <h3>Key Benefits</h3>
              <ul className="benefits-list">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">
                    <span className="benefit-icon">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="detail-sidebar">
              <div className="features-card">
                <h3>Service Features</h3>
                <div className="features-list">
                  {service.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <div className="feature-icon">✓</div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button onClick={gotobook} className="cta-button">
                  Request This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Details;