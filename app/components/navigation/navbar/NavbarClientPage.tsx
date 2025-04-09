"use client"

import { ComponentPreview } from "@/components/component-preview"

export default function NavbarClientPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Navbar</h1>
        <p className="text-gray-500">A responsive navigation bar component for website headers.</p>
      </div>

      <div className="space-y-12">
        <div>
          <h2 className="text-xl font-semibold mb-4">Basic Navbar</h2>
          <ComponentPreview
            name="Basic Navbar"
            preview={`
              <nav className="bg-white border-b border-gray-200 px-4 py-2.5">
                <div className="flex flex-wrap justify-between items-center">
                  <a href="#" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap">Brand</span>
                  </a>
                  <div className="flex items-center lg:order-2">
                    <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90">
                      Sign In
                    </button>
                    <button className="inline-flex items-center p-2 ml-3 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                      <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-primary rounded lg:p-0">Home</a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0">About</a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0">Services</a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            `}
            code={`
import React from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5">
      <div className="flex flex-wrap justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">Brand</span>
        </a>
        <div className="flex items-center lg:order-2">
          <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90">
            Sign In
          </button>
          <button 
            className="inline-flex items-center p-2 ml-3 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div className={\`\${isMenuOpen ? 'block' : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1\`}>
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-primary rounded lg:p-0">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
            `}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Navbar with Logo</h2>
          <ComponentPreview
            name="Navbar with Logo"
            preview={`
              <nav className="bg-white shadow-sm px-4 py-3">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-primary rounded-md"></div>
                    </div>
                    <div className="ml-3 font-medium">Company Name</div>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-center space-x-8">
                      <a href="#" className="text-primary font-medium">Home</a>
                      <a href="#" className="text-gray-600 hover:text-primary">Products</a>
                      <a href="#" className="text-gray-600 hover:text-primary">Features</a>
                      <a href="#" className="text-gray-600 hover:text-primary">Pricing</a>
                      <a href="#" className="text-gray-600 hover:text-primary">Contact</a>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90">
                      Get Started
                    </button>
                  </div>
                  <div className="md:hidden">
                    <button className="p-2 text-gray-600 hover:text-primary">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </nav>
            `}
            code={`
import React from "react";

export function NavbarWithLogo() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <nav className="bg-white shadow-sm px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 bg-primary rounded-md"></div>
            </div>
            <div className="ml-3 font-medium">Company Name</div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-primary font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-primary">Products</a>
              <a href="#" className="text-gray-600 hover:text-primary">Features</a>
              <a href="#" className="text-gray-600 hover:text-primary">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-primary">Contact</a>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90">
              Get Started
            </button>
          </div>
          <div className="md:hidden">
            <button 
              className="p-2 text-gray-600 hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-primary font-medium">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-primary">Products</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-primary">Features</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-primary">Pricing</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-primary">Contact</a>
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90">
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
}
            `}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Transparent Navbar</h2>
          <ComponentPreview
            name="Transparent Navbar"
            preview={`
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
                <nav className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3">
                  <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-white font-bold text-xl">Glass UI</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                      <a href="#" className="text-white font-medium">Home</a>
                      <a href="#" className="text-white/80 hover:text-white">Features</a>
                      <a href="#" className="text-white/80 hover:text-white">Pricing</a>
                      <a href="#" className="text-white/80 hover:text-white">About</a>
                    </div>
                    <div>
                      <button className="px-4 py-2 text-sm font-medium bg-white text-blue-600 rounded-md hover:bg-white/90">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            `}
            code={`
export function TransparentNavbar() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <nav className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">Glass UI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white font-medium">Home</a>
            <a href="#" className="text-white/80 hover:text-white">Features</a>
            <a href="#" className="text-white/80 hover:text-white">Pricing</a>
            <a href="#" className="text-white/80 hover:text-white">About</a>
          </div>
          <div>
            <button className="px-4 py-2 text-sm font-medium bg-white text-blue-600 rounded-md hover:bg-white/90">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
            `}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Implementation</h2>
          <div className="prose max-w-none">
            <p>
              To use the Navbar component in your project, you can copy the code from the examples above. The Navbar
              component is built with Tailwind CSS and vanilla JavaScript, making it easy to integrate into any project.
            </p>
            <h3>Key Features</h3>
            <ul>
              <li>Fully responsive design that works on all screen sizes</li>
              <li>Mobile menu toggle with smooth animations</li>
              <li>Customizable colors and styling</li>
              <li>Accessible navigation with proper ARIA attributes</li>
            </ul>
            <h3>Customization</h3>
            <p>
              You can customize the Navbar by modifying the Tailwind CSS classes. For example, to change the primary
              color, update the <code>bg-primary</code> and <code>text-primary</code> classes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
