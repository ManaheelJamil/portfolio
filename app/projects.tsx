import React from 'react'

const projects = () => {
  return (
    <div>
      <div className=' hover:bg-emerald-900 text-2xl tablet:mx-40  p-3 mx-5 text-white border-2 w-40 text-center mt-40 rounded-full'>
                <button>Projects</button>
            </div><br/><br/>
            <div className='text-4xl mx-5 tablet:mx-40 '>
                <h1>My Projects</h1>
            </div><br/><br/>
            <div className='  justify-around'>
                <h1 className='text-md ml-10 tablet:mx-60 '>Githup :</h1><a className='tablet:mx-60  ml-10 hover:text-blue-800' href="https://github.com/ManaheelJamil">https://github.com/ManaheelJamil</a>               
            </div><br/>
            <div className='  justify-around '>
                <h1 className='text-md ml-10 tablet:mx-60 '>Next.js website : </h1><a  className='tablet:mx-60  ml-10 hover:text-blue-800' href="https://pana-syllabus-website.vercel.app/">https://pana.vercel.app/</a>               
            </div>
    </div>
  )
}

export default projects
