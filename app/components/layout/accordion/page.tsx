import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
          title="Default Accordion"
          description="The default accordion style."
          code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches the other components' aesthetic.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It's animated by default, but you can disable it if you prefer.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
          preview={
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other components' aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          }
        />

        <ComponentPreview
          title="Multiple Accordion"
          description="Accordion that allows multiple items to be open simultaneously."
          code={`<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>
      Content for section 1. You can have multiple sections open at the same time.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>
      Content for section 2. This accordion allows multiple sections to be expanded simultaneously.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Section 3</AccordionTrigger>
    <AccordionContent>
      Content for section 3. Try opening all sections at once!
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
          preview={
            <Accordion type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger>Section 1</AccordionTrigger>
                <AccordionContent>
                  Content for section 1. You can have multiple sections open at the same time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Section 2</AccordionTrigger>
                <AccordionContent>
                  Content for section 2. This accordion allows multiple sections to be expanded simultaneously.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Section 3</AccordionTrigger>
                <AccordionContent>Content for section 3. Try opening all sections at once!</AccordionContent>
              </AccordionItem>
            </Accordion>
          }
        />

        <ComponentPreview
          title="FAQ Accordion"
          description="Accordion styled as a FAQ section."
          code={`<div className="space-y-4">
  <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger className="text-left">
        How do I create an account?
      </AccordionTrigger>
      <AccordionContent>
        To create an account, click on the "Sign Up" button in the top right corner of the page. 
        Fill out the required information and follow the instructions to complete your registration.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger className="text-left">
        What payment methods do you accept?
      </AccordionTrigger>
      <AccordionContent>
        We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. 
        For enterprise customers, we also offer invoicing options.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger className="text-left">
        How can I reset my password?
      </AccordionTrigger>
      <AccordionContent>
        To reset your password, go to the login page and click on "Forgot Password". 
        Enter your email address, and we'll send you instructions on how to create a new password.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger className="text-left">
        Do you offer refunds?
      </AccordionTrigger>
      <AccordionContent>
        Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service, 
        you can request a full refund within 30 days of your purchase.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</div>`}
          preview={
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">How do I create an account?</AccordionTrigger>
                  <AccordionContent>
                    To create an account, click on the "Sign Up" button in the top right corner of the page. Fill out
                    the required information and follow the instructions to complete your registration.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers.
                    For enterprise customers, we also offer invoicing options.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">How can I reset my password?</AccordionTrigger>
                  <AccordionContent>
                    To reset your password, go to the login page and click on "Forgot Password". Enter your email
                    address, and we'll send you instructions on how to create a new password.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">Do you offer refunds?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service, you can
                    request a full refund within 30 days of your purchase.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          }
        />
      </div>
    </div>
  )
}

