import './index.css'
const Landingpage = () =>{
    return(

    <div>

        <div id='landing'>
           

            <div id="second">
                <div>
                    <img src="/Images/sautiSoulf.jpg" alt ='soul' className='soul'/>
                </div>
                <div  id='landingtext'>
                    <h4>Sustainable fashion in not a trend,but the future,<br></br> driven by the need to address environmental and social issues <br></br> while meeting growing consumer demand for ethical and eco-friendly practices.</h4>
                    
                </div>


            </div>
            <div id='featured'>
                <div id='featuredbrands'>
                    <h4>FEATURED BRANDS</h4>
                </div>

                <div id='brands'>
                   
                    <img src='/Images/zara.png'className='zara'/>

                    <img src='/Images/lilabare-removebg-preview.png' className='lilabare'/>

                    <img src='/Images/Mango.png' className='mango'/>
                   
                    
                </div>


            </div>
            


        </div>
    </div>
    );
}
export default Landingpage