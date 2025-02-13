import Image from "next/image";

export default function Footer() {
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
                    <p className="text-base text-gray-300 mb-4">
                        6930 Destiny Drive #400
                        <br />
                        Rocklin, CA 95767
                    </p>
                    <p className="text-base mb-1">Phone</p>
                    <p className="text-base text-gray-300 mb-4">(916) 259-7701</p>
                    <p className="text-base mb-1">Email</p>
                    <p className="text-base text-gray-300">
                        paradisefamilydental@yahoo.com
                    </p>
                </div>

                {/* Right Column: Social Links */}
                <div className="flex flex-col items-start font-inter">
                    <h3 className="font-semibold text-lg mb-3">SOCIAL</h3>
                    <ul className="space-y-2">
                        {["Instagram", "Facebook", "YouTube", "TikTok"].map((platform) => (
                            <li key={platform}>
                                <a
                                    href="#"
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
