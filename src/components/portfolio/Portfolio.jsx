import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [ 
  {
    id : 1,
    title:"Education",
    img:"educative-scaled.png",
    desc:"Bachelor of Information Technology (BIT) Colombo university and Bachelor of Engineering Technology (BET) Honours Degree Kelaniya university",
  },
  {
    id : 2,
    title:"Water Rocket",
    img:"Rock.jpg",
    desc:"I won 3rd place at the annual water rocket competition in 2015, organized by the space application division of the Arther C Clarke institute then selected for the second competition and won 6th place, held in Bali, Indonesia, organized by the Asia-Pacific Regional Space Agency Forum.",
  },
  {
    id : 3,
    title:"Robatics Workshop",
    img:"Robatics.jpg",
    desc:"I have certificate of participated to Robatics Workshop on October 2018 in Recognition of the commitment, Dadication & passion in being a pivotal part of the STEM Education workshop of SCCIP JAPAN CO. LTD",
  },
  {
    id : 4,
    title:"Experience",
    img:"1.jpg",
    desc:"I have web developer skilled in the design, development, and maintenance of websites and web apps. I am proficient in HTML, CSS, JavaScript, PHP, MySql,Java, Python, React, and NextJs. ",
  },

];
const Single = ({ item }) =>{
  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    // offset: ["start start", "end start"] 
  });

  const y = useTransform(scrollYProgress,[0,1], [-300, 300]);

  return (
  <section >
    <div className="container">
      <div className="wrapper">
        <div className="imageContainer" ref={ref}>
          <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer" style={{y}}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button>See Demo</button>
        </motion.div>
        </div>
    </div>
  </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target:ref, 
    offset:["end end" , "start start"]
  });

  const scaleX = useSpring(scrollYProgress,{
    stiffness: 100,
    damping: 30,
  } )

  return (
    <div className="portfolio"  ref={ref} >
      <div className="progress">
        <h1>About Me</h1>
        <motion.div style = {{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id}/>
      ))}
    </div>
  );
};




export default Portfolio





