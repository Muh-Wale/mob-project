import React, { useEffect }  from 'react'
import Header from '../Header/Header'
import Body from './pages/Body'
import Footer from '../Footer/Footer'

const PropertyDetail = () => {
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
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default PropertyDetail