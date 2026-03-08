"use client";
import Image from "next/image";

export default function LeaderCard({ name, role, imageSrc, quote, onClick }) {
  return (
    
    <div
      className="leadership__employee-card"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      data-name={name}
      data-role={role}
      data-quote={quote}
      data-image={imageSrc}
    >
      <Image
        className="leadership__employee-image leadership__hidden"
        src={imageSrc}
        alt={name}
        width={560}
        height={617}
      />
      <div className="leadership__employee-info">
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    </div>
    
    
    
  );
}
