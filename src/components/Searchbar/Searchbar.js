import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css'



class Searchbar extends Component {
    state = {
        query: ''
    }

    handleInputValue = e => {
        this.setState({
            query: e.currentTarget.value
        })
    }

    handleSubmin = e => {
        e.preventDefault()

        this.props.onSubmit(this.state.query)
        
        this.setState({
            query: ''
        })
    }


    render() {
        return (
            <header className={styles.Searchbar} onSubmit={this.handleSubmin}>
                <form className={styles.SearchForm}>
                    <button type="submit" className={styles.SearchFormButton}>
                        <span className={styles.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={styles.SearchFormInput}
                        type="text"
                        name="search"
                        value={this.state.query}
                        // autocomplete="off"
                        // autofocus
                        placeholder="Search images and photos"
                        onChange = {this.handleInputValue}
                    />
                </form>
            </header>   
        );
    }
}

Searchbar.proptTypes = {
    onSubmit: PropTypes.func.isRequired
}
 
export default Searchbar;