import axios from 'axios';

export default axios.create({
    baseURL: 'https://course-8xwb.onrender.com/api',
    headers: {
        'Content-Type': 'application/json'
    }
});