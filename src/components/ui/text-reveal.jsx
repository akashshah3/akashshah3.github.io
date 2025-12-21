import { motion } from "framer-motion";

export function TextReveal({ children, className, delay = 0 }) {
    const text = typeof children === "string" ? children : "";
    const words = text.split(" ");

    return (
        <h1 className={className}>
            <span className="sr-only">{text}</span>
            <span className="flex flex-wrap gap-x-[0.25em] gap-y-1">
                {words.map((word, i) => (
                    <span key={i} className="overflow-hidden inline-block relative">
                        <motion.span
                            className="inline-block"
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: delay + i * 0.03, // Stagger each word
                                ease: [0.21, 0.47, 0.32, 0.98], // Custom bezier
                            }}
                        >
                            {word}
                        </motion.span>
                    </span>
                ))}
            </span>
        </h1>
    );
}
