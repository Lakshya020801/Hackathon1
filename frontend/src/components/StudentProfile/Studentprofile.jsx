import React from 'react'
import "./studentprofile.css"
import { useContext } from "react";
import { Context } from "../../context/Context";
 function Studentprofile() {
    const { user } = useContext(Context);

    return (
            <div className="container">
        <div className="main">
            
            <div className="row">
                <div className="col-md-4 mt-1">
                    <div className="card text-center sidebar">
                        <div className="card-body">
                            <img src="https://filmfare.wwmindia.com/content/2021/aug/shahrukhkhan41630297507.jpg" className="rounded-circle" width="150" />
                            <div className="mt-3">
                                <h3>{user.username}</h3>
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
                                    <h5>Username</h5>
                                </div>
                                <div className="col-md-9 text-secondary">
                                {user.username}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <h5>Email</h5>
                                </div>
                                <div className="col-md-9 text-secondary">
                                {user.email}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <h5>First Name</h5>
                                </div>
                                <div className="col-md-9 text-secondary">
                                    {user.firstname}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <h5>Last Name</h5>
                                </div>
                                <div className="col-md-9 text-secondary">
                                    {user.surname}
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
                                {user.topics.map((p) => (
                                        <div className="col-md-4">
                                        <h5>{p}</h5>
                                    </div>
                                 ))}
                                <div className="col-md-4">
                                    <h5>Topic2</h5>
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
export default Studentprofile;