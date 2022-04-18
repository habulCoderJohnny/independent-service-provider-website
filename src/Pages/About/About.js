import React from 'react';
import image from '../../../src/images/photographer.png';


const About = () => {
    return (
        <div className='d-flex'>
            <img className='w-50' src={image} alt="" />
            <h1 className='ms-2 text-justify'>THE GUY BEHIND THE PHOTOS
                <h6 className='lh-base text-info'>My name is Stefan Liebermann. I am an internationally awarded landscape and night photographer and I study at the Technical University Ilmenau in Germany. I discovered my passion for photography in 2015. Fortunately, since my childhood my family enabled me to travel to countries like Venezuela, Sri Lanka, Cuba and Egypt. My passion for travelling was born. Because of my closeness to nature and my desire to understand its complexity, I decided to study natural sciences. As a physicist specializing in optics, I have the technical knowledge of optical systems such as cameras and lenses and in photography in general</h6>
                <h1 className='ms-2 text-justify'>EXPLORE THE NIGHT

                    <h6 className='lh-base text-info'>I am working on my project “Explore the Night” for around three years. The night photos were taken on journeys through Spain (Tenerife), South Africa, Namibia, Azores and Germany. With my project I want to share my fascination in Night Photography. By the use of a more light sensitive device as our eyes we have the opportunity to get sight into a magic new world. It’s a special kind of art because it’s not visible with our eyes but it’s real! The modern photography with low noise full-frame sensors creates a unbelievable high dynamic range even at very long exposure times and ISO values. So its possible to view in a unique way into a hidden world. Additionally we can enhance the dynamic range through digital image processing techniques like the manual exposure blending which leads to spectacular night sky captures</h6>
                </h1>

            </h1>
            



        </div>
    );
};

export default About;

