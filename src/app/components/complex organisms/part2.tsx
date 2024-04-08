import Mainprincipal from "../organisms/mainprincipal";
import Text1 from "../molecules/text1";

export default function Part2() {
    // Asumiendo que tienes una URL a tu foto o un path relativo desde la carpeta 'public'
    const photoURL = "/foto1.png"
  
    return (
      <div className="ml-10 w-full">
        <div>
             <Mainprincipal/>
        </div>
        <div>
        <Text1 texta="My Knowledge"
         textb="This section shows the knowledge and skills that I have learned throughout my university training, as well as knowledge obtained through work experience."/>
        </div>
          
        
      </div>
  
    );
  }