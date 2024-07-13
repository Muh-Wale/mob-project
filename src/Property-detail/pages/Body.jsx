import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import detailOne from "/src/assets/details1.png"
import detailTwo from "/src/assets/details2.png"
import detailThree from "/src/assets/details3.png"
import admon from "/src/assets/admon.png"
import tour from "/src/assets/tour.png"
import { Link } from 'react-router-dom';

const Body = () => {
    return (
        <div className='max-w-[1640px] mx-auto my-16 md:my-24 px-5 md:px-14 lg:px-24'>
            <div className='max-w-[1400px] mx-auto'>
                <div>
                    <Link className='flex items-center gap-1 cursor-pointer group w-fit' to="/">
                        <FaArrowLeftLong size={40} className='transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-blue-500 group-hover:animate-wiggle'/>
                        <div className='capitalize font-medium text-2xl transition-transform duration-300 group-hover:text-blue-500 group-hover:translate-x-1'>
                            go back
                        </div>
                    </Link>
                    <div className=' my-10 md:my-16'>
                        <div className=' flex justify-between items-center'>
                            <div>
                                <h1 className=' capitalize font-semibold text-[22px] md:text-3xl lg:text-5xl'>voixe luxury villa</h1>
                            </div>
                            <div className=' flex gap-3'>
                                <div className=' border p-1 rounded-[10px]'>
                                    <CiHeart size={30}/>
                                </div>
                                <div className=' border p-1 rounded-[10px]'>
                                    <CiShare2 size={30}/>
                                </div>
                                
                            </div>
                        </div>
                        <div className=' my-4'>
                            <span className=' capitalize font-medium text-2xl'>victoria island, lagos</span>
                        </div>
                        <div className=' block md:flex justify-between items-center'>
                            <div className=' flex gap-3 md:gap-2 lg:gap-5 font-medium text-sm md:text-lg lg:text-xl capitalize text-[#000000BF]'>
                                <p className=' text-[#3C763C]'>for rent</p>
                                <p>3 months ago</p>
                                <p>700 sqft</p>
                            </div>
                            <div className=' my-1 md:my-0'>
                                <p className=' capitalize font-semibold text-xl md:text-3xl lg:text-[38px]'>27,000,000 per annum</p>
                            </div>
                        </div>
                        <div className=' grid grid-cols-4 md:grid-cols-5 grid-rows-2 gap-3 md:gap-5 lg:gap-7 h-fit my-[30px]'>
                            <div className=' col-span-4 md:col-span-3 row-span-2'><img src={detailOne} className=' h-full w-full'/></div>
                            <div className=' col-span-2 row-span-1 h-full'><img src={detailTwo} className=' h-full w-full'/></div>
                            <div className=' col-span-2 row-span-1 h-full'><img src={detailThree} className=' h-full w-full'/></div>
                        </div>
                    </div>
                    <div className=' block md:grid grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-10'>
                        <div className=' col-span-2 lg:col-span-3'>
                            <div className=' max-w-[590px] w-full'>
                                <div className=' mb-[15px] md:mb-[30px]'>
                                    <h1 className=' capitalize font-semibold text-[22px] md:text-3xl lg:text-[40px]'>Details</h1>
                                </div>
                                <div>
                                    <div className='grid grid-cols-3 gap-3'>
                                        <div><span className='capitalize font-medium text-[#000000BF]'>Bedroom 5</span></div>
                                        <div><span className='capitalize font-medium text-[#000000BF]'>Bedroom 5</span></div>
                                        <div><span className='capitalize font-medium text-[#000000BF]'>Year Built 2023</span></div>
                                        <div><span className='capitalize font-medium'>Garage 1</span></div>
                                        <div><span className='capitalize font-medium'>dimension 700 sqft</span></div>
                                        <div><span className='capitalize font-medium'>type bungalow</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className=' w-full mt-10 md:mt-20'>
                                <div className=' mb-[15px] md:mb-[30px]'>
                                    <h1 className=' capitalize font-semibold text-[22px] md:text-3xl lg:text-[40px]'>description</h1>
                                </div>
                                <div>
                                    <div className=' font-medium capitalize text-lg lg:text-2xl text-[#000000BF]'>
                                        <p>located in the heart of victoria island, this stunning 3-bedroom apartment is located in a quiet and upscale neighborhood, just a short walk from the city center. voixe luxurious villa features a spacious living room with plenty of natural light, a modern kitchen with stainless steel appliances, and two well-appointed bedrooms with ample closet space.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' col-span-2 border border-[#808080] rounded-[10px] max-w-[400px] md:max-w-full w-full mt-10 md:mt-0'>
                            <div className=' w-full py-[25px] lg:py-[50px] px-[18px] lg:px-[35px]'>
                                <div className=' mb-5'>
                                    <h1 className='font-medium capitalize text-2xl text-[#000000BF]'>contact cyber admon</h1>
                                </div>
                                <div className=' flex gap-4 mb-6 md:mb-9 items-center'>
                                    <div><img src={admon} alt="profile" /></div>
                                    <div>
                                        <p className=' font-semibold text-xl capitalize mb-2 md:mb-4'>cyber admon</p>
                                        <span className=' font-medium text-[#808080]'>cyber@gmail.com</span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="Name">Name</label>
                                        <input type="text" className='h-[50px] w-full p-2 rounded-[10px] border-[#808080] border'/>
                                    </div>
                                    <div className=' my-4 md:my-6'>
                                        <label htmlFor="Headline">Headline</label>
                                        <input type="text" className='h-[50px] w-full p-2 rounded-[10px] border-[#808080] border'/>
                                    </div>
                                    <div>
                                        <label htmlFor="Message">Message</label>
                                        <input type="text" className='h-[110px] w-full p-2 rounded-[10px] border-[#808080] border'/>
                                    </div>
                                    <div className=' mt-7 md:mt-12'>
                                        <button type="submit" className=' capitalize text-white font-semibold text-xl bg-[#2549D3] w-full p-4 text-center rounded-[10px]'>make an offer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' mt-11 md:mt-20'>
                        <div className=' p-7 md:p-9 border border-[#2549D3] rounded-[10px]'>
                            <div className=' mb-[15px] md:mb-[30px]'>
                                <h1 className=' font-medium text-[22px] md:text-3xl lg:text-[40px] capitalize'>features</h1>
                            </div>
                            <ul className=' flex gap-6 md:gap-[50px] flex-wrap px-3 md:px-5'>
                                <li className=' list-disc font-medium text-lg md:text-2xl capitalize'>gym</li>
                                <li className=' list-disc font-medium text-lg md:text-2xl capitalize'>air conditioner</li>
                                <li className=' list-disc font-medium text-lg md:text-2xl capitalize'>swimming pool</li>
                                <li className=' list-disc font-medium text-lg md:text-2xl capitalize'>lawn</li>
                                <li className=' list-disc font-medium text-lg md:text-2xl capitalize'>private cinema</li>
                                <li className=' list-disc font-medium text-lg md:text-2xl capitalize'>24/7 electricity</li>
                                <li className=' list-disc font-medium text-lg md:text-2xl capitalize'>microwave</li>
                                <li className=' list-disc font-medium text-lg md:text-2xl capitalize'>ps5</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' my-14 md:my-28'>
                        <div className=' mb-3 md:mb-[20px]'>
                            <h1 className=' capitalize font-semibold text-[22px] md:text-3xl lg:text-[40px]'>take a 360 tour.</h1>
                        </div>
                        <div className=' w-full'>
                            <img src={tour} alt="" className=' w-full'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body