import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { server, headers } from '../constants'
import { UserContext } from '../context'
function Nav() {
    const isSignedIn = localStorage.getItem('isSignedIn')
    const userCtx = useContext(UserContext)
    const navigate = useNavigate()
    const logoutHandler = async () => {
        userCtx.logout();
        const res = await axios.post(server + '/auth/logout', {headers});
        if (res.status === 200) {
            navigate('../home')
            window.location.reload(true); 
        }

    }
    console.log(userCtx.userName)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Tax System App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/home">Home</a>
                    </li>
                    {/* {isSignedIn &&
                        <li className="nav-item active">
                            <a className="nav-link">Hi {userCtx.userName}</a>
                        </li>
                    } */}
                    {!isSignedIn &&
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                    }
                    {!isSignedIn &&
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">Signup</a>
                        </li>
                    }
                    {isSignedIn &&
                        <li className="nav-item my-2 my-lg-0">
                            <button type="button" class="btn btn-primary" onClick={logoutHandler}>Logout</button>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Nav