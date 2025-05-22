"use client"

import { Shield, Sun, Clock, Zap, Star, Droplet } from "lucide-react"
import Image from "next/image"

export default function HydrafacialDialogPreview() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative w-full rounded-2xl bg-[#FF007F] p-6 text-white">
        {/* Close button */}
        <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Glow with Confidence – Skin Treatments That Work</h1>
          <div className="w-16 h-1 bg-white mx-auto my-4"></div>
          <p className="text-sm max-w-2xl mx-auto">
            Reveal flawless skin with our advanced treatments at Siri Beauty in Jayanagar, Bangalore. Our comprehensive
            skin solutions address all your concerns from acne to aging.
          </p>
        </div>

        {/* Advanced Facial Treatments */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">Advanced Facial Treatments</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Hydrafacial Card */}
            <div className="bg-[#9C1458] rounded-xl overflow-hidden">
              <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-400">Hydrafacial Image</div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Hydrafacial</h3>
                <p className="text-sm text-white/90">
                  Deep cleansing, exfoliation, extraction, and hydration for radiant skin
                </p>
              </div>
            </div>

            {/* Skin Brightening Card */}
            <div className="bg-[#9C1458] rounded-xl overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                <Image src="/placeholder.svg?key=8tadr" alt="Skin Brightening" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Skin Brightening</h3>
                <p className="text-sm text-white/90">
                  Revitalize dull skin and achieve a luminous, even-toned complexion
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skin Correction Therapies */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">Skin Correction Therapies</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Acne & Pimple Marks */}
            <div className="bg-[#6D1158] rounded-xl p-4">
              <div className="flex justify-center mb-3">
                <Shield className="h-8 w-8 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Acne & Pimple Marks</h3>
              <p className="text-xs text-center text-white/90">Targeted treatments to clear acne and reduce scarring</p>
            </div>

            {/* Pigmentation Removal */}
            <div className="bg-[#6D1158] rounded-xl p-4">
              <div className="flex justify-center mb-3">
                <Sun className="h-8 w-8 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Pigmentation Removal</h3>
              <p className="text-xs text-center text-white/90">
                Advanced solutions for dark spots and uneven skin tone
              </p>
            </div>

            {/* Anti-Aging & Wrinkle Reduction */}
            <div className="bg-[#6D1158] rounded-xl p-4">
              <div className="flex justify-center mb-3">
                <Clock className="h-8 w-8 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Anti-Aging & Wrinkle Reduction</h3>
              <p className="text-xs text-center text-white/90">Turn back the clock with our rejuvenating treatments</p>
            </div>

            {/* Dark Circle Removal */}
            <div className="bg-[#6D1158] rounded-xl p-4">
              <div className="flex justify-center mb-3">
                <Zap className="h-8 w-8 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Dark Circle Removal</h3>
              <p className="text-xs text-center text-white/90">Brighten under-eye areas and look refreshed</p>
            </div>

            {/* Carbon Laser Peel */}
            <div className="bg-[#6D1158] rounded-xl p-4">
              <div className="flex justify-center mb-3">
                <Star className="h-8 w-8 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Carbon Laser Peel</h3>
              <p className="text-xs text-center text-white/90">Advanced exfoliation for smoother, clearer skin</p>
            </div>

            {/* Tattoo Removal */}
            <div className="bg-[#6D1158] rounded-xl p-4">
              <div className="flex justify-center mb-3">
                <Zap className="h-8 w-8 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Tattoo Removal</h3>
              <p className="text-xs text-center text-white/90">Safe and effective removal of unwanted tattoos</p>
            </div>
          </div>
        </div>

        {/* PRP for Face */}
        <div className="mb-8">
          <div className="bg-[#6D1158] rounded-xl p-4 max-w-xs mx-auto">
            <div className="flex justify-center mb-3">
              <Droplet className="h-8 w-8 text-cyan-300" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">PRP for Face</h3>
            <p className="text-xs text-center text-white/90">Rejuvenate your skin with platelet-rich plasma therapy</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mt-8 space-x-4 text-xs">
          <div className="px-4 py-2 bg-[#6D1158] rounded-full">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 3L20 7V17L12 21L4 17V7L12 3Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              PREMIUM BEAUTY SERVICES
            </span>
          </div>
          <div className="px-4 py-2 bg-[#6D1158] rounded-full">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              LUXURY TREATMENTS
            </span>
          </div>
          <div className="px-4 py-2 bg-[#6D1158] rounded-full">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              EXPERT STYLISTS
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
