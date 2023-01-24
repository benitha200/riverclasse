import React from 'react'
import './LoginStyle.css'
import { Input, Button } from 'reactstrap'
import Driver from '../../assets/img/driver.jpeg';

const SignUp = () => {
    return (
        <div className="containerlogin">

            <div className="row g-2 pt-2">
                <div className="col-lg-6 pt-2">
                    <div className="left-image">
                        <br></br>
                        <h1 className='p-4'>Make Your Life Easier With River Classe group Ltd</h1>
                    </div>
                </div>

                
                <div className="col-lg-6">

                <div className='form  bg-primary p-5 mt-4 rounded'>
                    <div className='form-header'>
                        <h2 className='p-2'>Sign Up</h2>
                    </div>
                    <div className='form-body' style={{ display: "block" }}>

                        <Input type='email' className='pt-2 mt-2' placeholder='email' />
                        <Input type='text' className='pt-2 mt-2' placeholder='Phone Number ex: +250783456534' />
                        <Input type='password' className='pt-2 mt-2' placeholder='password'/>

                        <Button className='btn btn-primary mt-3' type='submit'>Sign Up</Button>

                        {/* <Input type='button' className='btn btn-secondary' value="sign"/> */}
                    </div>
                    <div className="form-footer mt-2 pt-2">
                        <span>Already have an Account ? <a href='/Signin' className='text-dark'>Sign in</a></span>
                    </div>



                </div>

                </div>
            </div>
        </div>
    )
}

export default SignUp
