import axios from 'axios';

const KEY = 'AIzaSyCAfeHAe0wQ6uAQY_QLSUgeAjIB-iQ_bHw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
