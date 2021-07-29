import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function CreatePost () {

	const initialValues = {
		title: "",
		posttext: "",
		username: "",
	};

	const validationSchema = Yup.object().shape({
		title: Yup.string().required(),
		posttext: Yup.string().required(),
		username: Yup.string().min(3).max(15).required(),
	});

	const onSubmit= (data) => {
		console.log(data);
	};

	return(
		<div className="createPostContainer"> 
			 <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
			 		<Form className="form">
			 		<div className="d-flox">
			 		<label>
			 			Title:
			 		</label>
			 		<ErrorMessage name="title" component="span" />
			 			<Field
			 			autoComplete="off"
			 			id="inputCreatePost"
			 			name="title"
			 			placeholder="(Ex: Title....)"
			 			className="form-contol"
			 			 /> 
			 			</div>
			 			<div className="d-flox">
		 			<label>
		 			Post:
		 			</label>
		 			<ErrorMessage name="posttext" component="span" />
			 			<Field
			 			autoComplete="off"
			 			id="inputCreatePost"
			 			name="postext"
			 			placeholder="(Ex: post....)"
			 			className="form-contol"
			 			 /> 
			 			</div>
			 			<div className="d-flox">
			 		<label>
			 			Username:
			 		</label>
			 		<ErrorMessage name="username" component="span" />
			 			<Field
			 			autoComplete="off"
			 			id="inputCreatePost"
			 			name="username"
			 			placeholder="(Ex: username....)"
			 			className="form-contol"
			 			 /> 
			 			</div>
			 			<button className="btn btn-success" type="button">Submit</button>
			 		</Form>
			 </Formik>
		</div>
		)
}

export default CreatePost;