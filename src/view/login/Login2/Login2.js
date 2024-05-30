import './Login2.css'
import mail from './mail.avif'

export function Login2(props){
    return(
        <>

        <div className='first'>
            <div className='Contain'>
                <p className='log'>Login</p>
                    <img alt={props} src={mail} className='mail'/><br/>

                    {/* <div className='mailbox'> */}

                <input placeholder='Email' className='textbox'/><br/><br/>

                <button type='submit' className='btn2'>Send One Time Password</button><br/>

                <p className='paragraph2'>Already have an account? <a href='./Login.js' className='create2'> Login</a></p>


            </div>

        </div>
        </>
    )
}