import React, { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Replace these with your local photo URLs or server endpoints
const photoUrls = [
    "./gallery/1.png",
    "./gallery/2.png",
    "./gallery/3.png",
    "./gallery/4.png",
    
];

const Gallery = () => {
    const [index, setIndex] = useState(-1);
    const [photoDimensions, setPhotoDimensions] = useState([]);

    useEffect(() => {
        const getDimensions = async () => {
            const dimensions = await Promise.all(
                photoUrls.map((url) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.onload = () => {
                            resolve({
                                src: url,
                                width: img.width,
                                height: img.height,
                            });
                        };
                        img.src = url;
                    });
                })
            );

            setPhotoDimensions(dimensions);
        };

        getDimensions();
    }, []);

    const photos = photoDimensions.map(({ src, width, height }) => ({
        src,
        width,
        height, 
        srcSet: [], 
    }));

    return (
        <>
            <PhotoAlbum
                photos={photos}
                layout="rows"
                targetRowHeight={250}
                onClick={({ index }) => setIndex(index)}
            />

            <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </>
    );
};

export default Gallery;
