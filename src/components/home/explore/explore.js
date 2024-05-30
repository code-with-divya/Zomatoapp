import './explore.css';

export default function Explore(eimg){
    // function showhide() {
    //     document.getElementById("faqdiv").classList.toggle("showdiv")

    // }
    return(
        <>
        <div className='exploremain'>
            <h3 className='exploreh'>Explore otions near me</h3>
            <div className='explorediv'>
                <p >Popular cuisines near me</p>
                <img className='exploreimg' src={eimg.darrow} />
                <div class="faq-answer" id="faqdiv">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat id quidem excepturi veritatis nemo
                neque porro. Cumque dolore eaque earum.
            </div>
            </div>
            <div className='explorediv'>
                <p >Popular restaurant types near me</p>
                <img className='exploreimg' src={eimg.darrow} />
                <div class="faq-answer" id="faqdiv">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat id quidem excepturi veritatis nemo
                neque porro. Cumque dolore eaque earum.
            </div>
            </div>
            <div className='explorediv'>
                <p >Cities We Deliver To</p>
                <img className='exploreimg' src={eimg.darrow} />
                <div class="faq-answer" id="faqdiv">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat id quidem excepturi veritatis nemo
                neque porro. Cumque dolore eaque earum.
            </div>
            </div>
            <div className='explorediv'>
                <p >Popular cuisines near me</p>
                <img className='exploreimg' src={eimg.darrow} />
                <div class="faq-answer" id="faqdiv">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat id quidem excepturi veritatis nemo
                neque porro. Cumque dolore eaque earum.
            </div>
            </div>

        </div>
        </>
    );
}