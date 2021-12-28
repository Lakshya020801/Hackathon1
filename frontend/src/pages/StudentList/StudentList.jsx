import React from 'react'
import { useEffect, useState } from "react";
import TeacherCards from "../../components/TeacherCard/teachercard"
import axios from "axios";
import { useLocation } from "react-router";
import "./Studentlist.css"

export default function StudentList() {

    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
  
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/student" + search);
        setPosts(res.data);
      };
      fetchPosts();
    }, [search]);
    console.log(posts);
    return (
        <div>
             <div className="wrapper">
                <h1>Our Mentors</h1>
                        <div className="team">
                             {posts.map((p) => (
                                     <TeacherCards post={p} />
      ))}
      </div>
      </div>
        </div>
    )
}
