export default function LoadingFallback() {
  return (
    <div className="fixed inset-0 bg-royal-950 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-gold-500 text-xl font-bold">Loading...</h2>
        <p className="text-white/70 mt-2">Please wait while we prepare your experience</p>
      </div>
    </div>
  )
}
