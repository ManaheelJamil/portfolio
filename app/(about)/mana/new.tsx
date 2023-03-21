"use client"
import React from 'react'
import { motion } from "framer-motion";
import { PageWrapper } from '@/app/page.wrapper';
const New = () => {
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
    <div>
      <PageWrapper>
        <motion.div 
              variants={variants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <motion.img  
              variants={images} 
              src="/pic1 .jpeg" 
              alt="my pic" 
              className="w-48 h-80 rounded-2xl m-auto"/>
              </motion.div>
   
    </PageWrapper>
    </div>

  )
}
export default New
