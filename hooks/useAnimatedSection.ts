"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

type MarginValue = `${number}${"px" | "%"}`;
type MarginType = `${MarginValue} ${MarginValue} ${MarginValue} ${MarginValue}`;

export function useAnimatedSection(margin: MarginType = "0px 0px -60% 0px") {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin });
  return { ref, isInView };
}
