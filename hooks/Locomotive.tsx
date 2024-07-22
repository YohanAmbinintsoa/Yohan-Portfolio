import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

export const useLocomotiveScroll = (options: any) => {
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (!containerRef.current) return;
  
      const scroll = new LocomotiveScroll({
        el: containerRef.current,
        ...options,
      });
  
      return () => {
        scroll.destroy();
      };
    }, [options]);
  
    return { containerRef };
  };