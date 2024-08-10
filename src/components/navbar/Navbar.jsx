import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

function Navbar() {
  return (
    <div className="navbar">
        {/* sidebar */}
        <Sidebar />
        <div className="wrapper">
            <motion.span 
                initial={{opacity:0, scale:0.5}} 
                animate={{opacity:1, scale:1}} 
                transition={{ duration:0.5}}
            >
                AHAMAD DEV
            </motion.span>
            <div className="social">
                <a href="https://www.facebook.com/aathifdev?mibextid=qi2Omg&rdid=peG0wF5Zlcypax17&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FtLBMsBduzTQiYMvj%2F%3Fmibextid%3Dqi2Omg" target="_blank"><img src="/facebook.png" alt="" /></a>
                <a href="https://www.instagram.com/aathifdev?igsh=MWR0aG92Z25pY21jOQ==" target="_blank"><img src="/instagram.png" alt="" /></a>
                <a href="https://www.youtube.com/channel/UCJgg0QYukl__fFt7XwSFN7A" target="_blank"><img src="/youtube.png" alt="" /></a>
                <a href="#" target="_blank"><img src="/dribbble.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar