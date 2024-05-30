import './appdiv.css'

export default function Appdiv(images) {

    return (
        <>
        <div className='appmain' id='appinstall'>
            <div>
                <img className='mobile' src={images.appimg} />
            </div>
            <div>
                <h2 className='apph'>Get the Zomato app</h2>
                <p className='apppara'>We will send you link, Open it on your phone to download the app </p>
                <div className='radiodiv' >
                    <label>
                        <input id='idemial' type="radio" name="option"
                            value="option1" defaultChecked /><span className='rtext'>Email</span> 
                    </label>

                    <label>
                        <input type="radio" name="option"
                            value="option2"  /><span className='rtext' >Phone</span> 
                    </label>

                </div>

                <div class = "inputdiv">
						<input type = "text" placeholder = "Email" />
						<button>Share App Link</button>
				</div>
            <div >
                <p className='apppara'>Download App from</p>
                <div className='divapp'>
                    <img className='appimg' src={images.play}/>
                    <img className='appimg' src={images.apple}/>
                </div>
            </div>

            </div>
        </div>
        
        </>

        
    );
}