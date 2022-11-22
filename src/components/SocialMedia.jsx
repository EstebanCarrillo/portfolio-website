import React from 'react'
import { BsEnvelope, BsLinkedin} from 'react-icons/bs';
import './Social.scss';

const SocialMedia = () => {
  return (
    <div className='app__social'>

        <div className='tooltip'>
            <a href="mailto:jestebancarrillo@gmail.com">
            <BsEnvelope />
            <span className='tooltiptext'>Email Me!</span>
          </a>
        </div>

        <div className='tooltip'>
        <a href="https://www.linkedin.com/in/jose-carrillo-028957184/">
            <BsLinkedin />
            <span className='tooltiptext'>LinkedIn profile!</span>
          </a>
        </div>
    </div>
  )
}

export default SocialMedia