import React from 'react'
import './LoginStyle.css'
import { Input, Button } from 'reactstrap'
import Driver from '../../assets/img/driver.jpeg';

const SignIn = () => {
    return (
        <div className="containerlogin">


            <div className="left-image">
                <br></br>
                <h1 className='p-4'>Happy To Have You Back :)</h1>
            </div>




            <div className='formm  bg-primary p-5 mt-4 rounded'>
                <div className='form-header'>
                    <h2 className='p-2'>Sign In</h2>
                </div>
                <div className='form-body' style={{ display: "block" }}>

                    <Input type='email' className='pt-2 mt-2' placeholder='email' required />
                    <Input type='password' className='pt-2 mt-2' placeholder='password' required />

                    <Button className='btn btn-primary mt-3' type='submit'>Sign In</Button>
                </div>
                <div className="form-footer mt-2 pt-2">
                    <span>You don't have an Account ? <a href='/Signup' className='text-dark'>Sign Up</a></span>
                </div>



            </div>

            {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default SignIn
