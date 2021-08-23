import {Link, Router, BrowserRouter, Route} from 'react-router-dom'

function TabBar() {
    return (<>
        <Route path="/auth/login">
        <ul className="nav nav-tabs w-100 " id="myTab" role="tablist">
            
                <Link to="/auth/login"><li className="nav-item col" role="presentation">
                    <button className="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">ورود</button>
                </li></Link>
                <Link to="/auth/register"><li className="nav-item col" role="presentation">
                <button className="nav-link" id="register-tab" data-bs-toggle="tab" data-bs-target="#register" type="button" role="tab" aria-controls="register" aria-selected="false">ثبت نام</button>
                </li></Link>
                
        </ul>
        </Route>
        <Route path="/auth/register">
        <ul className="nav nav-tabs w-100 col" id="myTab" role="tablist">
            
        <Link to="/auth/login"><li className="nav-item" role="presentation">
                    <button className="nav-link " id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">ورود</button>
                </li></Link>
                <Link to="/auth/register"><li className="nav-item" role="presentation">
                <button className="nav-link active" id="register-tab" data-bs-toggle="tab" data-bs-target="#register" type="button" role="tab" aria-controls="register" aria-selected="false">ثبت نام</button>
                </li></Link>
                
        </ul>
        </Route>
        </>
    )
}

export default TabBar
