import './Sign.css'
import google from './google.png'

export function Signup(props){
    return(
        <>
        <div className='first'>
            <div className='second'>
                <p className='sign'>Sign up</p><b/>

                <input type='text' placeholder='Full Name' className='textbox'/>

                <input type='mail' placeholder='Email' className='textbox' /><br></br>

                <input type='checkbox'className='check'/><span className='check1'>I agree to Zomato's </span> <span className='check2'> Terms of Service, Privacy Policy </span><span className='check1'> and </span> <span className='check2'> Content Policies</span>
                  
                <button type='submit' className='btn3'> Create account</button><br></br>

                <p className='or'>or</p>

                <div className='mailbox'>

                   <img alt={props} src={google} className='googleimg'/>

                    <a href="./Login2.js" className='email'> Sign in with Google</a>
                </div>

                <p className='paragraph3'>Already have an account? <a href='./Login.js' className='create3'> Login</a></p>

            </div>

        </div>
        </>

    )
}