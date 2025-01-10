import React, { useState } from 'react'
import "./Tomeline.css"
import Suggestions from './Suggestions'
import Post from './posts/Post'

function Tomeline() {
    const [posts, setPosts] = useState([
        {
            user: "ruppam04",
            postImage: "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            likes: 12,
            timestamp: "2d",
        },
        {
            user: "morningstar",
            postImage: "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg",
            likes: 39,
            timestamp: "18h",
        },
        {
            user: "dannny",
            postImage: "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=",
            likes: 28,
            timestamp: "1d",
        },
        {
            user: "derek",
            postImage: "https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg",
            likes: 52,
            timestamp: "4d",
        },
    ]);
  return (
  <div className="timeline">
    <div className="timeline__left">
        <div className="timeline__posts">
            {posts.map(post => (
                <Post  
                user={post.user} 
                postImage={post.postImage} 
                likes={post.likes} 
                timestamp={post.timestamp}
                />
            ))}
        </div>
    </div>
    <div className="timeline__right">
        <Suggestions />
    </div>
  </div>
  );
}

export default Tomeline
