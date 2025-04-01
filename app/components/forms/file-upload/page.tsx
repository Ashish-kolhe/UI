import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, X, File, Image, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "File Upload - UI Library",
  description: "File upload component for uploading files",
}

export default function FileUploadPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">File Upload</h1>
          <p className="text-lg text-muted-foreground">File upload components for uploading files and images.</p>
        </div>

        <ComponentPreview
          title="Basic File Upload"
          description="A simple file upload input."
          code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="file">Upload file</Label>
  <Input id="file" type="file" />
</div>`}
          preview={
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="file">Upload file</Label>
              <Input id="file" type="file" />
            </div>
          }
        />

        <ComponentPreview
          title="Styled File Upload"
          description="A styled file upload with custom button."
          code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="styled-file">Upload file</Label>
  <div className="flex items-center gap-2">
    <Button variant="outline" className="w-full" size="sm">
      <Upload className="mr-2 h-4 w-4" />
      Choose File
    </Button>
    <p className="text-sm text-muted-foreground">No file chosen</p>
  </div>
  <Input id="styled-file" type="file" className="hidden" />
</div>`}
          preview={
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="styled-file">Upload file</Label>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="w-full" size="sm">
                  <Upload className="mr-2 h-4 w-4" />
                  Choose File
                </Button>
                <p className="text-sm text-muted-foreground">No file chosen</p>
              </div>
              <Input id="styled-file" type="file" className="hidden" />
            </div>
          }
        />

        <ComponentPreview
          title="Drag and Drop Upload"
          description="A drag and drop area for file uploads."
          code={`<div className="grid w-full gap-1.5">
  <Label htmlFor="dropzone-file">Upload file</Label>
  <div className="flex w-full items-center justify-center">
    <label
      htmlFor="dropzone-file"
      className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
    >
      <div className="flex flex-col items-center justify-center pb-6 pt-5">
        <Upload className="mb-3 h-10 w-10 text-gray-400" />
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Click to upload</span> or drag and drop
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          SVG, PNG, JPG or GIF (MAX. 800x400px)
        </p>
      </div>
      <Input id="dropzone-file" type="file" className="hidden" />
    </label>
  </div>
</div>`}
          preview={
            <div className="grid w-full gap-1.5">
              <Label htmlFor="dropzone-file">Upload file</Label>
              <div className="flex w-full items-center justify-center">
                <label
                  htmlFor="dropzone-file"
                  className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <Upload className="mb-3 h-10 w-10 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <Input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
          }
        />

        <ComponentPreview
          title="File Upload with Preview"
          description="File upload with a preview of the uploaded file."
          code={`<div className="grid w-full gap-1.5">
  <Label htmlFor="preview-file">Upload file</Label>
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-4">
      <Button variant="outline" size="sm">
        <Upload className="mr-2 h-4 w-4" />
        Choose File
      </Button>
      <p className="text-sm text-muted-foreground">example-image.jpg</p>
    </div>
    <div className="rounded-md border p-4">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-md border">
          <Image className="h-6 w-6 text-muted-foreground" />
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium">example-image.jpg</div>
          <div className="text-xs text-muted-foreground">1.2 MB</div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <X className="h-4 w-4" />
          <span className="sr-only">Remove file</span>
        </Button>
      </div>
    </div>
  </div>
  <Input id="preview-file" type="file" className="hidden" />
</div>`}
          preview={
            <div className="grid w-full gap-1.5">
              <Label htmlFor="preview-file">Upload file</Label>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Choose File
                  </Button>
                  <p className="text-sm text-muted-foreground">example-image.jpg</p>
                </div>
                <div className="rounded-md border p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md border">
                      <Image className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">example-image.jpg</div>
                      <div className="text-xs text-muted-foreground">1.2 MB</div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove file</span>
                    </Button>
                  </div>
                </div>
              </div>
              <Input id="preview-file" type="file" className="hidden" />
            </div>
          }
        />

        <ComponentPreview
          title="Multiple File Upload"
          description="Upload multiple files with previews."
          code={`<div className="grid w-full gap-1.5">
  <Label htmlFor="multiple-files">Upload files</Label>
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-4">
      <Button variant="outline" size="sm">
        <Upload className="mr-2 h-4 w-4" />
        Choose Files
      </Button>
      <p className="text-sm text-muted-foreground">3 files selected</p>
    </div>
    <div className="space-y-2">
      <div className="rounded-md border p-2">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border">
            <Image className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">image-01.jpg</div>
            <div className="text-xs text-muted-foreground">2.4 MB</div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <X className="h-4 w-4" />
            <span className="sr-only">Remove file</span>
          </Button>
        </div>
      </div>
      <div className="rounded-md border p-2">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border">
            <FileText className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">document.pdf</div>
            <div className="text-xs text-muted-foreground">3.8 MB</div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <X className="h-4 w-4" />
            <span className="sr-only">Remove file</span>
          </Button>
        </div>
      </div>
      <div className="rounded-md border p-2">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border">
            <File className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">data.csv</div>
            <div className="text-xs text-muted-foreground">0.9 MB</div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <X className="h-4 w-4" />
            <span className="sr-only">Remove file</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
  <Input id="multiple-files" type="file" multiple className="hidden" />
</div>`}
          preview={
            <div className="grid w-full gap-1.5">
              <Label htmlFor="multiple-files">Upload files</Label>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Choose Files
                  </Button>
                  <p className="text-sm text-muted-foreground">3 files selected</p>
                </div>
                <div className="space-y-2">
                  <div className="rounded-md border p-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md border">
                        <Image className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">image-01.jpg</div>
                        <div className="text-xs text-muted-foreground">2.4 MB</div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove file</span>
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-md border p-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md border">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">document.pdf</div>
                        <div className="text-xs text-muted-foreground">3.8 MB</div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove file</span>
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-md border p-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md border">
                        <File className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">data.csv</div>
                        <div className="text-xs text-muted-foreground">0.9 MB</div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove file</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Input id="multiple-files" type="file" multiple className="hidden" />
            </div>
          }
        />
      </div>
    </div>
  )
}

