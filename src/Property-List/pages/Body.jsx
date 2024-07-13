import React from 'react'
import properties from '../data/properties.json'
import propertiesTwo from '../data/propertiesTwo.json'
import image1 from '../../assets/image1.png';
import Linke from '../../assets/Link.png';
import Like from '../../assets/Like.png';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Link } from 'react-router-dom';

const Body = () => {
    return (
        <div className='max-w-[1640px] mx-auto my-24 px-5 md:px-14 lg:px-24'>
            <div className='max-w-[1400px] mx-auto'>
                <div className=' flex justify-between items-center'>
                    <div className=' font-medium text-xl'>showing 1-6 out of 12 results</div>
                    <div>sort by:<span className=' font-semibold'> default</span></div>
                </div>
                <div className=''>
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            propertiesTwo.map((propertiesTwo, i) => (
                                <div  key={i} className=' my-5 h-[450px]'>
                                    <div className="relative rounded-lg overflow-hidden cursor-pointer">
                                        <img
                                            className="w-full h-[430px] object-cover rounded-lg "
                                            src={[image1]}
                                            alt="A beautiful landscape"
                                        />
                                        {/* {<div className="absolute bottom-0 left-0 w-full h-[50%] bg-black opacity-50 rounded-lg transition duration-500 ease-in-out transform hover:opacity-0 hover:scale-110"></div>} */}
                                        <div className="absolute bottom-0 left-0 w-full h-[47%] md:h-[42%] bg-[#FAF9F6] text-[#574E4E] p-5">
                                            <div className='block md:flex justify-between items-center'>
                                                <div>
                                                    <p className='capitalize font-semibold text-lg'>{propertiesTwo.contentOne}</p>
                                                </div>
                                                <Link className=' text-[#2549D3] underline text-xs my-1 md:my-0' to='/propertydetail'>
                                                    <p>{propertiesTwo.contentTwo}</p>
                                                </Link>
                                            </div>
                                            <div className='mb-1 flex justify-between font-medium'>
                                                <div className='flex capitalize'>
                                                    <span>{propertiesTwo.contentThree}</span>
                                                </div>
                                            </div>
                                            <div className='flex gap-5 font-medium mb-4'>
                                                <div className='flex'>
                                                    <span>{propertiesTwo.contentFive}</span>
                                                </div>
                                                <div>
                                                    <p>{propertiesTwo.contentSix}</p>
                                                </div>
                                            </div>
                                            <div className='border-b border-[#808080]'></div>
                                            <div className=' flex justify-between mt-4'>
                                                <div className=' font-semibold capitalize text-[#000000]'>
                                                    <span>{propertiesTwo.contentFour}</span>
                                                </div>
                                                <div className='flex gap-[30px]'>
                                                    <div><img src={[Linke]} alt="" /></div>
                                                    <div><img src={[Like]} alt="" /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' flex justify-between mx-3'>
                                            <div className=' p-[7px] bg-[#2549D3] text-white rounded-tl-2xl rounded-br-2xl w-[100px] text-center  absolute top-3'>Featured</div>
                                            <div className=' p-[7px] bg-[#C5C5C5] text-[#3C763C] rounded-tl-2xl rounded-br-2xl w-[100px] text-center  absolute top-3 right-3'>For Rent</div>
                                        </div>
                                    </div>
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='px-5 md:px-14 lg:px-24 hidden lg:block'>
                <div className='my-5'>
                    <div className='text-center text-black text-[50px] font-semibold text-xl md:text-3xl lg:text-5xl capitalize'>
                        <h1>explore our popular listings</h1>
                    </div>
                </div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className=' max-w-[1200px] max-h-[230px] md:max-h-[300px] lg:max-h-[380px] h-[380px] my-5 hidden md:block'
                >
                    {
                        properties.map((properties, i) => (
                            <SwiperSlide  key={i} className=' my-5 mx-2'>
                                <div className="relative rounded-lg transition duration-500 ease-in-out transform hover:scale-105 overflow-hidden cursor-pointer">
                                    <img
                                        className="w-full h-full object-cover rounded-lg "
                                        src={[image1]}
                                        alt="A beautiful landscape"
                                    />
                                    {/* {<div className="absolute bottom-0 left-0 w-full h-[50%] bg-black opacity-50 rounded-lg transition duration-500 ease-in-out transform hover:opacity-0 hover:scale-110"></div>} */}
                                    <div className="absolute bottom-0 left-0 w-full h-[45%] backdrop-two text-[#574E4E] p-5">
                                        <div>
                                            <p className='capitalize'>{properties.contentOne}</p>
                                        </div>
                                        <div className=' my-1'>
                                            <p>{properties.contentTwo}</p>
                                        </div>
                                        <div className='mb-1 flex gap-2'>
                                            <div className='flex'>
                                                <span>{properties.contentThree}</span>
                                            </div>
                                            <div className='flex'>
                                                <span>{properties.contentFour}</span>
                                            </div>
                                            <div className='flex'>
                                                <span>{properties.contentFive}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p>{properties.contentSix}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Body