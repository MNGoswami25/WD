import React, { Component } from 'react';
import './styles.css';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div>
        <h1>Registration Form</h1>
        <form className='fm'>
          <label>User Name</label>
          <input
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br />
          <label>Email</label>
          <input
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />

         <label>Password</label>
          <input type='password' name='password' value={this.state.password} onChange={this.handleChange} />
          <br />

          <label>Confirm Password</label>
          <input
            type='password'
            name='confirmPassword'
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
          <br />

          <input type='submit' value='Create' />
        </form>
      </div>
    );
  }
}

export default Forms;



/* Forms.css */

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }
  
  h1 {
    text-align: center;
    color: #333;
  }
  
  .fm {
    background: #fff;
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    color: #555;
  }
  
  input[type='text'],
  input[type='email'],
  input[type='password'] {
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  input[type='submit'] {
    display: block;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #28a745;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
  
  input[type='submit']:hover {
    background-color: #218838;
  }

