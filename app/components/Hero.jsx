import Image from "next/image";


const Hero = () => {
    return (
        <>

            {/* ✅ Background wrapper - does NOT mess up layout */}
            <div className="navbar-hero-bg">
                <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

                    {/* Left Blob */}
                    <div className="absolute left-[-5%] bottom-[0%] w-[45vw] max-w-[600px] -z-10">
                        <Image
                            src="/left-blob.svg"
                            alt="Left Blob"
                            width={600}
                            height={700}
                            className="w-full h-auto"
                            unoptimized={true}
                        />
                    </div>

                    {/* Right Blob */}
                    <div className="absolute right-[-2%] top-[0%] w-[40vw] max-w-[550px] -z-10">
                        <Image
                            src="/right-blob.svg"
                            alt="Right Blob"
                            width={550}
                            height={650}
                            className="w-full h-auto"
                            unoptimized={true}
                        />
                    </div>

                    {/* Hero Title */}
                    <div className="relative z-10 mb-12">
                        <Image
                            src="/hero.svg"
                            alt="Hero Title"
                            width={600}
                            height={200}
                            className="w-auto max-w-full"
                            unoptimized={true}
                        />
                    </div>

                    {/* Hero Buttons - Properly Spaced */}
                    <div className="relative z-[50] flex items-center justify-center space-x-6 pt-6">


                        <a
                            href="tel:9162591701"
                            className="px-4 lg:px-5 py-2 border border-[#2469FD] text-[#2469FD] rounded-[30px] text-[20px] 
               hover:bg-white hover:text-[#2469FD] transition duration-300 flex items-center justify-center"
                            style={{ minWidth: "330px", height: "60px" }}
                        >
                            Call To Book 916-259-1701
                        </a>

                        {/* Book Online Button */}
                        <a
                            href="/book-online"
                            className="px-4 lg:px-5 py-2 bg-[#2469FD] text-white rounded-[30px] text-[20px] 
               hover:bg-[#3A5899] transition duration-300 flex items-center justify-center"
                            style={{ minWidth: "160px", height: "60px" }}
                        >
                            Book Online
                        </a>
                    </div>

                </section>
            </div>

            {/* New Section: "Dental care should be easy breezy" */}
            <section
                className="w-full bg-[#6092FF] text-white flex justify-between items-center px-6 lg:px-24"
                style={{ minWidth: "100vw", height: "148px" }}
            >
                {/* Left Text */}
                <h2
                    className="text-[40px] font-bold leading-tight whitespace-nowrap ml-[40px]"
                    style={{ fontFamily: "Lisu Bosa, sans-serif" }}
                >
                    Dental care should be easy <br /> breezy
                </h2>

                {/* Make an Appointment Button */}
                <a
                    href="/appointment"
                    className="border border-white text-white font-medium text-[20px] px-6 py-3 rounded-full transition duration-300 hover:bg-white hover:text-[#6092FF] mr-[60px]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                >
                    Make an appointment
                </a>
            </section>
        </>
    );
};

export default Hero;
