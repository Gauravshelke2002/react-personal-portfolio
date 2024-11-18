import React from 'react'
import pic from '../assets/Gaurav_Pic.jpg';


export const About = () => {
  return (
    <>
      <section className='about' id='about'>
        <div className='about-img'>
          <img src={pic} alt="gaurav pic" />
        </div>
        <div className='about-content'>
          <h2 className='heading'>ABOUT <span>Me</span></h2>
          <h3>Full Stack Developer</h3>
          <p>Hello! I'm a Full Stack Web Developer with a passion for creating dynamic, user-centered web applications. With a strong foundation in both front-end and back-end technologies, I specialize in designing and developing seamless, scalable web solutions that bridge the gap between design and functionality.  I’m experienced in using modern technologies like HTML5, CSS3, JavaScript, and React.js for building responsive, interactive user interfaces. On the back-end, I work with Node.js, Express, and SQL/ NoSQL databases like MongoDB to build powerful, data-driven applications.</p>
          <p>I’m experienced in using modern technologies like HTML5, CSS3, Bootstrap, JavaScript, and React.js for building responsive, interactive user interfaces. On the back-end, I work with Node.js, Express, and  databases like MongoDB, MySQL to build powerful, data-driven applications.</p>
          <a href="#contact" className='btn'>Contact</a>
        </div>
      </section>
    </>
  )
}
