import { Title, Subtitle } from "../atoms/text";
import Fotoproyecto from "../atoms/fotoproyecto";

export default function Proyecto({ nombre, titulo, text, link }: { nombre: string, titulo: string, text: string, link:string}) {

    return (
        <div className="flex flex-col w-auto  border border-orange-950 justify-center items-center">
            <div>

                <Fotoproyecto nombre={nombre} />
            </div>
            <div className="mt-5 ">
                <Title text={titulo} />
            </div>
            <div className="flex mt-5 w-auto border border-red-700  ">
                <Subtitle subtitle={text} classextra="" />
            </div>
            <div>
                <p className="text-blue-500">
                    <a href={link} target="_blank" rel="noopener noreferrer">Learn more</a>
                </p>
            </div>

        </div>


    );
}
