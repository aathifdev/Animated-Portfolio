import { useRef } from "react"
import "./services.scss"
import { motion, useInView } from "framer-motion"

const variants ={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{

        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}

const Services = () => {

    const ref =useRef()

    const isInView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div 
        className="services" 
        variants={variants} 
        initial="initial" 
        // animate="animate"
        // whileInView="animate"
        ref={ref}
        animate={"animate"}
    >
        <motion.div className="textContainer" variants={variants}>
            <p className="p">
                I focus on helping your brand grow
                <br/> and move forward
            </p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt=""/>
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Websites.
                </h1>
                <button>WHAT WE DO</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box">
                <h2>Front-End Development</h2>
                <p>
                    Front-end development, also known as client-side development, focuses on the user interface and user experience of a website or web application.
                </p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box">
                <h2>Back-End Development</h2>
                <p>
                    Front-end development, also known as client-side development, focuses on the user interface and user experience of a website or web application.
                </p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box" >
                <h2>Full-Stack Development</h2>
                <p>
                    Front-end development, also known as client-side development, focuses on the user interface and user experience of a website or web application.
                </p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box">
                <h2>Other Key Aspects</h2>
                <p>
                    Front-end development, also known as client-side development, focuses on the user interface and user experience of a website or web application.
                </p>
                <button>GO</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services