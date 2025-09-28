import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';

function ContactForm({ type, from, to, passengers, aircraft }) { // DESTRUCTURE PROPS HERE
  const [state, handleSubmit] = useForm("manpyrny");
  
  if (state.succeeded) {
    return (
      <div className="success-message">
        <div className="success-icon">✓</div>
        <h3>Thank You for Your Inquiry!</h3>
        <p>We have received your request and will contact you shortly to confirm your booking details.</p>
      </div>
    );
  }
  
  return (
    <div className="contact-form-container">
      <div className="contact-form-wrapper">
        <div className="form-header">
          <h2>Complete Your Booking</h2>
          <p>Please provide your contact details to finalize your luxury service</p>
        </div>
        
        <form onSubmit={handleSubmit} className="luxury-form">
          {aircraft && (
            <div className="form-summary">
              <h4>Charter Summary</h4>
              <p><strong>Aircraft:</strong> {aircraft}</p>
              <p><strong>Route:</strong> {from} to {to}</p>
              <p><strong>Passengers:</strong> {passengers}</p>
            </div>
          )}
          
          {/* Hidden fields for order data */}
          <input type="hidden" name="service_type" value={type || ''} />
          <input type="hidden" name="from_location" value={from || ''} />
          <input type="hidden" name="to_location" value={to || ''} />
          <input type="hidden" name="passengers" value={passengers || ''} />
          <input type="hidden" name="aircraft" value={aircraft || ''} />
          
          {/* Booking Summary */}
          <div className="booking-summary">
            <h4>Booking Summary</h4>
            <div className="summary-details">
              <span><strong>Service:</strong> {props.type || 'Not specified'}</span>
              <span><strong>Route:</strong> {props.from || 'Not specified'} → {props.to || 'Not specified'}</span>
              <span><strong>Passengers:</strong> {props.passengers || '0'}</span>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address *
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              className="form-input"
              placeholder="your@email.com"
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="validation-error"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel" 
              name="phone"
              className="form-input"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Additional Requirements
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              placeholder="Please specify any special requirements, preferences, or additional details for your luxury experience..."
              rows="4"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="validation-error"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={state.submitting}
            className="submit-button"
          >
            {state.submitting ? (
              <>
                <div className="spinner"></div>
                Processing...
              </>
            ) : (
              <>
                <span className="button-icon">✨</span>
                Confirm Luxury Booking
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;