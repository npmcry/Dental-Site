import Link from "next/link";

interface ServiceLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function ServiceLayout({ title, children }: ServiceLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <Link 
            href="/#services" 
            className="text-[#2469FD] hover:text-[#2469FD]/80 mb-4 inline-block"
          >
            ← Back to Services
          </Link>
          <h1 className="text-5xl font-bold text-[#2469FD] mt-4">{title}</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {children}
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