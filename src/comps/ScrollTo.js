// ScrollTo.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollTo() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top of the page when the path changes
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollTo;