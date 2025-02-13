import Image from "next/image";
import GeneralDentistry from "../components/GeneralDentistry";

const QualityCare = () => {
    return (
        <>
            <section className="relative w-full px-6 md:px-12 lg:px-24 py-16"> {/* Added py-16 for padding */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                    {/* LEFT SIDE - Move Text More to the Left */}
                    <div className="flex flex-col justify-start items-start mx-auto md:ml-[3%] lg:ml-[5%] w-full max-w-[600px]">
                        <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold leading-tight break-words">
                            <span className="bg-gradient-to-r from-[#6E84E6] via-[#6092FF] to-[#2469FD] text-transparent bg-clip-text">
                                Quality Care
                            </span>{" "}
                            <span className="text-[#2469FD]">at Paradise Dental</span>
                        </h2>

                        <p className="text-[18px] md:text-[20px] text-[#2469FD] mt-6 leading-[1.6] break-words">
                            Paradise Dental is here to help you achieve optimal dental health in a calm, rejuvenating environment.
                        </p>
                        <p className="text-[18px] md:text-[20px] text-[#2469FD] mt-4 leading-[1.6] break-words">
                            Our kind and compassionate team, along with state-of-the-art technology, ensure that every visit to our office is easy breezy, not full of anxiety.
                        </p>
                        <p className="text-[18px] md:text-[20px] text-[#2469FD] mt-4 leading-[1.6] break-words">
                            Experience modern, compassionate dental care that nurtures your smile and well-being.
                        </p>
                    </div>

                    {/* RIGHT SIDE - Move Images More to the Right */}
                    <div className="relative flex flex-col gap-6 items-center md:translate-x-[5%] lg:translate-x-[15%]">

                        <Image
                            src="/assets/service-icons/images/quality1.png"
                            alt="Toothbrush Image"
                            width={400}
                            height={400}
                            className="rounded-xl w-full max-w-[400px]"
                            priority
                        />
                        <Image
                            src="/assets/service-icons/images/quality2.png"
                            alt="Dental Patient"
                            width={400}
                            height={400}
                            className="rounded-xl w-full max-w-[400px]"
                            priority
                        />
                    </div>

                </div>
            </section>

            {/* General Dentistry Section (Must Be Outside the Section) */}
            <section className="relative w-full px-6 md:px-12 lg:px-24 py-16"> {/* Added py-16 for padding */}
                <GeneralDentistry />
            </section>

            {/* Technology + Insurance */}
            <section className="relative w-full px-6 md:px-12 lg:px-24 py-16"> {/* Added py-16 for padding */}

                {/* Technology Header */}
                <h2 className="text-[42px] md:text-[48px] font-bold leading-tight text-center break-words">
                    <span className="bg-gradient-to-r from-[#6E84E6] via-[#6092FF] to-[#2469FD] text-transparent bg-clip-text">
                        At Paradise Dental,
                    </span>{" "}
                    we&apos;re committed to using the latest dental technology
                    to improve your dental experience
                </h2>

                {/* Brown Blocks (SVG) */}
                <div className="mt-10">
                    <Image
                        src="/ServicesBlocks/blocks.svg"
                        alt="Laser Dentistry, Digital X-Rays, High Imaging"
                        width={1200}
                        height={400}
                        className="w-full h-auto"
                        priority
                    />
                </div>

                {/* Insurance Section */}
                <div className="mt-16">

                    {/* Fixed Full-Width Insurance SVG */}
                    <div id="insurance" className="relative w-screen left-1/2 transform -translate-x-1/2">
                        <Image
                            src="/assets/service-icons/images/insurance.svg"
                            alt="Insurance Providers"
                            width={1920}
                            height={600}
                            className="w-screen h-auto object-cover max-w-none"
                            priority
                        />
                    </div>

                </div>
            </section>
        </>
    );
};

export default QualityCare;
