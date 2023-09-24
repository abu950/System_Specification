import { useState, useEffect } from 'react'
const slides = ['/assets/system_1.jpg', '/assets/system_2.jpg', '/assets/system_3.jpg']

export const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000);
        return () => clearInterval(intervalId);
    }, [3000]);

    return (
        <div className={`hero-carousel slides${currentSlide}`} style={{ backgroundImage: `url(${slides[currentSlide]})` }}>
            <div className="carousel-slide">
                <div className='mid_logo'>
                    <img src={'/assets/middle-logo.png'} />
                    <p className='logo_text'>L O G O</p>
                </div>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <p>scroll</p>
            <div className='scroll_code'></div>
            <div className='hover_black'></div>

        </div>
    );
};