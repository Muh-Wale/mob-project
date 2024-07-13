import React from 'react'
import {useSwiper} from 'swiper/react'

const SwipeButtons = () => {
    const swiper = useSwiper();
    return (
        <div className='swiper-nav-btns'>
            <button className=' p-2 bg-blue-900 text-black font-semibold' onClick={() => swiper.slideNext()}>Next</button>
            <button className=' p-2 bg-blue-900 text-black font-semibold' onClick={() => swiper.slidePrev()}>Prev</button>
        </div>
    )
}

export default SwipeButtons