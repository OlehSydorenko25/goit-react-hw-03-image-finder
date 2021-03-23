import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css'


class ImageGalleryItem extends Component {

    onClickImg = (bigImg) => {
        this.props.toggleModal()
        this.props.getModalImg(bigImg)
    }

    render() {
        const {webformatURL, largeImageURL} = this.props
        return (
             <li className={styles.ImageGalleryItem} onClick={() => this.onClickImg(largeImageURL)}>
                <img src={webformatURL} alt=""
                    className={styles.ImageGalleryItemImage}
                />
            </li>
        );
    }
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired
}
 
export default ImageGalleryItem;



 
