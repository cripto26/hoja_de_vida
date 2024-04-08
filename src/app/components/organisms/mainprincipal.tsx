import Main from "../molecules/main";

export default function Mainprincipal() {
  // Asumiendo que tienes una URL a tu foto o un path relativo desde la carpeta 'public'
  const photoURL = "/foto1.png"

  return (
    <div className="flex flex-row w-full">
        <div>
            <Main/>
        </div>
        <div>
        <img
          src={photoURL}
          alt="Hamilton Daniel Quiroz Garces"
          className=" w-[325px] h-[460px] object-cover" 
        />
        </div>
      
    </div>

  );
}