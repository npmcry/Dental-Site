import Image from "next/image";
import Link from "next/link";

export default function ServicesGrid() {
  return (
    <>
      <section id="services" className="w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24 ">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#5E4432] mb-12">
          Dental Services at Paradise Dental
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Cosmetic Dentistry",
              description:
                "Flawless smiles start here! From whitening to veneers, we perfect your smile with expert cosmetic dentistry.",
              image: "cosmetic.png",
              link: "/service-details/cosmetic"  // Updated link path
            },
            {
              title: "Laser Dentistry",
              description:
                "Precise, Painless, and Powerful! Experience advanced laser dentistry for a brighter, healthier smile with minimal discomfort.",
              image: "laser.png",
              link: "/service-details/laser"  // Updated link path
            },
            {
              title: "Restorative Dentistry",
              description:
                "Restore, Renew, Smile! Expert restorative dentistry to bring back your smile's strength, function, and beauty.",
              image: "restorative.png",
              link: "/service-details/restorative"  // Updated link path
            },
            {
              title: "Preventive Dentistry",
              description:
                "Protect Your Smile for Life! Preventive dentistry keeps your teeth healthy with expert care.",
              image: "preventive.png",
              link: "/service-details/preventive"  // Updated link path
            },
            {
              title: "First Visit at Paradise Dental",
              description:
                "Easy, Comfortable, Stress-Free! Your next visit at Paradise Dental is all about your comfort and care.",
              image: "firstvisit.png",
              link: "/service-details/first-visit"  // Updated link path
            },
            {
              title: "Teeth Whitening",
              description:
                "Brighten Your Smile Instantly! Professional teeth whitening for a radiant, confident look.",
              image: "whitening.png",
              link: "/service-details/whitening"  // Updated link path
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-[#FCEFE2] border-2 border-[#5E4432] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-60 w-full overflow-hidden">
                <Image
                  src={`/services-images/${service.image}`}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#5E4432] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#5E4432] mb-4">{service.description}</p>
                <div className="flex items-center">
                  <Link
                    href={service.link}
                    className="text-sm font-semibold text-[#5E4432] hover:underline"
                  >
                    LEARN MORE &rarr;
                  </Link>
                  <Link
                    href="/appointment"
                    className="ml-auto px-5 py-2 border-2 border-[#5E4432] text-[#5E4432] rounded-full font-semibold text-sm hover:bg-[#5E4432] hover:text-white transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* First Visit Section (full-width SVG) */}
      <section className="w-full bg-white py-16 pb-0">
        <div className="relative w-full">
          <Image
            src="/assets/service-icons/first.svg"
            alt="First Visit at Paradise Dental"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />

          {/* White Button Overlaid */}
          <Link
            href="/appointment"
            className="
              absolute top-[75%] sm:top-[80%] left-1/2 
              transform -translate-x-1/2
              bg-transparent text-white
              border border-white
              rounded-[30px] sm:rounded-[40px] 
              py-2 sm:py-3 md:py-4 
              px-4 sm:px-6 md:px-8
              text-base sm:text-lg md:text-2xl 
              font-semibold
              whitespace-nowrap
              w-auto max-w-[90%] sm:max-w-none
              text-center
              hover:bg-white hover:text-[#2469FD]
              transition-all duration-300 ease-in-out"
          >
            Learn More
          </Link>
        </div>
      </section>
    </>
  );
}