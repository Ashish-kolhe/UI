import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

export const metadata: Metadata = {
  title: "Hero Component",
  description: "A hero section component for landing pages",
}

export default function HeroPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Hero</h1>
        <p className="text-gray-500">A hero section component for landing pages.</p>
      </div>

      <div className="space-y-12">
        <div>
          <h2 className="text-xl font-semibold mb-4">Basic Hero</h2>
          <ComponentPreview
            name="Basic Hero"
            preview={`
              <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">A better way to</span>
                    <span className="block text-primary">build websites</span>
                  </h1>
                  <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Create beautiful, responsive websites with our modern UI components. Fast, accessible, and easy to customize.
                  </p>
                  <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                    <div className="rounded-md shadow">
                      <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10">
                        Get started
                      </a>
                    </div>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                      <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            `}
            code={`
export function Hero() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">A better way to</span>
          <span className="block text-primary">build websites</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Create beautiful, responsive websites with our modern UI components. Fast, accessible, and easy to customize.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10">
              Get started
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
            `}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Hero with Image</h2>
          <ComponentPreview
            name="Hero with Image"
            preview={`
              <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                  <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
                      <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                          <span className="block xl:inline">Modern UI for</span>
                          <span className="block text-primary xl:inline"> your next project</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                          Build beautiful, responsive websites with our modern UI components. Fast, accessible, and easy to customize.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                          <div className="rounded-md shadow">
                            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10">
                              Get started
                            </a>
                          </div>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10">
                              Live demo
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                      <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                  </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                  <div className="h-56 w-full bg-gray-300 sm:h-72 md:h-96 lg:w-full lg:h-full"></div>
                </div>
              </div>
            `}
            code={`
export function HeroWithImage() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Modern UI for</span>
                <span className="block text-primary xl:inline"> your next project</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Build beautiful, responsive websites with our modern UI components. Fast, accessible, and easy to customize.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10">
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10">
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        {/* Replace with your image */}
        <div className="h-56 w-full bg-gray-300 sm:h-72 md:h-96 lg:w-full lg:h-full"></div>
      </div>
    </div>
  );
}
            `}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Centered Hero with Background</h2>
          <ComponentPreview
            name="Centered Hero with Background"
            preview={`
              <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 py-16 sm:py-24">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600 opacity-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900 opacity-30"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                      Take your app to the next level
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                      Our UI components are designed to help you build beautiful, responsive interfaces quickly and efficiently.
                    </p>
                    <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
                      <div className="rounded-md shadow">
                        <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                          Get started
                        </a>
                      </div>
                      <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                        <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10">
                          Live demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `}
            code={`
export function CenteredHeroWithBackground() {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 py-16 sm:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900 opacity-30"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Take your app to the next level
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
            Our UI components are designed to help you build beautiful, responsive interfaces quickly and efficiently.
          </p>
          <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10">
                Live demo
              </a>
            </div>
          </div>
        </div>
      </div>
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
              To use the Hero component in your project, you can copy the code from the examples above. The Hero
              component is built with Tailwind CSS, making it easy to integrate into any project.
            </p>
            <h3>Key Features</h3>
            <ul>
              <li>Fully responsive design that works on all screen sizes</li>
              <li>Multiple layout options (centered, with image, with background)</li>
              <li>Customizable colors and styling</li>
              <li>Optimized for readability and conversion</li>
            </ul>
            <h3>Customization</h3>
            <p>
              You can customize the Hero component by modifying the Tailwind CSS classes. For example, to change the
              primary color, update the <code>text-primary</code> and <code>bg-primary</code> classes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
