import React from 'react'
import Footericon from '/src/assets/Footer (1).png'
import Instagram from '/src/assets/InstagramI.png'
import Twitter from '/src/assets/XI.png'
import Facebook from '/src/assets/MetaI.png'
import Linkdln from '/src/assets/LinkdlnI.png'

const Footer = () => {
    return (
        <div className='max-w-[1640px] bg-[#000000] mx-auto py-[20px] px-5 md:px-14 lg:px-24 text-white'>
            <div className=' max-w-[1400px] mx-auto h-full py-8 md:py-14 lg:py-20'>
                <div className=' flex justify-between flex-wrap'>
                    <div  className=' max-w-[390px] w-full'>
                        <div className=' mb-5'>
                            <div className='flex items-center gap-3 lg:gap-5 cursor-pointer' src='/'>
                                <div>
                                    <img src={Footericon} alt="" />
                                </div>
                                <div className='capitalize text-[#2549D3] font-bold text-xl'>
                                    MOB ESTATES
                                </div>
                            </div>
                            <div className=' capitalize font-medium my-[25px]'>
                                <p>Lorem ipsum dolor sit amet consectetur. Viverra sed enim dolor egestas non tellus venenatis sagittis. Vitae vitae ullamcorper dolor lacus suspendisse auctor enim. </p>
                            </div>
                            <div className=' flex gap-[45px]'>
                                <div><img className=' cursor-pointer' src={Instagram} alt="" /></div>
                                <div><img className=' cursor-pointer' src={Twitter} alt="" /></div>
                                <div><img className=' cursor-pointer' src={Facebook} alt="" /></div>
                                <div><img className=' cursor-pointer' src={Linkdln} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div  className=' w-[250px]  mb-5'>
                        <div>
                            <div className='capitalize font-semibold text-2xl mb-[20px] lg:mb-[40px]'>
                                <h1>quick links</h1>
                            </div>
                            <ul className=' capitalize font-semibold flex flex-col gap-[10px] md:gap-[15px] lg:gap-[20px]'>
                                <li className='cursor-pointer'>Home</li>
                                <li className='cursor-pointer'>Properties</li>
                                <li className='cursor-pointer'>Blog</li>
                                <li className='cursor-pointer'>Agents</li>
                                <li className='cursor-pointer'>About Us</li>
                            </ul>
                        </div>
                    </div>
                    <div  className=' w-[250px]  mb-5'>
                        <div>
                            <div className='capitalize font-semibold text-2xl mb-[20px] lg:mb-[40px]'>
                                <h1>more</h1>
                            </div>
                            <ul className=' capitalize font-semibold flex flex-col gap-[10px] md:gap-[15px] lg:gap-[20px]'>
                                <li className='cursor-pointer'>agents</li>
                                <li className='cursor-pointer'>landlords</li>
                                <li className='cursor-pointer'>fAQs</li>
                                <li className='cursor-pointer'>Agents</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' w-[250px] mb-5'>
                        <div>
                            <div className='capitalize font-semibold text-2xl mb-[20px] lg:mb-[40px]'>
                                <h1>popular searches</h1>
                            </div>
                            <ul className=' capitalize font-semibold flex flex-col gap-[10px] md:gap-[15px] lg:gap-[20px]'>
                                <li className='cursor-pointer'>lekki apartments</li>
                                <li className='cursor-pointer'>bungalow</li>
                                <li className='cursor-pointer'>ikeja buildings</li>
                                <li className='cursor-pointer'>banana island</li>
                                <li className='cursor-pointer'>duplex</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer