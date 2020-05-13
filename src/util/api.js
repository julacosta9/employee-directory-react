import axios from "axios";

export default {
    getAllEmployees: function() {
        return axios.get('https://jsonplaceholder.typicode.com/users');
    }
}