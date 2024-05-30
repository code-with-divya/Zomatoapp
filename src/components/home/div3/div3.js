import './div3.css'

export default function Div3(dimg) {
    return (
        <>
            <div className="container_cards">

                <div className="div3">
                    <img className='div3img' src={dimg.img1} alt="card1 image" />
                    <div className="divcontent">
                        <h5>Order Online</h5>
                        <p>Stay home and order to your doorstep</p>
                    </div>
                </div>

                <div className="div3">
                    <img className='div3img' src={dimg.img2} alt="card1 image" />
                    <div className="divcontent">
                        <h5>Dining</h5>
                        <p>View the city's favourite dining venues</p>
                    </div>
                </div>

                <div className="div3">
                    <img className='div3img' src={dimg.img3} alt="card1 image" />
                    <div className="divcontent">
                        <h5>Nightlife and clubs</h5>
                        <p>Explore the city's top Nightlife outlets</p>
                    </div>
                </div>

            </div>
        </>
    );
}