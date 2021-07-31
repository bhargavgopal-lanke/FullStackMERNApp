import React from "react";
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

function CreatePost() {

	let history = useHistory();

	const initialValues = {
		title: '',
		postText: '',
		username: '',
	};

	const validationSchema = Yup.object().shape({
		title: Yup.string().required("you must input a title"),
		postText: Yup.string().required(),
		username: Yup.string().min(3).max(30).required(),
	});

	const onSubmit = (data) => {
		axios.post("http://localhost:3001/posts", data).then((response)=> {
			history.push('/');
		});
	};



	return <div className="createpost-page">
			<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
				<Form className="formContainer">
				<label>Title: </label>
				<ErrorMessage name="title" component="span" />
					<Field 
					autoComplete="off"
					id="inputCreatePost" 
					name="title" 
					placeholder="(Ex. Title...)"
					className="form-control" />

					<label>Post: </label>
					<ErrorMessage name="postText" component="span" />
					<Field 
					autoComplete="off"
					id="inputCreatePost" 
					name="postText" 
					placeholder="(Ex. Post...)"
					className="form-control" />

					<label>User Name: </label>
					<ErrorMessage name="username" component="span" />
					<Field 
					autoComplete="off"
					id="inputCreatePost" 
					name="username" 
					placeholder="(Ex. John123...)"
					className="form-control" />

					<button type="submit" className="btn btn-primary">Create Post</button>
				</Form>
			</Formik>
	</div>
}

export default CreatePost;