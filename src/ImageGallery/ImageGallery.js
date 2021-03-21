
import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css'


const ImageGallery = ({ ArrGallary, toggleModal }) => {
    return (
        <ul className={styles.ImageGallery}>
            {ArrGallary.map(({id, webformatURL, largeImageURL}) => {
                return (
                    <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                        toggleModal={toggleModal}
                    />
                )
            })}
        </ul>
    );
}

ImageGallery.propTypes = {
    ArrGallary: PropTypes.array.isRequired,
    toggleModal: PropTypes.func.isRequired
}
 
export default ImageGallery;