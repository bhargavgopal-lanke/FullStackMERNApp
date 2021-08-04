import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Post() {

	let { id } = useParams();

	const [postObject, setPostObject] = useState({});
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState("");

	useEffect(()=> {
		axios.get(`http://localhost:3001/posts/byId/${id}`).then((response)=> {
			console.log(response.data);
			setPostObject(response.data);
		});

		axios.get(`http://localhost:3001/comments/${id}`).then((response)=> {
			setComments(response.data);
		});
	}, [id]);


	const addComment = () => {
		axios.post("http://localhost:3001/comments", {
			commentBody: newComment,
			 PostId : id,
		}, 
		{
			headers: {
				accessToken: sessionStorage.getItem("accessToken"),
			},
		}
		)
		.then((response)=> {
			if(response.data.error) {
				console.log(response.data.error);
			} else {
			const commentToAdd = {commentBody: newComment};
			setComments([...comments, commentToAdd]);
			setNewComment("");
			}
		});
	};

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
                <div className="add_comment_container">
                	<input 
                	type="text" 
                	placeholder="Comment..." 
                	autoComplete="off" 
                	value={newComment}
                	className="form-control mb-3"
                	onChange={(event)=> {
                		setNewComment(event.target.value);
                	}}
                	 />
                	
                	<button className="btn btn-primary mb-3" onClick={addComment}>Add Comments</button>
                </div>
            	<div className="list_of_comments">
            		{comments.map((comment, key) => {
            			return (
            				<div key={key} className="comment">
            					{comment.commentBody}
            				</div>
            				)
            		})}
            	</div>	
            </div>
		</div>
		</div>
		)
}

export default Post;


