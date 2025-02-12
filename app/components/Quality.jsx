import Image from "next/image";
import GeneralDentistry from "../components/GeneralDentistry";


const QualityCare = () => {
    return (
        <>
        <section className="relative w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24 py-16">
            
            {/* GRID CONTAINER (TEXT + IMAGES) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                
                {/* LEFT SIDE - TEXT (FORCED ALIGNMENT TO MATCH LOGO) */}
                <div className="flex flex-col justify-start items-start ml-[calc(50%-449px)] pl-6 max-w-[600px]" >
                    <h2 className="text-[42px] md:text-[48px] font-bold leading-tight">
                        <span className="bg-gradient-to-r from-[#6E84E6] via-[#6092FF] to-[#2469FD] text-transparent bg-clip-text">
                            Quality Care
                        </span>{" "}
                        <span className="text-[#2469FD]">at Paradise Dental</span>
                    </h2>

                    <p className="text-[20px] text-[#2469FD] mt-10 leading-[1.6]">
                        Paradise Dental is here to help you achieve optimal dental health in a calm, rejuvenating environment.
                    </p>
                    <p className="text-[20px] text-[#2469FD] mt-5 leading-[1.6]">
                        Our kind and compassionate team, along with state-of-the-art technology, ensure that every visit to our office is easy breezy, not full of anxiety.
                    </p>
                    <p className="text-[20px] text-[#2469FD] mt-4 leading-[1.6]">
                        Experience modern, compassionate dental care that nurtures your smile and well-being.
                    </p>
                </div>

                {/* RIGHT SIDE - IMAGES (STACKED) */}
                <div className="relative flex flex-col gap-6 items-center">
                    <Image 
                        src="/assets/service-icons/images/quality1.png"
                        alt="Toothbrush Image"
                        width={400}
                        height={400}
                        className="rounded-xl md:mr-[-455px]"
                        priority
                    />
                    <Image 
                        src="/assets/service-icons/images/quality2.png"
                        alt="Dental Patient"
                        width={400}
                        height={400}
                        className="rounded-xl md:mr-[-455px]"
                        priority
                    />
                </div>

            </div>

        </section>

        
         {/* General Dentistry Section (Must Be Outside the Section) */}
         <GeneralDentistry />

         </>
    );
};

export default QualityCare;
