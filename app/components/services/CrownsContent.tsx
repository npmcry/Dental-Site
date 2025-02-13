export default function CrownsContent() {
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#2469FD]">Custom Dental Crowns</h2>
        <p className="text-gray-700 leading-relaxed">
          Dental crowns are custom-fitted caps that restore damaged or weakened teeth. Our state-of-the-art crowns are designed to match your natural teeth perfectly.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-[#2469FD] mb-3">When You Need Crowns</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Severely damaged teeth</li>
            <li>After root canal treatment</li>
            <li>Cracked or weakened teeth</li>
            <li>Cosmetic enhancement</li>
          </ul>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#2469FD]">Treatment Process</h2>
        <p className="text-gray-700 leading-relaxed">
          Using advanced digital imaging and precise crafting techniques, we create custom crowns that perfectly match your natural teeth.
        </p>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-[#2469FD] mb-3">Our Process</h3>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Digital scanning and imaging</li>
            <li>Custom crown design</li>
            <li>Precise fitting and adjustment</li>
            <li>Final placement and care instructions</li>
          </ol>
        </div>
      </div>
    </>
  );
} 