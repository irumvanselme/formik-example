import './App.css';
import { Formik, useField } from 'formik';
import * as yup from "yup"


function Input({...props}){
  const [field, meta] = useField(props)

  console.log(meta.touched)

  return (
		<div>
			<input type='text' {...props} />
			<div>
				{meta.touched && meta.error && (
					<>
						<span>{meta.error}</span>
					</>
				)}
			</div>
		</div>
	);
}

function App() {

  function submit(data){
    console.log(data)
  }

  return (
		<div className='App'>
			<h1>My Form</h1>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={yup.object({
					email: yup.string().email().required(),
					password: yup.string().required().min(5),
				})}
				onSubmit={submit}
			>
				{({ handleSubmit, values, handleChange, handleBlur }) => (
					<form onSubmit={handleSubmit}>
						<Input
							type='text'
							name='email'
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<Input
							type='password'
							name='password'
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<input type='submit' value='Click me' />
					</form>
				)}
			</Formik>
		</div>
	);
}

export default App;
