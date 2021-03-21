import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css'


class ImageGalleryItem extends Component {

    onKlickImg = e => {
        this.props.toggleModal(e.target.dataset.img)
    }

    render() {
        const {webformatURL, largeImageURL} = this.props
        return (
             <li className={styles.ImageGalleryItem}>
                <img src={webformatURL} alt=""
                    className={styles.ImageGalleryItemImage}
                    data-img={largeImageURL}
                    onClick={this.onKlickImg}
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



 
