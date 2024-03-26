import React, { useState } from "react";
import "./Tooltip.css";
interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      style={{ fontSize: "10px" }}
    >
      {children}
      {isVisible && (
        <div className="tooltip-text">
          <b>{text}</b>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
