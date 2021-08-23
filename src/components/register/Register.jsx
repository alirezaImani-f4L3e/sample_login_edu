import {React ,useState, useEffect} from 'react'
import { Route } from 'react-router'
import {ToastContainer ,toast} from 'react-toastify'
import {emailVlidate ,userNameVlidate ,passwordVerifyValidate ,passwordLength} from '../../services/authValidator'

function Register() {

    const [userName ,setUserName] =useState('')
    const [userEmail ,setUserEmail] =useState('')
    const [password ,setPassword] =useState('')
    const [passwordVerify ,setPasswordVerify] =useState('')
    const [emptyPass ,setEmptyPass] =useState(false)
    const [emptyPassVerify ,setEmptyPassVerify] =useState(false)
    const [emptyUserName ,setEmptyUserName] =useState(false)
    const [emptyEmail ,setEmptyEmail] =useState(false)
    
    

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
        if(!passwordLength(target.value)){
            target.classList.add('input-danger')
        }
        else {
            target.classList.remove('input-danger')
            
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

        if(!userNameVlidate(target.value)){
            
            target.classList.add('input-danger')
        }else{
            target.classList.remove('input-danger')
            
        }
        setUserName(target.value);
        
    }
    function handleEmailChange(event){
        const target =event.target;
        if(target.value==''){
            target.classList.add('input-danger')
            setEmptyEmail(true);
        }
        else {
            target.classList.remove('input-danger')
            setEmptyEmail(false)
        }

        if(!emailVlidate(target.value)){
            target.classList.add('input-danger')
        }else{
            target.classList.remove('input-danger')
        }
        setUserEmail(target.value);
        
    }
    function handlePasswordVerifyChange(event){
        const target =event.target;
        if(target.value==''){
            target.classList.add('input-danger')
            setEmptyPassVerify(true);
        }
        else {
            target.classList.remove('input-danger')
            setEmptyPassVerify(false)
        }
        if(!passwordVerifyValidate(password ,target.value)){
            target.classList.add('input-danger')
            
        }
        else {
            target.classList.remove('input-danger')
            
        }

        
        setPasswordVerify(target.value);
        
    }

    function handleRegister(event){
        event.preventDefault();
        if(emptyEmail ||emptyPass ||emptyPassVerify ||emptyUserName || !passwordLength(password)|| !passwordVerifyValidate(password ,passwordVerify)|| !emailVlidate(userEmail) || !userNameVlidate(userName))return;

        toast.success(`${userName} عزیز ثبت نام شما انجام شد .`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            });
        setTimeout(()=>{
            window.location.replace('/auth/login');
        },2000)
    }

    return (
        <Route path="/auth/register">
            <form 
            action="" 
            method="POST" 
            onSubmit={handleRegister}  >
           
            <div className="tab-pane register-panel fade show active col-12 m-auto" id="register" role="tabpanel" aria-labelledby="register-tab">
            
            <div className="form-floating mb-3 ">
                
                <input 
                onChange={(evt)=>handleUserNameChange(evt)}
                value={userName} 
                type="text" 
                className="form-control" 
                id="floatingInput" 
                placeholder="userName"/>
                <label htmlFor="floatingInput">نام کاربری</label>
                {emptyUserName? <p className="error-message">این فیلد نمی تواند خالی باشد.</p>:''}
            </div>
            
            <div className="form-floating mb-3">
                <input 
                onChange={(evt)=>handleEmailChange(evt)} 
                value={userEmail} type="email" 
                className="form-control" 
                id="floatingPassword" 
                placeholder="ایمیل"/>
                <label htmlFor="floatingPassword">ایمیل</label>
                {emptyEmail? <p className="error-message">این فیلد نمی تواند خالی باشد.</p>:''}
            </div>
            <div className="form-floating mb-3">
                <input 
                onChange={(evt)=>handlePasswordChange(evt)} 
                value={password} type="password" 
                className="form-control" 
                id="floatingPassword" 
                placeholder="رمز عبور"/>
                <label htmlFor="floatingPassword">رمز عبور</label>
                {emptyPass? <p className="error-message">این فیلد نمی تواند خالی باشد.</p>:''}
            </div>
            <div className="form-floating mb-3">
                <input 
                onChange={(evt)=>handlePasswordVerifyChange(evt)} 
                value={passwordVerify} type="password" 
                className="form-control" 
                id="floatingPassword" 
                placeholder="تکرار رمز عبور"/>
                <label htmlFor="floatingPassword">تکرار رمز عبور</label>
                {emptyPassVerify? <p className="error-message">این فیلد نمی تواند خالی باشد.</p>:''}
            </div>
            
            <div className="w-100 d-flex justify-content-center mt-4">
            <button type="submit" className="btn  btn-primary m-auto px-4 py-2 fs-5"> 
                ثبت نام
            </button>
            </div>
        </div>
        </form>
        <ToastContainer rtl={true}/>
        </Route>
    )
}

export default Register
