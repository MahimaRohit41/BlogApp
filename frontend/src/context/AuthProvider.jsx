import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';
import { BACKEND_URL } from "../utils";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [blogs, setBlogs] = useState([]);
    const [profile, setProfile] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        
        const fetchProfile = async () => {
            try{
                 // token should be let type variable because its value will change in every login. (in backend also)
        let token = localStorage.getItem("jwt"); // Retrieve the token directly from the localStorage (Go to login.jsx)
        console.log(token);
        if (token) {
          const { data } = await axios.get(
            `${BACKEND_URL}/api/users/my-profile`,
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(data.user);
          setProfile(data);
          setIsAuthenticated(true);
        }
      }
            catch(error){
                console.log(error);
            }
        }
        const fetchBlog = async () => {
            try{
                const response = await axios.get(`${BACKEND_URL}/api/blogs/all-blogs`);
                console.log(response);
                setBlogs(response.data);
            }
            catch(error){
                console.log(error);
            }
        }

        fetchProfile();
        fetchBlog();
    }, []);

  return (
    <AuthContext.Provider value={{blogs, profile, setProfile, isAuthenticated, setIsAuthenticated}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);