import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram, Heart } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-lg">
                U
              </div>
              <span className="font-bold text-xl text-blue-600">UiforU</span>
            </div>
            <p className="text-gray-500 text-sm">
              A modern UI component library built with Tailwind CSS for creating beautiful and responsive web
              interfaces.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Ashish-kolhe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/AshishKolhe_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ashish-kolhe-b4800b343"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/ashishkolhe_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Components</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/components/buttons/button"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200 flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-300 rounded-full mr-2 transition-all duration-200"></span>
                  Buttons
                </Link>
              </li>
              <li>
                <Link
                  href="/components/forms/input"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200 flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-300 rounded-full mr-2 transition-all duration-200"></span>
                  Forms
                </Link>
              </li>
              <li>
                <Link
                  href="/components/layout/accordion"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200 flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-300 rounded-full mr-2 transition-all duration-200"></span>
                  Layout
                </Link>
              </li>
              <li>
                <Link
                  href="/components/data-display/card"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200 flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-300 rounded-full mr-2 transition-all duration-200"></span>
                  Data Display
                </Link>
              </li>
              <li>
                <Link
                  href="/components/overlay/modal"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200 flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-300 rounded-full mr-2 transition-all duration-200"></span>
                  Overlay
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200 flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-300 rounded-full mr-2 transition-all duration-200"></span>
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/components/installation"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200 flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-300 rounded-full mr-2 transition-all duration-200"></span>
                  Installation
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Ashish-kolhe/uiforu/releases"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200 flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-300 rounded-full mr-2 transition-all duration-200"></span>
                  Releases
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Ashish-kolhe/uiforu/issues"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200 flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-300 rounded-full mr-2 transition-all duration-200"></span>
                  Issues
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200 flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-300 rounded-full mr-2 transition-all duration-200"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200 flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-300 rounded-full mr-2 transition-all duration-200"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/license"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200 flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-300 rounded-full mr-2 transition-all duration-200"></span>
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} UiforU. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0 flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" /> by Ashish
          </p>
        </div>
      </div>
    </footer>
  )
}
