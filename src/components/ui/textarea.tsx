import * as React from "react"

import { cn } from "@/lib/utils"
import { feldKlassen } from "@/components/ui/input"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(feldKlassen, "min-h-32 resize-y py-3", className)}
      {...props}
    />
  )
}

export { Textarea }
