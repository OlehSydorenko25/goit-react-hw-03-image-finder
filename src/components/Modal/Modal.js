import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css'

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handlekeyDown)
        window.addEventListener('click', this.handlekeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handlekeyDown)
        window.removeEventListener('click', this.handlekeyDown)
    }

    handlekeyDown = e => {
        if (e.code === 'Escape') {
            this.props.toggleModal()
        }
    }
    handleOverlayClick = e => {
        if (e.target === e.currentTarget) {
            this.props.toggleModal()
        }
    }

    render() { 
        
        return (
            <div className={styles.Overlay} onClick={this.handleOverlayClick}>
                <div className={styles.Module}>
                    <img src={this.props.selectedImg} alt="" />
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    selectedImg: PropTypes.string
}
 
export default Modal;