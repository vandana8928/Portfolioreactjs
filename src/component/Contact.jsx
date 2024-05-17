import React from "react";
// Import your CSS file

const Contact = () => {
  return (
    <div className="contact" id="conatct">
      <h1>Contact Us</h1>
      <div className="contact-sub">
        <div className="form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="google-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.99756864834!2d72.86581182336678!3d19.01982880373712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf3c17685e2d%3A0xcf8ff32b5ac48b32!2sShiv%20Shankar%20Nagar%2C%20Kalaram%20Nagar%2C%20Deen%20Bandhu%20Nagar%2C%20Mumbai%2C%20Maharashtra%20400037!5e0!3m2!1sen!2sin!4v1715945315084!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
