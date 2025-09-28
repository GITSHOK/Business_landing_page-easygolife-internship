import React from 'react';
import './Home.css';
import { Link, Navigate, useNavigate } from 'react-router-dom'; // FIXED IMPORT PATH

function Home() {
  const navigate = useNavigate();
  const gotoOrder = () => {
    navigate('/Order');
  };

  const gotofleet = () => {
    navigate('/Fleet');
  }

  const services = [
    {
      image: './images/pj.jpg',
      title: 'Private Jet Charter',
      description: 'Experience unparalleled luxury with our global fleet of meticulously maintained aircraft. From light jets to spacious VIP airliners.',
      features: ['Global Network', '24/7 Availability', 'Multiple Aircraft Categories'],
      id:1
    },
    {
      image: './images/vip.jpeg',
      title: 'VIP Concierge Service',
      description: 'Your dedicated personal concierge handles every detail - from ground transportation to luxury catering and hotel arrangements.',
      features: ['Personal Assistant', 'Custom Itineraries', 'Worldwide Support'],
      id:2
    },
    {
      image: './images/corporate_service.jpeg',
      title: 'Corporate Solutions',
      description: 'Tailored aviation programs for businesses seeking efficiency, security, and premium travel experiences for executives.',
      features: ['Dedicated Account Manager', 'Volume Discounts', 'Custom Reporting'],
      id:3
    },
    {
      image: '/api/placeholder/400/250',
      title: 'Global Membership',
      description: 'Join our exclusive membership program for priority access, preferential rates, and personalized aviation services worldwide.',
      features: ['Priority Booking', 'Member Benefits', '24/7 Support Line'],
      id:4
    }
  ];

  return (
    <div className="home">
      {/* Luxury Hero Section */}
      <section className="luxury-hero">
        <div className="hero-background">
          <div className="gradient-overlay"></div>
        </div>
        
        <div className="luxury-content">
          <div className="brand-mark">
            <div className="wing-icon">✈</div>
            <span className="brand-name">ELEVATE AVIATION</span>
          </div>
          
          <h1 className="luxury-title">
            <span className="title-line">Redefining Private</span>
            <span className="title-line">Aviation Excellence</span>
          </h1>
          
          <p className="luxury-subtitle">
            Experience the pinnacle of luxury air travel with our global private aviation services. 
            Where exceptional service meets unparalleled comfort.
          </p>
          
          <div className="cta-elegant">
            <button onClick={gotoOrder} className="luxury-btn primary">
              <span>Request a Flight</span>
            </button>
            <button onClick={gotofleet} className="luxury-btn secondary">
              View Our Fleet
            </button>
          </div>
        </div>
        
        <div className="elegant-scroll">
          <div className="scroll-text">Discover Our Services</div>
          <div className="gold-line"></div>
        </div>
      </section>

      {/* Luxury Services Section */}
      <section className="luxury-services">
        <div className="services-container">
          <div className="services-header">
            <div className="section-label">Our Services</div>
            <h2 className="section-title">Premium Aviation Experiences</h2>
            <p className="section-subtitle">
              Discover our comprehensive suite of luxury aviation services designed for discerning clients 
              who expect nothing but the finest in air travel.
            </p>
          </div>

          <div className="services-grid-landscape">
            {services.map((service, index) => (
              <div key={index} className="luxury-card-landscape">
                <div className="card-image-container">
                  <div className="card-image">
                  </div>
                  <div className="image-overlay">
                    <img src={service.image} alt="" />
                  </div>
                </div>
                
                <div className="card-content-landscape">
                  <h3 className="card-title-landscape">{service.title}</h3>
                  <p className="card-description-landscape">{service.description}</p>
                  
                  <div className="features-grid">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="feature-item-landscape">
                        <div className="feature-icon">✓</div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={`/Details/${service.id}`} className="card-cta-landscape">
                    <span>Learn More</span>
                    <div className="arrow-icon">→</div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='partners'>
  <div className="partners-container">
    <div className="partners-header">
      <div className="section-label">Our Partners</div>
      <h2 className="section-title">Trusted by Aviation Excellence</h2>
      <p className="section-subtitle">
        Partnering with the world's most prestigious aviation brands and luxury service providers
      </p>
    </div>
    
    <div className="partners-grid">
      <div className="partner-item">
        <div className="partner-icon">
          <img src="https://imgs.search.brave.com/4hCg6OuZFuxHfdIvMxkolhHQ8bu_LubaOWO4x_QbnTI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMxLzIvZ3VsZnN0/cmVhbS1hZXJvc3Bh/Y2UtbG9nby1wbmdf/c2Vla2xvZ28tMzE0/MzY3LnBuZw" alt="Gulfstream Aerospace" />
        </div>
        <span className="partner-name">Gulfstream</span>
      </div>
      
      <div className="partner-item">
        <div className="partner-icon">
          <img src="https://imgs.search.brave.com/AAzn8wKD6F56gqhnI3KcMeHWprZS5hyEbtB5_JMQSN8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzAz/L0VtaXJhdGVzLWxv/Z28tNTAweDI4MS5q/cGc" alt="Emirates" />
        </div>
        <span className="partner-name">Emirates</span>
      </div>
      
      <div className="partner-item">
        <div className="partner-icon">
          <img src="https://imgs.search.brave.com/5xz2YB4G-r-MuVpBKKqr4NahT7iDqgcjj58e1krP-xI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb3NoYXBlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8xMS9FdGloYWQt/QWlyd2F5cy1sb2dv/X2xvZ29zaGFwZS5w/bmc" alt="Etihad Airways" />
        </div>
        <span className="partner-name">Etihad</span>
      </div>
      
      <div className="partner-item">
        <div className="partner-icon">
          <img src="data:image/png;base64,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" alt="Qatar Airways" />
        </div>
        <span className="partner-name">Qatar Airways</span>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default Home;