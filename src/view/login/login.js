import './Login.css'
import mail from './mail.png'
import google from './google.png'


export function Login(props){
  return(
    <>
    <div className='first'>
        <div className='Container'>
        <p className='log'>Login</p>

        <div className='opt'>

        <select className='slt'>

     <option>+ 91</option><br/>
       <option>+ 93</option><br/>
         <option>+ 355</option><br/> 
          <option>+ 213</option><br/>
          <option>+ 1684</option><br/>
          <option>+ 376</option><br/>
          <option>+ 224</option>
          
       
          </select>
          
         
          <input type='text' placeholder='Phone' className='inputBox'/>

          </div><br></br><br></br>

          <button type='submit' className='btn'>Send One Time Password</button><br></br>

          <p className='or'>or</p>

          <div className='mailbox'>
            <img alt={props} src={mail} className='mailimg'/>

            <a href="./Login2.js" className='email'> Continue With Email</a>
          </div>

           <b></b>

           <div className='mailbox'>
         
            <img alt={props} src={google} className='googleimg'/>

            <a href="./signin.js" className='email signgoogle'> Sign in with Google</a>
          
         </div>


         <p className='paragraph'>New to Zomato? <a href='./login2' className='create'> Create account</a></p>
        
          {/* <input type='text'  placeholder="Enter your Full Name here" className={'inputBox'}/><br/>
          <input type='email'   placeholder="Enter your email here" className={'inputBox'}/> */}

        </div>
        </div>
        
    </>
  );

}