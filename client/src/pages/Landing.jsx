import { useEffect, useState } from "react";
import { subscribe } from "../helper";
import { regSw } from "../helper";
import "../styles/styles.css";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lang = navigator.language;
    i18n.changeLanguage(lang);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleSubscribe = async () => {
    const serviceWorkerReg = await regSw();
    await subscribe(serviceWorkerReg);
  };

  useEffect(() => {
    const checkSubscription = async () => {
      const serviceWorkerReg = await regSw();
      const subscription = await serviceWorkerReg.pushManager.getSubscription();
      setIsSubscribed(!!subscription);
    };

    checkSubscription();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <a href="#" className="scrolltop" id="scroll-top">
        <i className="bx bx-up-arrow-alt scrolltop__icon"></i>
      </a>

      <header className="l-header hidden md:block border-2" id="header">
        <nav className="nav bd-container">
          <a href="#" className="nav__logo">
            {t("CommuniSafe")}
          </a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  {t("Home")}
                </a>
              </li>
              <li className="nav__item">
                <a href="#share" className="nav__link">
                  {t("Learn")}
                </a>
              </li>
              <li className="nav__item">
                <a href="#decoration" className="nav__link">
                  {t("Features")}
                </a>
              </li>
              <li className="nav__item">
                <a href="/login" className="nav__link">
                  <h3 className="text-pink-700">{t("LogIn")}</h3>
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-grid-alt"></i>
          </div>
        </nav>
      </header>

      <main className="l-main flex flex-col w-screen">
        <section className="home mt-20 md:mt-0" id="home">
          <div className="home__container bd-container bd-grid justify-center items-center">
            <div className="home__img">
              <img
                src="/img/communities.png"
                alt=""
                className="md:w-80 hidden md:block lg:ml-20"
              />
            </div>

            <div className="home__data flex flex-col justify-center items-center md:items-start md:justify-start">
              <h1
                className="home__title text-center md:text-left"
                style={{ width: "438px" }}
              >
                {t("Building Stronger Communities Together")}
              </h1>
              <p className="home__description text-center md:text-left mx-8 md:mx-0">
                {t(
                  "Discover how our Community Resilience Network empowers individuals and neighborhoods to thrive in the face of challenges."
                )}
              </p>
              <a href="/login" className="button">
                {t("Get Started")}
              </a>
            </div>
          </div>
        </section>

        <section className="share section bd-container" id="share">
          <div className="share__container bd-grid">
            <div className="share__data">
              <h2 className="section-title-center font-semibold text-2xl">
                {t("Your Safety, Our Priority")}
              </h2>
              <p className="share__description">
                {t(
                  "Learn how our Community Resilience Network enhances safety measures, emergency response, and disaster preparedness in your area."
                )}
              </p>
              <a href="#" className="button">
                {t("Learn Together")}
              </a>
            </div>

            <div className="share__img flex justify-center items-center">
              <img src="/img/shield.png" alt="" className="md:w-80 w-60" />
            </div>
          </div>
        </section>

        <section
          className="decoration section bd-container pt-14"
          id="decoration"
        >
          <h2 className="section-title font-semibold text-2xl md:text-3xl ">
            {t("Exciting features of")} <br /> CommuniSafe
          </h2>
          <div className="decoration__container bd-grid">
            <div className="decoration__data flex flex-col justify-center items-center">
              <img
                src="/img/global-network.png"
                alt=""
                className="decoration__img my-5"
              />
              <h3 className="decoration__title">{t("Community Networking")}</h3>
              <a href="#" className="button button-link">
                {t("Checkout")}
              </a>
            </div>

            <div className="decoration__data flex flex-col justify-center items-center">
              <img
                src="/img/siren.png"
                alt=""
                className="decoration__img my-5 md:ml-2 "
              />
              <h3 className="decoration__title">{t("Emergency Alerts")}</h3>
              <a href="#" className="button button-link">
                {t("Checkout")}
              </a>
            </div>

            <div className="decoration__data flex flex-col justify-center items-center">
              <img
                src="/img/forum.png"
                alt=""
                className="decoration__img my-5"
              />
              <h3 className="decoration__title">{t("Community Forums")}</h3>
              <a href="#" className="button button-link">
                {t("Checkout")}
              </a>
            </div>
          </div>
        </section>

        <section className="send section">
          <div className="send__container bd-container bd-grid">
            <div className="send__content md:ml-10">
              <h2 className="section-title-center send__title">
                {t("Text your Queries!")}
              </h2>
              <p className="send__description m-4 md:m-0">
                {t(
                  "Explore how our community network offers crucial support systems, resources, and solidarity during crises and emergencies."
                )}
              </p>
              <form action="">
                <div className="send__direction mt-8">
                  <input
                    type="text"
                    placeholder={t("Message")}
                    className="send__inputs"
                  />
                  <a href="#" className="button ">
                    {t("Send")}
                  </a>
                </div>
              </form>
            </div>

            <div className="send__img">
              <img src="/img/queries.png" alt="" className="  w-30 md:w-80" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section">
        <div className="footer__container bd-container bd-grid flex flex-col md:gap-20 md:flex-row">
          <div className="footer__content">
            <h3 className="footer__title">
              <a href="#" className="footer__logo">
                {t("CommuniSafe")}
              </a>
            </h3>
            <p className="footer__description">
              {t("Join the Resilience Revolution")}
            </p>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">{t("Translations")}</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="footer__link"
                  onClick={() => changeLanguage("en")}
                >
                  {t("English")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer__link"
                  onClick={() => changeLanguage("hi")}
                >
                  {t("Hindi")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer__link"
                  onClick={() => changeLanguage("te")}
                >
                  {t("Telugu")}
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">{t("Our Company")}</h3>
            <ul>
              <li>
                <a href="#" className="footer__link">
                  {t("Blog")}
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  {t("About us")}
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  {t("Our mission")}
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">{t("Social")}</h3>
            <a href="#" className="footer__social">
              <i className="bx bxl-facebook-circle "></i>
            </a>
            <a href="#" className="footer__social">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="footer__social">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <ul>
              {isSubscribed && (
                <li>
                  <a
                    href="#"
                    className="footer__link underline text-pink-600"
                    onClick={() => handleSubscribe()}
                  >
                    {t("Subscribe")}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <p className="footer__copy">
          &#169; 2023 HackX {t("CommuniSafe")}. {t("All right reserved")}
        </p>
      </footer>
    </div>
  );
};

export default Landing;
