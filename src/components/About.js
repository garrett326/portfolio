import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useProjectLeftRightReveal } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";

const data = {
  img1: "https://res.cloudinary.com/de67hpfac/image/upload/v1739938521/ruslan1_y9bzov.png",
  img2: "https://res.cloudinary.com/de67hpfac/image/upload/v1739965336/ruslan1_upiljz.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const aboutRefs = [aboutLeftRef, aboutRightRef];

  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  useProjectLeftRightReveal(aboutRefs);

  return (
    <div className='about container mx-auto mt-40' id='about'>
      <SectionTitle title={"About Me"} />
      <div className='about-wrapper mt-40 grid grid-cols-1 gap-20 overflow-hidden lg:grid-cols-2'>
        <div className='about-left' ref={aboutLeftRef}></div>
        <div className='about-right' ref={aboutRightRef}>
          <p>
            Welcome to my portfolio! I’m a Senior Software Developer with over 7 years of experience building high-performance web applications. My core focus is backend development and AI—designing scalable APIs, integrating machine learning models, and building intelligent systems that drive real business results. I also bring strong frontend capabilities to the table, especially when it comes to creating engaging, interactive experiences. I use React and Three.js to develop visually stunning interfaces, from lightweight single-page apps to immersive 3D environments. Three.js is my tool of choice for pushing creative boundaries on the web, while my backend and AI work ensures every project is fast, efficient, and smart behind the scenes.
          </p>
          <h3 className='mt-10'><i>Why choose me?</i></h3>
          <p >
            🔹 Deep Technical Proficiency<br/>
            🔹 Full-Stack Development Lifecycle   <br/>
            🔹 Collaborative Client Engagement<br/>
            🔹 Performance-Driven Architecture
          </p>
          <h3 className='mt-10'><b><i>How can I help you?</i></b></h3>
          <p>
            Let's start with a chat. We'll discover what you're hoping to achieve, nail down some planning so we stay on track, and talk through your goals to make sure we're aligned. Then, I'll get to work designing and developing a really solid solution – clean, easy to maintain, secure, and built for optimal performance. We'll make sure your project is completely tested to catch all the bugs and vulnerabilities, and then I'll help you with the deployment. And, I'm here for the long haul. I offer ongoing support and maintenance, so your project stays fresh and effective. Let's talk and make something amazing happen!
          </p>
          <a
            className='uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-300 inline-block mt-10'
            href='https://drive.google.com/'
            target='_blank'
            rel='noreferrer'
          >
            View My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
