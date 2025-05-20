"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function InteractiveMap() {
  const [tooltip, setTooltip] = useState({ visible: false, name: "", owner: "", x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const mapRef = useRef<HTMLDivElement>(null); // Explicitly typed as HTMLDivElement
  const containerRef = useRef<HTMLDivElement>(null); // Explicitly typed as HTMLDivElement
  const pos = useRef({ x: 0, y: 0, dx: 0, dy: 0, dragging: false });

  const blips = [
    { top: "60%", left: "45%", name: "Valentine General Store", owner: "John Smith", icon: "/icons/store.png" },
    { top: "55.8%", left: "53.9%", name: "Blackwater Honey", owner: "Claire Dupont", icon: "/icons/honey.png" },
    { top: "48%", left: "40%", name: "Strawberry Butcher", owner: "Bill Turner" },
  ];

  const resetZoom = () => {
    setScale(1);
    pos.current.x = 0;
    pos.current.y = 0;
    if (mapRef.current) {
      mapRef.current.style.transform = `translate(0px, 0px) scale(1)`;
    }
  };

  useEffect(() => {
    const map = mapRef.current;
    const container = containerRef.current;
    if (!map || !container) return;

    const handleMouseDown = (e: MouseEvent) => {
      pos.current.dragging = true;
      pos.current.dx = e.clientX - pos.current.x;
      pos.current.dy = e.clientY - pos.current.y;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!pos.current.dragging) return;
      pos.current.x = e.clientX - pos.current.dx;
      pos.current.y = e.clientY - pos.current.dy;
      map.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) scale(${scale})`;
    };

    const handleMouseUp = () => {
      pos.current.dragging = false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const containerRect = container.getBoundingClientRect();
      const offsetX = e.clientX - containerRect.left - pos.current.x;
      const offsetY = e.clientY - containerRect.top - pos.current.y;

      const zoomFactor = 0.001;
      const newScale = Math.min(Math.max(0.5, scale - e.deltaY * zoomFactor), 20);
      const scaleChange = newScale / scale;

      pos.current.x = pos.current.x - offsetX * (scaleChange - 1);
      pos.current.y = pos.current.y - offsetY * (scaleChange - 1);

      setScale(newScale);
      map.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) scale(${newScale})`;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        pos.current.dragging = true;
        pos.current.dx = e.touches[0].clientX - pos.current.x;
        pos.current.dy = e.touches[0].clientY - pos.current.y;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!pos.current.dragging || e.touches.length !== 1) return;
      pos.current.x = e.touches[0].clientX - pos.current.dx;
      pos.current.y = e.touches[0].clientY - pos.current.dy;
      map.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) scale(${scale})`;
    };

    const handleTouchEnd = () => {
      pos.current.dragging = false;
    };

    map.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("wheel", handleWheel, { passive: false });

    map.addEventListener("touchstart", handleTouchStart);
    map.addEventListener("touchmove", handleTouchMove);
    map.addEventListener("touchend", handleTouchEnd);

    return () => {
      map.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("wheel", handleWheel);

      map.removeEventListener("touchstart", handleTouchStart);
      map.removeEventListener("touchmove", handleTouchMove);
      map.removeEventListener("touchend", handleTouchEnd);
    };
  }, [scale]);

  return (
    <div ref={containerRef} className="w-screen h-screen overflow-hidden relative">
      <button
        onClick={resetZoom}
        className="absolute top-4 right-4 z-50 bg-white text-black px-4 py-2 rounded shadow"
      >
        Reset Zoom
      </button>

      <div
        ref={mapRef}
        className="absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-out"
        style={{ transform: `translate(${pos.current.x}px, ${pos.current.y}px) scale(${scale})`, transformOrigin: "top left" }}
      >
        <Image
          src="/map.jpg"
          alt="Map"
          layout="fill"
          objectFit="contain"
          draggable={false}
        />

        {blips.map((blip, idx) => (
        <div
            key={idx}
            className="absolute cursor-pointer"
            style={{
            top: blip.top,
            left: blip.left,
            transform: `translate(-50%, -50%) scale(${1 / scale})`,
            transformOrigin: "center center",
            }}
            onMouseEnter={(e) => {
            setTooltip({
                visible: true,
                name: blip.name,
                owner: blip.owner,
                x: e.clientX,
                y: e.clientY,
            });
            }}
            onMouseLeave={() => setTooltip({ ...tooltip, visible: false })}
        >
            {blip.icon ? (
            <Image src={blip.icon} alt={blip.name} width={24} height={24} />
            ) : (
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            )}
        </div>
        ))}

      </div>

      {tooltip.visible && (
        <div
          className="absolute bg-gray-900 text-white text-sm px-4 py-2 rounded shadow-lg z-50 pointer-events-none"
          style={{ top: tooltip.y - 50, left: tooltip.x, transform: "translateX(-50%)" }}
        >
          <div className="font-bold">{tooltip.name}</div>
          <div className="text-xs text-gray-300">Owner: {tooltip.owner}</div>
        </div>
      )}
    </div>
  );
}