import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css'

const Button = ({fetchImg}) => {
    return (
        <button type="button" className={styles.Button} onClick={fetchImg}>Load more</button>
    );
}

Button.propTypes = {
    fetchImg: PropTypes.func.isRequired
}

export default Button;