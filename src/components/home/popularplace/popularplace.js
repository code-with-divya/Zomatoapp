import newxtarrow from './nextarrow.png'
import './popularplace.css'

export default function Popularplace() {
    return (
        <>
        <section className='poplursection'>
            <div>
                <h4 class="Pophead">Popular localities in and around Pune</h4>
            </div>
            <div className='divbox'>
                <div className='populardiv'>
                    <div className='divpcontent' >
                        <h6>Baner</h6>
                        <p>642 places</p>
                    </div>
                    <img id='parrow' src={newxtarrow} />
                </div>
                <div className='populardiv'>
                    <div className='divpcontent' >
                        <h6>Viman Nagar</h6>
                        <p>625 places</p>
                    </div>
                    <img id='parrow' src={newxtarrow} />
                </div>
                <div className='populardiv'>
                    <div className='divpcontent' >
                        <h6>Hinjwadi</h6>
                        <p>1241 places</p>
                    </div>
                    <img id='parrow' src={newxtarrow} />
                </div>
            </div>

            <div className='divbox'>
                <div className='populardiv'>
                    <div className='divpcontent' >
                        <h6>Koregoan Park</h6>
                        <p>231 places</p>
                    </div>
                    <img id='parrow' src={newxtarrow} />
                </div>
                <div className='populardiv'>
                    <div className='divpcontent' >
                        <h6>Wakad</h6>
                        <p>625 places</p>
                    </div>
                    <img id='parrow' src={newxtarrow} />
                </div>
                <div className='populardiv'>
                    <div className='divpcontent' >
                        <h6>Kothrud</h6>
                        <p>1241 places</p>
                    </div>
                    <img id='parrow' src={newxtarrow} />
                </div>
            </div>

            <div className='divbox'>
                <div className='populardiv'>
                    <div className='divpcontent' >
                        <h6>Kalayani Nagar</h6>
                        <p>155 places</p>
                    </div>
                    <img id='parrow' src={newxtarrow} />
                </div>
                <div className='populardiv'>
                    <div className='divpcontent' >
                        <h6>Kharadi</h6>
                        <p>800 places</p>
                    </div>
                    <img id='parrow' src={newxtarrow} />
                </div>
                <div className='populardiv'>
                    <div className='divpcontent' >
                        <h6>Pimple Saudagar</h6>
                        <p>1241 places</p>
                    </div>
                    <img id='parrow' src={newxtarrow} />
                </div>
            </div>
        </section>
        </>

    )
}