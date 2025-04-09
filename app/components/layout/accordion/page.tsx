import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"

export const metadata: Metadata = {
  title: "Accordion - UI Library",
  description: "Accordion component for collapsible content",
}

export default function AccordionPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Accordion</h1>
          <p className="text-lg text-muted-foreground">
            An accordion component for displaying collapsible content sections.
          </p>
        </div>

        <ComponentPreview
          title="Simple Accordion"
          description="A basic accordion with JavaScript toggle functionality."
          code={`<div class="w-full">
  <!-- Accordion Item 1 -->
  <div class="border-b">
    <button
      id="accordion-button-1"
      class="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline"
      onclick="toggleAccordion('accordion-content-1', 'accordion-button-1')"
      aria-expanded="false"
      aria-controls="accordion-content-1"
    >
      <span>Is it accessible?</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        class="h-4 w-4 transition-transform"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
    <div
      id="accordion-content-1"
      class="overflow-hidden transition-all duration-300 max-h-0"
      aria-labelledby="accordion-button-1"
      hidden
    >
      <div class="pb-4 pt-0">
        Yes. It adheres to the WAI-ARIA design pattern.
      </div>
    </div>
  </div>

  <!-- Accordion Item 2 -->
  <div class="border-b">
    <button
      id="accordion-button-2"
      class="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline"
      onclick="toggleAccordion('accordion-content-2', 'accordion-button-2')"
      aria-expanded="false"
      aria-controls="accordion-content-2"
    >
      <span>Is it styled?</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        class="h-4 w-4 transition-transform"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
    <div
      id="accordion-content-2"
      class="overflow-hidden transition-all duration-300 max-h-0"
      aria-labelledby="accordion-button-2"
      hidden
    >
      <div class="pb-4 pt-0">
        Yes. It comes with default styles that matches the other components' aesthetic.
      </div>
    </div>
  </div>

  <!-- Accordion Item 3 -->
  <div class="border-b">
    <button
      id="accordion-button-3"
      class="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline"
      onclick="toggleAccordion('accordion-content-3', 'accordion-button-3')"
      aria-expanded="false"
      aria-controls="accordion-content-3"
    >
      <span>Is it animated?</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        class="h-4 w-4 transition-transform"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
    <div
      id="accordion-content-3"
      class="overflow-hidden transition-all duration-300 max-h-0"
      aria-labelledby="accordion-button-3"
      hidden
    >
      <div class="pb-4 pt-0">
        Yes. It's animated by default, but you can disable it if you prefer.
      </div>
    </div>
  </div>
</div>

<script>
  function toggleAccordion(contentId, buttonId) {
    const content = document.getElementById(contentId);
    const button = document.getElementById(buttonId);
    const icon = button.querySelector('svg');
    
    // Toggle the hidden attribute
    if (content.hidden) {
      content.hidden = false;
      button.setAttribute('aria-expanded', 'true');
      // Set the max height to the scroll height to animate opening
      content.style.maxHeight = content.scrollHeight + 'px';
      // Rotate the icon
      icon.style.transform = 'rotate(180deg)';
    } else {
      // Set max height to 0 to animate closing
      content.style.maxHeight = '0px';
      button.setAttribute('aria-expanded', 'false');
      // Rotate the icon back
      icon.style.transform = 'rotate(0)';
      // After animation completes, hide the content
      setTimeout(() => {
        if (button.getAttribute('aria-expanded') === 'false') {
          content.hidden = true;
        }
      }, 300); // Match this with the duration in the CSS
    }
  }
</script>`}
          preview={
            <div className="w-full">
              <div className="border-b">
                <button className="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline">
                  <span>Is it accessible?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
              <div className="border-b">
                <button className="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline">
                  <span>Is it styled?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
              <div className="border-b">
                <button className="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline">
                  <span>Is it animated?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="FAQ Accordion"
          description="An accordion styled as a FAQ section."
          code={`<div class="space-y-4">
  <h2 class="text-2xl font-bold">Frequently Asked Questions</h2>
  
  <div class="space-y-2">
    <!-- FAQ Item 1 -->
    <div class="rounded-lg border">
      <button
        id="faq-button-1"
        class="flex w-full items-center justify-between p-4 text-left font-medium transition-all hover:bg-muted/50"
        onclick="toggleAccordion('faq-content-1', 'faq-button-1')"
        aria-expanded="false"
        aria-controls="faq-content-1"
      >
        <span>How do I create an account?</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="h-4 w-4 transition-transform"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      <div
        id="faq-content-1"
        class="overflow-hidden transition-all duration-300 max-h-0"
        aria-labelledby="faq-button-1"
        hidden
      >
        <div class="border-t p-4">
          To create an account, click on the "Sign Up" button in the top right corner of the page. 
          Fill out the required information and follow the instructions to complete your registration.
        </div>
      </div>
    </div>
    
    <!-- FAQ Item 2 -->
    <div class="rounded-lg border">
      <button
        id="faq-button-2"
        class="flex w-full items-center justify-between p-4 text-left font-medium transition-all hover:bg-muted/50"
        onclick="toggleAccordion('faq-content-2', 'faq-button-2')"
        aria-expanded="false"
        aria-controls="faq-content-2"
      >
        <span>What payment methods do you accept?</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="h-4 w-4 transition-transform"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      <div
        id="faq-content-2"
        class="overflow-hidden transition-all duration-300 max-h-0"
        aria-labelledby="faq-button-2"
        hidden
      >
        <div class="border-t p-4">
          We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. 
          For enterprise customers, we also offer invoicing options.
        </div>
      </div>
    </div>
    
    <!-- FAQ Item 3 -->
    <div class="rounded-lg border">
      <button
        id="faq-button-3"
        class="flex w-full items-center justify-between p-4 text-left font-medium transition-all hover:bg-muted/50"
        onclick="toggleAccordion('faq-content-3', 'faq-button-3')"
        aria-expanded="false"
        aria-controls="faq-content-3"
      >
        <span>How can I reset my password?</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="h-4 w-4 transition-transform"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      <div
        id="faq-content-3"
        class="overflow-hidden transition-all duration-300 max-h-0"
        aria-labelledby="faq-button-3"
        hidden
      >
        <div class="border-t p-4">
          To reset your password, go to the login page and click on "Forgot Password". 
          Enter your email address, and we'll send you instructions on how to create a new password.
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  function toggleAccordion(contentId, buttonId) {
    const content = document.getElementById(contentId);
    const button = document.getElementById(buttonId);
    const icon = button.querySelector('svg');
    
    // Toggle the hidden attribute
    if (content.hidden) {
      content.hidden = false;
      button.setAttribute('aria-expanded', 'true');
      // Set the max height to the scroll height to animate opening
      content.style.maxHeight = content.scrollHeight + 'px';
      // Transform the plus icon to minus
      icon.querySelector('line:last-child').style.transform = 'rotate(90deg)';
      icon.querySelector('line:last-child').style.opacity = '0';
    } else {
      // Set max height to 0 to animate closing
      content.style.maxHeight = '0px';
      button.setAttribute('aria-expanded', 'false');
      // Transform the minus icon back to plus
      icon.querySelector('line:last-child').style.transform = 'rotate(0deg)';
      icon.querySelector('line:last-child').style.opacity = '1';
      // After animation completes, hide the content
      setTimeout(() => {
        if (button.getAttribute('aria-expanded') === 'false') {
          content.hidden = true;
        }
      }, 300); // Match this with the duration in the CSS
    }
  }
</script>`}
          preview={
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

              <div className="space-y-2">
                <div className="rounded-lg border">
                  <button className="flex w-full items-center justify-between p-4 text-left font-medium transition-all hover:bg-muted/50">
                    <span>How do I create an account?</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 transition-transform"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>

                <div className="rounded-lg border">
                  <button className="flex w-full items-center justify-between p-4 text-left font-medium transition-all hover:bg-muted/50">
                    <span>What payment methods do you accept?</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 transition-transform"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          }
        />

        <div className="space-y-4 rounded-lg border p-6">
          <h2 className="text-xl font-bold">Implementation Notes</h2>
          <p>
            This accordion component is implemented using pure Tailwind CSS classes and vanilla JavaScript. It doesn't
            require any external libraries or frameworks.
          </p>
          <p className="mt-2">The implementation includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Accessible markup with proper ARIA attributes</li>
            <li>Smooth animations for expanding/collapsing content</li>
            <li>Icon rotation for visual feedback</li>
            <li>JavaScript for toggling the accordion state</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            To use this component in your project, simply copy the HTML, CSS, and JavaScript. You can customize the
            appearance by modifying the Tailwind classes.
          </p>
          <div className="mt-4 rounded-md bg-muted p-4">
            <p className="text-sm font-medium mb-2">For a more advanced implementation, consider:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Adding keyboard navigation (arrow keys, Home/End)</li>
              <li>Implementing a single-open mode where only one item can be open at a time</li>
              <li>Adding support for nested accordions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
