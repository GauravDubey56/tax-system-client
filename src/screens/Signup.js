import React from 'react'
import '../App.css'
import { server } from '../constants';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Signup() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    // eslint-disable-next-line no-console
    const payload = {
      username: data.get('username'),
      name : data.get('name'),
      password: data.get('password'),
      state: data.get('state'),
      panId: data.get('panId'),
      age: data.get('age'),
      role: data.get('role'),
    }
    console.log(payload);
    const res = await axios.post(server + '/auth/new', payload);
    console.log(res);
    navigate('../login')
  };
  return (
    <React.Fragment>
      
      <form className="login-wrapper" onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <label>
          <div>Username</div>
          <input type="text" name="username"/>
        </label>
        <label>
          <div>Password</div>
          <input type="password" name="password" />
        </label>
        <label>
          <div>Name</div>
          <input type="text" name="name"/>
        </label>
        {/* <label>
        <div>Email</div>
        <input type="text" />
      </label> */}
        <label>
          <div>PAN</div>
          <input type="text" name="panId"/>
        </label>
        <label>
          <div>Age</div>
          <input type="number" name="age" />
        </label>
        <label>
          <div>State</div>
          <input type="text" name="state"/>
        </label>
        <label>
          <div>Role</div>
          <select name="role">
            <option value="Accountant">Tax Accountant</option>
            <option value="Payer">Tax Payer</option>
          </select>
        </label>
        
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default Signup