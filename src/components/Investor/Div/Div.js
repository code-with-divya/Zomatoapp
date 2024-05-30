import './Div.css'



export function Div(propes) {

    return (
        <>
            <div class="color">

                <div class="head">

                    <h1>Better food for more people</h1>
                    <img src={propes.zomato_logo} alt="Zomato Logo" class="logo3" />
                    <img src={propes.hyper_logo} alt="hyper Logo" class="logo1" />

                    <hr />

                    <h1>Instant commerce indistinguishable from magic</h1>
                    <img src={propes.blinkit} alt="blinkit" class="logo1" />

                    <hr />

                    <h1>Make India malnutrition free</h1>
                    <img src={propes.feeding_india} alt="feeding india" class="logo1" />

                </div>


                <div className='card'>

                    <h1 className='H1'><b>Company Overview</b></h1>
                    <div className='box'>
                         <div className='img_color'>
                        <img src={propes.logo1} alt="blinkit" class="logo2" />
                        </div>
                        <h3><b>Presentation</b></h3>
                        <img src={propes.arro} alt='arrow' className='arrow'/>

                        <div>
                            <h1 className='H1'><b>Q4FY24 results</b></h1>


                            <div className='see'>
                                     <p>see all</p>
                            </div>
                        </div>
                     
                        <div className='box1'>
                        <div className='img_color'>
                        <img src={propes.logo2} alt="blinkit" class="logo2" />
                        </div>
                        <h3><b>Shareholders' Letter</b></h3>
                        <img src={propes.arro} alt='arrow' className='arrow'/>
                       
                    
                         </div>
                         
                         <div className='box2'>
                         <div className='img_color'>
                        <img src={propes.logo3} alt="blinkit" class="logo2" />
                        </div>
                        <h3><b>Earnings Call Replay</b></h3>
                        <img src={propes.arro} alt='arrow' className='arrow'/>

                        </div>

                        <div className='box3'>
                        <div className='img_color'>
                        <img src={propes.logo4} alt="blinkit" class="logo2" />
                        </div>
                        <h3><b>Earnings Call Transcript</b></h3>
                        <img src={propes.arro} alt='arrow' className='arrow'/>

                         </div>


                    </div>

                </div>

            </div>
        </>
    )
}