import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlog = async () => {
            try{
                const response = await axios.get("http://localhost:4001/api/blogs/all-blogs");
                console.log(response);
                setBlogs(response.data);
            }
            catch(error){
                console.log(error);
            }
        }

        fetchBlog();
    }, []);

  return (
    <AuthContext.Provider value={{blogs}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);