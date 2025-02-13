export default function FillingsContent() {
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#2469FD]">Modern Dental Solutions</h2>
        <p className="text-gray-700 leading-relaxed">
          Our tooth-colored fillings are designed to restore damaged teeth while maintaining a natural appearance. Using the latest composite materials, we ensure durability and aesthetics.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-[#2469FD] mb-3">Benefits</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Natural-looking results</li>
            <li>Durable and long-lasting</li>
            <li>Preserves more tooth structure</li>
            <li>Completed in one visit</li>
          </ul>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#2469FD]">What to Expect</h2>
        <p className="text-gray-700 leading-relaxed">
          The filling procedure is quick and comfortable. We use local anesthesia to ensure a pain-free experience, and most treatments can be completed in a single visit.
        </p>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-[#2469FD] mb-3">Our Process</h3>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Thorough examination</li>
            <li>Gentle removal of decay</li>
            <li>Composite filling placement</li>
            <li>Final shaping and polishing</li>
          </ol>
        </div>
      </div>
    </>
  );
} 