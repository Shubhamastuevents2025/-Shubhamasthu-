"use client"

import { X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HydrafacialDialogPreview() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* This is a static preview of how the dialog will look */}
      <div className="relative w-full rounded-2xl bg-[#FF007F] p-4 md:p-6 border-2 border-white/20">
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-full text-white hover:bg-white/30 transition-colors">
          <X className="h-4 w-4 sm:h-6 sm:w-6" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <button className="px-4 py-2 rounded-full text-white text-sm md:text-base transition-colors bg-[#FF0066] font-medium">
            HydraFacial
          </button>
          <button className="px-4 py-2 rounded-full text-white text-sm md:text-base transition-colors bg-[#D6267D] hover:bg-[#E0337D]">
            Chemical Peels
          </button>
          <button className="px-4 py-2 rounded-full text-white text-sm md:text-base transition-colors bg-[#D6267D] hover:bg-[#E0337D]">
            Microdermabrasion
          </button>
          <button className="px-4 py-2 rounded-full text-white text-sm md:text-base transition-colors bg-[#D6267D] hover:bg-[#E0337D]">
            LED Therapy
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-[#D6267D]/80 rounded-xl p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6">HydraFacial Treatment</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image */}
            <div className="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              <div className="relative w-full h-64">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <span className="text-gray-500">HydraFacial Image</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-white">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                About <span className="text-pink-200">HydraFacial</span>
              </h3>

              <p className="text-sm md:text-base mb-4">
                HydraFacial is a patented skin treatment available in medical spas and dermatology offices. It's the
                only hydradermabrasion procedure that uses patented technology to cleanse, extract, and hydrate.
              </p>

              <h4 className="text-base md:text-lg font-medium mb-2">Benefits:</h4>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-pink-300 mr-2">❯</span>
                  <span className="text-sm md:text-base">Deep cleansing and exfoliation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-300 mr-2">❯</span>
                  <span className="text-sm md:text-base">Painless extractions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-300 mr-2">❯</span>
                  <span className="text-sm md:text-base">Hydration and antioxidant protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-300 mr-2">❯</span>
                  <span className="text-sm md:text-base">Immediate results with no downtime</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-300 mr-2">❯</span>
                  <span className="text-sm md:text-base">Customizable for all skin types</span>
                </li>
              </ul>

              <Button className="bg-[#FF0066] hover:bg-[#FF3385] text-white px-4 py-2 rounded-full">
                Book a HydraFacial Consultation
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
