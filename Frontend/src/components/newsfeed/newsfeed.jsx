
import "./newsfeed.css";
import MoreVert from '@mui/icons-material/MoreVert';
import { Users } from "../../user-data";
import { Posts } from "../../user-data";
import { useState } from "react";
import ThumbUp from '@mui/icons-material/ThumbUp';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

export default function NewsFeed({post}) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const handle_likes =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="feed-post">
      <div className="post-wrapper">
        <div className="topp">
          <div className="toppl">
            <img
              className="imagep"
              src="/assets/3.jpg"
              alt=""
            />
            <span className="userp">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="date">{post.date}</span>
          </div>
          <div className="toppr">
            <MoreVert />
          </div>
        </div>
        <div className="cent">
          <span className="text11">{post?.desc}</span>
          <img className="img22" src="/assets/2.jpg" alt="" />
        </div>
        <div className="bottomp">
          <div className="bottoml">
            <ThumbUp onClick={handle_likes}/>
            <span className="like">{like} people like it</span>
          </div>
          <div className="bottomr">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
