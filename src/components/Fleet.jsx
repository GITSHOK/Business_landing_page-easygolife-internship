import React from 'react'
import { useNavigate } from 'react-router-dom'; // FIXED IMPORT PATH
import './Fleet.css';

function Fleet() {
  const navigate = useNavigate();
   const handleRequestCharter = (aircraft) => {
    navigate(`/Order?aircraft=${encodeURIComponent(aircraft.name)}&type=${encodeURIComponent(aircraft.type)}&price=${encodeURIComponent(aircraft.price)}&category=${encodeURIComponent(aircraft.category)}`);
  }



  const fleetData = [
    {
      id: 1,
      name: "Gulfstream G650ER",
      type: "Private Jet",
      category: "Ultra-Long Range",
      capacity: "Up to 14 passengers",
      range: "7,500 nautical miles",
      speed: "Mach 0.925",
      features: ["WiFi & Satellite", "Stand-up cabin", "Luxury seating", "Conference table", "Private suite", "Gourmet galley"],
      image: "./images/gulfstreamG650.jpeg",
      price: "$16,000/hr",
      description: "The pinnacle of private aviation with exceptional range and comfort"
    },
    {
      id: 2,
      name: "Bombardier Challenger 350",
      type: "Private Jet",
      category: "Super Mid-Size",
      capacity: "Up to 10 passengers",
      range: "3,200 nautical miles",
      speed: "Mach 0.82",
      features: ["WiFi", "Club seating", "Entertainment system", "Refreshment center", "Noise reduction"],
      image: "./images/bombardier_challenger.jpg",
      price: "$8,500/hr",
      description: "Perfect balance of performance and comfort for regional travel"
    },
    {
      id: 3,
      name: "Boeing 747-8 VIP",
      type: "Jumbo Jet",
      category: "VIP Configuration",
      capacity: "Up to 100 passengers",
      range: "8,000 nautical miles",
      speed: "Mach 0.855",
      features: ["Master suite", "Conference room", "Dining area", "Theater", "Gym", "Spa", "Office"],
      image: "./images/b747_VIP.avif",
      price: "$85,000/hr",
      description: "The ultimate flying palace with unparalleled space and luxury amenities"
    },
    {
      id: 4,
      name: "Airbus A380 Prestige",
      type: "Jumbo Jet",
      category: "Super Jumbo",
      capacity: "Up to 150 passengers",
      range: "8,200 nautical miles",
      speed: "Mach 0.85",
      features: ["Multiple suites", "Ballroom", "Business center", "Lounge areas", "Fine dining", "Observation deck"],
      image: "./images/A380.jpeg",
      price: "$120,000/hr",
      description: "The largest and most luxurious private aircraft in the world"
    },
    {
      id: 5,
      name: "Sikorsky S-92 VIP",
      type: "Helicopter",
      category: "Executive Transport",
      capacity: "Up to 12 passengers",
      range: "500 nautical miles",
      speed: "190 mph",
      features: ["VIP interior", "Noise cancellation", "Panoramic windows", "Quick transfer", "City center access"],
      image: "./images/Sikorsky_helicopter.jpeg",
      price: "$6,500/hr",
      description: "Executive helicopter for seamless urban and regional connectivity"
    }
  ]

  return (
    <div className="fleet-container">
      <div className="fleet-header">
        <h1>Executive Fleet</h1>
        <p>Experience unparalleled luxury and performance with our curated collection of premium aircraft</p>
      </div>

      <div className="fleet-stats">
        <div className="stat-item">
          <span className="stat-number">5</span>
          <span className="stat-label">Aircraft Types</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">190+</span>
          <span className="stat-label">Countries Served</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Global Support</span>
        </div>
      </div>

      <div className="fleet-grid">
        {fleetData.map((aircraft) => (
          <div key={aircraft.id} className="fleet-card">
            <div className="card-image">
              <img src={aircraft.image} alt={aircraft.name} />
              <div className="card-badge">{aircraft.type}</div>
              <div className="category-tag">{aircraft.category}</div>
            </div>
            
            <div className="card-content">
              <div className="card-header">
                <div>
                  <h3>{aircraft.name}</h3>
                  <p className="card-description">{aircraft.description}</p>
                </div>
                <span className="card-price">{aircraft.price}</span>
              </div>
              
              <div className="card-specs">
                <div className="spec-item">
                  <span className="spec-label">Capacity</span>
                  <span className="spec-value">{aircraft.capacity}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Range</span>
                  <span className="spec-value">{aircraft.range}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Speed</span>
                  <span className="spec-value">{aircraft.speed}</span>
                </div>
              </div>

              <div className="card-features">
                <h4>Premium Features</h4>
                <div className="features-list">
                  {aircraft.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>

              <div className="card-actions">
                <button onClick={() => handleRequestCharter(aircraft)} className="inquiry-btn">
                  Request Charter
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fleet-cta">
        <h2>Need a Custom Solution?</h2>
        <p>Our global network includes hundreds of additional aircraft. Contact us for specialized configurations or group charters.</p>
        <div className="cta-buttons">
          <button className="cta-btn primary">Contact Concierge</button>
          <button className="cta-btn secondary">Download Fleet Brochure</button>
        </div>
      </div>
    </div>
  )
}

export default Fleet