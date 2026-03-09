"use client";

import HopeCard from "./HopeCard";

const PROFILE_BASE = "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Profile/";

const HOPES_DATA = [
  {
    name: "Mugdhakumari Patel",
    role: "PEK BD STAT – CRO",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Mugdhakumari Patel 1.png",
    profileImageSrc: `${PROFILE_BASE}Mugdhakumari-Patel-1 1.png`,
    quote:
      '"I help shape the future of medicine through protocols that blend scientific ambition with clarity and integrity. Every protocol I create guides breakthroughs toward the patients who await them. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-left",
    bgClass: "hopes__mosaic-item--bg-1",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Rajiv Puri",
    role: "API",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Rajiv Puri 1.png",
    profileImageSrc: `${PROFILE_BASE}Rajiv-Puri-1 1.png`,
    quote:
      '"Every action I take and every decision I make is guided by one fundamental belief - patients must benefit first. Their wellbeing is the purpose behind my work. I am a catalyst."',
    positionClass: "hopes__mosaic-item--bottom-left",
    bgClass: "hopes__mosaic-item--bg-4",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Amarnath Prakash",
    role: "Manufacturing",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Amarnath Prakash 1.png",
    profileImageSrc: `${PROFILE_BASE}Amarnath Prakash 1.png`,
    quote:
      '"I ensure that every product we develop and manufacture meets the highest standards of quality, safety, and patient trust. My work goes beyond operations - it delivers hope to patients who depend on reliable inhalation therapy. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-left",
    bgClass: "hopes__mosaic-item--bg-7",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Kumaran Govindasamy",
    role: "IPMG",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Kumaran Govindasamy 1.png",
    profileImageSrc: `${PROFILE_BASE}Kumaran Govindasamy 1.png`,
    quote:
      '"Each patent I help get granted strengthens Lupin\'s presence and protects its innovations worldwide. I am a catalyst."',
    positionClass: "hopes__mosaic-item--top-left",
    bgClass: "hopes__mosaic-item--bg-10",
    cardBg: "/images/wall-of-hopes/cardsbg-right-center.svg",
  },
  {
    name: "Awadhkishor Bhadoriya",
    role: "IT Operations",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Awadhkishor-Bhadoriya 2.png",
    profileImageSrc: `${PROFILE_BASE}Awadhkishor-Bhadoriya 1.png`,
    quote:
      '"As an IT engineer, I help design systems, build solutions, and spark ideas that move the organization forward. Technology becomes meaningful only when it empowers people and that\'s what I strive for every day. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-2",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Nirav Bhatt",
    role: "Technical Training",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Nirav Bhatt 1.png",
    profileImageSrc: `${PROFILE_BASE}Nirav Bhatt 1.png`,
    quote:
      '"I believe learning is the heartbeat of progress. By fostering a culture of continuous improvement, I help create an environment where curiosity thrives and capabilities expand. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-left",
    bgClass: "hopes__mosaic-item--bg-5",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Prasath S",
    role: "Field Force",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Prasath S 1.png",
    profileImageSrc: `${PROFILE_BASE}Prasath-S-1 2.png`,
    quote:
      '"Every doctor interaction and every prescription gained is an opportunity to improve patient outcomes. Building trust, day after day, is how I make that possible. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-8",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Sarita Dagur",
    role: "Mammalian – Upstream Development Team",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Sarita Dagur 1.png",
    profileImageSrc: `${PROFILE_BASE}Sarita Dagur 1.png`,
    quote:
      '"Every sample I analyze contributes to building a robust process, and enables a smooth and successful technology transfer to manufacturing. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-11",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Fabiana Goncalves",
    role: "Quality Control",
    country: "Brazil",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Fabiana Goncalves 1.png",
    profileImageSrc: `${PROFILE_BASE}Fabiana Goncalves.png`,

    quote:
      '"Each product I analyze follows good manufacturing practices, ensuring patient safety and quality at every step. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-3",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Meghna Dixit",
    role: "Mammalian – Upstream Development Team",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Meghna Dixit 1.png",
    profileImageSrc: `${PROFILE_BASE}Meghna Dixit 1.png`,
    quote:
      '"I drive quality and reliability through rigorous sample analysis and unwavering compliance. Every batch that is released meets the highest standards of purity and safety. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-6",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Ledisilane Assis",
    role: "HR",
    country: "Brazil",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Ledislaine Assis 1.png",
    profileImageSrc: `${PROFILE_BASE}Ledislaine Assis 1.png`,
    quote:
      '"I believe that each employee\'s story holds the power to move people, improve outcomes, and drive evolution. As a communication specialist, I give voice to and celebrate these stories. I am a catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-9",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Kalpesh Parab",
    role: "Finance Shared Services",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Kalpesh Parab 1.png",
    profileImageSrc: `${PROFILE_BASE}Kalpesh-Parab-1 1.png`,
    quote:
      '"Every invoice I process and every payment I validate strengthens Lupin\'s financial foundation. By ensuring accuracy and efficiency, I help to enable the company to focus on delivering life-changing medicines. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--top-left",
    bgClass: "hopes__mosaic-item--bg-12",
    cardBg: "/images/wall-of-hopes/cardsbg-right-center.svg",
  },
  // New/New
  {
    name: "Ajinkya Walanj",
    role: "EHS",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Ajinkya Walanj 1.png",
    profileImageSrc: `${PROFILE_BASE}Ajinkya Walanj 1.png`,
    quote:
      '"In my role, my priority is creating a secure, healthy workplace where systems are built to last. Occupational well-being is the foundation for long-term success. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-left",
    bgClass: "hopes__mosaic-item--bg-1",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Ashu More",
    role: "Quality Assurance (Market Complaint)",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Ashu More 1.png",
    profileImageSrc: `${PROFILE_BASE}Ashu More 1.png`,
    quote:
      '"While handling market complaints, my focus remains patient well-being. By addressing every query with care and diligence, I turn challenges into opportunities to make a meaningful difference. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-left",
    bgClass: "hopes__mosaic-item--bg-2",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Amit Bhandari",
    role: "HR",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Amit Bhandari 2.png",
    profileImageSrc: `${PROFILE_BASE}Amit Bhandari 2.png`,
    quote:
      '"As an HR executive, I leverage technology to make our hiring process faster and more inclusive. Engaging with the right talent drives transformation and enables our shared purpose. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--top-left",
    bgClass: "hopes__mosaic-item--bg-2",
    cardBg: "/images/wall-of-hopes/cardsbg-right-center.svg",
  },
  {
    name: "Anil Sawant",
    role: "LBC Quality Assurance",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Anil Sawant 1.png",
    profileImageSrc: `${PROFILE_BASE}Anil Sawant 1.png`,
    quote:
      '"As part of the QA team, I help every department uphold the highest standards. Together, our shared efforts lead to stronger outcomes for patients. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-3",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Devaraj KN",
    role: "Accounts",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Devraj KN 1.png",
    profileImageSrc: `${PROFILE_BASE}Devraj KN 1.png`,
    quote:
      '"As a leader, I create an environment where my team can learn, grow, and deliver their best. Their success fuels progress for every stakeholder we serve. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-4",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },


  {
    name: "Dushyant Kumar",
    role: "Quality Control",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Dushyant Kumar 1.png",
    profileImageSrc: `${PROFILE_BASE}Dushyant Kumar 1.png`,
    quote:
      '"As part of Quality Control, I ensure that every drug unit reaching a patient meets all quality parameters. Through this responsibility, patient hope is transformed into healing. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-7",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Gaurav Joshi",
    role: "Technical Training",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Gaurav Joshi 2.png",
    profileImageSrc: `${PROFILE_BASE}Gaurav Joshi 2.png`,
    quote:
      '"My strong grasp of concepts and adaptability enable me to deliver meaningful results. Driven by a continuous desire to learn, I contribute to organizational growth and success. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-8",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Kamlesh Sharma",
    role: "Warehouse",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Kamlesh Sharma 1.png",
    profileImageSrc: `${PROFILE_BASE}Kamlesh Sharma 1.png`,
    quote:
      '"As a warehouse personnel, I contribute to strengthening the supply chain by ensuring accurate receipt, proper issuance, and timely delivery of materials. This commitment ensures medicines reach patients exactly when they need them. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-left",
    bgClass: "hopes__mosaic-item--bg-9",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Kunal Thakur",
    role: "Quality Assurance (Regulatory)",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Kunal Thakur.png",
    profileImageSrc: `${PROFILE_BASE}Kunal Thakur.png`,
    quote:
      '"By delivering high-quality APIs, I help ensure that every patient receives a product they can trust. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-10",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Maneesha Khalse",
    role: "Medical Services",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Maneesha.png",
    profileImageSrc: `${PROFILE_BASE}Maneesha.png`,
    quote:
      '"For me, patient well-being is not a duty - it is at the core of who we are. Every action we take is rooted in care and commitment. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--top-left",
    bgClass: "hopes__mosaic-item--bg-11",
    cardBg: "/images/wall-of-hopes/cardsbg-right-center.svg",
  },
  {
    name: "Yatin Nandedkar",
    role: "Payroll and Retiral (Finance)",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Yatin Nandedkar 1.png",
    profileImageSrc: `${PROFILE_BASE}Yatin Nandedkar 1.png`,
    quote:
      '"Payroll is trust in action. By delivering accuracy, compliance, and timeliness, I help employees focus on what matters most - delivering care with confidence and purpose. When people feel secure, performance follows. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--top-left",
    bgClass: "hopes__mosaic-item--bg-12",
    cardBg: "/images/wall-of-hopes/cardsbg-right-center.svg",
  },
  {
    name: "Diana Cabesaz",
    role: "HR",
    country: "Mexico",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Diana Cabezas 2.png",
    profileImageSrc: `${PROFILE_BASE}Diana Cabezas 2.png`,
    quote:
      '"I lead the ESG certification initiative in Mexico, creating a framework that drives sustainability and care for patients, stakeholders, and the environment. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-3",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Neeraj Kumar Shrivastava",
    role: "Investigation",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Neeraj Kumar Shrivastava 2.png",
    profileImageSrc: `${PROFILE_BASE}Neeraj Kumar Shrivastava 2.png`,
    quote:
      '"As a part of Quality Control, I see every investigation as a chance to improve. Being a Catalyst means turning challenges into lasting improvements, and that\'s what drives me every day."',
    positionClass: "hopes__mosaic-item--top-left",
    bgClass: "hopes__mosaic-item--bg-12",
    cardBg: "/images/wall-of-hopes/cardsbg-right-center.svg",
  },
  {
    name: "Dhiraj Dwivedi",
    role: "Field Force",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Dhiraj Dwivedi 2.png",
    profileImageSrc: `${PROFILE_BASE}Dhiraj Dwivedi 2.png`,
    quote:
      '"I help provide tools, education, and ongoing support to patients with chronic conditions so they can manage their health every day. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--top-left",
    bgClass: "hopes__mosaic-item--bg-12",
    cardBg: "/images/wall-of-hopes/cardsbg-right-center.svg",
  },
  {
    name: "Team Packaging Development",
    role: "",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Team Packaging Development LRP Pune 1.png",
    profileImageSrc: `${PROFILE_BASE}Team Packaging Development LRP Pune 1.png`,
    quote:
      '"Packaging is the vital link between the product and the patient. As packaging technologists, we ensure this connection is safe, reliable, and impactful. We are Catalysts."',
    positionClass: "hopes__mosaic-item--top-left",
    bgClass: "hopes__mosaic-item--bg-11",
    cardBg: "/images/wall-of-hopes/cardsbg-right-center.svg",
  },
  // More/More
  {
    name: "Ajinkya Jondhale",
    role: "Process Development Lab",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Ajinkya Jondhale 1.png",
    profileImageSrc: `${PROFILE_BASE}Ajinkya Jondhale 1.png`,
    quote:
      '"Where innovation meets responsibility, I help drive efficiency and empower discovery. From science to care, I play an important part in creating life-changing solutions with safety at every step. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-1",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },

  {
    name: "Asif Tamboli",
    role: "Biopharmaceutics",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Asif Tamboli 1.png",
    profileImageSrc: `${PROFILE_BASE}Asif Tamboli 1.png`,
    quote:
      '"I design protocols for every PK study with subject safety and regulatory compliance at the core. This responsibility is essential to ethical and reliable clinical research. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-3",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Jalindar Raghunath C",
    role: "GMP Compliance",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Jalindar Raghunath C 1.png",
    profileImageSrc: `${PROFILE_BASE}Jalindar Raghunath C 1.png`,
    quote:
      '"I invest time in connecting with new joiners, discussing values, culture, and growth. By nurturing talent early, I help build strong teams for the future. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-left",
    bgClass: "hopes__mosaic-item--bg-4",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Nikita Pardhi",
    role: "Quality Assurance - OSD2",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Nikita-Pardhi.png",
    profileImageSrc: `${PROFILE_BASE}Nikita-Pardhi-1 1.png`,
    quote:
      '"My passion for continuous improvement led me to propose a cost-saving idea for Darunavir 600 mg packaging. Turning knowledge into innovation is how I accelerate progress. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-left",
    bgClass: "hopes__mosaic-item--bg-5",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Niranjan Galpalli",
    role: "LBC - Quality Assurance",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Niranjan.png",
    profileImageSrc: `${PROFILE_BASE}Niranjan.png`,
    quote:
      '"I help build a strong QMS that ensures quality data and uncompromised integrity for every BA/BE study. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--top-left",
    bgClass: "hopes__mosaic-item--bg-6",
    cardBg: "/images/wall-of-hopes/cardsbg-right-center.svg",
  },
  {
    name: "Prithvi Singh",
    role: "DPI Production",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Prithvi.png",
    profileImageSrc: `${PROFILE_BASE}Prithvi.png`,
    quote:
      '"Manufacturing operations are not just about machines and processes. They create conditions where innovation meets execution and raw materials become life-changing products. Every outcome carries hope, for patients and for communities. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-7",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Rahul Pagar",
    role: "Validation",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Rahul Pagar 1.png",
    profileImageSrc: `${PROFILE_BASE}Rahul Pagar 1.png`,
    quote:
      '"Working in Validation means being a driver of excellence and a guardian of patient safety. Every unchecked process carries risk, and in pharma, compliance defines the line between trust and tragedy. I take that responsibility with pride. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-8",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Roushan Kumar Sinha",
    role: "Field Force",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Roushan.png",
    profileImageSrc: `${PROFILE_BASE}Roushan.png`,
    quote:
      '"I help asthma patients enroll in JAI so they can learn the right inhalation technique leading to better outcomes and healthier lives. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-9",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Sanjay Bokan",
    role: "Drug Safety Assessment",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Sanjay Bokan 1.png",
    profileImageSrc: `${PROFILE_BASE}Sanjay Bokan 1.png`,
    quote:
      '"As a toxicologist in Drug Safety Assessment, I stand as the goalkeeper for drug safety, preventing non-compliance and safeguarding quality. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-10",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Sharad Pardhi",
    role: "Field Force",
    country: "India",
    imageSrc: "/images/wall-of-hopes/More/More/Sharad-Pardhi.png",
    profileImageSrc: `${PROFILE_BASE}Sharad Pardhi 1.png`,
    quote:
      '"Every time I step into a doctor\'s chamber, I do so with the confidence of representing quality products. That trust inspires better care for society. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-left",
    bgClass: "hopes__mosaic-item--bg-11",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Soham Deokar",
    role: "Process Development Lab (Regulatory)",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/soham.png",
    profileImageSrc: `${PROFILE_BASE}soham.png`,
    quote:
      '"Every process I design is a commitment to innovation, efficiency, and patient safety. Turning ideas into impactful solutions is how I drive meaningful progress. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--top-left",
    bgClass: "hopes__mosaic-item--bg-12",
    cardBg: "/images/wall-of-hopes/cardsbg-right-center.svg",
  },
  {
    name: "Vaibhav Tarkasband",
    role: "Quality Control - OSD2",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Vaibhav Tarkasband 1.png",
    profileImageSrc: `${PROFILE_BASE}Vaibhav Tarkasband 1.png`,
    quote:
      '"When I uphold the highest standards of quality, I\'m not just ensuring compliance - I\'m safeguarding someone\'s loved one, someone\'s hope. That responsibility drives my work. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-1",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
  {
    name: "Vijay Parashar",
    role: "Operational Excellence",
    country: "India",
    imageSrc: "/images/wall-of-hopes/devolpment Jpg/devolpment Jpg/Vijay Parashar 2.png",
    profileImageSrc: `${PROFILE_BASE}Vijay Parashar 2.png`,
    quote:
      '"Each day, I commit to excellence - supporting site quality teams and striving to build on my previous performance. Making a meaningful impact is what drives me. I am a Catalyst."',
    positionClass: "hopes__mosaic-item--bottom-right",
    bgClass: "hopes__mosaic-item--bg-2",
    cardBg: "/images/wall-of-hopes/cardsbg.svg",
  },
];

export default function HopesMosaic() {
  return (
    <section className="hopes__mosaic">
      <h1 className="hopes__mosaic-title">Wall Of Hope</h1>
      <div className="hopes__mosaic-grid">
        {HOPES_DATA.map((person, index) => (
          <HopeCard key={index} {...person} />
        ))}
      </div>
    </section>
  );
}
