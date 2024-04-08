import { Title } from "../atoms/text";
import Barraporcentaje from "../atoms/barraporcentaje";


export default function ProgramminL() {
    return (
      <div >
      <Title text="Programming Languages"/>
      <Barraporcentaje label="HTML" porcentage={80}/>
      <Barraporcentaje label="Python" porcentage={80}/>
      <Barraporcentaje label="CSS" porcentage={80}/>
      <Barraporcentaje label="React" porcentage={60}/>
      <Barraporcentaje label="Javascript" porcentage={80}/>
      <Barraporcentaje label="Spanish" porcentage={100}/>
      </div>
    );
  }
  