import { Subtitle } from "../atoms/text";
import Button from "../atoms/Boton";

export default function Main() {
  // Asumiendo que tienes una URL a tu foto o un path relativo desde la carpeta 'public'
  const photoURL = "/foto.png"

  return (
    <div>

      <div className="flex flex-col justify-center items-center w-[500px] h-auto ">
        <div className="flex mb-10 ">
          <h1 className="text-5xl font-bold"> I&apos;m Daniel Quiroz <span className="text-gradient text-blue-500">Front-end Developer</span></h1>
        </div>
        <div>
          <Subtitle subtitle="I'm a passionate software developer, I enjoy creating web applications focused on the frontend and I'm constantly exploring new technologies to improve my skills."
            classextra="" />
        </div>
        <div className="flex mr-[380px] mt-10 ">
          <Button />
        </div>
      </div>
    </div>

  );
}
