
import Header from "./components/header";
import Footer from "./components/footer"
import Image from 'next/image';
import Pic from "./pic.jpg"

export default function Home() {
  return (

    <div>
    



    <div className="container">

      <div className="contant">
        <p>Hi, I am <span>M Shahzad</span></p>
        <p>Frontend Developer</p>
      </div>




      <div className="image">

      <Image
        src={Pic}  // Path to the image file
        alt="Description of image"
  
      />



        


       
      </div>
      
    </div>











  </div>
    
  );
}
