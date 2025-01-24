import React, { useRef, useEffect } from "react";
import Card2 from "./Card2";

function MultipleCardDiv({ day, date, events }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleWheelScroll = (e) => {
      if (scrollContainerRef.current) {
        e.preventDefault();
        scrollContainerRef.current.scrollLeft += e.deltaY;
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleWheelScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleWheelScroll);
      }
    };
  }, []);

  return (
    <div className="bg-black pl-2 border-s-amber-100 flex flex-row items-center max-w-[98%] rounded-md">
      {/* Date Section */}
      <div className="min-h-full flex flex-col justify-self-center h-min justify-center border-0 border-r-2 px-1 backdrop-filter bg-white backdrop-blur-sm bg-opacity-5 border-gray-100">
        <h2 className="text-white text-lg ">Day: {day}</h2>
        <h2 className="text-white text-lg ">Date: {date}</h2>
      </div>

      {/* Card Scrolling Section */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar p-4 rounded-lg border-white"
      >
        {/* Render Cards Dynamically */}
        {events.map((event, index) => (
          <Card2 key={index} {...event} />
        ))}
      </div>
    </div>
  );
}

export default MultipleCardDiv;
