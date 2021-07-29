import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {

  const [listOfPosts, setListofPosts] =  useState([]);

    useEffect(()=> {
        axios.get("http://localhost:3001/posts").then((response)=> {
            setListofPosts(response.data);
        })
    }, [])

  return (
    <div className="App">
        {listOfPosts.map((value, key)=> {
            return (
              <div className="">
                <div className="post">
                  <div className="title">
                    {value.title}
                  </div> 
                  <div className="body">
                    {value.posttext}
                  </div>
                   <div className="footer">
                    {value.username}
                  </div>
                </div>
              </div>
              )
        })}
    </div>
  );
}

export default Home;
