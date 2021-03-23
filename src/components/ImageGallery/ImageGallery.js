
import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';


const ImageGallery = ({ ArrGallary, toggleModal, getModalImg}) => {
    return (
        <ul className={styles.ImageGallery}>
            {ArrGallary.map(({id, webformatURL, largeImageURL}) => {
                return (
                    <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                        toggleModal={toggleModal}
                        getModalImg={getModalImg}
                    />
                )
            })}
        </ul>
    );
}

ImageGallery.propTypes = {
    ArrGallary: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
    ).isRequired,
    toggleModal: PropTypes.func,
    getModalImg: PropTypes.func
    
};
 
export default ImageGallery;