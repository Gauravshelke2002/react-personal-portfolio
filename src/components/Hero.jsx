import React from 'react';
import gaurav_pic from '../assets/Gaurav_Pic.jpg';
import linkedIn_img from '../assets/linkedin.png';
import github_img from '../assets/github.png';


export const Hero = () => {
  return (
    <>
      <section className='home'id='home'>
        <div className='home-content'>
            <h3 className='hero-intro'>hi,Myself</h3>
            <h1>Gaurav Shelke</h1>
            <h3>And I'm a <span>Full Stack Developer</span></h3>
            <p>I am a motivated and enthusiastic Full Stack Web Developer, eager to contribute my skills to innovative web development projects. With a strong foundation in both front-end and back-end technologies</p>
            <div className='social-media'>
                <a href="https://www.linkedin.com/in/gauravshelke012"  target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Gauravshelke2002"  target="_blank"><i class="fa-brands fa-github"></i></a>
                {/* <a href="https://www.linkedin.com/in/gauravshelke012"><img src={linkedIn_img} alt="" /></a>
                <a href="https://github.com/Gauravshelke2002"><img src={github_img} alt="" /></a> */}
            </div>
            <a href="https://drive.google.com/file/d/1S6bFiQ9UmOpTGVK0b6fV7z4s1MKlah-s/view?usp=sharing" className='btn'  target="_blank">Download CV</a>
        </div>
        <div className='home-img'>
            <img src={gaurav_pic} alt="" />
        </div>
      </section>
    </>
  )
}


