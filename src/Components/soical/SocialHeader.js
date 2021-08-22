import pizza from '../../Images/pizza.png';
import service from '../../Images/24.png';
import support from '../../Images/support.png'
import './SocialHeader.css'



function HeroUnderline(){
   
     


return(

<>
     <div className='HeroBar'>

      <div className='SpecificCards'>

          <img src={pizza} alt="" />
          <h2>Fast Delivery</h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, facere. Architecto natus, perferendis rem inventore quos officia sed? Pariatur officiis maxime et fugit, repellat rerum est quas eligendi beatae suscipit!</p>
      </div>
           

      <div className='SpecificCards'>

<img src={service} alt="" />
<h2>24/7 Service</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, facere. Architecto natus, perferendis rem inventore quos officia sed? Pariatur officiis maxime et fugit, repellat rerum est quas eligendi beatae suscipit!</p>
</div>



<div className='SpecificCards'>

<img src={support} alt="" />
<h2>Online Help</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, facere. Architecto natus, perferendis rem inventore quos officia sed? Pariatur officiis maxime et fugit, repellat rerum est quas eligendi beatae suscipit!</p>
</div>







     </div>



</>


)


}


export default HeroUnderline;