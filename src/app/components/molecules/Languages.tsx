import { Title } from "../atoms/text";
import Barraporcentaje from "../atoms/barraporcentaje";


export default function Languages() {
    return (
      <div >
      <Title text="Languages"/>
      <Barraporcentaje label="Spanish" porcentage={100}/>
      <Barraporcentaje label="English" porcentage={70}/>
      
      </div>
    );
  }
  