import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      name="about"
      className="w-full h-screen bg-[#ffffff] text-[#295F98] -300 font-sans">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-8 border-[#C23B22]">About</p>
          </div>

          <div></div>
        </div>

        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div
            className="sm:text-right text-4xl font-bold"
            data-aos="fade-right"
            data-aos-duration="1000">
            <p>
              Hi, I am <span className="text-[#C23B22]">Rike</span>, Nice to meet you, Please take a look of my Projects, <span className="text-[#C23B22]">Thank You</span>.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000">
            <p className="text-[#2F3645]">
            Undergraduate Applied Data Science in Electronics Engineering Polytechnic Institute of Surabaya with a strong foundation in data analysis and data science. Experienced in handling various data-driven projects and highly interested in utilizing data to solve real-world problems and create impactful solutions. Actively participate in committees to develop teamwork skills. Possess strong technical skills and a passion for continuously learning and applying new methodologies in the field of data science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
