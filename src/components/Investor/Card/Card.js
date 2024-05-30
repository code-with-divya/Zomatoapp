import './Card.css'



export function Card(propes) {
    return (
        <>
           <div className='r1'>
           <div className='food'>
           <img src={propes.img} className='image1'/>
           <p className='apr'>deepinder Goyal |13may2024 </p>
           <h3 className='res'>Q4FY24 shareholders’ letter and r...</h3>
           <p>A quick capture of headline results from this quarter</p>
             
           </div>


           <div className='food1'>
           <img src={propes.vlog2} className='image1'/>
           <p className='apr'>Keshav Lohia|18 April 2024 </p>
           <h3 className='res'>Menu Score: How we cracked the...</h3>
           <p>Menu score empowers our restaurant partners to build exceptional and delightful food ordering menus.</p>
             
           </div>


           <div className='food2'>
           <img src={propes.vlog3} className='image1'/>
           <p className='apr'> Security Team | 16 April 2024</p>
           <h3 className='res'>Hackoween: Elevating cybersecurity</h3>
           <p>Read more about how we are strengthening cybersecurity and promoting a security-first approach for our engineering team.</p>
             
           </div>
           </div>
           <div className='size'></div>

        </>
    );
}