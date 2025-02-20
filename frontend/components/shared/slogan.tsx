"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function Slogan() {
  return (
    <div className="bg-neutral-950">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-200 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          Nous utilisons la technologie blockchain pour{" "}
          <Highlight className="text-white">
            impacter la vie réelle
          </Highlight>
        </motion.h1>
      </HeroHighlight>
    </div>
  );
}
