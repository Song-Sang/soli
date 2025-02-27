import { useEffect, useRef, useState } from 'react';

export const useProjectScroll = (currentSlide: number) => {
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hasScroll, setHasScroll] = useState<boolean[]>([false, false]);
  const [scrollIsVisible, setScrollIsVisible] = useState(true);

  const checkScroll = () => {
    const scrollStates = slideRefs.current.map((slide) => {
      return slide ? slide.scrollHeight > slide.clientHeight : false;
    });
    setHasScroll(scrollStates);
  };

  useEffect(() => {
    const handleOrientationChange = () => {
      checkScroll();
    };

    window.addEventListener('resize', checkScroll);
    window.addEventListener('orientationchange', handleOrientationChange);

    checkScroll(); // 초기 체크

    return () => {
      window.removeEventListener('resize', checkScroll);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [currentSlide]);

  useEffect(() => {
    const handleScroll = (index: number) => {
      const slide = slideRefs.current[index];
      if (slide) {
        const handleScrollEvent = () => {
          const isAtBottom =
            slide.scrollTop + slide.clientHeight >= slide.scrollHeight;
          setScrollIsVisible(!isAtBottom);
        };
        slide.addEventListener('scroll', handleScrollEvent);
        return () => {
          slide.removeEventListener('scroll', handleScrollEvent);
        };
      }
    };

    handleScroll(0);
    handleScroll(1);
  }, [currentSlide]);

  return { slideRefs, hasScroll, scrollIsVisible };
};
