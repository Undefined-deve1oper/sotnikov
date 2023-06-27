import { useEffect, useState } from "react";

interface ReturnHook {
    [x: string]: boolean
}

function useHeightReacher(offsetBlurHeight: number): ReturnHook {
    const [isReached, setIsReached] = useState<boolean>(
        isHeightReached(offsetBlurHeight)
    );

    function isHeightReached(height: number) {
        const doc = document.documentElement;
        const top =
            (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        return top > height;
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsReached(isHeightReached(offsetBlurHeight));
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [offsetBlurHeight]);

    return { isReached };
}

export default useHeightReacher;
