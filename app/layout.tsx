import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import PersistentAnimations from "@/components/persistent-animations"
import CursorEffects from "@/components/cursor-effects"
import SafeAnimationProvider from "@/components/safe-animation-provider"
import ErrorBoundary from "@/components/error-boundary"
import NoScriptFallback from "@/components/noscript-fallback"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shubhamasthu Event Planners - Creating Memorable Events in Mysore",
  description: "Professional event planning services for weddings, corporate events, and celebrations in Mysore.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Add error handling script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Global error handler
              window.addEventListener('error', function(event) {
                // Prevent ResizeObserver errors from showing
                if (event.message && (
                  event.message.includes('ResizeObserver') || 
                  event.message.includes('Cannot destructure') ||
                  event.message.includes('undefined')
                )) {
                  event.preventDefault();
                  event.stopPropagation();
                  return true;
                }
              }, true);
              
              // Suppress specific console errors
              const originalConsoleError = console.error;
              console.error = function() {
                const args = Array.from(arguments);
                const errorMessage = args[0]?.toString() || '';
                
                if (
                  errorMessage.includes('ResizeObserver') ||
                  errorMessage.includes('Cannot destructure') ||
                  errorMessage.includes('undefined') ||
                  errorMessage.includes('Failed to execute') ||
                  errorMessage.includes('Hydration')
                ) {
                  return;
                }
                
                return originalConsoleError.apply(console, args);
              };
              
              // Fix for older browsers
              if (!window.requestIdleCallback) {
                window.requestIdleCallback = function(callback) {
                  return setTimeout(function() {
                    callback({
                      didTimeout: false,
                      timeRemaining: function() {
                        return Infinity;
                      }
                    });
                  }, 1);
                };
                window.cancelIdleCallback = function(id) {
                  clearTimeout(id);
                };
              }
              
              // Detect low-end devices and reduce animations
              window.__LOW_PERFORMANCE_MODE = false;
              try {
                const isLowEnd = 
                  navigator.hardwareConcurrency <= 4 || 
                  navigator.deviceMemory <= 4 ||
                  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                  
                window.__LOW_PERFORMANCE_MODE = isLowEnd;
              } catch (e) {
                // Ignore errors in older browsers
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <NoScriptFallback />
        <ErrorBoundary>
          <CursorEffects />
          <SafeAnimationProvider>
            <PersistentAnimations />
            {children}
          </SafeAnimationProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
