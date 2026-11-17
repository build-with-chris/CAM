import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-control font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-dome text-white hover:bg-dome-dark",
        primary: "bg-dome text-white hover:bg-dome-dark",
        outline: "border-[1.5px] border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-mist",
        secondary: "bg-dome-tint text-dome-dark hover:bg-dome-tint/70",
        ghost: "text-ink hover:bg-mist",
        // Auf blauem oder dunklem Grund
        white: "bg-white text-dome-dark hover:bg-dome-tint",
        "outline-white": "border-[1.5px] border-white/70 bg-transparent text-white hover:border-white hover:bg-white/10",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        link: "text-dome underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 text-[0.9375rem]",
        sm: "h-10 px-4 text-sm",
        lg: "h-13 px-6 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
