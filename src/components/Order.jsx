// Order.jsx
import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm.jsx';
import { useSearchParams } from 'react-router-dom'; // FIXED IMPORT
import './Order.css';

function Order() {
  const [searchParams] = useSearchParams(); // ADD THIS LINE
  const [type, setType] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [aircraft, setAircraft] = useState(""); // ADD THIS STATE

  // Get aircraft details from URL parameters
  useEffect(() => {
    const aircraftFromUrl = searchParams.get('aircraft');
    const typeFromUrl = searchParams.get('type');
    const priceFromUrl = searchParams.get('price');
    const categoryFromUrl = searchParams.get('category');

    if (aircraftFromUrl) {
      setAircraft(decodeURIComponent(aircraftFromUrl));
      
      // Auto-select the service type based on aircraft type
      if (typeFromUrl === "Private Jet") {
        setType("private-jet");
      } else if (typeFromUrl === "Helicopter") {
        setType("helicopter");
      } else if (typeFromUrl === "Jumbo Jet") {
        setType("private-jet");
      }
    }
  }, [searchParams]);

  const serviceOptions = [
    { value: "", label: "Select a service type", disabled: true },
    { value: "private-jet", label: "Private Jet Charter" },
    { value: "luxury-yacht", label: "Luxury Yacht Charter" },
    { value: "executive-car", label: "Executive Car Service" },
    { value: "helicopter", label: "Helicopter Transfer" },
    { value: "villa-rental", label: "Luxury Villa Rental" },
    { value: "concierge", label: "Premium Concierge Service" },
    { value: "event-planning", label: "Exclusive Event Planning" },
    { value: "other", label: "Other Luxury Service" }
  ];

  return (
    <div className="order-container">
      <div className="order-wrapper">
        <div className="order-header">
          <h1>Luxury Service Request</h1>
          <p>Begin your exclusive experience by providing your service details</p>
        </div>
        
        <div className="order-form-section">
          <form className="luxury-order-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Service Type</label>
                <select 
                  value={type} 
                  onChange={(e) => setType(e.target.value)}
                  className="form-input"
                >
                  {serviceOptions.map((option) => (
                    <option 
                      key={option.value} 
                      value={option.value}
                      disabled={option.disabled}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Passengers</label>
                <div className="passenger-selector">
                  <button 
                    type="button"
                    className="passenger-btn"
                    onClick={() => setPassengers(Math.max(1, passengers - 1))}
                  >
                    - {/* ADD MINUS SIGN */}
                  </button>
                  <span className="passenger-count">{passengers}</span>
                  <button 
                    type="button"
                    className="passenger-btn"
                    onClick={() => setPassengers(passengers + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Departure Location</label>
                <input 
                  placeholder='New York City, NY' 
                  type="text" 
                  value={from} 
                  onChange={(e) => setFrom(e.target.value)}
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Destination</label>
                <input 
                  placeholder='Los Angeles, CA' 
                  type="text" 
                  value={to} 
                  onChange={(e) => setTo(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
             <div className="form-group full-width"> 
  <label className="form-label">Aircraft</label>
  <input 
    placeholder='Select an aircraft from fleet page' 
    type="text" 
    value={aircraft}
    onChange={(e) => setAircraft(e.target.value)}
    className="form-input"
    readOnly
  />
</div>
            </div>
          </form>

          <div className="booking-preview">
            <h3>Service Summary</h3>
            <div className="preview-card">
              <div className="preview-item">
                <strong>Service Type</strong>
                <span>
                  {serviceOptions.find(opt => opt.value === type)?.label || "Not specified"}
                </span>
              </div>
              <div className="preview-item">
                <strong>Route</strong>
                <span>{from || "Not specified"} → {to || "Not specified"}</span>
              </div>
              <div className="preview-item">
                <strong>Passengers</strong>
                <span>{passengers}</span>
              </div>
              {aircraft && (
                <div className="preview-item">
                  <strong>Aircraft</strong>
                  <span>{aircraft}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {(type && from && to) && (
        <div className="contact-form-section">
          <div className="section-divider">
            <span className="divider-text">Contact Details</span>
          </div>
          <ContactForm type={type} from={from} to={to} passengers={passengers} aircraft={aircraft}/>
        </div>
      )}
    </div>
  );
}

export default Order;