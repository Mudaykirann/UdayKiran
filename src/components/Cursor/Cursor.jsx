import { useEffect, useRef } from 'react';

/**
 * Premium cursor:
 * - Small black dot (instant follow)
 * - Larger ring with lerp smoothing
 * - Ring scales up & dot hides when hovering links/buttons
 * - Invisible on touch devices
 */
export default function Cursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const mouse = useRef({ x: -200, y: -200 });
    const ringPos = useRef({ x: -200, y: -200 });
    const rafId = useRef(null);
    const hovering = useRef(false);

    useEffect(() => {
        // Only on pointer-fine (non-touch) devices
        if (!window.matchMedia('(pointer: fine)').matches) return;

        // Hide native cursor globally
        document.documentElement.classList.add('custom-cursor-active');

        const onMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
            if (dotRef.current) {
                dotRef.current.style.transform =
                    `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
            }
        };

        const onOver = (e) => {
            if (e.target.closest('a, button, [role="button"], input, textarea, select, label')) {
                hovering.current = true;
            }
        };
        const onOut = (e) => {
            if (e.target.closest('a, button, [role="button"], input, textarea, select, label')) {
                hovering.current = false;
            }
        };

        const tick = () => {
            const lerp = 0.1;
            ringPos.current.x += (mouse.current.x - ringPos.current.x) * lerp;
            ringPos.current.y += (mouse.current.y - ringPos.current.y) * lerp;

            if (ringRef.current) {
                ringRef.current.style.transform =
                    `translate(calc(${ringPos.current.x}px - 50%), calc(${ringPos.current.y}px - 50%))`;

                if (hovering.current) {
                    ringRef.current.style.width = '48px';
                    ringRef.current.style.height = '48px';
                    ringRef.current.style.opacity = '0.6';
                } else {
                    ringRef.current.style.width = '30px';
                    ringRef.current.style.height = '30px';
                    ringRef.current.style.opacity = '1';
                }
            }

            if (dotRef.current) {
                dotRef.current.style.opacity = hovering.current ? '0' : '1';
            }

            rafId.current = requestAnimationFrame(tick);
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseover', onOver);
        document.addEventListener('mouseout', onOut);
        rafId.current = requestAnimationFrame(tick);

        return () => {
            document.documentElement.classList.remove('custom-cursor-active');
            window.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseover', onOver);
            document.removeEventListener('mouseout', onOut);
            cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <>
            {/* Dot — instant follow */}
            <div
                ref={dotRef}
                aria-hidden="true"
                className="cursor-dot"
            />
            {/* Ring — lerp follow */}
            <div
                ref={ringRef}
                aria-hidden="true"
                className="cursor-ring"
            />
        </>
    );
}
