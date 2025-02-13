export default function CleaningsContent() {
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#2469FD]">Professional Dental Care</h2>
        <p className="text-gray-700 leading-relaxed">
          Regular professional cleanings are essential for maintaining optimal oral health. Our experienced dental hygienists use advanced techniques to remove plaque, tartar, and stains.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-[#2469FD] mb-3">What to Expect</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Comprehensive oral examination</li>
            <li>Professional scaling and polishing</li>
            <li>Fluoride treatment if needed</li>
            <li>Oral hygiene guidance</li>
          </ul>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#2469FD]">Benefits</h2>
        <p className="text-gray-700 leading-relaxed">
          Regular cleanings prevent cavities, gum disease, and other oral health issues. We recommend visits every six months for optimal dental health.
        </p>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-[#2469FD] mb-3">Our Process</h3>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Initial examination</li>
            <li>Plaque and tartar removal</li>
            <li>Deep cleaning and polishing</li>
            <li>Preventive care guidance</li>
          </ol>
        </div>
      </div>
    </>
  );
} 