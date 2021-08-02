import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

function Registration() {

	const initialValues = {
		username: '',
		password: '',
	}

	const validationSchema = Yup.object().shape({
		username: Yup.string().min(3).max(15).required(),
		password: Yup.string().min(4).max(20).required(),
	});

	const onSubmit = (data) => {
		axios.post("http://localhost:3001/auth", data).then(()=> {
			console.log(data);
		});
	};

	return(
		<div className="register_main">
			<div className="container">
				<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
				<Form className="formContainer">
				

					<label>User Name: </label>
					<ErrorMessage name="username" component="span" />
					<Field 
					autoComplete="off"
					id="inputCreatePost" 
					name="username" 
					placeholder="(Ex. John123...)"
					className="form-control mb-3" />

					<label>password: </label>
					<ErrorMessage name="password" component="span" />
					<Field 
					autoComplete="off"
					id="inputCreatePost" 
					name="password" 
					type="password"
					placeholder="Your password..."
					className="form-control mb-3" />


					<button type="submit" className="btn btn-primary" onClick={onSubmit}>Register</button>
				</Form>
			</Formik>
			</div>
		</div>
		)
}


export default Registration;