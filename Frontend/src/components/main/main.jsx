import React from 'react'
import Post from '../post/post'
import { Posts } from '../../user-data'; 
import NewsFeed from '../newsfeed/newsfeed';

    export default function Feed() {
        return (
          <div className="main">
            <div className="main-wrapper">
              <Post />
              {Posts.map((p) => (
                <NewsFeed key={p.id} post={p} />
              ))}
              
            </div>
          </div>
        );
      }
  

