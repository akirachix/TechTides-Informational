import './index.css'
const Brands = () => {
   return(
    <div>
        <h1 className="header">Brands</h1>
       <div className="brands">
       <div className='zara'>
       <img src="/images/zara.png" className='label'/>
       <img src="/images/zara.webp" className='img'/>
       <button className='overlay-text-zara' type="button">Learn more...</button>
       </div>
       <div className='katush'>
       <img src="/images/Katush.png" className='label'/>
       <img src="/images/KatushBrand.jpg" className='img'/>
       <button className='overlay-text-katush' type="button">Learn more...</button>
       </div>
       <div className='lilabare'>
       <img src="/images/lilabare.png" className='label'/>
       <img src="/images/lilabareBrand.png" className='img'/>
       <button className='overlay-text-lilabare' type="button">Learn more...</button>
       </div>
       <div className='mango'>
       <img src="/images/Mango.png" className='label'/>
       <img src="/images/mango.jpg" className='img'/>
       <button className='overlay-text-mango' type="button">Learn more....</button>
       </div>
   </div>
   </div>
   );
}
export default Brands;