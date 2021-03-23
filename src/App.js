import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Spiner from './components/Loader/Loader'
import Button from './components/Button/Button'
import Modal from './components/Modal/Modal'
import fetchImages from './services/news-api'

class App extends Component {
  state = {
    inputValue: '',
    gallery: [],
    currentPage: 1,
    searchQuery: '',
    perPage: 12,
    isLoding: false,
    showModal: false,
    selectedImg: ''
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImg()
    }
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    })
  }

  getModalImg = (value) => {
    this.setState({
      selectedImg: value
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
    const { currentPage, searchQuery, perPage } = this.state
    const option = { currentPage, searchQuery, perPage }

    this.setState({ isLoding: true })
    
    fetchImages(option).then(response => {
      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...response.data.hits],
        currentPage: prevState.currentPage + 1
      }))
    }).catch(err => console.log(err)).finally(() => {
          this.setState({ isLoding: false })
          
          window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
  }

  render() {
    const { gallery, isLoding, showModal, selectedImg } = this.state
    const checkLenghtGallery = gallery.length < 12;
    
    return (
      <>
        {showModal && <Modal selectedImg={selectedImg} toggleModal={this.toggleModal}/>}
        <Searchbar onSubmit={this.onChangeQuery}/>
        <ImageGallery ArrGallary={gallery} toggleModal={this.toggleModal} getModalImg={this.getModalImg}/>
        {isLoding && <Spiner />}
        {!isLoding && gallery.length > 0 && !checkLenghtGallery && <Button fetchImg={this.fetchImg}/>}
      </>
    );
  }
}
 
export default App;


