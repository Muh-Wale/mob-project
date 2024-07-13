import React from 'react'
import GetStart from '/src/assets/GetStarted.png'

const GetStarted = () => {
    return (
        <div className='max-w-[1640px] mx-auto mt-10 mb-56 md:mb-10'>
            <div  className=' max-w-[1400px] mx-auto'>
                <div className="flex  lg:justify-start justify-center items-center">
                    <div className="relative w-3/4">
                        <img
                        src={GetStart}
                        alt="Living room with a pop-up window"
                        layout="fill"
                        objectFit="cover"
                        />

                        <div className="absolute top-1/2 lg:top-1/4 md:right-0 lg:right-[-170px] bg-white p-4 shadow-lg rounded-t-lg rounded-b-2xl lg:rounded-2xl">
                            <div className='bg-white max-h-[350px] md:h-[250px] h-fit rounded-2xl text-[#2549D3] max-w-none w-full lg:max-w-[530px] text-center flex flex-col items-center justify-center px-0 md:px-5'>
                                <div className='capitalize font-semibold text-xl md:text-2xl'>join our partner landlords & agents</div>
                                <div className='capitalize text-base md:text-xl text-[#7AA2FF] w-full md:w-5/6 mx-auto my-1'>
                                    do you own a home? earn big from rentals in Nigeria who joined our success bandwagon!
                                </div>
                                <div className=' flex justify-center my-2'>
                                    <button className='border-[#2549D3] border-2 rounded-lg p-1 md:p-2 capitalize font-medium text-lg md:text-2xl'>get started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {<div className='mx-auto'>
                    <div>
                        <img src={GetStart} alt="" 
                        className='max-h-[600px] rounded-4xl object-cover'
                        />
                    </div>
                    <div className=' w-[820px] flex justify-end'>
                        <div className='bg-white h-[300px] rounded-2xl text-[#2549D3] w-[530px] text-center flex items-center px-5 relative bottom-[380px] md:bottom-[450px] left-[-30%] md:left-[-20%]  lg:left-[32%]'>
                            <div className=''>
                                <div className='capitalize font-semibold text-2xl'>join our partner landlords & agents</div>
                                <div className='capitalixe text-xl text-[#7AA2FF] w-full md:w-5/6 mx-auto my-3'>
                                    do you own a home? earn big from rentals in Nigeria who joined our success bandwagon!
                                </div>
                                <div className=' flex justify-center my-1'>
                                    <button className='border-[#2549D3] border-2 rounded-lg p-2 capitalize font-medium text-2xl'>get started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>} */}
            </div>
        </div>
    )
}

export default GetStarted