import React from 'react';
import Input from './input';
import './App.css';
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: null,
      lastName: null,
      email: null,
      password: null,
      repeat_password: null,

      errors: {
        FirstName: '',
        lastName:'',
        email: '',
        password: '',
        repeat_password:'',
      }
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case 'FirstName': 
        errors.FirstName = 
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
      case 'lastName': 
        errors.lastName = 
          value.length < 5
            ? 'last Name must be at least 5 characters long!'
            : '';
        break;

      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      case 'repeat_password': 
        errors.repeat_password = 
          value.length < 8
            ? 'repeat_password must be at least 8 characters long!'
            : '';
        break;
      
      default:
        break;
    }

    this.setState({errors, [name]: value}, () => console.log(this.state));
    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
    	
      console.info('Valid Form')
    }
    
    else{
      alert('Invalid Form')
    }

  }

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Create an Account</h2>
          <div class='border'>
	          <form onSubmit={this.handleSubmit} noValidate>
	            <div class='d-flex mb-15'>
	              <input type='text' class= 'input-style' name='FirstName' placeholder = 'first name' onChange={this.handleChange} noValidate />
	              <input type='text' class= 'input-style' name='lastName' placeholder = 'last name' onChange={this.handleChange} noValidate />
	              {errors.FirstName.length > 0 && 
	                <span className='error'>{errors.FirstName}</span>}
	              {errors.lastName.length > 0 && 
	                <span className='error'>{errors.lastName}</span>}
	            </div>
	            <div class='mb-15' id = 'm-style'>
	              <input type='email' class= 'vid-style' name='email' placeholder = 'email' onChange={this.handleChange} noValidate />
	              {errors.email.length > 0 && 
	                <span className='error'>{errors.email}</span>}
	            </div>
	            <div class='d-flex mb-15'>
	              <input type='password' class= 'input-style' name='password' placeholder = 'password' onChange={this.handleChange} noValidate />
	              <input type='password' class= 'input-style' name='repeat_password' placeholder = 'repeat_password' onChange={this.handleChange} noValidate />
	              {errors.password.length > 0 && 
	                <span className='error'>{errors.password}</span>}
	              {errors.repeat_password.length > 0 && 
	                <span className='error'>{errors.repeat_password}</span>}
	            </div>
	            <div className='submit'>
	              <button class= 'btn-style'>Register Account</button>
	            </div>
	            <Input name = 'shyjan' placeholder = 'FirstName' />
	            <Input placeholder = 'lastName'/>
	            <Input placeholder = 'addname'/>
	          </form>
          </div>
        </div>
      </div>
    );
  }
 }