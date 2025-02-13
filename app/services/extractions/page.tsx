import Link from "next/link"; // **Removed: import Image from "next/image";**

export default function ExtractionsPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          {/* **Removed: Image section** */}
          {/* <div className="relative w-[120px] h-[120px] mb-6">
            <Image 
              src="/assets/service-icons/extractions.svg"
              alt="Tooth Extractions"
              fill
              className="object-contain"
              priority
            />
          </div> */}
          <h1 className="text-5xl font-bold text-[#2469FD]">Tooth Extractions</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#2469FD]">Gentle Extraction Care</h2>
            <p className="text-gray-700 leading-relaxed">
              While we always aim to preserve natural teeth, sometimes extraction is the best option for your oral health. We ensure the process is as comfortable and stress-free as possible.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-[#2469FD] mb-3">Common Reasons</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Severe decay or damage</li>
                <li>Impacted wisdom teeth</li>
                <li>Overcrowding</li>
                <li>Advanced gum disease</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#2469FD]">What to Expect</h2>
            <p className="text-gray-700 leading-relaxed">
              Our team uses advanced techniques and proper anesthesia to ensure your comfort. We will also provide detailed aftercare instructions for optimal healing.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-[#2469FD] mb-3">Recovery Process</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Initial healing (24-48 hours)</li>
                <li>Proper aftercare instructions</li>
                <li>Follow-up appointment if needed</li>
                <li>Discussion of replacement options</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/appointment" 
            className="inline-block bg-[#2469FD] text-white px-10 py-4 rounded-[30px] font-semibold hover:bg-[#2469FD]/90 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
