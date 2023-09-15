import "../styles/styles.css";
const Landing = () => {
  return (
    <div>
      <a href="#" className="scrolltop" id="scroll-top">
        <i className="bx bx-up-arrow-alt scrolltop__icon"></i>
      </a>

      <header className="l-header" id="header">
        <nav className="nav bd-container">
          <a href="#" className="nav__logo">
            CommuniSafe
          </a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#share" className="nav__link">
                  Learn
                </a>
              </li>
              <li className="nav__item">
                <a href="#decoration" className="nav__link">
                  Features
                </a>
              </li>
              <li className="nav__item">
                <a href="/login" className="nav__link">
                  <h3 className="text-pink-700">LogIn</h3>
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-grid-alt"></i>
          </div>
        </nav>
      </header>

      <main className="l-main flex flex-col mx-64">
        <section className="home" id="home">
          <div className="home__container bd-container bd-grid">
            <div className="home__img">
              <img src="/img/communities.png" alt="" className="w-80" />
            </div>

            <div className="home__data">
              <h1 className="home__title" style={{ width: "438px" }}>
                Building Stronger Communities Together
              </h1>
              <p className="home__description">
                Discover how our Community Resilience Network empowers
                individuals and neighborhoods to thrive in the face of
                challenges.
              </p>
              <a href="/login" className="button">
                Get Started
              </a>
            </div>
          </div>
        </section>

        <section className="share section bd-container" id="share">
          <div className="share__container bd-grid">
            <div className="share__data">
              <h2 className="section-title-center font-semibold">
                Your Safety, Our Priority
              </h2>
              <p className="share__description">
                Learn how our Community Resilience Network enhances safety
                measures, emergency response, and disaster preparedness in your
                area.
              </p>
              <a href="#" className="button">
                Learn Together
              </a>
            </div>

            <div className="share__img">
              <img src="/img/shield.png" alt="" className="w-80 ml-10" />
            </div>
          </div>
        </section>

        <section className="decoration section bd-container" id="decoration">
          <h2 className="section-title font-semibold">
            Exciting features of <br /> CommuniSafe
          </h2>
          <div className="decoration__container bd-grid">
            <div className="decoration__data">
              <img
                src="/img/global-network.png"
                alt=""
                className="decoration__img m-5 ml-9"
              />
              <h3 className="decoration__title">Community Networking</h3>
              <a href="#" className="button button-link">
                Checkout
              </a>
            </div>

            <div className="decoration__data">
              <img
                src="/img/siren.png"
                alt=""
                className="decoration__img m-5 ml-9"
              />
              <h3 className="decoration__title">Emergency Alerts</h3>
              <a href="#" className="button button-link">
                Checkout
              </a>
            </div>

            <div className="decoration__data">
              <img
                src="/img/forum.png"
                alt=""
                className="decoration__img m-5 ml-9"
              />
              <h3 className="decoration__title">Community Forums</h3>
              <a href="#" className="button button-link">
                Checkout
              </a>
            </div>
          </div>
        </section>

        <section className="send section">
          <div className="send__container bd-container bd-grid">
            <div className="send__content">
              <h2 className="section-title-center send__title">
                Text your Queries!
              </h2>
              <p className="send__description">
                Explore how our community network offers crucial support
                systems, resources, and solidarity during crises and
                emergencies.
              </p>
              <form action="">
                <div className="send__direction">
                  <input
                    type="text"
                    placeholder="Message"
                    className="send__input"
                  />
                  <a href="#" className="button">
                    Send
                  </a>
                </div>
              </form>
            </div>

            <div className="send__img">
              <img src="/img/queries.png" alt="" className=" ml-24 w-80" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section">
        <div className="footer__container bd-container bd-grid">
          <div className="footer__content">
            <h3 className="footer__title">
              <a href="#" className="footer__logo">
                CommuniSafe
              </a>
            </h3>
            <p className="footer__description">
              Join the Resilience Revolution
            </p>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Our Services</h3>
            <ul>
              <li>
                <a href="#" className="footer__link">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Discounts
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Shipping mode
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Our Company</h3>
            <ul>
              <li>
                <a href="#" className="footer__link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Our mision
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Social</h3>
            <a href="#" className="footer__social">
              <i className="bx bxl-facebook-circle "></i>
            </a>
            <a href="#" className="footer__social">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="footer__social">
              <i className="bx bxl-instagram-alt"></i>
            </a>
          </div>
        </div>

        <p className="footer__copy">
          &#169; 2023 HackX CommuniSafe. All right reserved
        </p>
      </footer>
    </div>
  );
};

export default Landing;
