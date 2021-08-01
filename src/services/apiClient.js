import axios from 'axios';

const apiClient = axios.create( {
    baseURL: 'http://localhost:8080/',
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
});

export default {
   async getOrders(oauth_token) {
        console.log("sp");
        return await apiClient.get('orders', {
            params: {
                oauth_token: oauth_token 
            }
        });
    }, 
    async getRequestToken() {
        return await apiClient.get('oauth/requesttoken');
    }, 
   async getAccessToken(oauth_token, username, password) {
        return await apiClient.get('oauth/accesstoken', {
            params: {
                oauth_token: oauth_token,
                grant_type: 'api',
                username: username,
                password: password 
            }
        })
    }
}