import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useProjectLeftRightReveal } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";

const data = {
  img1: "https://res.cloudinary.com/de67hpfac/image/upload/v1739938521/ruslan1_y9bzov.png",
  img2: "https://res.cloudinary.com/de67hpfac/image/upload/v1739965336/ruslan1_upiljz.jpg",
};


const Bio = () => {
  const bioRef = useRef(null);

  useBioReveal(bioRef, 2);

  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const aboutRefs = [aboutLeftRef, aboutRightRef];

  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  useProjectLeftRightReveal(aboutRefs);


  return (
    <div className='bio container mx-auto mt-40' id='about'>
      {/* <SectionTitle title={"About Me"} /> */}
      <div className='about-wrapper mt-40 grid grid-cols-1 gap-20 overflow-hidden lg:grid-cols-2'>
        <div className='about-left' ref={aboutLeftRef}></div>
        <div className='about-right' ref={aboutRightRef}>
          <p>
            Hi! <span className="font-extrabold text-4xl">Ruslan</span> is a senior software developer with deep expertise in backend development and AI. He designs scalable systems, builds intelligent automation tools, and integrates AI models into real-world applications. In addition to his backend and AI strengths, Ruslan is also proficient in modern JavaScript frameworks and frontend development. His skill set extends to 3D web development, where he creates interactive, browser-based experiences using technologies like Three.js. Ruslan combines technical precision with a product-focused mindset, making him a valuable asset for full-stack and AI-driven projects.
          </p>
          <h3 className='mt-10'><i>Why choose Ruslan?</i></h3>
          <p >
            🔹 Deep Technical Proficiency<br />
            🔹 Full-Stack Development Lifecycle   <br />
            🔹 Collaborative Client Engagement<br />
            🔹 Performance-Driven Architecture
          </p>
          <h3 className='mt-10'><b><i>How can Ruslan help you?</i></b></h3>
          <p>
            Let's start with a chat. We'll discover what you're hoping to achieve, nail down some planning so we stay on track, and talk through your goals to make sure we're aligned. Then, I'll get to work designing and developing a really solid solution – clean, easy to maintain, secure, and built for optimal performance. We'll make sure your project is completely tested to catch all the bugs and vulnerabilities, and then I'll help you with the deployment. And, I'm here for the long haul. I offer ongoing support and maintenance, so your project stays fresh and effective. Let's talk and make something amazing happen!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
