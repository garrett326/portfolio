import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useLinkReveal } from "../hooks/gsap";

const Navbar = ({ footerNav }) => {
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const link3Ref = useRef(null);
  const link4Ref = useRef(null);
  const link5Ref = useRef(null);
  const link6Ref = useRef(null);

  const links = [
    link1Ref,
    link2Ref,
    link3Ref,
    link4Ref,
    link5Ref,
    link6Ref,
  ];

  useLinkReveal(links, 2);

  return (
    <nav
      className={`navbar container mx-auto flex justify-between ${footerNav ? "mt-40" : "mt-20"
        } uppercase`}
    >
      <div className='logo flex flex-col gap-5'>
        <HashLink smooth to='#home' className='link-item' ref={link1Ref}>
          {footerNav ? "Go to top" : "Ruslan Danyliuk!"}
        </HashLink>
        {footerNav && (
          // <div className='bg-[#000000] p-3 rounded-lg' ref={link8Ref}>
          //   <a
          //     target='_blank'
          //     rel='noreferrer'
          //   >
          //     <img
          //       alt='Trustpilot Logo'
          //       className='w-32'
          //       src="/assets/up-arrow.png"
          //     />
          //   </a>
          // </div>
          <div></div>
        )}
      </div>
      <ul className='menus flex flex-col gap-3 sm:w-[170px] w-[100px]'>
        <li className='self-start'>
          <HashLink smooth to='#home' className='link-item' ref={link2Ref}>
            Home
          </HashLink>
        </li>
        <li className='self-end'>
          <HashLink smooth to='#about' className='link-item' ref={link3Ref}>
            About Me
          </HashLink>
        </li>
        <li className='self-start'>
          <HashLink smooth to='#projects' className='link-item' ref={link4Ref}>
            My Projects
          </HashLink>
        </li>
        <li className='self-end'>
          <HashLink smooth to='#skills' className='link-item' ref={link5Ref}>
            My Skills
          </HashLink>
        </li>
        <li className='self-start'>
          <HashLink smooth to='#contact' className='link-item' ref={link6Ref}>
            Contact Me
          </HashLink>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;