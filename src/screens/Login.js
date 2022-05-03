import {useContext} from 'react'
import '../App.css'
import {UserContext} from '../context'
import axios from 'axios';
import { server } from '../constants';
function Login() {
    const userCtx = useContext(UserContext);
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
            userCtx.setUsername(res.data['data'].username);
            localStorage.setItem("user", JSON.stringify({username: res.data["data"].username}));
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