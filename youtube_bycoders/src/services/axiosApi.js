import axios from "axios";
import API_KEY, { url } from './api';
import credentials from '../services/credentials.json';

const token = localStorage.getItem('aud');


const signInOauth = () => {

}


const mainAPI = axios.create({
    baseURL: url,
    params: {
        part: 'snippet',
        maxResults: 5,
        key: credentials.web.api_key
    },
     headers: {
        Authorization: token===null ?  "" : token
     }
});

const mainAPIOauth = axios.create({
    baseURL: url,
    params: {
        part: "snippet",
        key: credentials.web.api_key
    },
     headers: {
        Authorization: `Bearer ${token}`
        
     }
});

const OAuthGoogle = async () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:3000&response_type=token&client_id=${credentials.web.client_id}&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.channel-memberships.creator+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.force-ssl+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.upload+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutubepartner+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutubepartner-channel-audit&access_type=online`
}

export {OAuthGoogle, mainAPIOauth}

export default mainAPI;