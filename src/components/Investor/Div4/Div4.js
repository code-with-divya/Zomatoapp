import './Div4.css'



export function Div4(){
    return(
        <>
        <div>
        <h1 className='corpo' ><b>Corporate announcements</b></h1>
        </div>

        <hr/>

        <div className='corpo1'>
            <p>17 May 2024</p>
            <p className='may'>Zomato - Intimation of transcript of Earnings call dated May 13, 2024</p>
            <p className='read'>Read more ▶</p>
        </div>

        <hr/>

        <div className='corpo1'>
        <p>15 May 2024</p>
            <p className='may'>Zomato - Extract of newspaper publication of financial result of Q4FY24</p>
            <p className='read'>Read more ▶</p>
        </div>
        <div>
            <button className='btn'>See all annocement</button>
        </div>

        <div><h1 className='block'><b>from Our Blogs</b></h1></div>
        </>
    )
}