import Link from "next/link";
import Image from "next/image";


const Hero = () => {
    return (
        <>

            {/* Background wrapper */}
            <div className="navbar-hero-bg w-full">
                <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-x-hidden">

                    {/* Left Blob */}
                    <div className="absolute left-0 sm:left-[-5%] bottom-0 w-[45vw] max-w-[600px] -z-10">
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
                    <div className="absolute right-0 sm:right-[-2%] top-0 w-[40vw] max-w-[550px] -z-10">
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

                    {/* Hero Buttons - Updated for better mobile handling */}
                    <div className="relative z-[50] flex flex-col sm:flex-row items-center justify-center w-full max-w-[280px] sm:max-w-none mx-auto gap-3 sm:gap-6 pt-6">
                        <a
                            href="tel:9162591701"
                            className="w-full sm:w-auto min-w-0 px-3 sm:px-4 lg:px-5 py-3.5 border border-[#2469FD] text-[#2469FD] rounded-[30px] text-sm sm:text-base lg:text-[20px] 
                            hover:bg-white hover:text-[#2469FD] transition duration-300 flex items-center justify-center"
                        >
                            Call To Book 916-259-1701
                        </a>

                        <Link 
                            href="/appointment"
                            className="w-full sm:w-auto min-w-0 px-3 sm:px-4 lg:px-5 py-3.5 bg-[#2469FD] text-white rounded-[30px] text-sm sm:text-base lg:text-[20px] 
                            hover:bg-[#feffff] transition duration-300 flex items-center justify-center hover:text-[#2469FD]"
                        >
                            Book Online
                        </Link>
                    </div>

                </section>
            </div>

            {/* Blue Section */}
            <section
                className="w-full bg-[#6092FF] text-white flex flex-col md:flex-row justify-between items-center px-3 sm:px-4 md:px-6 lg:px-12 py-6 md:py-8"
            >
                {/* Left Text */}
                <h2
                    className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-bold leading-tight text-center md:text-left mb-4 md:mb-0 md:ml-[20px] lg:ml-[40px] px-2"
                    style={{ fontFamily: 'Lisu Bosa, sans-serif' }}
                >
                    <span className="md:whitespace-nowrap">
                        Dental care should be easy <br className="hidden md:block" /> breezy
                    </span>
                </h2>

                {/* Make an Appointment Button */}
                <a
                    href="/appointment"
                    className="w-[85%] md:w-auto border border-white text-white font-medium text-[14px] md:text-[18px] lg:text-[20px] px-3 md:px-6 py-2 md:py-3 rounded-full transition duration-300 hover:bg-white hover:text-[#6092FF] md:mr-[30px] lg:mr-[40px] text-center min-w-0"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    Make an appointment
                </a>
            </section>
        </>
    );
};

export default Hero;
