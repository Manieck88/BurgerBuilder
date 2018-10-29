import axios from 'axios';

const instace = axios.create({
    baseURL: "https://react-burger-builder-91821.firebaseio.com/"
});

export default instace;