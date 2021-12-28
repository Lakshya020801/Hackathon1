import React from 'react'
import "./teachercard.css"
import { Link } from "react-router-dom";
export default function teachercard({post}) {
    return (
        <div>
  
    <div className="team_member">
      <div className="team_img">
        <img src="https://i.imgur.com/2pGPLrl.png" alt="Team_image"/>
      </div>
        <Link to={`/profile/${post._id}`}>
      <h3>{post.username}</h3>
      </Link>
      <p className="role">UI developer</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
    </div>
        </div>
    )
}
