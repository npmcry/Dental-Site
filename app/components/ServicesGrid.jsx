import Image from "next/image";

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
            },
            {
              title: "Laser Dentistry",
              description:
                "Precise, Painless, and Powerful! Experience advanced laser dentistry for a brighter, healthier smile with minimal discomfort.",
              image: "laser.png",
            },
            {
              title: "Restorative Dentistry",
              description:
                "Restore, Renew, Smile! Expert restorative dentistry to bring back your smile’s strength, function, and beauty.",
              image: "restorative.png",
            },
            {
              title: "Preventive Dentistry",
              description:
                "Protect Your Smile for Life! Preventive dentistry keeps your teeth healthy with expert care.",
              image: "preventive.png",
            },
            {
              title: "First Visit at Paradise Dental",
              description:
                "Easy, Comfortable, Stress-Free! Your next visit at Paradise Dental is all about your comfort and care.",
              image: "firstvisit.png",
            },
            {
              title: "Teeth Whitening",
              description:
                "Brighten Your Smile Instantly! Professional teeth whitening for a radiant, confident look.",
              image: "whitening.png",
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
                  <a
                    href="#"
                    className="text-sm font-semibold text-[#5E4432] hover:underline"
                  >
                    LEARN MORE &rarr;
                  </a>
                  <a
                    href="#"
                    className="ml-auto px-5 py-2 border-2 border-[#5E4432] text-[#5E4432] rounded-full font-semibold text-sm hover:bg-[#5E4432] hover:text-white transition"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ————————————————
          2) FIRST VISIT SECTION (full-width SVG)
          ———————————————— */}
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

          {/* White Button Overlaid (moved slightly to the right) */}
          <a
            href="#"
            className="
    absolute top-[80%] left-1/2 
    transform -translate-x-1/2
    bg-transparent text-white
    border-2 border-white
    rounded-[40px] py-3 px-6 md:py-4 md:px-8 text-lg md:text-2xl font-semibold  
    hover:bg-white hover:text-[#2469FD]
    transition-all duration-300 ease-in-out"
          >
            Learn More
          </a>

        </div>
      </section>
    </>
  );
}
