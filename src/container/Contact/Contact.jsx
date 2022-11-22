import React from 'react'
import {images} from '../../constants';
import {AppWrap, MotionWrap} from '../../wrapper'
// import {client} from '../../client'
// import validator from 'validator';

import './Contact.scss';

const Contact = () => {

  //FUTURE CONTACT FORM
  // const [formData, setFormData] = useState({name: '',email: '',message:''});
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const {name,email,message} = formData;

  //FUTURE CONTACT FORM
  // const handleChangeInput = (e) => {
  //   const {name, value} = e.target;
  //   setFormData({...formData, [name]: value});
  // }

  // const handleSubmit = () => {

  //   if(name === '' || email === '' || message === ''){
  //     setLoading(false);
  //   } else if(validator.isEmail(email)){
  //   setLoading(true);

    
  //   const contact = {
  //     _type: 'contact',
  //     name: name,
  //     email: email,
  //     message: message,
  //   }

  //   client.create(contact)
  //   .then(() => {
  //     setLoading(false);
  //     setIsFormSubmitted(true);
  //   })
  // }
  // }

  return (
    <>
      <h2 className='head-text'>  
        Contact <span>Me</span>
      </h2>
      <div className='app__contact-cards'>
        <div className='app__contact-card'>
          <img src={images.email} alt="email"/>
          <a href="mailto:jestebancarrillo@gmail.com" className='p-text'>jestebancarrillo@gmail.com</a>
        </div>
        <div className='app__contact-card'>
          <img src={images.mobile} alt="mobile"/>
          <a href="tel:+1 956-346-9233" className='p-text'>+1 956-346-9233</a>
        </div>
        <div className='app__contact-card'>
          <img src={images.linkedin} alt="linkedin"/>
          <a href="https://www.linkedin.com/in/jose-carrillo-028957184/" className='p-text'>https://www.linkedin.com/</a>
        </div>
      </div>

      
      {/* FUTURE CONTACT ME FORM */}
      {/* {!isFormSubmitted ?
      <div className='app__contact-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' value={name} onChange={handleChangeInput} name="name"></input>
        </div>
        <div className='app__flex'>
          <input className='p-text' type='email' placeholder='Your E-mail' value={email} onChange={handleChangeInput} name="Email"></input>
        </div>
        <div>
          <textarea className='p-text'placeholder='Your Message' value={message} name="message" onChange={handleChangeInput}/>
          <button type="button" className='p-text' onClick={handleSubmit}>{loading ? 'Sending...' : 'Send Message'}</button>
        </div>
      </div>
      : <div>
        <h3 className='head-text'>Thank You for contacting me!</h3>
      </div>
      } */}
    </>
  )
}

export default AppWrap(
  MotionWrap(Contact, 'app__contact'),'contact','app__whitebg'
)