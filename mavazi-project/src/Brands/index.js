import './index.css'
const Brands = () => {
   return(
    <div id='brandy'>
        <h1 className="header">Brands</h1>
       <div className="brand">
       <div className='zari'>
       <img src="/Images/zara.png" className='label'/>
       <img src="/Images/zaraBrand.webp" className='img'/>
       <button className='overlay-text-zara' type="button">Learn more...</button>
       </div>
       <div className='katushi'>
       <img src="/Images/Katush.png" className='label'/>
       <img src="/Images/katushBrand.jpg" className='img'/>
       <button className='overlay-text-katush' type="button">Learn more...</button>
       </div>
       <div className='lilabar'>
       <img src="/Images/lilabare.png" className='label'/>
       <img src="/Images/lilabareBrand.png" className='img'/>
       <button className='overlay-text-lilabare' type="button">Learn more...</button>
       </div>
       <div className='mangos'>
       <img src="/Images/Mango.png" className='label'/>
       <img src="/Images/mangoBrand.jpg" className='img'/>
       <button className='overlay-text-mango' type="button">Learn more...</button>
       </div>
   </div>
   </div>
   );
}
export default Brands;