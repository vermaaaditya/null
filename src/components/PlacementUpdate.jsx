import React, { useEffect, useRef } from "react";


const placementUpdates = [
  {
    text: "Campus Placement Drive For Cyber Security ...",
    isNew: true,
    link: "https://example.com/cybersecurity", // optional link
  },
  {
    text: "Campus Placement Drive For Artificial Intelligence ...",
    isNew: true,
    link: "https://example.com/ai",
  },
  {
    text: "Campus Placement Drive For Robotics & Automation ...",
    isNew: true,
    // no link yet
  },
];

const PlacementUpdate = () => {
  const scrollRef = useRef(null);
  const contentRef = useRef(null);
  const pauseRef = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let animationId;
    const speed = 0.6;
    container.scrollTop = 0;

    const smoothScroll = () => {
      if (!pauseRef.current) {
        container.scrollTop += speed;

        if (container.scrollTop >= content.scrollHeight / 2) {
          container.scrollTop = 0;
        }
      }
      animationId = requestAnimationFrame(smoothScroll);
    };

    animationId = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="placement-container">
      <h2 className="placement-title">Placement Updates</h2>

      <div
        className="scroll-wrapper"
        ref={scrollRef}
        onMouseEnter={() => (pauseRef.current = true)}
        onMouseLeave={() => (pauseRef.current = false)}
      >
        <ul className="scroll-list" ref={contentRef}>
          {[...placementUpdates, ...placementUpdates].map((item, index) => {
            const content = (
              <>
                <span className="placement-text">{item.text}</span>
                {item.isNew && <span className="new-badge">New</span>}
              </>
            );

            return (
              <li key={index} className="placement-item">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="placement-link"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PlacementUpdate;
