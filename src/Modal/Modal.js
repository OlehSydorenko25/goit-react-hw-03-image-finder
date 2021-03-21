import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css'

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handlekeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handlekeyDown)
    }

    handlekeyDown = e => {
        if (e.code === 'Escape') {
            this.props.toggleModal()
        }
    }

    render() { 
        return (
            <div className={styles.Overlay}>
                <div className={styles.Module}>
                    <img src={this.props.modalImg} alt="" />
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    modalImg: PropTypes.string
}
 
export default Modal;