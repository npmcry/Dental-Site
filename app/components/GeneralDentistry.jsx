import Image from "next/image";
import Link from "next/link";

const GeneralDentistry = () => {
    const services = [
        {
            name: "Cleanings",
            icon: "/assets/service-icons/cleanings.svg",
            width: 150,
            height: 150,
            link: "/services/cleanings",
        },
        {
            name: "Crowns",
            icon: "/assets/service-icons/crowns.svg",
            width: 150,
            height: 150,
            link: "/services/crowns",
        },
        {
            name: "Fillings",
            icon: "/assets/service-icons/fillings.svg",
            width: 150,
            height: 150,
            link: "/services/fillings",
        },
        {
            name: "Root Canals",
            icon: "/assets/service-icons/root-canals.svg",
            width: 150,
            height: 150,
            link: "/services/root-canals",
        },
        {
            name: "Extractions",
            icon: "/assets/service-icons/extractions.svg",
            width: 150,
            height: 150,
            link: "/services/extractions",
        }
    ];

    return (
        <section className="relative w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24 py-16">

            {/* SECTION TITLE */}
            <h3 className="text-[40px] md:text-[40px] font-bold text-left relative top-[-40px]">

                <span className="text-[#2469FD]">General Dentistry </span>
                <span className="bg-gradient-to-r from-[#6E84E6] via-[#6092FF] to-[#2469FD] text-transparent bg-clip-text">
                    Services
                </span>
            </h3>

            {/* SERVICES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-12">
                {services.map((service, index) => (
                    <Link 
                        href={service.link} 
                        key={index}
                        className="flex flex-col items-center group cursor-pointer"
                    >
                        <div className="transform transition-transform duration-300 hover:scale-110">
                            <Image 
                                src={service.icon} 
                                alt={service.name} 
                                width={service.width} 
                                height={service.height}
                                className="transition-all duration-300 group-hover:drop-shadow-lg" 
                            />
                        </div>
                        <p className="text-[#2469FD] text-[24px] font-semibold mt-4 transition-colors duration-300 group-hover:text-[#4F46E5]">
                            {service.name}
                        </p>
                    </Link>
                ))}
            </div>

        </section>
    );
};

export default GeneralDentistry;
