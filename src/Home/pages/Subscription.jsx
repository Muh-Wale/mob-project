import React from 'react'

const Subscription = () => {
    return (
        <div className='max-w-[1640px] projects-five max-h-[100vh] md:max-h-[80vh] mx-auto py-[20px] px-5 md:px-14 lg:px-24 my-24'>
            <div className=' h-fit md:h-[480px] lg:h-[525px] mx-auto py-[50px] md:py-[100px]'>
                <div className=' max-w-[1400px] mx-auto h-full block md:flex gap-2 justify-between items-center'>
                    <div className=' max-w-full md:max-w-[500px] w-full  mb-5 md:mb-0'>
                        <div className=' text-white font-semibold text-xl md:text-3xl lg:text-4xl capitalize mb-[10px] lg:mb-[20px]'>
                            <h1>find the perfect home for you.</h1>
                        </div>
                        <div className=' text-white font-medium text-base md:text-xl capitalize'>
                            <p>Our personalized search experience takes your preferences and lifestyle into account to find the perfect home for you</p>
                        </div>
                    </div>
                    <div className='backdrop-three h-[315px] max-w-[600px] w-full rounded-3xl p-[30px] lg:p-[40px]'>
                        <div className='h-1/2'>
                            <div className='text-[#2549D3] font-semibold text-2xl capitalize mb-[10px]'><h3>subscribe to our newsletter</h3></div>
                            <div className=' lowercase font-medium text-sm'><p>stay connected with us, to recieve the latest updates, exclusive offers and valuable insights straight to your inbox.</p></div>
                        </div>
                        <div className=' flex flex-col justify-end h-1/2'>
                            <div className=' max-h-[75px]'>
                                <div className=''>
                                    <input className=' placeholder-[#574e4eb3] placeholder:text-xs md:placeholder:text-base placeholder:capitalize w-[100%] h-[40px] md:h-[60px] italic py-2 px-5 rounded-tl-[20px] rounded-br-[20px] md:rounded-tl-[40px] md:rounded-br-[40px] border-2px  border-[#2549D3]' type="input" name="" id="" placeholder='your email'/>
                                </div>
                                <div className='w-full flex justify-end'>
                                    <button className=' uppercase bg-[#2549D3] font-medium text-white py-[12px] px-[10px] lg:px-[20px] mr-2 rounded-tl-[30px] rounded-br-[30px] relative bottom-[54px] hidden md:block'>
                                        Search Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription