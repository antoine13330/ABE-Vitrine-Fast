"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScrollReveal = ({
  content,
  contentClassName,
}: {
  content: {
    id: number; // should be in ascending order for the scroll animation to work nicely
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [previousCardId, setPreviousCardId] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - (breakpoint + 1 / cardLength / 1.5));
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    if (closestBreakpointIndex !== activeCard) {
      setPreviousCardId(activeCard);
    }
    setActiveCard(closestBreakpointIndex);
  });




  return (
    <motion.div

      className="w-full grid lg:grid-cols-2 h-full justify-center relative rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-3xl">
          {content.map((item, index) => (
            <>
             <div key={item.title + index} className=" h-[80vh] flex flex-col justify-center gap-8">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl font-bold "
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg  max-w-sm"
              >
                {item.description}
              </motion.p>
            </div>
            <div className="block lg:hidden rounded-md bg-background" key={item.title + '__' + index}>
              {item.content}
            </div>
            </>
           
          ))}
        </div>
      </div>
      <motion.div
        className={cn(
          "hidden lg:block h-[50vh] w-full rounded-md bg-background sticky top-[25vh] overflow-hidden",
          contentClassName
        )}
      >
          <motion.div className="h-full w-full"> 
            {
              content[activeCard].content ?? null
            }
          </motion.div>
        {

        }

      </motion.div>
    </motion.div>
  );
};
