import React from 'react'
import Cards from "../../components/Cards/test"
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";




export default function CourseList() {

    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
  
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/course" + search);
        setPosts(res.data);
      };
      fetchPosts();
    }, [search]);
    console.log(posts);
    return (
        <div>
       <Cards posts={posts}/>
            </div>
    )
}
