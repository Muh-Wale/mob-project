import React from 'react'
import EllipseOne from '/src/assets/EllipseUno.png'
import EllipseTwo from '/src/assets/EllipseDuo.png'
import Testimonial from '/src/components/Testimonial'

const Body = () => {
    return (
        <div className='max-w-[1640px] mx-auto my-12 md:my-24 '>
            <div>
                <div className=' flex gap-0 lg:gap-[152px]'>
                    <div className=' hidden md:block'>
                        <img src={EllipseOne} alt="" />
                    </div>
                    <div className=' max-w-[1020px] w-full px-5 md:px-14 lg:px-0'>
                        <div className=' capitalize font-semibold text-3xl md:text-4xl lg:text-[50px] text-center mb-3 lg:mb-7 text-[#2549D3]'><h1>we are MOB</h1></div>
                        <div className=' capitalize font-medium text-base md:text-lg lg:text-xl'>
                            <p>Lorem ipsum dolor sit amet consectetur. Dignissim congue quisque aliquam viverra accumsan. Odio varius et nunc odio donec blandit mi. Pretium pellentesque felis tincidunt suspendisse hac consectetur augue ultricies.</p>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-end gap-0 lg:gap-20 mt-10 md:mt-0'>
                    <div className=' max-w-[1020px] w-full grid grid-cols-1 lg:grid-cols-3 items-center px-5 md:px-8 lg:px-0'>
                        <div className=' capitalize font-semibold text-3xl md:text-4xl lg:text-[50px] mb-3 lg:mb-7 text-[#2549D3] col-auto lg:col-span-1 text-center md:text-left'><h1>what’s our mission?</h1></div>
                        <div className=' capitalize font-medium text-base md:text-lg lg:text-xl col-auto lg:col-span-2'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Dui diam amet sit faucibus urna. Urna purus et ipsum venenatis arcu massa habitant gravida neque. Quisque pellentesque laoreet amet lacus velit aliquet. Vulputate gravida arcu nulla tincidunt lobortis leo a elit pellentesque. Lacus tincidunt tortor pretium ornare nibh euismod senectus sed. Nulla elit libero ac est urna id ut amet urna. Duis dolor turpis non sed tincidunt. Neque ipsum sit arcu eu at ullamcorper donec sit. Tortor aliquet ac integer turpis tristique enim justo. <br />Dui posuere nibh porta sem tristique pellentesque. Amet cursus consequat elementum id eu enim cras.
                            </p>
                        </div>
                    </div>
                    <div className=' hidden md:block'>
                        <img src={EllipseTwo} alt="" />
                    </div>
                </div>
                <div className=' relative my-10 md:my-36 lg:my-32'>
                    <div className=''>
                        <div className=' absolute bottom-64 lg:bottom-44 hidden md:block'>
                            <img src={EllipseOne} alt="" />
                        </div>
                        <div className='  gap-20  mx-auto max-w-[1020px]'>
                            <div className=' max-w-[1020px] w-full grid col-span-1 lg:grid-cols-3 items-center px-5 md:px-8 lg:px-0 my-0 md:my-80 lg:my-0'>
                                <div className=' capitalize font-semibold text-3xl md:text-4xl lg:text-[50px] mb-3 lg:mb-7 text-[#2549D3] col-span-1 lg:col-span-1 block lg:hidden text-center'><h1>what’s our mission?</h1></div>
                                <div className=' capitalize font-medium text-base md:text-lg lg:text-xl col-span-1 lg:col-span-2'>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Dui diam amet sit faucibus urna. Urna purus et ipsum venenatis arcu massa habitant gravida neque. Quisque pellentesque laoreet amet lacus velit aliquet. Vulputate gravida arcu nulla tincidunt lobortis leo a elit pellentesque. Lacus tincidunt tortor pretium ornare nibh euismod senectus sed. Nulla elit libero ac est urna id ut amet urna. Duis dolor turpis non sed tincidunt. Neque ipsum sit arcu eu at ullamcorper donec sit. Tortor aliquet ac integer turpis tristique enim justo. <br />Dui posuere nibh porta sem tristique pellentesque. Amet cursus consequat elementum id eu enim cras.
                                    </p>
                                </div>
                                <div className=' capitalize font-semibold text-3xl md:text-4xl lg:text-[50px] mb-3 lg:mb-7 text-[#2549D3] col-span-1 lg:col-span-1 hidden lg:block'><h1>what’s our mission?</h1></div>
                            </div>
                        </div>
                        <div className=' absolute right-0 -bottom-72 lg:-bottom-32 hidden md:block'>
                                <img src={EllipseTwo} alt="" />
                            </div>
                    </div>
                </div>
                <div className=''>
                    <div className=' max-w-[1020px] mx-auto w-full px-5 md:px-8 lg:px-0'>
                        <div className=' capitalize font-semibold text-3xl md:text-4xl lg:text-[50px] text-center mb-3 lg:mb-7 text-[#2549D3]'><h1>our core values we imbibe</h1></div>
                        <div className=' capitalize font-medium text-base md:text-lg lg:text-xl'>
                            <p>Lorem ipsum dolor sit amet consectetur. Dignissim congue quisque aliquam viverra accumsan. Odio varius et nunc odio donec blandit mi. Pretium pellentesque felis tincidunt suspendisse hac consectetur augue ultricies.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-20 md:mt-40'>
                <div className=' capitalize font-semibold text-3xl md:text-4xl lg:text-[50px] text-center mb-7 text-[#2549D3]'><h1>meet the team</h1></div>
                <Testimonial/>
            </div>
        </div>
    )
}

export default Body
