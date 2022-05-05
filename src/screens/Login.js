import {useContext} from 'react'
import '../App.css'
import {UserContext} from '../context'
import axios from 'axios';
import { server } from '../constants';
import { useNavigate } from 'react-router-dom';
function Login() {
    const userCtx = useContext(UserContext);
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data);
        // eslint-disable-next-line no-console
        const payload = {
          username: data.get('username'),
          password: data.get('password'),
        }
        console.log(payload);
        const res = await axios.post(server + '/auth/login', payload);
        console.log(res);
        if(res.status === 200 && res.data['success']){
            localStorage.clear()
            userCtx.setUsername(res.data['data'].username);
            localStorage.setItem("username", res.data["data"].username);
            localStorage.setItem("userId", res.data["data"].userId);
            localStorage.setItem("token", res.data["data"].token);
            localStorage.setItem("role", res.data["data"].role);
            localStorage.setItem("isSignedIn", true)
            
            navigate('../home')
            window.location.reload(true);
        }
      };
    return(
        <div className="login-wrapper">
          <h1>Please Log In</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Username</p>
              <input type="text" name="username"/>
            </label>
            <label>
              <p>Password</p>
              <input type="password" name="password"/>
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )
}

export default Login