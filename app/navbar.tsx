"use client"
import Link from "next/link"
import { motion } from "framer-motion";
import { PageWrapper } from './page.wrapper';
export default function navbar() {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const images = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1
      },
    },
  };
  return (
<>
   
      {/* <div className="bg-black w-64 h-96 text-white">
        <img src="/pic.jpg" alt="custom" className="w-32 rounded-full h-32"></img>

        <h1>Manaheel jamil</h1>
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>What I Do</li>
          <li>Resume</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <div className="flex justify-between w-40 icon pb-10  pt-7 ">
          <div><img className="w-7 h-7 bg-gray-900" src="https://cdn-icons-png.flaticon.com/512/87/87390.png"></img></div>
          <div><img className="w-7 h-7 bg-gray-900" src="https://cdn-icons-png.flaticon.com/512/81/81609.png"></img></div>
          <div><img className="w-7 h-7  bg-gray-900" src="https://cdn-icons-png.flaticon.com/512/6422/6422213.png"></img></div>
        </div>
      </div> */}
      <PageWrapper>
      <div  >
        {/* <Link href="/mana">about</Link> */}
        <div className="border mx-2 tablet:mx-40 desktop:mx-60  p-2  m-auto mt-10 rounded-3xl">
          <div className="text-white box flex justify-between px-5 mt-5 ">
            <h1 className="text-2xl name">Manaheel <br />jamil</h1>
            <h1 className="text-md">Frontend <br /> Developer</h1>
          </div><br/>
          <motion.div 
              variants={variants}
              initial="hidden"
              animate="show"
             >
                <motion.img     variants={images} src="/pic1 .jpeg" alt="my pic" className="w-48 h-80 img rounded-2xl m-auto" />
                </motion.div><br />
          <div className="text-center text-white"><h1 className="text-3xl">HELLO ,<br /> I AM MANAHEEL JAMIL</h1><p>I am a web Developer</p></div><br/><br/>
          <div className="flex justify-center">
          <div ><img className="w-5 h-5 ml-5 rounded-full text-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qK7CXoaJw02cDwZ1ASSYxo-HLRJOFM-mjQ&usqp=CAU" /></div>
            <div ><img className="w-5 h-5 ml-5 text-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0IzWy-tm3kdUUIy0RmhWhbX4JvCB6f9x1g&usqp=CAU" /></div>
            <div ><img className="w-5 h-5 ml-5 text-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7yieKH1321H_iUEo1vCtqvQDL66lgcSaIAbwCgQL1-z57uF1FtXUTkfCvxq84qdHEauE&usqp=CAU" /></div>
          </div>
          <div className="rounded-full bg-slate-500 mx-5 p-3 text-center text-2xl font-bold my-10">
          <button>HIRE ME!</button>
          </div>
        </div>
      </div>
      </PageWrapper>
</>
  )
}


// image kaha he? public mn?


