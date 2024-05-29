import './explore.css';
import downarrow from './downarrow.png'

export default function Explore(){
    return(
        <>
        <div className='exploremain'>
            <h3 className='exploreh'>Explore otions near me</h3>
            <div className='explorediv'>
                <p >Popular cuisines near me</p>
                <img className='exploreimg' src={downarrow} />
            </div>
            <div className='explorediv'>
                <p >Popular cuisines near me</p>
                <img className='exploreimg' src={downarrow} />
            </div>
            <div className='explorediv'>
                <p >Popular cuisines near me</p>
                <img className='exploreimg' src={downarrow} />
            </div>
            <div className='explorediv'>
                <p >Popular cuisines near me</p>
                <img className='exploreimg' src={downarrow} />
            </div>

        </div>
        </>
    );
}