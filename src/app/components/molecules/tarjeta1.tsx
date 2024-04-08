import { Title } from "../atoms/text";

export default function Tarjeta1({ texta, textb, fecha }: { texta: string; textb: string, fecha: string }) {
    return (
        <div className="flex flex-col w-[300px] ">

            <Title text={texta} />
            <div className="flex flex-row  justify-center mt-5">
                <div className="fle mr-10">
                    <p>{textb}</p>
                </div>
                <div className="flex w-30  text-xs bg-blue-500 justify-center items-center rounded-[2px] h-[20px] mt-1 ml-[-30px] ">
                    <p className="text-white text-15px">{fecha}</p>
                </div>
            </div>
        </div>



            );
}
