import React, { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Modal from 'react-modal';


// Replace these with your local photo URLs or server endpoints
// const photoUrls = [
//     "./gallery/1.png",
//     "./gallery/2.png",
//     "./gallery/3.png",
//     "./gallery/4.png"
// ];
const images = [
    "./gallery/1.png",
    "./gallery/2.png",
    "./gallery/3.png",
    "./gallery/4.png"
];

Modal.setAppElement('#root');

const Gallery = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Building Gallery</h1>
            
            <div className="grid grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Gallery ${index}`}
                        className={`${index == 0 && 'col-span-3'} ${index == 3 && 'col-span-3'} cursor-pointer w-full h-full object-cover`}
                        onClick={() => openModal(index)}
                    />
                ))}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="flex items-center justify-center p-4"
                overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center w-screen"
            >
                <div>
                    <button
                        onClick={closeModal}
                        className="absolute top-0 right-0 bg-gray-300 rounded-full p-6 m-2"
                    >
                        &times;
                    </button>
                    <button
                        onClick={prevImage}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-6 m-2"
                    >
                        &larr;
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-6 m-2"
                    >
                        &rarr;
                    </button>
                </div>

                <div className="relative bg-white p-4">

                    <button
                        onClick={closeModal}
                        className="absolute top-0 right-0 bg-gray-300 rounded-full p-2 m-2 md:hidden"
                    >
                        &times;
                    </button>
                    <button
                        onClick={prevImage}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 m-2 md:hidden"
                    >
                        &larr;
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 m-2 md:hidden"
                    >
                        &rarr;
                    </button>

                    <img src={images[currentImageIndex]} alt="Current" className="max-w-full max-h-full" />
                </div>
            </Modal>
        </div>
    );
};

export default Gallery;

// const [index, setIndex] = useState(-1);
//     const [photoDimensions, setPhotoDimensions] = useState([]);

//     useEffect(() => {
//         const getDimensions = async () => {
//             const dimensions = await Promise.all(
//                 photoUrls.map((url) => {
//                     return new Promise((resolve) => {
//                         const img = new Image();
//                         img.onload = () => {
//                             resolve({
//                                 src: url,
//                                 width: img.width,
//                                 height: img.height,
//                             });
//                         };
//                         img.src = url;
//                     });
//                 })
//             );

//             setPhotoDimensions(dimensions);
//         };

//         getDimensions();
//     }, []);

//     const photos = photoDimensions.map(({ src, width, height }) => ({
//         src,
//         width,
//         height,
//         srcSet: [],
//     }));

//     return (
//         <>
//             <PhotoAlbum
//                 photos={photos}
//                 layout="rows"
//                 targetRowHeight={250}
//                 onClick={({ index }) => setIndex(index)}
//             />

//             <Lightbox
//                 slides={photos}
//                 open={index >= 0}
//                 index={index}
//                 close={() => setIndex(-1)}
//                 plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
//             />
//         </>
//     );
// };