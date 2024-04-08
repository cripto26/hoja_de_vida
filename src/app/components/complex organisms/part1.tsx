import Minifoto from "../atoms/MiniFoto";
import Languages from "../molecules/Languages";
import ProgramminL from "../molecules/ProgrammingLanguages";
import Extraskills from "../molecules/Extraskills";


export default function Part1() {
  // Asumiendo que tienes una URL a tu foto o un path relativo desde la carpeta 'public'
  const photoURL = "/foto1.png"

  return (
    <div className="ml-10 w-full">
        <div>
            <Minifoto/>
        </div>
        <div className=" mt-10">
            <Languages/>
        </div>
        <div className=" mt-10">
            <ProgramminL/>
        </div>

        <div className=" mt-10">
            <Extraskills/>
        </div>
        
      
    </div>

  );
}