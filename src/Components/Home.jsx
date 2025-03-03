import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import myPhoto from '../asset/potoku.png';

const Home = () => {
  const [animate, setAnimate] = useState(false);

  // Intersection Observer hook to trigger animations on section enter and exit
  const { ref, inView } = useInView({
    threshold: 0.7, // Trigger when 70% of section is in view
    triggerOnce: false, 
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Update animation state based on section visibility
  useEffect(() => {
    if (inView) {
      setAnimate(true); // Trigger entrance animation
    } else {
      // Add a slight delay before setting animate to false
      const timeout = setTimeout(() => setAnimate(false), 1000); // Adjust the delay as needed
      return () => clearTimeout(timeout); // Clean up on unmount
    }
  }, [inView]);

  return (
    <div
      name="home"
      className="w-full h-screen bg-[#F5F5F5] font-sans flex items-center justify-center px-4 sm:px-8"
      ref={ref} // Reference for intersection observer
    >
      <div className={`max-w-[1000px] mx-auto flex flex-row items-center justify-center space-y-0 h-full transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        {/* Image Section */}
        <div className="flex justify-center w-1/3 md:w-1/2">
          <img
            src={myPhoto}
            alt="Rike Anindhita"
            className="w-80 h-80 sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] object-cover rounded-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-2/3 md:w-1/2 text-center md:text-left pl-4 sm:pl-8">
          <p
            className="text-[#C23B22] font-bold text-base sm:text-xl"
            data-aos="fade-left"
            data-aos-duration="1000">
            Hi, my name is
          </p>
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#124076]"
            data-aos="fade-right"
            data-aos-duration="2000">
            Rike Anindhita
          </h1>
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#295F98] mt-2"
            data-aos="fade-down"
            data-aos-duration="2500">
            I am a Data Enthutiast!
          </h2>
          <p
            className="py-4 max-w-[90%] text-[#2F3645] mx-auto md:mx-0 text-sm sm:text-base"
            data-aos="fade-up"
            data-aos-duration="2500"
            data-aos-delay="500">
            I am currently focused on projects in Applied Data Science at PENS, including analyzing lecturer performance through surveys and developing machine learning models for fraud detection.
          </p>

          <Link
            activeClass="active"
            to="work"
            smooth={true}
            duration={1000}>
            <button
              className="text-white group bg-[#295F98] border-2 border-[#295F98] px-4 py-2 my-2 flex items-center mx-auto md:mx-0 transition-all duration-300 ease-in-out hover:bg-[#C23B22] hover:border-[#C23B22] text-sm sm:text-base"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="800">
              View My Work
              <span className="ml-3 group-hover:ml-6 transition-all duration-300 ease-in-out">
                <HiArrowNarrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
