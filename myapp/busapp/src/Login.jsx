import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
const navigate  = useNavigate();
  return (
    <div className='code'>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">{isLogin ? 'Login' : 'Register'}</h3>
              <form>
                {!isLogin && (
                    <div className="row justify-content-center">
    <div className="col-md-6 col-lg-6">

                  <div className="form-group">
                    <label htmlFor="name" style={{marginTop:'50px'}} ></label>
                   
                    <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
                  </div>
                  </div>
    </div>
                  
                )}  
                <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-6 col-lg-6">
      <div className="form-group">
       
        <label htmlFor="email"></label>
      
        <input type="email" className="form-control" id="email" placeholder="Enter your email" style={{ width: '100%' }} />
        
      </div>
    </div>
  </div>
</div>
<div className="row justify-content-center">
<div className="col-md-6 col-lg-6">
                <div className="form-group">
                  
                  <label htmlFor="password"></label>
                  <br/>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password"  />
                  <br/>
            
                </div>
                </div>
                </div>
                {!isLogin &&
                  <div className="row justify-content-center">
    <div className="col-md-6 col-lg-6">
                <div className="form-group">
                  
                  <label htmlFor="password"></label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password"  />
                  < br/>
                </div>
                </div>
                </div>
                }
                <div className='text-center'>
                    
                <button type="submit" onClick={() =>navigate('/')} className="btn btn-primary btn-block">
                  {isLogin ? 'Login' : 'Register'}
                </button>
                </div>
              </form>
              <div className="text-center mt-3">
                <button className="btn btn-link" onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? 'Create an accounts' : 'Already have an account? Login'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;