import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./studentprofile.css"

export default function Studentprofile() {
    const [post, setPosts] = useState({});
    const { id } = useParams();
  
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/student/"+id);
        setPosts(res.data);
      };
      fetchPosts();
    }, [id]);

    return (
            <div className="container">
        <div className="main">
            
            <div className="row">
                <div className="col-md-4 mt-1">
                    <div className="card text-center sidebar">
                        <div className="card-body">
                            <img src="https://filmfare.wwmindia.com/content/2021/aug/shahrukhkhan41630297507.jpg" className="rounded-circle" width="150" />
                            <div className="mt-3">
                                <h3>{post.username}</h3>
                                    <a href="">Home</a>
                                    <a href="">Work</a>
                                    <a href="">Support</a>
                                    <a href="">Setting</a>
                                    <a href="">Signout</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 mt-1">
                    <div className="card mb-3 content">
                        <h2 className="m-3 pt-3">Student Details</h2>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <h5>User Name</h5>
                                </div>
                                <div className="col-md-9 text-secondary">
                                {post.username}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <h5>Email</h5>
                                </div>
                                <div className="col-md-9 text-secondary">
                                {post.email}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <h5>First Name</h5>
                                </div>
                                <div className="col-md-9 text-secondary">
                                    {post.firstname}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <h5>Last Name</h5>
                                </div>
                                <div className="col-md-9 text-secondary">
                                    {post.surname}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <h5>Phone</h5>
                                </div>
                                <div className="col-md-9 text-secondary">
                                    9234698746
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 content">
                        <h2 className="m-3">Topics Interested</h2>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <h5>Topic1</h5>
                                </div>
                                <div className="col-md-9 text-secondary">
                                    Project Description
                                </div>
                                <div className="col-md-4">
                                    <h5>Topic2</h5>
                                </div>
                                <div className="col-md-4">
                                    <h5>Topic3</h5>
                                </div>
                                <div className="col-md-4">
                                    <h5>Topic4</h5>
                                </div>
                                <div className="col-md-4">
                                    <h5>Topic5</h5>
                                </div>
                                <div className="col-md-4">
                                    <h5>Topic6</h5>
                                </div>
                                <div className="col-md-4">
                                    <h5>Topic7</h5>
                                </div>
                                <div className="col-md-4">
                                    <h5>Topic8</h5>
                                </div>
                                <div className="col-md-4">
                                    <h5>Topic9</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
