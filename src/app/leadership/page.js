"use client";

import { useState } from "react";
import Image from "next/image";
import LeaderBanner from "@/components/Leadership/LeaderBanner";
import LeaderCard from "@/components/Leadership/LeaderCard";

const leaders = [
  {
    name: "Manju Deshbandhu Gupta",
    role: "Chief Technical Operations Officer",
    imageSrc: "/images/leadership/Manju Deshbandhu Gupta.png",
    quote:
      "Driven by our commitment to business excellence and innovation, our goal is to be a trusted partner for quality medicines, transforming hope into healing.",
  },
  {
    name: "Vinita Gupta and Nilesh Gupta",
    role: "CEO and MD",
    imageSrc: "/images/leadership/Vinita & Nilesh Gupta.png",
    quote:
      "At Lupin, we are not just manufacturers or marketers of medicines. Our Lupinytts are the catalysts, the agents of change, committed to accelerating, enabling and sparking positive change to the health of patients.",
  },
  {
    name: "Ramesh Swaminathan",
    role: "Executive Director, Global CFO, Head of IT and API plus SBU",
    imageSrc: "/images/leadership/Ramesh Swaminathan.png",
    quote:
      "At Lupin, financial stewardship goes beyond numbers - it’s about catalyzing impact. We invest with purpose, aligning capital with strategies that empower patients, energize teams, and uplift communities.",
  },
  {
    name: "Yashwant Mahadik",
    role: "President, Global Human Resources",
    imageSrc: "/images/leadership/Yashwant Mahadik.png",
    quote:
      "At Lupin, our people are at the heart of our purpose. We nurture talent with empathy, equip it with capability, and align it with our mission to heal and uplift lives.",
  },
  {
    name: "CHRISTOPH FUNKE",
    role: "Chief Technical Operations Officer",
    imageSrc: "/images/leadership/CHRISTOPH FUNKE.png",
    quote:
      "We’re building a resilient, digitized, and customer-centric supply chain - one that not only meets evolving regulatory requirements but stays anchored in improving patient outcomes worldwide.",
  },
  {
    name: "Ranjana Pathak",
    role: "Chief Quality Officer",
    imageSrc: "/images/leadership/Dr Ranjana Pathak.png",
    quote:
      "At Lupin, quality is more than a standard - it’s our shared discipline and collective conscience. This unwavering commitment safeguards patients and builds trust worldwide.",
  },
  {
    name: "Fabrice Egros",
    role: "President, Corporate Development",
    imageSrc: "/images/leadership/Dr Fabrice Egros.png",
    quote:
      "Strong relationships are foundational to sustainable healthcare. Through strategic partnerships and shared purpose, we are building an innovation-driven and patient-centric ecosystem where every stakeholder, across developed and emerging markets, thrives.",
  },
  {
    name: "Claus Jepsen",
    role: "President, Global Speciality",
    imageSrc: "/images/leadership/Claus Jepsen.png",
    quote:
      "We are building a future of focused growth. Every brand, every program we pursue, is a reaffirmation of our belief in therapies that matter and care that transforms. ",
  },
  {
    name: "Rajeev Sibal",
    role: "President, India Region Formulations",
    imageSrc: "/images/leadership/Rajeev Sibal.png",
    quote:
      "Our commitment extends beyond therapeutic leadership — it’s about transforming lives through equitable access, deep patient engagement, and purpose-driven innovation. Every initiative brings us one step closer to a healthier, more inclusive world.",
  },
  {
    name: "Thierry Volle",
    role: "President, EMEA and Emerging Markets",
    imageSrc: "/images/leadership/Thierry Volle (1).png",
    quote:
      "As we expand access across developed markets, we do so with agility, empathy, and an unwavering commitment to our purpose: healing. Grounded in therapeutic relevance and guided by proximity to patients, we continue to move forward - together - on our shared mission to catalyze healing.",
  },
  {
    name: "Sofia Mumtaz",
    role: "President, Legal and Compliance, Canada, ANZ, and NEA business",
    imageSrc: "/images/leadership/Sofia Mumtaz1 (2).png",
    quote:
      "We’re building a future-ready organization grounded in ethics and driven by excellence. Every partnership and every product is an opportunity to deliver care that catalyzes healing.",
  },
  {
    name: "Spiro Gavaris",
    role: "President, U.S. Generics",
    imageSrc: "/images/leadership/Spiro Gavaris.png",
    quote:
      "As the U.S. market evolves, Lupin is poised to lead with patient-centricity and a well-balanced portfolio. Our generics and complex generics don’t just drive our business — they advance our deeper purpose: expanding access to high-quality care for millions.",
  },
  {
    name: "Cyrus Karkaria",
    role: "President, Biotech Business",
    imageSrc: "/images/leadership/Cyrus Karkaria (4).png",
    quote:
      "We invest in purpose-driven science. Our work in biosimilars focuses on making cutting-edge biologics more accessible – transforming hope into healing for patients around the world.",
  },
];

export default function LeaderCardPage() {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [selectedLeaderIndex, setSelectedLeaderIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <main>
        <LeaderBanner />
        <section className="leadership__employees-image-section">
          <div
            className={`leadership__employees-image-container${showAll ? " show-all" : ""}`}
          >
            {leaders.map((leader, index) => (
              <LeaderCard
                key={index}
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
        <div className="leadership__button-wrapper">
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
            className="leadership__modal-close"
            onClick={() => setSelectedLeader(null)}
            aria-label="Close modal"
            style={{
              background: "none",
              border: "none",
              fontSize: "2.5vw",
              lineHeight: 1,
              color: "#333",
            }}
          >
            ×
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
                  />
                </div>
              </div>

              <div className="leadership__modal-right">
                <div className="modal-body">
                  <p>{selectedLeader.quote}</p>
                </div>
                <div className="modal-footer">
                  <h4>{selectedLeader.name}</h4>
                  <span>{selectedLeader.role}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
