import Image from "next/image";

export default function Footer() {
    const socialLinks = {
        Instagram: "https://instagram.com/paradisefamilydental",
        Facebook: "https://facebook.com/paradisefamilydental",
        YouTube: "https://youtube.com/@paradisefamilydental",
        TikTok: "https://tiktok.com/@paradisefamilydental"
    };

    return (
        <footer className="bg-[#1C1C22] text-white py-10 px-6 md:px-12 lg:px-24">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                {/* Left Column: Logo + "family dental" */}
                <div className="flex flex-col items-start">
                    <div className="flex items-center mb-4">
                        <Image
                            src="/logo.png" // Ensure this is in /public/logo.png
                            alt="Paradise Family Dental Logo"
                            width={70}
                            height={70}
                            className="mr-4"
                            priority
                        />
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-white font-lisu tracking-wide">
                                Paradise
                            </h2>

                            <span className="block text-white font-inter mx-auto">
                                family dental
                            </span>
                        </div>

                    </div>
                </div>

                {/* Middle Column: Contact Information */}
                <div className="flex flex-col items-start font-inter">
                    <h3 className="font-semibold text-lg mb-3">CONTACT INFORMATION</h3>
                    <p className="text-base mb-1">Address</p>
                    <a 
                        href="https://www.google.com/maps/search/?api=1&query=6930+Destiny+Drive+%23400+Rocklin+CA+95767"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-gray-300 mb-4 hover:text-white transition-colors duration-300"
                    >
                        6930 Destiny Drive #400
                        <br />
                        Rocklin, CA 95767
                    </a>
                    <p className="text-base mb-1">Phone</p>
                    <a 
                        href="tel:+19162597701"
                        className="text-base text-gray-300 mb-4 hover:text-white transition-colors duration-300"
                    >
                        (916) 259-7701
                    </a>
                    <p className="text-base mb-1">Email</p>
                    <a 
                        href="mailto:paradisefamilydental@yahoo.com"
                        className="text-base text-gray-300 hover:text-white transition-colors duration-300"
                    >
                        paradisefamilydental@yahoo.com
                    </a>
                </div>

                {/* Right Column: Social Links */}
                <div className="flex flex-col items-start font-inter">
                    <h3 className="font-semibold text-lg mb-3">SOCIAL</h3>
                    <ul className="space-y-2">
                        {Object.entries(socialLinks).map(([platform, url]) => (
                            <li key={platform}>
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-base text-gray-300 hover:text-white transition duration-300"
                                >
                                    <span className="mr-2">{platform}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Footer Bottom Bar */}
            <div className="max-w-screen-xl mx-auto mt-8 border-t border-white pt-5 font-inter">
                <p className="text-center text-sm text-white">
                    Paradise Dental 2025 | © Copyright
                    <strong> Materials</strong>, used for demo/educational purposes.
                    Content is all demo/mock.
                </p>
            </div>
        </footer>
    );
}
