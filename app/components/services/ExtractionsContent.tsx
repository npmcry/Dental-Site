export default function ExtractionsContent() {
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#2469FD]">Gentle Extraction Care</h2>
        <p className="text-gray-700 leading-relaxed">
          While we always aim to preserve natural teeth, sometimes extraction is the best option. We ensure the process is comfortable and stress-free.
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
        <h2 className="text-2xl font-semibold text-[#2469FD]">Recovery Process</h2>
        <p className="text-gray-700 leading-relaxed">
          Our team provides detailed aftercare instructions and support throughout your healing process.
        </p>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-[#2469FD] mb-3">Aftercare Steps</h3>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Rest and recovery guidance</li>
            <li>Pain management tips</li>
            <li>Diet recommendations</li>
            <li>Follow-up care schedule</li>
          </ol>
        </div>
      </div>
    </>
  );
} 