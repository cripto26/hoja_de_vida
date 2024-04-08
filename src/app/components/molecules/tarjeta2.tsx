import { Title, Subtitle } from "../atoms/text";

export default function Tarjeta2({ texta, textb }: { texta: string; textb: string }) {
    return (
        <div className="flex flex-col w-[550px] items-start ">

            <Title text={texta} />
            <div className="flex items-start mt-8 ">
                <Subtitle subtitle={textb} classextra=""/>
            </div>
        </div>



            );
}
