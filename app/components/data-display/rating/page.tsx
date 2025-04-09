import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Rating } from "@/components/ui/rating"

export const metadata: Metadata = {
  title: "Rating - UiforU",
  description: "Star rating component for collecting user feedback",
}

export default function RatingPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Rating</h1>
          <p className="text-lg text-muted-foreground">
            A star rating component for collecting user feedback or displaying ratings.
          </p>
        </div>

        <ComponentPreview
          title="Basic Rating"
          description="A simple 5-star rating component."
          code={`<div className="flex items-center">
  {[...Array(5)].map((_, index) => (
    <button
      key={index}
      type="button"
      className="cursor-default text-amber-400 mr-1"
      disabled
      aria-label={\`\${index + 1} stars\`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 fill-current"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  ))}
</div>`}
          preview={<Rating value={3} readonly />}
        />

        <ComponentPreview
          title="Interactive Rating"
          description="A rating component that allows users to select a rating."
          code={`<div className="flex items-center">
  {[...Array(5)].map((_, index) => {
    const isActive = index < 4;
    
    return (
      <button
        key={index}
        type="button"
        className={\`cursor-pointer transition-transform duration-200 \${
          isActive ? "text-amber-400" : "text-gray-300"
        } hover:scale-110 focus:outline-none mr-1\`}
        aria-label={\`\${index + 1} stars\`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 fill-current"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  })}
</div>`}
          preview={<Rating value={4} />}
        />

        <ComponentPreview
          title="Different Sizes"
          description="Rating component in different sizes."
          code={`<div className="space-y-4">
  <div className="flex items-center">
    {[...Array(5)].map((_, index) => (
      <button
        key={index}
        type="button"
        className={\`cursor-default \${index < 3 ? "text-amber-400" : "text-gray-300"} mr-1\`}
        disabled
        aria-label={\`\${index + 1} stars\`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 fill-current"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    ))}
    <span className="ml-2 text-sm text-gray-500">Small</span>
  </div>
  
  <div className="flex items-center">
    {[...Array(5)].map((_, index) => (
      <button
        key={index}
        type="button"
        className={\`cursor-default \${index < 3 ? "text-amber-400" : "text-gray-300"} mr-1\`}
        disabled
        aria-label={\`\${index + 1} stars\`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 fill-current"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    ))}
    <span className="ml-2 text-sm text-gray-500">Medium</span>
  </div>
  
  <div className="flex items-center">
    {[...Array(5)].map((_, index) => (
      <button
        key={index}
        type="button"
        className={\`cursor-default \${index < 3 ? "text-amber-400" : "text-gray-300"} mr-1\`}
        disabled
        aria-label={\`\${index + 1} stars\`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 fill-current"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    ))}
    <span className="ml-2 text-sm text-gray-500">Large</span>
  </div>
</div>`}
          preview={
            <div className="space-y-4">
              <div className="flex items-center">
                <Rating value={3} size="sm" readonly />
                <span className="ml-2 text-sm text-gray-500">Small</span>
              </div>
              <div className="flex items-center">
                <Rating value={3} size="md" readonly />
                <span className="ml-2 text-sm text-gray-500">Medium</span>
              </div>
              <div className="flex items-center">
                <Rating value={3} size="lg" readonly />
                <span className="ml-2 text-sm text-gray-500">Large</span>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="Different Colors"
          description="Rating component in different colors."
          code={`<div className="space-y-4">
  <div className="flex items-center">
    {[...Array(5)].map((_, index) => (
      <button
        key={index}
        type="button"
        className={\`cursor-default \${index < 4 ? "text-amber-400" : "text-gray-300"} mr-1\`}
        disabled
        aria-label={\`\${index + 1} stars\`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 fill-current"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    ))}
    <span className="ml-2 text-sm text-gray-500">Gold</span>
  </div>
  
  <div className="flex items-center">
    {[...Array(5)].map((_, index) => (
      <button
        key={index}
        type="button"
        className={\`cursor-default \${index < 4 ? "text-red-500" : "text-gray-300"} mr-1\`}
        disabled
        aria-label={\`\${index + 1} stars\`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 fill-current"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    ))}
    <span className="ml-2 text-sm text-gray-500">Red</span>
  </div>
  
  <div className="flex items-center">
    {[...Array(5)].map((_, index) => (
      <button
        key={index}
        type="button"
        className={\`cursor-default \${index < 4 ? "text-blue-500" : "text-gray-300"} mr-1\`}
        disabled
        aria-label={\`\${index + 1} stars\`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 fill-current"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    ))}
    <span className="ml-2 text-sm text-gray-500">Blue</span>
  </div>
  
  <div className="flex items-center">
    {[...Array(5)].map((_, index) => (
      <button
        key={index}
        type="button"
        className={\`cursor-default \${index < 4 ? "text-green-500" : "text-gray-300"} mr-1\`}
        disabled
        aria-label={\`\${index + 1} stars\`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 fill-current"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    ))}
    <span className="ml-2 text-sm text-gray-500">Green</span>
  </div>
</div>`}
          preview={
            <div className="space-y-4">
              <div className="flex items-center">
                <Rating value={4} color="gold" readonly />
                <span className="ml-2 text-sm text-gray-500">Gold</span>
              </div>
              <div className="flex items-center">
                <Rating value={4} color="red" readonly />
                <span className="ml-2 text-sm text-gray-500">Red</span>
              </div>
              <div className="flex items-center">
                <Rating value={4} color="blue" readonly />
                <span className="ml-2 text-sm text-gray-500">Blue</span>
              </div>
              <div className="flex items-center">
                <Rating value={4} color="green" readonly />
                <span className="ml-2 text-sm text-gray-500">Green</span>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="With Label"
          description="Rating component with a label showing the selected rating."
          code={`<div className="flex items-center">
  {[...Array(5)].map((_, index) => (
    <button
      key={index}
      type="button"
      className={\`cursor-pointer transition-transform duration-200 \${
        index < 4 ? "text-amber-400" : "text-gray-300"
      } hover:scale-110 focus:outline-none mr-1\`}
      aria-label={\`\${index + 1} stars\`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 fill-current"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  ))}
  <span className="ml-2 text-sm font-medium">4.0 out of 5</span>
</div>`}
          preview={
            <div className="flex items-center">
              <Rating value={4} readonly />
              <span className="ml-2 text-sm font-medium">4.0 out of 5</span>
            </div>
          }
        />
      </div>
    </div>
  )
}
