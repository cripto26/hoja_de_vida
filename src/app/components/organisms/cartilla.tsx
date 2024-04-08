import { Card } from "../molecules/card";
import { Title, Subtitle } from "../atoms/text";

export function Cartilla() {
    return (

        <div className="flex flex-col">

            <div className="flex flex-row"      >
                <Card text1="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2zm18 11V5H4v11z"
                    text2="Web Development" text3="Blog, E-Commerce" />

                <Card text1="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2zm18 11V5H4v11z"
                    text2="Web Development" text3="Blog, E-Commerce" />

                <Card text1="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2zm18 11V5H4v11z"
                    text2="Web Development" text3="Blog, E-Commerce" />

            </div>
            <div className="flex flex-row">

                <Card text1="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2zm18 11V5H4v11z"
                    text2="Web Development" text3="Blog, E-Commerce" />

                <Card text1="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2zm18 11V5H4v11z"
                    text2="Web Development" text3="Blog, E-Commerce" />

                <div className=" mx-10 max-w-[260px] ">
                    <div className="my-10 mr-12">
                        <Title text="Advertising" />
                    </div>
                    <div className="flex justify-center items-center">
                        <Subtitle classextra="text-center" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. " />
                    </div>
                </div>

            </div>


        </div>
    );
}