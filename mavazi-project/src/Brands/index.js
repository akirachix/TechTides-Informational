import './index.css'
const Brands = () => {
   return(
    <div>
        <h1 className="header">Brands</h1>
       <div className="brands">
       <div className='zara'>
       <img src="/images/zar.png" className='label'/>
       <img src="/images/za.jpeg" className='img'/>
       <button className='overlay-text' type="Learn more">Learn more...</button>
       </div>
       <div className='katush'>
       <img src="/images/katush.png" className='label'/>
       <img src="/images/katu.jpg" className='img'/>
       <button className='overlay-text-2' type="Learn more">Learn more...</button>
       </div>
       <div className='lilabare'>
       <img src="/images/lilabar.png" className='label'/>
       <img src="/images/lilabare.jpeg" className='img'/>
       <button className='overlay-text-3' type="Learn more">Learn more...</button>
       </div>
       <div className='mango'>
       <img src="/images/mango.png" className='label'/>
       <img src="/images/mango.jpeg" className='img'/>
       <button className='overlay-text-4' type="Learn more">Learn more...</button>
       </div>
   </div>
   </div>
   );
}
export default Brands;


