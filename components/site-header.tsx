"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Github, Home, Layers, FileText, Download, ExternalLink, ChevronRight } from "lucide-react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    // Set active link based on current path
    const path = window.location.pathname
    setActiveLink(path)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-gray-200 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-lg transform group-hover:rotate-6 transition-transform duration-300">
                U
              </div>
              <span className="font-bold text-xl text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
                UiforU
              </span>
            </Link>
            <nav className="hidden md:ml-10 md:flex md:space-x-1">
              <Link
                href="/"
                className={`flex items-center text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md hover:bg-blue-50 ${
                  activeLink === "/" ? "text-blue-600 bg-blue-50" : ""
                }`}
              >
                <Home className="w-4 h-4 mr-1.5" />
                Home
                <span
                  className={`ml-1 w-1 h-1 rounded-full bg-blue-600 transition-all duration-300 ${
                    activeLink === "/" ? "opacity-100" : "opacity-0"
                  }`}
                ></span>
              </Link>
              <Link
                href="/components"
                className={`flex items-center text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md hover:bg-blue-50 ${
                  activeLink.includes("/components") ? "text-blue-600 bg-blue-50" : ""
                }`}
              >
                <Layers className="w-4 h-4 mr-1.5" />
                Components
                <span
                  className={`ml-1 w-1 h-1 rounded-full bg-blue-600 transition-all duration-300 ${
                    activeLink.includes("/components") ? "opacity-100" : "opacity-0"
                  }`}
                ></span>
              </Link>
              <Link
                href="/docs"
                className={`flex items-center text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md hover:bg-blue-50 ${
                  activeLink.includes("/docs") ? "text-blue-600 bg-blue-50" : ""
                }`}
              >
                <FileText className="w-4 h-4 mr-1.5" />
                Documentation
                <span
                  className={`ml-1 w-1 h-1 rounded-full bg-blue-600 transition-all duration-300 ${
                    activeLink.includes("/docs") ? "opacity-100" : "opacity-0"
                  }`}
                ></span>
              </Link>
              <Link
                href="/components/installation"
                className={`flex items-center text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md hover:bg-blue-50 ${
                  activeLink.includes("/installation") ? "text-blue-600 bg-blue-50" : ""
                }`}
              >
                <Download className="w-4 h-4 mr-1.5" />
                Installation
                <span
                  className={`ml-1 w-1 h-1 rounded-full bg-blue-600 transition-all duration-300 ${
                    activeLink.includes("/installation") ? "opacity-100" : "opacity-0"
                  }`}
                ></span>
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/yourusername/uiforu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4 group relative overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-blue-700 group-hover:translate-x-0"></span>
              <span className="relative flex items-center">
                <Github className="mr-2 h-4 w-4" />
                GitHub
                <ExternalLink className="ml-1 h-3 w-3 opacity-70" />
              </span>
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6 transition-transform duration-200 rotate-90" />
              ) : (
                <Menu className="block h-6 w-6 transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className={`flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
              activeLink === "/" ? "text-blue-600 bg-blue-50" : "text-gray-900 hover:bg-blue-50 hover:text-blue-600"
            } transition-colors duration-200`}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="flex items-center">
              <Home className="w-5 h-5 mr-3" />
              Home
            </span>
            <ChevronRight
              className={`w-4 h-4 transition-transform duration-200 ${
                activeLink === "/" ? "text-blue-600" : "text-gray-400"
              }`}
            />
          </Link>
          <Link
            href="/components"
            className={`flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
              activeLink.includes("/components")
                ? "text-blue-600 bg-blue-50"
                : "text-gray-900 hover:bg-blue-50 hover:text-blue-600"
            } transition-colors duration-200`}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="flex items-center">
              <Layers className="w-5 h-5 mr-3" />
              Components
            </span>
            <ChevronRight
              className={`w-4 h-4 transition-transform duration-200 ${
                activeLink.includes("/components") ? "text-blue-600" : "text-gray-400"
              }`}
            />
          </Link>
          <Link
            href="/docs"
            className={`flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
              activeLink.includes("/docs")
                ? "text-blue-600 bg-blue-50"
                : "text-gray-900 hover:bg-blue-50 hover:text-blue-600"
            } transition-colors duration-200`}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="flex items-center">
              <FileText className="w-5 h-5 mr-3" />
              Documentation
            </span>
            <ChevronRight
              className={`w-4 h-4 transition-transform duration-200 ${
                activeLink.includes("/docs") ? "text-blue-600" : "text-gray-400"
              }`}
            />
          </Link>
          <Link
            href="/components/installation"
            className={`flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
              activeLink.includes("/installation")
                ? "text-blue-600 bg-blue-50"
                : "text-gray-900 hover:bg-blue-50 hover:text-blue-600"
            } transition-colors duration-200`}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="flex items-center">
              <Download className="w-5 h-5 mr-3" />
              Installation
            </span>
            <ChevronRight
              className={`w-4 h-4 transition-transform duration-200 ${
                activeLink.includes("/installation") ? "text-blue-600" : "text-gray-400"
              }`}
            />
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="px-4 flex items-center justify-end">
            <a
              href="https://github.com/yourusername/uiforu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 group"
              onClick={() => setIsMenuOpen(false)}
            >
              <Github className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              GitHub
              <ExternalLink className="ml-1 h-3 w-3 opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
