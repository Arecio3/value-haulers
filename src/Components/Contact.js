import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import { useTranslation } from 'react-i18next'

function Contact() {
  const [state, handleSubmit] = useForm("mknkaavl");

  const { t } = useTranslation()


  return (
    <ContactStyled>
      <InnerLayout>
        <section className="contact-section" id="contact">
          <div className="contact-container">
            <div className="contact-header">
              <div className="contact-title">
                <h1>{t('Contact')}</h1>
                <h3>{t('GetTouch')}</h3>
              </div>
            </div>
            <div className="contact-box">
              <div className="contact-item">
                <div className="contact-item-inner outer-shadow">
                  <i className="fa fa-phone"></i>
                  <span>{t('Phone')}</span>
                  <p>{t('PhoneNum')}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-inner outer-shadow">
                  <i className="fa fa-envelope"></i>
                  <span>{t('Email')}</span>
                  <p>{t('EmailAddy')}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-inner outer-shadow">
                  <i className="fa fa-map-marker-alt"></i>
                  <span>{t('Located')}</span>
                  <p>{t('Location')}</p>
                </div>
              </div>
              {/* End of Contact Item */}
            </div>
            <div className="psa">
              <h4>
                {t('PSA')}
              </h4>
            </div>
            <div className="contact-box">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="contact-box">
                    <div className="w50">
                      <div className="input-group outer-shadow hover-in-shadow">
                        <input
                          placeholder="Email"
                          id="email"
                          type="email"
                          name="email"
                          className="input-control"
                        />
                      </div>
                      <div className="input-group outer-shadow hover-in-shadow">
                        <input
                          placeholder="Name"
                          id="name"
                          type="name"
                          name="name"
                          className="input-control"
                        />
                      </div>
                      <div className="input-group outer-shadow hover-in-shadow">
                        <input
                          placeholder="Subject"
                          id="subject"
                          type="subject"
                          name="subject"
                          className="input-control"
                        />
                      </div>
                    </div>
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                    <div className="w50">
                      <div className="input-group outer-shadow hover-in-shadow">
                        <textarea
                          placeholder="Message"
                          id="message"
                          name="message"
                          className="input-control"
                        />
                      </div>
                    </div>
                  </div>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <div className="contact-box">
                    <div className="submit-btn">
                      {state.succeeded ? (
                        <button type="submit" style={{backgroundColor: '#F44E77', transition: 'all .5s ease-in'}}>
                          {t('MsgSent')}
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn-1"
                          disabled={state.submitting}
                        >
                          {t('MsgSend')}
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </InnerLayout>
    </ContactStyled>
  );
};

const ContactStyled = styled.div`
  padding: 10rem 0;
 

  .contact-section {
    padding: 80px 0 80px;
    min-height: 70vh;
  }

  .contact-section h3 {
    color: var(--accent-pink);
  }

  .contact-header .contact-title {
    text-align: center;
    justify-content: center;
  }

  .contact-title h1 {
    color: var(--purple-primary);
    top: 10%;
    font-size: 40px;
  }

  .contact-title h3 {
    top: 17%;
  }
  .contact-box {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .contact-section .contact-item {
    flex: 0 0 33.33%;
    max-width: 33.33%;
    padding: 15px;
    margin-top: 55px;
  }

  .contact-section .contact-item-inner {
    padding: 30px 15px;
    text-align: center;
    border-radius: 5px;
  }

  .contact-item-inner i {
    font-size: 25px;
    color: var(--purple-primary);
  }

  .contact-item-inner span {
    display: block;
    font-size: 16px;
    font-weight: 600;
    color: var(--accent-pink);
    margin: 15px 0 10px;
  }

  .contact-item-inner p {
    font-size: 16px;
    color: var(--dark-primary);
    line-height: 26px;
    margin: 0;
    word-break: break-word;
  }

  .contact-form {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 50px;
  }
  .w50 {
    position: relative;
    padding: 0 15px;
    flex: 0 0 50%;
    max-width: 35%;
  }

  .input-group {
    margin: 0 0 25px;
    transition: all 0.3s ease;
    border-radius: 30px;
    cursor: pointer;
  }

  .input-group .input-control {
    height: 45px;
    display: block;
    width: 100%;
    border-radius: 30px;
    border: none;
    background-color: #c9b6f0;
    font-size: 16px;
    padding: 0 15px;
    ::placeholder {
      color: white;
    }
  }

  .input-group:after {
    border-radius: 30px;
  }

  .input-group textarea.input-control {
    height: 184px;
    padding-top: 15px;
  }

  .submit-btn {
    flex: 0 0 100%;
    max-width: 100%;
    text-align: right;
    margin-right: 550px;
    padding-right: 0 15px;
  }

  .btn-1-sent {
      background-color: #F44E77;
      transition: all 3s ease-in;
  }

  .btn-check {
      color: var(--neutral-light);
      margin-left: 1.7rem;
  }

  .submit-btn button {
    background-color: var(--dark-primary);
    color: var(--neutral-light);
    border: none;
    padding: 10px;
    border-radius: 30px;
  }

  .psa {
    margin-top: 15px;
    text-align: center;
    color: var(--lavender-secondary);
  }

  @media (max-width: 768px) {
    .contact-section .contact-item {
      flex: 0 0 100%;
      max-width: 100%;
      margin: 2px;
    }
    .contact-section .w50 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .contact-box .submit-btn {
      position: absolute;
      margin: 15px;
    }
  }

  .outer-shadow {
    box-shadow: 3px 3px 3px #d0d0d0, -3px -3px 3px #f8f8f8;
  }

  .hover-in-shadow {
    position: relative;
    z-index: 1;
  }

  .hover-in-shadow:hover {
    box-shadow: 0 0 0 #d0d0d0, 0 0 0 #f8f8f8;
  }

  .hover-in-shadow:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    z-index: -1;
  }

  .hover-in-shadow:after {
    box-shadow: inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px#f8f8f8;
  }

  .inner-shadow {
    box-shadow: inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px#f8f8f8;
  }
  @media (max-width: 428px) {
    .contact-box .submit-btn {
      position: absolute;
      margin: 5px;
    }
  }
  @media (max-width: 428px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));  
    .contact-section {
      margin-top: -155px;
      margin-left: -140px;
      margin-right: 50px;
      justify-content: center;
      align-items: center;
    }
    .submit-btn button {
      padding: 20px;
      width: 250px;
    }
    .submit-btn {
      right: 85px;
    }
    }
`;

export default Contact;
