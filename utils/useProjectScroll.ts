import { useEffect, useRef, useState } from 'react';

export const useProjectScroll = (currentSlide: number) => {
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hasScroll, setHasScroll] = useState<boolean[]>([false, false]);
  const [endScroll, setEndScroll] = useState(false);

  const checkScroll = () => {
    const scrollStates = slideRefs.current.map((slide) => {
      return slide ? slide.scrollHeight > slide.clientHeight : false;
    });
    setHasScroll(scrollStates);

    const currentSlideRef = slideRefs.current[currentSlide];
    if (currentSlideRef) {
      const isAtBottom =
        currentSlideRef.scrollTop + currentSlideRef.clientHeight + 20 >=
        currentSlideRef.scrollHeight;
      setEndScroll(isAtBottom);
    }
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
            slide.scrollTop + slide.clientHeight + 20 >= slide.scrollHeight;
          setEndScroll(isAtBottom);
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

  return { slideRefs, hasScroll, endScroll };
};
