import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import testimonial from '../Home/data/Testimonial.json'

const Testimonial = () => {
    return (
        <div className='max-w-[1400px] mx-auto my-12 hidden'>
            <div>
                <div>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper bg-[#574E4E]">
                        {
                            testimonial.map((testimonial, i) => (
                                <SwiperSlide  key={i} className=' h-[400px]'>
                                    <div className="cursor-pointer flex gap-5 items-center m-5">
                                        <div className='h-full'>
                                            <img
                                                className=" object-cover rounded-lg "
                                                src={testimonial.pic}
                                                alt="A beautiful landscape"
                                            />
                                        </div>
                                        <div className=" text-white max-w-[500px]">
                                            <div className=''>
                                                <div>
                                                    <p className='capitalize font-semibold text-4xl'>{testimonial.contentOne}</p>
                                                </div>
                                                <div className=' italic font-medium text-xl capitalize my-3'>
                                                    <p>{testimonial.contentTwo}</p>
                                                </div>
                                                <div className=' capitalize font-semibold text-2xl'>
                                                    <p>{testimonial.contentThree}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Testimonial