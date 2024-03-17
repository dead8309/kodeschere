"use client";

import React, { useEffect } from "react";
import {
  useAnimation,
  motion,
  useInView,
  stagger,
  useAnimate,
} from "framer-motion";

export function FadeInWhenVisible({ children }: { children: any }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "div",
        {
          opacity: 1,
        },
        {
          duration: 1,
          delay: stagger(0.2),
        }
      );
    }
  }, [isInView]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
    >
      {children}
    </motion.div>
  );
}
