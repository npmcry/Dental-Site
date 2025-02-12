import Image from "next/image";

const GeneralDentistry = () => {
    return (
        <section className="relative w-full max-w-screen-xl ml-[45px] px-6 md:px-12 lg:px-24 py-16">

            
            {/* SECTION TITLE */}
            <h3 className="text-[40px] md:text-[40px] font-bold text-left relative top-[-40px]">

                <span className="text-[#2469FD]">General Dentistry </span>
                <span className="bg-gradient-to-r from-[#6E84E6] via-[#6092FF] to-[#2469FD] text-transparent bg-clip-text">
                    Services
                </span>
            </h3>

            {/* SERVICES GRID */}
            <div className="grid grid-cols-5 gap-20 mt-12 justify-start ml-[-0px]">

                {/* CLEANINGS */}
                <div className="flex flex-col items-center">
                    <Image 
                        src="/assets/service-icons/cleanings.svg" 
                        alt="Cleanings" 
                        width={200} 
                        height={200} 
                    />
                    <p className="text-[#2469FD] text-[24px] font-semibold mt-4">Cleanings</p>
                </div>

                {/* CROWNS */}
                <div className="flex flex-col items-center mr-[-100px]">
                    <Image 
                        src="/assets/service-icons/crowns.svg" 
                        alt="Crowns" 
                        width={155} 
                        height={200} 
                    />
                    <p className="text-[#2469FD] text-[24px] font-semibold mt-4">Crowns</p>
                </div>

                {/* FILLINGS */}
                <div className="flex flex-col items-center mr-[-200px]">
                    <Image 
                        src="/assets/service-icons/fillings.svg" 
                        alt="Fillings" 
                        width={150} 
                        height={150} 
                    />
                    <p className="text-[#2469FD] text-[24px] font-semibold mt-4">Fillings</p>
                </div>

                {/* ROOT CANALS */}
                <div className="flex flex-col items-center mr-[-400px]">
                    <Image 
                        src="/assets/service-icons/root-canals.svg" 
                        alt="Root Canals" 
                        width={150} 
                        height={150} 
                    />
                    <p className="text-[#2469FD] text-[24px] font-semibold mt-4">Root Canals</p>
                </div>

                {/* EXTRACTIONS */}
                <div className="flex flex-col items-center mr-[-600px]">
                    <Image 
                        src="/assets/service-icons/extractions.svg" 
                        alt="Extractions" 
                        width={150} 
                        height={150} 
                    />
                    <p className="text-[#2469FD] text-[24px] font-semibold mt-4">Extractions</p>
                </div>

            </div>

        </section>
    );
};

export default GeneralDentistry;
