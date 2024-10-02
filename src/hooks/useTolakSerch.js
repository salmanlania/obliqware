import { useEffect, useRef, useState } from 'react';

const useTolakStretch = () => {
    const containerRef = useRef([]);
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if (!containerRef.current.length) return;

            const windowWidth = window.innerWidth;
            const elements = containerRef.current;

            elements.forEach(element => {
                const row = element.closest('.row');
                const cols = element.closest('[class^="col-"]');
                const rect = element.getBoundingClientRect();
                const rowRect = row.getBoundingClientRect();
                const colsRect = cols.getBoundingClientRect();
                const left = rect.left;
                const right = windowWidth - rect.right;
                const rowLeftPadding = parseFloat(getComputedStyle(row).paddingLeft) || 0;
                const rowRightPadding = parseFloat(getComputedStyle(row).paddingRight) || 0;
                const rowLeft = rowRect.left + rowLeftPadding;
                const rowRight = windowWidth - rowRect.right + rowRightPadding;
                const colLeft = colsRect.left;
                const colRight = windowWidth - colsRect.right;

                let styles = {
                    marginLeft: '0',
                    marginRight: '0'
                };

                if (Math.round(rowLeft) === Math.round(colLeft)) {
                    const marginLeft = parseFloat(getComputedStyle(element).marginLeft) || 0;
                    styles.marginLeft = `${marginLeft - left}px`;
                }

                if (Math.round(rowRight) === Math.round(colRight)) {
                    const marginRight = parseFloat(getComputedStyle(element).marginRight) || 0;
                    styles.marginRight = `${marginRight - right}px`;
                }

                Object.assign(element.style, styles);
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [mounted]);

    return containerRef;
};

export default useTolakStretch;
