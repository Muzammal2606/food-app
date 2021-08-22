import chef from '../../Images/chef.png'
import './Hero.css'


function Hero() {

    
    
return(
<>

<div className='heroFlex'>
<div className='HeroText'>
<h1>Order Food</h1>
<span></span>
<h1 className='redText'>You Love</h1>
<button >ORDER</button> 


</div>
<img className='chefLogo' src={chef}  alt='chef'/>



</div>


</>


)    

}

export default Hero;

