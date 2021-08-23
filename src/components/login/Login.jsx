import './login.css'
import {useEffect} from 'react'
import {loginValidator} from '../../services/authValidator'
import { Route } from 'react-router'
import { useState } from 'react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function Login() {

    const [userName ,setUserName] =useState('')
    const [password ,setPassword] =useState('')
    const [emptyPass ,setEmptyPass] =useState(false)
    const [emptyUserName ,setEmptyUserName] =useState(false)
    const [userData ,setUserData] =useState(false);

    useEffect(()=>{
        toast.info(`
            نام کاربری:admin , رمز عبور:admin`,
                {
                position:'bottom-left',
                autoClose:false
                })
    },[])

    function handlePasswordChange(event){
        const target =event.target;
        if(target.value==''){
            target.classList.add('input-danger')
            setEmptyPass(true);
        }
        else {
            target.classList.remove('input-danger')
            setEmptyPass(false)
        }
        setPassword(target.value);
        
    }
    function handleUserNameChange(event){
        const target =event.target;

        if(target.value==''){
            target.classList.add('input-danger')
            setEmptyUserName(true);
        }
        else {
            target.classList.remove('input-danger')
            setEmptyUserName(false)
        }
        setUserName(target.value);
        
    }

    function handleLogin(event){
        event.preventDefault();
        if(emptyPass || emptyUserName)return;

        const result =loginValidator(userName ,password)
        if(result){
            
            toast.success('شما با موفقیت وارد شدید.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                });
            setTimeout(()=>{
                window.location.replace('/dashbord');
            },2000)
        }
        else{
            toast.error('نام کاربری یا رمز عبور اشتباه است.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                });
            
            
        }

    }

    return (
        <Route path="/auth/login">
            <form
            action="" 
            method="POST" 
            onSubmit={handleLogin} 
            >
           
            <div className="tab-pane login-panel fade show active col-12 m-auto" id="login" role="tabpanel" aria-labelledby="login-tab">
            
            <div className="form-floating mb-3 ">
                
                <input 
                onChange={(evt)=>handleUserNameChange(evt)}
                value={userName} 
                type="text" 
                className="form-control" 
                id="floatingInput" 
                placeholder="نام کاربری"/>
                <label htmlFor="floatingInput">نام کابری</label>
                {emptyUserName? <p className="error-message">این فیلد نمی تواند خالی باشد.</p>:''}
            </div>
            
            <div className="form-floating">
                <input 
                onChange={(evt)=>handlePasswordChange(evt)} 
                value={password} type="password" 
                className="form-control" 
                id="floatingPassword" 
                placeholder="Password"/>
                <label htmlFor="floatingPassword">رمز عبور</label>
                {emptyPass? <p className="error-message">این فیلد نمی تواند خالی باشد.</p>:''}
            </div>
            
            <div className="form-check mt-4 d-flex justify-content-center">
                <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                    مرا به خاطر بسپار
                </label>
            </div>
            <div className="w-100 d-flex justify-content-center mt-4">
            <button type="submit" className="btn  btn-primary m-auto px-4 py-2 fs-5"> 
                ورود
            </button>
            </div>
        </div>
        </form>
        <ToastContainer rtl={true}/>
        </Route>
    )
}

export default Login
