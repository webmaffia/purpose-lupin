"use client";

import { useState } from "react";
import Image from "next/image";
import LeaderBanner from "@/components/Leadership/LeaderBanner";
import LeaderCard from "@/components/Leadership/LeaderCard";

export default function LeadershipContent({ banner, leadershipCard = [] }) {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [selectedLeaderIndex, setSelectedLeaderIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const leaders = leadershipCard
    .filter((card) => card.profileUrl)
    .map((card) => ({
      name: card.name,
      role: card.designation,
      imageSrc: card.profileUrl,
      quote: card.quote?.trim() ?? "",
    }));

  return (
    <>
      <main>
        <LeaderBanner banner={banner} />
        <section className="leadership__employees-image-section">
          <h1 className="hopes__mosaic-title">Our leadership</h1>
          <div
            className={`leadership__employees-image-container${showAll ? " show-all" : ""}`}
          >
            {leaders.map((leader, index) => (
              <LeaderCard
                key={leaders[index]?.name ?? index}
                name={leader.name}
                role={leader.role}
                imageSrc={leader.imageSrc}
                quote={leader.quote}
                onClick={() => {
                  setSelectedLeader(leader);
                  setSelectedLeaderIndex(index);
                }}
              />
            ))}
          </div>
        </section>
        <div
          className={`leadership__button-wrapper${leaders.length > 9 ? " leadership__button-wrapper--show-on-desktop" : ""}`}
        >
          <button
            type="button"
            className="leadership__view-btn"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "View Less" : "View All"}
          </button>
        </div>
      </main>

      <div
        className={`leadership__modal${selectedLeader ? " active" : ""}`}
        id="leadershipModal"
        role="dialog"
        aria-modal="true"
        aria-label="Leader details"
        onClick={() => setSelectedLeader(null)}
      >
        <div
          className="leadership__modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="leadership__modal-close leadership__modal-close-btn"
            onClick={() => setSelectedLeader(null)}
            aria-label="Close modal"
          >
            <img
              src="/images/leadership/shapes/Group 400.png"
              className="leadership__modal-close"
              id="modalClose"
              alt="Close"
            />
          </button>

          {selectedLeader && (
            <>
              <div
                className={`leadership__modal-left ${
                  selectedLeaderIndex !== null && selectedLeaderIndex % 2 === 1
                    ? "grey-bg"
                    : "green-bg"
                }`}
              >
                <div className="leadership__image-wrapper">
                  <Image
                    src={selectedLeader.imageSrc}
                    alt={selectedLeader.name}
                    width={560}
                    height={617}
                    unoptimized={selectedLeader.imageSrc?.startsWith("http")}
                  />
                </div>
              </div>

              <div className="leadership__modal-right">
                <img
                  src="/images/leadership/shapes/Vector (1).png"
                  className="quote quote-top"
                  alt="quote"
                />
                <div className="modal-body">
                  <p>{selectedLeader.quote}</p>
                </div>
                <div className="modal-footer">
                  <h4>{selectedLeader.name}</h4>
                  <span>{selectedLeader.role}</span>
                </div>
                <img
                  src="/images/leadership/shapes/Vector (2).png"
                  className="quote quote-bottom"
                  alt="quote"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
