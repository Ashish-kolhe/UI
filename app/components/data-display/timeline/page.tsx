import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Timeline, TimelineItem } from "@/components/ui/timeline"
import { CheckCircle, Circle, Clock, Star, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Timeline - UiforU",
  description: "Timeline component for displaying a sequence of events",
}

export default function TimelinePage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Timeline</h1>
          <p className="text-lg text-muted-foreground">
            A timeline component for displaying a sequence of events or activities.
          </p>
        </div>

        <ComponentPreview
          title="Basic Timeline"
          description="A simple timeline with title and description."
          code={`<div className="flex flex-col">
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-500 bg-white z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      </div>
      <div className="h-full w-0.5 bg-blue-200"></div>
    </div>
    <div className="pb-8 mb-4">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">Project Started</h3>
        <span className="text-sm text-gray-500">January 2023</span>
      </div>
      <p className="mt-2 text-gray-600">Initial project planning and team formation.</p>
    </div>
  </div>
  
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-500 bg-white z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <div className="h-full w-0.5 bg-blue-200"></div>
    </div>
    <div className="pb-8 mb-4">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">Development Phase</h3>
        <span className="text-sm text-gray-500">March 2023</span>
      </div>
      <p className="mt-2 text-gray-600">Core features implemented and tested.</p>
    </div>
  </div>
  
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-500 bg-white z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      </div>
    </div>
    <div className="pb-8">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">Project Launch</h3>
        <span className="text-sm text-gray-500">June 2023</span>
      </div>
      <p className="mt-2 text-gray-600">Successfully launched the product to the public.</p>
    </div>
  </div>
</div>`}
          preview={
            <Timeline>
              <TimelineItem
                title="Project Started"
                time="January 2023"
                description="Initial project planning and team formation."
                icon={<Circle className="text-blue-500" size={20} />}
              />
              <TimelineItem
                title="Development Phase"
                time="March 2023"
                description="Core features implemented and tested."
                icon={<CheckCircle className="text-blue-500" size={20} />}
              />
              <TimelineItem
                title="Project Launch"
                time="June 2023"
                description="Successfully launched the product to the public."
                icon={<Star className="text-blue-500" size={20} />}
                isLast
              />
            </Timeline>
          }
        />

        <ComponentPreview
          title="Timeline with Status Icons"
          description="Timeline with different status icons for each step."
          code={`<div className="flex flex-col">
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-500 bg-white z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <div className="h-full w-0.5 bg-gray-200"></div>
    </div>
    <div className="pb-8 mb-4">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">Order Placed</h3>
        <span className="text-sm text-gray-500">May 15, 2023 - 10:30 AM</span>
      </div>
      <p className="mt-2 text-gray-600">Your order has been successfully placed.</p>
    </div>
  </div>
  
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-500 bg-white z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <div className="h-full w-0.5 bg-gray-200"></div>
    </div>
    <div className="pb-8 mb-4">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">Processing</h3>
        <span className="text-sm text-gray-500">May 15, 2023 - 11:45 AM</span>
      </div>
      <p className="mt-2 text-gray-600">Your order is being processed and prepared for shipping.</p>
    </div>
  </div>
  
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-500 bg-white z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      </div>
      <div className="h-full w-0.5 bg-gray-200"></div>
    </div>
    <div className="pb-8 mb-4">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">Shipped</h3>
        <span className="text-sm text-gray-500">May 16, 2023 - 9:00 AM</span>
      </div>
      <p className="mt-2 text-gray-600">Your order has been shipped. Tracking information will be available soon.</p>
    </div>
  </div>
  
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 bg-white z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </div>
    </div>
    <div className="pb-8">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-500">Delivered</h3>
        <span className="text-sm text-gray-500">Estimated: May 18, 2023</span>
      </div>
      <p className="mt-2 text-gray-500">Your order will be delivered soon.</p>
    </div>
  </div>
</div>`}
          preview={
            <Timeline>
              <TimelineItem
                title="Order Placed"
                time="May 15, 2023 - 10:30 AM"
                description="Your order has been successfully placed."
                icon={<CheckCircle className="text-green-500" size={20} />}
              />
              <TimelineItem
                title="Processing"
                time="May 15, 2023 - 11:45 AM"
                description="Your order is being processed and prepared for shipping."
                icon={<CheckCircle className="text-green-500" size={20} />}
              />
              <TimelineItem
                title="Shipped"
                time="May 16, 2023 - 9:00 AM"
                description="Your order has been shipped. Tracking information will be available soon."
                icon={<Clock className="text-blue-500" size={20} />}
              />
              <TimelineItem
                title="Delivered"
                time="Estimated: May 18, 2023"
                description="Your order will be delivered soon."
                icon={<Circle className="text-gray-400" size={20} />}
                isLast
              />
            </Timeline>
          }
        />

        <ComponentPreview
          title="Vertical Timeline with Custom Content"
          description="Timeline with custom content in each item."
          code={`<div className="flex flex-col">
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-500 bg-white z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
      </div>
      <div className="h-full w-0.5 bg-blue-200"></div>
    </div>
    <div className="pb-8 mb-4">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">System Update</h3>
        <span className="text-sm text-gray-500">April 10, 2023</span>
      </div>
      <div className="mt-2 p-4 bg-blue-50 rounded-md border border-blue-200">
        <p className="text-blue-800 font-medium">Scheduled Maintenance</p>
        <p className="text-blue-600 mt-1">The system will be unavailable from 2:00 AM to 4:00 AM for scheduled maintenance.</p>
      </div>
    </div>
  </div>
  
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-500 bg-white z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      </div>
      <div className="h-full w-0.5 bg-blue-200"></div>
    </div>
    <div className="pb-8 mb-4">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">Security Alert</h3>
        <span className="text-sm text-gray-500">April 12, 2023</span>
      </div>
      <div className="mt-2 p-4 bg-amber-50 rounded-md border border-amber-200">
        <p className="text-amber-800 font-medium">Unusual Login Attempt</p>
        <p className="text-amber-600 mt-1">We detected an unusual login attempt from a new device. Please verify if this was you.</p>
        <div className="mt-3 flex space-x-2">
          <button className="px-3 py-1 bg-amber-500 text-white rounded-md text-sm hover:bg-amber-600">Yes, it was me</button>
          <button className="px-3 py-1 bg-white border border-amber-500 text-amber-500 rounded-md text-sm hover:bg-amber-50">Not me</button>
        </div>
      </div>
    </div>
  </div>
  
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-500 bg-white z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
    </div>
    <div className="pb-8">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">Account Verified</h3>
        <span className="text-sm text-gray-500">April 15, 2023</span>
      </div>
      <div className="mt-2 p-4 bg-green-50 rounded-md border border-green-200">
        <p className="text-green-800 font-medium">Verification Complete</p>
        <p className="text-green-600 mt-1">Your account has been successfully verified. You now have access to all features.</p>
      </div>
    </div>
  </div>
</div>`}
          preview={
            <Timeline>
              <TimelineItem
                title="System Update"
                time="April 10, 2023"
                icon={<AlertCircle className="text-blue-500" size={20} />}
              >
                <div className="mt-2 p-4 bg-blue-50 rounded-md border border-blue-200">
                  <p className="text-blue-800 font-medium">Scheduled Maintenance</p>
                  <p className="text-blue-600 mt-1">
                    The system will be unavailable from 2:00 AM to 4:00 AM for scheduled maintenance.
                  </p>
                </div>
              </TimelineItem>
              <TimelineItem
                title="Security Alert"
                time="April 12, 2023"
                icon={<AlertCircle className="text-amber-500" size={20} />}
              >
                <div className="mt-2 p-4 bg-amber-50 rounded-md border border-amber-200">
                  <p className="text-amber-800 font-medium">Unusual Login Attempt</p>
                  <p className="text-amber-600 mt-1">
                    We detected an unusual login attempt from a new device. Please verify if this was you.
                  </p>
                  <div className="mt-3 flex space-x-2">
                    <button className="px-3 py-1 bg-amber-500 text-white rounded-md text-sm hover:bg-amber-600">
                      Yes, it was me
                    </button>
                    <button className="px-3 py-1 bg-white border border-amber-500 text-amber-500 rounded-md text-sm hover:bg-amber-50">
                      Not me
                    </button>
                  </div>
                </div>
              </TimelineItem>
              <TimelineItem
                title="Account Verified"
                time="April 15, 2023"
                icon={<CheckCircle className="text-green-500" size={20} />}
                isLast
              >
                <div className="mt-2 p-4 bg-green-50 rounded-md border border-green-200">
                  <p className="text-green-800 font-medium">Verification Complete</p>
                  <p className="text-green-600 mt-1">
                    Your account has been successfully verified. You now have access to all features.
                  </p>
                </div>
              </TimelineItem>
            </Timeline>
          }
        />
      </div>
    </div>
  )
}
