import './index.css'
const Aboutus =  ()=>{
    return(
        <div id='mission'>
        <div className='aboutus'>
            <h1>About Us</h1>
            <div className='introduction'>
            <div className='right-section-text'>
      <p>Mavazi is a dedicated to empowering individuals to make concious fashion choices that promote environmental sustainability and social responsibility. We strive to create high quality, eco-friendly clothing that not only looks good but also supports local communities and reduces waste in the fashion industry.</p>   
      </div> 
      <div>
        <img src='/Images/cottonPlant.png'className='cotton-image'/>
        </div> 
        </div> 
        <div className='vision-section'>
            <div>
                <img src='/Images/whiteFabric.jpg'className='fabric-image'/>
            </div>
            <div className='left-section-text'>
                <p>At Mavazi, we envision a future where fashion is a force for good, where every garment is made with care for the planet and its people. We aim to be a leader in the sustainable fashion movement, inspiring a global community to adopt environmentally concious and socially responsible fashion practices. By combining innovative design, sustainable materials and community engagement,we will create a more sustainable and equitable fashion industry for generations to come. </p>

            </div>
        </div>
        
        </div>
        </div>
    )
}
export default Aboutus;