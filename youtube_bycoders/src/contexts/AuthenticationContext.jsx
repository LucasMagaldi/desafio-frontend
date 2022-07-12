import React, { useState } from "react";
import jwt_decode from 'jwt-decode';
import {OAuthGoogle} from "../services/axiosApi";
import credentials from '../services/credentials.json';
import {mainAPIOauth} from "../services/axiosApi";


export const AuthenticationContext = React.createContext(); 

const AuthenticationContextProvider = ({children}) => {

    //
    const [authenticate, setAuthenticate] = useState(false);
    const [userCredentials, setUserCredentials] = useState({
        name: "",
        picture: "",
        email: "",
        jti: "",
        sub: "",
        iat: ""
    });

    const [userEmail, setUserEmail] = useState();
    const [userName, setUserName] = useState();
    const [userPhoto, setUserPhoto] = useState();
    const [sub, setSub] = useState("");

    const getToken = async() => {
        await OAuthGoogle();
       
        
      }

    const setToken = async () => {
        const callBackUrl = window.location.href;
       
        const [prefixUrl, tokenUrl ] = callBackUrl.split("http://localhost:3000/#access_token=");
        const [token, hashInfo] = tokenUrl.split	("&token_type=Bearer");
        localStorage.setItem("aud", token);
    }

    

    const getUserinfo = async () => {
        const token = localStorage.getItem('aud');
        console.log(token)
        const user = await mainAPIOauth.get('/channels', {
            params: {
                mine: true
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        localStorage.setItem('userName', user.data.items[0].snippet.title);
        localStorage.setItem('userPicture',user.data.items[0].snippet.thumbnails.default.url)
        localStorage.setItem('userId', user.data.items[0].id)
        setUserName(user.data.items[0].snippet.title);
        //console.log(user)
    }

    const GoogleHandle = async (res) => {   
            if(res.credential) {   
            const userInfo = await jwt_decode(res.credential);
           
            localStorage.setItem("StatusConnect", true);
            setAuthenticate(true);
            setUserEmail(userInfo.email);                     
        }
        return new Error("User's auth failed")
    }

    const GoogleAuth = async () => {
        const google = window.google;
  
        
        google.accounts.id.initialize({
        client_id: credentials.web.client_id,
        callback: await GoogleHandle,
        auto_select: false
        });

        google.accounts.id.renderButton(
        document.getElementById("signIn"),
        {
        theme: "outline",
        size: "small    "
        });      
    }

     const loadToken = async() => {
        await setToken();
        await getUserinfo();
    }  


    const signOff = async () => {
        setUserName(false);

        localStorage.clear();

        window.location.href = '/'
    }

    return (
        <AuthenticationContext.Provider value={{
             GoogleAuth,
             GoogleHandle,
             authenticate,
             userPhoto,
             userName,
             sub,
             getUserinfo,
             loadToken,
             signOff
            }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationContextProvider;