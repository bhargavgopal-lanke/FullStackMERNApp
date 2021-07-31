import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Post() {

	let { id } = useParams();
	const [postObject, setPostObject] = useState({});

	useEffect(()=> {
		axios.get(`http://localhost:3001/posts/byId/${id}`).then((response)=> {
			console.log(response.data);
			setPostObject(response.data);
		});
	});

	return (
		<div className="container">
		<div className="row">
			<div className="col-6">
				<div className="postby_id_box"> 
				<div className="ptitle">
						<h4>{postObject.title}</h4>
					</div>
					<div className="posttext">
						<p>{postObject.postText}</p>
					</div>
					<div className="username">
						<h4>{postObject.username}</h4>
					</div>
				</div>
			</div>
		   <div className="col-6">
                Comment Section
            </div>
		</div>
		</div>
		)
}

export default Post;


