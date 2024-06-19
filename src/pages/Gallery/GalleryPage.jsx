import React from 'react'
import Gallery from '../../components/Gallery/Gallery'

const GalleryPage = () => {
    return (
        <div className='w-[90%] md:w-[80vw] mb-10 mx-auto '>
            <div className="py-4 md:my-16 flex  flex-col items-center justify-center">

                <h1 className="heading text-center">Gallery</h1>
                <p className="sub-heading text-xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <Gallery />
        </div>
    )
}

export default GalleryPage