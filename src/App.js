import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import Spiner from './Loader/Loader'
import Button from './Button/Button'
import Modal from './Modal/Modal'
import fetchImages from './services/news-api'

class App extends Component {
  state = {
    inputValue: '',
    gallery: [],
    currentPage: 1,
    searchQuery: '',
    isLoding: false,
    showModal: false,
    modalImg: ''
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImg()
    }
  }

  toggleModal = (value) => {
    this.getModalImg(value)
    this.setState({
      showModal: !this.state.showModal,
    })
  }

  getModalImg (value) {
    this.setState({
      modalImg: value
    })
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      gallery: []
    })
  }

  fetchImg = () => {
    const { currentPage, searchQuery } = this.state
    const option = { currentPage, searchQuery }

    this.setState({ isLoding: true })
    
    fetchImages(option).then(response => {
      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...response.data.hits],
        currentPage: prevState.currentPage + 1
      }))
    }).finally(() => {
          this.setState({ isLoding: false })
          
          window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
  }

  render() {
    const { gallery, isLoding, showModal, modalImg } = this.state
    
    return (
      <>
        {showModal && <Modal modalImg={modalImg} toggleModal={this.toggleModal}/>}
        <Searchbar onSubmit={this.onChangeQuery}/>
        <ImageGallery ArrGallary={gallery} toggleModal={this.toggleModal}/>
        {isLoding && <Spiner />}
        {!isLoding && gallery.length > 0 && <Button fetchImg={this.fetchImg}/>}
      </>
    );
  }
}
 
export default App;


