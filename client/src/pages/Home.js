import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
function Home() {

  const [listOfPosts, setListofPosts] =  useState([]);

    let history = useHistory();

    useEffect(()=> {
        axios.get("http://localhost:3001/posts").then((response)=> {
            setListofPosts(response.data);
        })
    }, [])

  return (
    <div className="App container">
        {listOfPosts.map((value, key)=> {
            return (
              <div className="postcreated-page">
              <div className="row">
                <div className="col-12">
                     <div className="post" onClick={() => history.push(`/post/${value.id}`)}>
                      <div className="title">
                        <h4>{value.title}</h4>
                      </div> 
                      <div className="body">
                        <p>{value.postText}</p>
                      </div>
                       <div className="footer">
                       <h4> {value.username}</h4>
                      </div>
                    </div>
                </div>

              </div>
              </div>
              )
        })}
    </div>
  );
}

export default Home;
