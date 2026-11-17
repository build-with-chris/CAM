import * as React from "react"

import { cn } from "@/lib/utils"

/** Gemeinsames Aussehen für Eingabefeld, Textfeld und Auswahl. */
export const feldKlassen =
  "w-full min-w-0 rounded-control border border-input bg-white px-4 text-base text-ink transition-colors placeholder:text-ink-muted/70 focus-visible:border-dome focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-dome disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(feldKlassen, "h-12", className)}
      {...props}
    />
  )
}

function Select({ className, ...props }: React.ComponentProps<"select">) {
  return <select data-slot="select" className={cn(feldKlassen, "h-12", className)} {...props} />
}

export { Input, Select }
