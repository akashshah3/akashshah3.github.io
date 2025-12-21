import { cn } from "../../lib/utils";

export function Badge({ className, variant = "default", children, ...props }) {
    const variants = {
        default: "bg-stone-900 text-stone-50 hover:bg-stone-900/80",
        secondary: "bg-stone-100 text-stone-900 hover:bg-stone-100/80",
        outline: "text-stone-950 border border-stone-200",
    }
    return (
        <div className={cn("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-stone-950 focus:ring-offset-2", variants[variant], className)} {...props}>
            {children}
        </div>
    );
}
