import React from 'react'

const contact = () => {
    return (
        <div>
            <div className='tablet:mx-40  hover:bg-emerald-900 text-2xl p-3 mx-5 text-white border-2 w-40 text-center mt-40 rounded-full'>
                <button>Contact</button>
            </div><br /><br />
            <div className='text-4xl mx-5 tablet:mx-40'>
                <h1>Lets Build Connection</h1>
                <h1 className='text-sm mt-10'>manaheeljamil20@gmail.com</h1>
                <div className='flex w-96  '>
                    <h1 className='text-sm'>Linkedin :</h1><a className=' ml-2 text-sm hover:text-blue-800' href="https://www.linkedin.com/in/manaheel-jamil-8a80b3229/">Manaheel Jamil</a>
                </div>
            </div>
            <div className="gap-10 mt-10 tablet:mx-40 tablet:text-2xl mb-10 ml-5 grid grid-cols-2">
                <div>
                    <h1>Full Name</h1>
                    <input type="text" className="text-xs hover:outline-none" placeholder="Enter Your Name" />
                </div>
                <div>
                    <h1 >Email</h1>
                    <input type="text" className="text-xs hover:outline-none" placeholder="Enter Your Email" />
                </div>
                <div>
                    <h1>Phone</h1>
                    <input type="text" className="text-xs hover:outline-none" placeholder="Enter Your Phone Number" />
                </div>
                <div>
                    <h1 >Message</h1>
                    <input type="text" className="text-xs hover:outline-none" placeholder="Enter Your Message Here......." />
                </div>
            </div>

            <hr className='mx-2 tablet:mx-40' /><br />
            <div className='border-2 w-32 tablet:w-48 tablet:p-4 tablet:mx-40  rounded-full text-center mb-20 text-black font-bold mx-2 bg-emerald-900 p-2'><button className='text-xs tablet:text-md'>SEND MESSAGE</button></div>
        </div>
    )
}

export default contact
