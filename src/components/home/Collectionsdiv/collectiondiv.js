import './collectionsdiv.css';


export default function Collectiondiv(cimg) {
    return (
        <>
            <div className='collectiondiv'>
                <div >
                    <div className='collectionHead'>
                        <h2>Collections </h2>
                    </div>
                    <div className='collectionsp'>
                        <div>
                            <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends
                            </p>
                        </div>
                        <div>
                            <a href='#'>All collections in Pune <span><img className='rarrow' src={cimg.arrow} /> </span></a>
                        </div>
                    </div>
                </div>
                <div className='collCards'>

                    <div className='cards4 overlay card1'>
                        <div className='cardcontent'>
                            <h6> top trending spots pune</h6>
                            <p>11 Place <span><img className='rarrow' src={cimg.arrow} /> </span> </p>
                        </div>
                    </div>
                    <div className='cards4 overlay card2 '>
                        <div className='cardcontent'>
                            <h6>Best of live screenings</h6>
                            <p>33 Place  <span><img className='rarrow' src={cimg.arrow} /> </span> </p>
                        </div>
                    </div>
                    <div className='cards4 overlay card3'>
                        <div className='cardcontent'>
                            <h6> Newly Opened places</h6>
                            <p>11 Place  <span><img className='rarrow' src={cimg.arrow} /> </span></p>
                        </div>
                    </div>
                    <div className='cards4 overlay  card4'>
                        <div className='cardcontent'>
                            <h6> Best Rooftop places</h6>
                            <p>11 Place  <span><img className='rarrow' src={cimg.arrow} /> </span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};