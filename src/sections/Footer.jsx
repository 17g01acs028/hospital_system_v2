import React from 'react'


const Footer = () => {
    const footerBg ={
        backgroundImage: 'url(images/footer-bg.png)'
    }
  return (
    <>
      <footer className="footer" style={footerBg}>
        <div className="container">
          <div className="section footer-top">
            <div className="footer-brand" data-reveal="bottom">
              <a href="#" className="logo">
                <img
                  src="logo.png"
                  width="70"
                  height="46"
                  loading="lazy"
                  alt="Doclab home"
                />
                <h2>Uzyma</h2>
              </a>

              <ul className="contact-list has-after">
                <li className="contact-item">
                  <div className="item-icon">
                    <ion-icon name="mail-open-outline"></ion-icon>
                  </div>

                  <div>
                    <p>
                      Main Email :{" "}
                      <a href="mailto:info@uzyma.com" className="contact-link">
                        info@uzyma.com
                      </a>
                    </p>

                    <p>
                      Inquiries :{" "}
                      <a href="mailto:info@uzyma.com" className="contact-link">
                        info@uzyma.com
                      </a>
                    </p>
                  </div>
                </li>

                <li className="contact-item">
                  <div className="item-icon">
                    <ion-icon name="call-outline"></ion-icon>
                  </div>

                  <div>
                    <p>
                      Office Telephone :{" "}
                      <a href="tel:" className="contact-link">
                        No contact
                      </a>
                    </p>

                    <p>
                      Mobile :{" "}
                      <a href="tel:" className="contact-link">
                        Not Available
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="footer-list" data-reveal="bottom">
              <p className="headline-sm footer-list-title">About Us</p>

              <p className="text">
                Empowering Healthcare through Community and Connection
              </p>

              <address className="address">
                <ion-icon name="map-outline"></ion-icon>

                <span className="text">
                  2nd Floor,
                  <br />
                  Ruhan Plaza Kahawa Sukari Avenue
                </span>
              </address>
            </div>

            <ul className="footer-list" data-reveal="bottom">
              <li>
                <p className="headline-sm footer-list-title">Services</p>
              </li>

              <li>
                <a href="#" className="text footer-link">
                  Conditions
                </a>
              </li>

              <li>
                <a href="#" className="text footer-link">
                  Listing
                </a>
              </li>

              <li>
                <a href="#" className="text footer-link">
                  How It Works
                </a>
              </li>

              <li>
                <a href="#" className="text footer-link">
                  What We Offer
                </a>
              </li>

              <li>
                <a href="#" className="text footer-link">
                  Latest News
                </a>
              </li>

              <li>
                <a href="#" className="text footer-link">
                  Contact Us
                </a>
              </li>
            </ul>

            <ul className="footer-list" data-reveal="bottom">
              <li>
                <p className="headline-sm footer-list-title">Useful Links</p>
              </li>

              <li>
                <a href="#" className="text footer-link">
                  Conditions
                </a>
              </li>

              <li>
                <a href="#" className="text footer-link">
                  Terms of Use
                </a>
              </li>

              <li>
                <a href="#" className="text footer-link">
                  Our Services
                </a>
              </li>

              <li>
                <a href="#" className="text footer-link">
                  Join as a Doctor
                </a>
              </li>

              <li>
                <a href="#" className="text footer-link">
                  New Guests List
                </a>
              </li>

              <li>
                <a href="#" className="text footer-link">
                  The Team List
                </a>
              </li>
            </ul>

            <div className="footer-list" data-reveal="bottom">
              <p className="headline-sm footer-list-title">Subscribe</p>

              <form action="" className="footer-form">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input-field title-lg"
                />

                <button type="submit" className="btn has-before title-md">
                  Subscribe
                </button>
              </form>

              <p className="text">
                Get the latest updates via email. Any time you may unsubscribe
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="text copyright">
              &copy; UzimaPal {new Date().getFullYear()} | All Rights Reserved
              by UzimaPal
            </p>

            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-google"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-pinterest"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <a
        href="#top"
        className="back-top-btn"
        aria-label="back to top"
        data-back-top-btn
      >
        <ion-icon name="chevron-up"></ion-icon>
      </a>
    </>
  );
}

export default Footer
