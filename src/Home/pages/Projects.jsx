import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import tick from '/src/assets/Tick.png'
import properties from '/src/data/properties.json'
import propertiesTwo from '/src/data/propertiesTwo.json'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { CgPlayTrackNextO, CgPlayTrackPrevO } from "react-icons/cg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';

const Projects = () => {
    const useWindowSize = () => {
        const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
    
        useEffect(() => {
            const handleResize = () => {
                setSize([window.innerWidth, window.innerHeight]);
            };
    
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);
    
        return size;
    };

    const [width] = useWindowSize();

    const slidesOffsetBefore = width >= 1024 ? 40 : 0;
    const slidesOffsetAfter = width >= 1024 ? 40 : 0;
    const slidesOffsetAfterDos = width >= 1024 ? 80 : 0;

    return (
        <div className='max-w-[1640px] mx-auto my-24 '>
            <div className='px-5 md:px-14 lg:px-24'>
                <div className='my-5'>
                    <div className='text-center text-black text-[50px] font-semibold text-xl md:text-3xl lg:text-5xl capitalize'>
                        <h1>explore our popular listings</h1>
                    </div>
                </div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={15}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className='max-w-[1200px] max-h-none my-5'
                    slidesOffsetBefore={slidesOffsetBefore}
                    slidesOffsetAfter={slidesOffsetAfter} // Adjust this value as needed
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        },
                    }}
                >
                    {properties.map((property, i) => (
                        <SwiperSlide key={i} className='my-5'>
                            <div className="relative rounded-lg transition duration-500 ease-in-out transform hover:scale-105 overflow-hidden cursor-pointer">
                                <img
                                    className="w-full h-full object-cover rounded-lg"
                                    src={property.pic}
                                    alt="A beautiful landscape"
                                />
                                <Link className="absolute bottom-0 left-0 w-full h-[45%] backdrop-two text-[#574E4E] p-5" to='/propertylisting'>
                                    <div>
                                        <p className='capitalize'>{property.contentOne}</p>
                                    </div>
                                    <div className='my-1'>
                                        <p>{property.contentTwo}</p>
                                    </div>
                                    <div className='mb-1 flex gap-2'>
                                        <div className='flex'>
                                            <span>{property.contentThree}</span>
                                        </div>
                                        <div className='flex'>
                                            <span>{property.contentFour}</span>
                                        </div>
                                        <div className='flex'>
                                            <span>{property.contentFive}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p>{property.contentSix}</p>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
            <div>
                <div className='Projects-three h-[100px] md:h-[200px] lg:h-[350px] mx-auto py-[20px] px-5 md:px-14 lg:px-24'>
                    <div className=' max-w-[1400px] mx-auto h-full'>
                        <div className='mx-auto text-white text-center font-semibold text-xl md:text-3xl lg:text-5xl capitalize my-[20px] md:my-[50px] max-w-full md:max-w-[500px] lg:max-w-full'>
                            <h1>why choose us?</h1>
                        </div>
                    </div>
                </div>
                <div className=' max-w-[1144px] max-h-none lg:max-h-64 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto static lg:relative bottom-[10rem] gap-5 lg:gap-0 my-5 lg:my-0 px-10 lg:px-0'>
                    <div className=' mx-auto md:max-h-[330px] lg:max-h-[370px] max-w-[400px] md:max-w-full bg-white py-[30px] md:py-[45px] px-[20px] md:px-[30px] shadow-xl md:w-full rounded-2xl lg:rounded-l-2xl lg:rounded-none'>
                        <div className=''>
                            <img src={tick} alt="" className='mx-auto'/>
                        </div>
                        <div className='capitalize font-medium text-[#4D83FF] text-xl text-center pt-[25px]'>
                            trusted and certified
                        </div>
                        <div className='text-center text-[15px] capitalize text-[#4D83FF] pt-[15px]'>
                            <p>Lorem ipsum dolor sit amet consectetur. Tempus ipsum purus non quis massa. Ornare dignissim at et tempor pharetra amet netus.</p>
                        </div>
                    </div>
                    <div className=' mx-auto md:max-h-[330px] lg:max-h-[370px] max-w-[400px] md:max-w-full bg-white py-[30px] md:py-[45px] px-[20px] md:px-[30px] shadow-xl md:w-full rounded-2xl lg:rounded-none'>
                        <div className=''>
                            <img src={tick} alt="" className='mx-auto'/>
                        </div>
                        <div className='capitalize font-medium text-[#4D83FF] text-xl text-center pt-[25px]'>
                            trusted and certified
                        </div>
                        <div className='text-center text-[15px] capitalize text-[#4D83FF] pt-[15px]'>
                            <p>Lorem ipsum dolor sit amet consectetur. Tempus ipsum purus non quis massa. Ornare dignissim at et tempor pharetra amet netus.</p>
                        </div>
                    </div>
                    <div className=' mx-auto md:max-h-[330px] lg:max-h-[370px] max-w-[400px] md:max-w-full bg-white py-[30px] md:py-[45px] px-[20px] md:px-[30px] shadow-xl md:w-full rounded-2xl lg:rounded-none'>
                        <div className=''>
                            <img src={tick} alt="" className='mx-auto'/>
                        </div>
                        <div className='capitalize font-medium text-[#4D83FF] text-xl text-center pt-[25px]'>
                            trusted and certified
                        </div>
                        <div className='text-center text-[15px] capitalize text-[#4D83FF] pt-[15px]'>
                            <p>Lorem ipsum dolor sit amet consectetur. Tempus ipsum purus non quis massa. Ornare dignissim at et tempor pharetra amet netus.</p>
                        </div>
                    </div>
                    <div className=' mx-auto md:max-h-[330px] lg:max-h-[370px] max-w-[400px] md:max-w-full bg-white py-[30px] md:py-[45px] px-[20px] md:px-[30px] shadow-xl md:w-full rounded-2xl lg:rounded-r-2xl lg:rounded-none'>
                        <div className=''>
                            <img src={tick} alt="" className='mx-auto'/>
                        </div>
                        <div className='capitalize font-medium text-[#4D83FF] text-xl text-center pt-[25px]'>
                            trusted and certified
                        </div>
                        <div className='text-center text-[15px] capitalize text-[#4D83FF] pt-[15px]'>
                            <p>Lorem ipsum dolor sit amet consectetur. Tempus ipsum purus non quis massa. Ornare dignissim at et tempor pharetra amet netus.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='px-5 md:px-14 lg:px-24'>
                <div>
                    <div className='text-center text-black text-[50px] font-semibold text-xl md:text-3xl lg:text-5xl capitalize'>
                        <h1>explore our featured properties</h1>
                    </div>
                </div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className='max-w-[1200px] max-h-none md:max-w-[1400px]  my-5'
                    slidesOffsetBefore={slidesOffsetBefore}
                    slidesOffsetAfter={slidesOffsetAfterDos}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        
                    }}
                >
                    {
                        propertiesTwo.map((propertiesTwo, i) => (
                            <SwiperSlide  key={i} className=' my-10 w-fit'>
                                <div className="relative rounded-lg transition duration-500 ease-in-out transform hover:scale-105 overflow-hidden cursor-pointer">
                                    <img
                                        className="w-full h-full md:h-[430px] object-cover rounded-lg "
                                        src={propertiesTwo.pic}
                                        alt="A beautiful landscape"
                                    />
                                    {/* {<div className="absolute bottom-0 left-0 w-full h-[50%] bg-black opacity-50 rounded-lg transition duration-500 ease-in-out transform hover:opacity-0 hover:scale-110"></div>} */}
                                    <Link className="absolute bottom-0 left-0 w-full h-[60%] md:h-[42%] bg-[#FAF9F6] text-[#574E4E] p-5" to='/propertydetail'>
                                        <div className=' block md:flex justify-between items-center'>
                                            <div>
                                                <p className='capitalize font-semibold text-lg'>{propertiesTwo.contentOne}</p>
                                            </div>
                                            <div className=' text-[#2549D3] underline text-xs'>
                                                <p>{propertiesTwo.contentTwo}</p>
                                            </div>
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
                                                <div><img src={propertiesTwo.contentSeven} alt="" /></div>
                                                <div><img src={propertiesTwo.contentEight} alt="" /></div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className=' flex justify-between mx-3'>
                                        <div className=' p-[7px] bg-[#2549D3] text-white rounded-tl-2xl rounded-br-2xl w-[100px] text-center  absolute top-3'>Featured</div>
                                        <div className=' p-[7px] bg-[#C5C5C5] text-[#3C763C] rounded-tl-2xl rounded-br-2xl w-[100px] text-center  absolute top-3 right-3'>For Rent</div>
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

export default Projects