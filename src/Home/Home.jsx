import React, { useEffect }  from 'react'
import Head from './pages/Head'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Testimonial from '../components/Testimonial'
import GetStarted from './pages/GetStarted'
import Subscription from './pages/Subscription'
import Footer from '../Footer/Footer'

const Home = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    
    useEffect(() => {
        const cussu = document.querySelector('.cussu');
        const cuss = document.querySelector('.cuss')
        cussu.addEventListener('click', () => {
            document.body.style.overflow = 'hidden';
        });
        cuss.addEventListener('click', () => {
            document.body.style.overflow = 'auto';
        });
        return () => {
        cussu.removeEventListener('click', () => {
            document.body.style.overflow = 'hidden';
        });
        document.body.style.overflow = 'auto';
        };
    }, []);
    
    return (
        <div className=' max-w-[1640px] font-one'>
            <Head/>
            <Projects/>
            <Blog/>
            <div className='text-center text-black text-[50px] font-semibold text-xl md:text-3xl lg:text-5xl capitalize'>
                <h1>Client testimonial</h1>
            </div>
            <Testimonial/>
            <GetStarted/>
            <Subscription/>
            <Footer/>
        </div>
    )
}

export default Home