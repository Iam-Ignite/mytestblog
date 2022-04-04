import React,{ useState, useEffect } from 'react';
import Register from './pages/register/register';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/login/login';
import './App.scss';
import Home from './pages/home/home';
import PostBlog from './pages/blogpage/blog';
import NoMatch from './pages/blogpage/no-match/noMatch';

function App() {

  const [loading, setLoading] = useState(true)
     const isAuthenticated = localStorage.getItem("email");
   useEffect(() => {
  if(isAuthenticated){
    setLoading(false)
  }
   }, [isAuthenticated])
   

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="login" element={<Login />} />
         <Route path="*" element={<NoMatch/>} />
        <Route path="blog" element={

          isAuthenticated ?  <PostBlog /> : <NoMatch/>
        } />

      </Routes>
    </div>
  );
}

export default App;
