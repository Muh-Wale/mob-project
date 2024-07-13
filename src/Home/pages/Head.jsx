import React, { useState }  from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import headerone from '/src/assets/header1.png'
import '/src/App.css'

const Head = () => {
    const [ nav, setNav ] = useState(false)

    return (
        <div className='max-w-[1640px] headerImg max-h-[100vh] md:max-h-[80vh] mx-auto py-[20px] px-5 md:px-14 lg:px-24'>
            <div className=' max-w-[1400px] mx-auto h-full'>
                <nav className=' flex justify-between items-center'>
                    <div className='flex items-center gap-3 lg:gap-5 cursor-pointer' src='/'>
                        <img src={headerone} alt="" />
                        <p className='font-semibold capitalize text-[#593F00]'>MOB ESTATES</p>
                    </div>
                    <div className='hidden md:block '>
                        <ul className='font-semibold text-white flex justify-between gap-4 lg:gap-9'>
                            <Link to='/'>Home</Link>
                            <Link to='/propertylisting'>Properties</Link>
                            <Link to=''>Blog</Link>
                            <Link to=''>Agents</Link>
                            <Link to='/about'>About Us</Link>
                        </ul>
                    </div>
                    <div className='flex items-center gap-3'>
                        <button className=' hidden md:block uppercase bg-[#2549D3] font-medium text-white py-[10px] lg:py-[15px] px-[20px] lg:px-[30px] rounded-tl-[30px] rounded-br-[30px]'>
                            CONTACT
                        </button>
                        <div onClick={() => setNav(!nav)} className='cussu cursor-pointer block md:hidden'>
                            <AiOutlineMenu size={25} color='white' className='block md:hidden'/>
                        </div>
                    </div>
                </nav>
                <div className=' max-w-[1000px] mx-auto w-full flex flex-col justify-end h-full'>
                    <div className='mx-auto text-white text-center font-semibold md:font-bold text-2xl md:text-4xl lg:text-6xl capitalize my-[20px] md:my-[70px] lg:my-[100px] max-w-full md:max-w-[500px] lg:max-w-full'>
                        <h1>your dream home awaits, let us help you find it</h1>
                    </div>
                    <div>
                        <div className=' max-h-[90px]'>
                            <div className='backdrop p-3 md:p-5'>
                                <input className=' placeholder-[#574e4eb3] placeholder:text-xs md:placeholder:text-base w-[100%] h-[40px] md:h-[60px] italic py-3 px-7 rounded-tl-[20px] rounded-br-[20px] md:rounded-tl-[40px] md:rounded-br-[40px] border-2px  border-[#2549D3]' type="input" name="" id="" placeholder='Enter an address, Location, Neighbourhood or ZIP Code'/>
                            </div>
                            <div className='w-full flex justify-end'>
                                <button className=' uppercase bg-[#2549D3] font-medium text-white py-[12px] px-[20px] mr-7 rounded-tl-[30px] rounded-br-[30px] relative bottom-[74px] hidden md:block'>
                                    Search Now
                                </button>
                            </div>
                            <div className='block md:hidden'>

                            </div>
                        </div>
                        <div className=' grid grid-cols-2 md:grid-cols-4 place-items-center gap-5 my-5 mx-auto'>
                            <div className='w-fit'>
                                <div>
                                    <input type="text" placeholder='Type' className='px-2 py-1 md:p-3 rounded-tl-[15px] rounded-br-[15px] md:rounded-tl-[20px] md:rounded-br-[20px] max-w-[130px]  md:max-w-[170px]'/>
                                </div>
                                <div className=' flex justify-end '>
                                    <img src="/src/assets/HomeI.png" alt="" className=' relative bottom-[27px] pr-2 md:bottom-[35px] md:pr-3'/>
                                </div>
                            </div>
                            <div className='w-fit'>
                                <div>
                                    <input type="text" placeholder='Agent' className='px-2 py-1 md:p-3 rounded-tl-[15px] rounded-br-[15px] md:rounded-tl-[20px] md:rounded-br-[20px] max-w-[130px]  md:max-w-[170px]'/>
                                </div>
                                <div className=' flex justify-end '>
                                    <img src="/src/assets/ContactI.png" alt="" className=' relative bottom-[27px] pr-2 md:bottom-[35px] md:pr-3'/>
                                </div>
                            </div>
                            <div className='w-fit'>
                                <div>
                                    <input type="text" placeholder='Location' className='px-2 py-1 md:p-3 rounded-tl-[15px] rounded-br-[15px] md:rounded-tl-[20px] md:rounded-br-[20px] max-w-[130px]  md:max-w-[170px]'/>
                                </div>
                                <div className=' flex justify-end '>
                                    <img src="/src/assets/LocationI.png" alt="" className=' relative bottom-[25px] pr-2 md:bottom-[33px] md:pr-3'/>
                                </div>
                            </div>
                            <div className='w-fit'>
                                <div>
                                    <input type="text" placeholder='Budget' className='px-2 py-1 md:p-3 rounded-tl-[15px] rounded-br-[15px] md:rounded-tl-[20px] md:rounded-br-[20px] max-w-[130px]  md:max-w-[170px]'/>
                                </div>
                                <div className=' flex justify-end '>
                                    <img src="/src/assets/CurrencyI.png" alt="" className=' relative bottom-[24px] pr-2 md:bottom-[32px] md:pr-3'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
                {/* Overlay */}
                {nav ? <div className="bg-black/80 hidden fixed w-full h-screen z-10 top-0 left-0"></div> : ''}
                {/* Side Drawer Menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[100%] h-[100%] bg-black/80 z-10 duration-300' : 'fixed top-10 left-[-200%] w-[300px] h-fit bg-black/80 z-10 duration-300'}>
                <button className=' absolute left-4 top-9 cursor-pointer uppercase bg-[#2549D3] font-medium text-white py-[10px] lg:py-[15px] px-[20px] lg:px-[30px] rounded-tl-[30px] rounded-br-[30px]'>
                    CONTACT
                </button>
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className='cuss absolute right-4 top-9 cursor-pointer text-[#2549D3] font-extrabold'
                />
                <nav className='flex justify-center items-center h-full'>
                    <ul className='flex flex-col gap-7 md:gap-10 font-semibold text-[#2549D3] text-2xl'>
                        <Link to='/'>Home</Link>
                        <Link to='/propertylisting'>Properties</Link>
                        <Link to=''>Blog</Link>
                        <Link to=''>Agents</Link>
                        <Link to='/about'>About Us</Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Head