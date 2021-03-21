import axios from 'axios'

const fetchImages = ({ searchQuery = '', currentPage = 1}) => {
    return axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=19673147-430400f08d3bcfd22f58b851f&image_type=photo&orientation=horizontal&per_page=12`)
}

export default fetchImages