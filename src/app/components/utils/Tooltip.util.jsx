"use client";

import { useEffect, useRef, useState } from "react";
import { useTooltip } from "@/app/scripts/Tooltip.context";

const Tooltip = () => {
  const { tooltip, hideTooltip } = useTooltip();
  const tooltipRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (tooltip.visible) {
        hideTooltip();
      }
    };

    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, [tooltip.visible, hideTooltip]);

  useEffect(() => {
    if (!tooltip.visible || !tooltip.targetRect || !tooltipRef.current) {
      return;
    }

    const calculatePosition = () => {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const { targetRect, placement } = tooltip;
      const gap = 8;

      let top = 0;
      let left = 0;

      switch (placement) {
        case "top":
          top = targetRect.top - tooltipRect.height - gap;
          left = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;
          break;
        case "bottom":
          top = targetRect.bottom + gap;
          left = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;
          break;
        case "left":
          top = targetRect.top + targetRect.height / 2 - tooltipRect.height / 2;
          left = targetRect.left - tooltipRect.width - gap;
          break;
        case "right":
          top = targetRect.top + targetRect.height / 2 - tooltipRect.height / 2;
          left = targetRect.right + gap;
          break;
        default:
          top = targetRect.bottom + gap;
          left = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;
      }

      const padding = 8;
      if (left < padding) left = padding;
      if (left + tooltipRect.width > window.innerWidth - padding) {
        left = window.innerWidth - tooltipRect.width - padding;
      }
      if (top < padding) top = padding;
      if (top + tooltipRect.height > window.innerHeight - padding) {
        top = window.innerHeight - tooltipRect.height - padding;
      }

      setPosition({ top, left });
    };

    requestAnimationFrame(calculatePosition);
  }, [tooltip.visible, tooltip.targetRect, tooltip.placement]);

  if (!tooltip.visible || !tooltip.content) {
    return null;
  }

  return (
    <div
      ref={tooltipRef}
      className={`fixed z-99999 pointer-events-none ${tooltip.customClass || ""}`}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      <div className="bg-[#3c4043] text-white text-[13px] leading-4.5 px-2.5 py-1.5 rounded shadow-[0_2px_8px_rgba(0,0,0,0.26)] whitespace-nowrap font-normal">
        {tooltip.content}
      </div>
    </div>
  );
};

export default Tooltip;