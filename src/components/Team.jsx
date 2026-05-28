import { useState } from "react";

// ============================================================
// CARA BENAR import foto di React + Vite:
// 1. Import di atas seperti ini, lalu gunakan variable-nya di photo:
// ============================================================
import antPhoto from "../assets/ant.jpeg";
// import antPhoto from "../assets/ant.jpeg";
// import antPhoto from "../assets/ant.jpeg";
// import antPhoto from "../assets/ant.jpeg";
// import antPhoto from "../assets/ant.jpeg";
// import antPhoto from "../assets/ant.jpeg";

const team = [
  {
    name: "Andi Pratama",
    role: "Web Developer",
    university: "Universitas Brawijaya",
    faculty: "Teknik Informatika",
    photo: antPhoto,       // ← pakai variable import, BUKAN string path
    initials: "AP",
    bg: "linear-gradient(135deg, #e6faf4, #a7f0d6)",
    avatarBg: "linear-gradient(135deg, #2dd4a0, #1ab88a)",
    border: "#2dd4a0",
    tagBg: "#e6faf4",
    tagColor: "#0d9f6e",
    github: "#",
    linkedin: "#",
    email: "mailto:#",
  },
  {
    name: "Sari Dewi",
    role: "Web Developer",
    university: "Universitas Gadjah Mada",
    faculty: "Ilmu Komputer",
    photo: null,           // ← ganti: sariPhoto setelah import
    initials: "SD",
    bg: "linear-gradient(135deg, #f3f0ff, #c4b5fd)",
    avatarBg: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    border: "#8b5cf6",
    tagBg: "#f3f0ff",
    tagColor: "#6d28d9",
    github: "#",
    linkedin: "#",
    email: "mailto:#",
  },
  {
    name: "Rizky Maulana",
    role: "Data Scientist",
    university: "Institut Teknologi Bandung",
    faculty: "Sains Data",
    photo: null,           // ← ganti: rizkyPhoto setelah import
    initials: "RM",
    bg: "linear-gradient(135deg, #fffde6, #fde68a)",
    avatarBg: "linear-gradient(135deg, #f59e0b, #d97706)",
    border: "#f59e0b",
    tagBg: "#fffde6",
    tagColor: "#b45309",
    github: "#",
    linkedin: "#",
    email: "mailto:#",
  },
  {
    name: "Lina Putri",
    role: "Data Scientist",
    university: "Universitas Indonesia",
    faculty: "Statistika",
    photo: null,           // ← ganti: linaPhoto setelah import
    initials: "LP",
    bg: "linear-gradient(135deg, #fff0f5, #fda4af)",
    avatarBg: "linear-gradient(135deg, #f43f5e, #be123c)",
    border: "#f43f5e",
    tagBg: "#fff0f5",
    tagColor: "#be123c",
    github: "#",
    linkedin: "#",
    email: "mailto:#",
  },
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
);

const UniversityIcon = () => (
  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
);

export default function Team() {
  const [liked, setLiked] = useState({});

  const toggleLike = (i) => {
    setLiked(prev => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <>
      <style>{`
        .team {
          padding: 100px 48px;
          background: linear-gradient(160deg, #fff9f5 0%, #fff5f0 50%, #f5fff9 100%);
          position: relative;
          overflow: hidden;
        }
        .team::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(45,212,160,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .team-inner {
          max-width: 1160px;
          margin: 0 auto;
          position: relative;
        }
        .team-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .team-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          color: #0f2d2a;
          margin-bottom: 14px;
        }
        .team-subtitle {
          font-size: 1rem;
          color: #64748b;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.75;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .team-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          border: 1.5px solid;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 24px 56px rgba(0,0,0,0.10);
        }
        .team-card-top {
          padding: 14px 14px 0;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .team-role-tag {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 5px 13px;
          border-radius: 50px;
          letter-spacing: 0.05em;
        }
        .team-like-btn {
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 1.5px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.25s;
          background: white;
          color: #94a3b8;
          line-height: 1;
        }
        .team-like-btn.liked {
          border-color: #f43f5e;
          color: #f43f5e;
          background: #fff0f5;
        }
        .team-like-btn:hover {
          border-color: #f43f5e;
          color: #f43f5e;
          background: #fff0f5;
        }
        .team-photo-wrap {
          margin: 14px;
          border-radius: 18px;
          height: 190px;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .team-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }
        .team-avatar-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .avatar-circle {
          width: 80px; height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-family: 'DM Serif Display', serif;
          font-size: 1.8rem;
          letter-spacing: 1px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          position: relative;
          z-index: 1;
        }
        .avatar-ring {
          position: absolute;
          width: 96px; height: 96px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.4);
          animation: ring-pulse 2.5s ease-in-out infinite;
        }
        @keyframes ring-pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.2; }
        }
        .team-info {
          padding: 18px 18px 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .team-name {
          font-family: 'DM Serif Display', serif;
          font-size: 1.15rem;
          color: #0f2d2a;
          margin-bottom: 3px;
          line-height: 1.25;
        }
        .team-role-label {
          font-size: 0.8rem;
          color: #94a3b8;
          font-weight: 500;
          margin-bottom: 10px;
        }
        .team-university {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          background: #f8fafb;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 8px 10px;
          margin-bottom: 14px;
        }
        .univ-icon { color: #2dd4a0; flex-shrink: 0; margin-top: 1px; }
        .univ-name {
          font-size: 0.78rem;
          font-weight: 600;
          color: #334155;
          display: block;
          line-height: 1.3;
        }
        .univ-faculty {
          font-size: 0.7rem;
          color: #94a3b8;
          display: block;
          margin-top: 1px;
        }
        .team-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #e2e8f0, transparent);
          margin-bottom: 12px;
        }
        .team-socials {
          display: flex;
          gap: 8px;
          margin-top: auto;
        }
        .social-btn {
          width: 32px; height: 32px;
          border-radius: 9px;
          border: 1.5px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          text-decoration: none;
          transition: all 0.2s;
          background: white;
        }
        .social-btn:hover {
          border-color: #2dd4a0;
          color: #2dd4a0;
          background: #e6faf4;
          transform: translateY(-2px);
        }
        .team-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 52px;
        }
        .dot {
          height: 8px;
          border-radius: 4px;
          background: #e2e8f0;
          transition: all 0.3s;
          cursor: pointer;
          width: 8px;
        }
        .dot.active {
          background: #2dd4a0;
          width: 28px;
        }
        @media (max-width: 1000px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .team { padding: 80px 20px; }
          .team-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
          .team-photo-wrap { height: 150px; }
        }
        @media (max-width: 420px) {
          .team-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="team" id="our-team">
        <div className="team-inner">
          <div className="team-header">
            <h2 className="team-title">Our Teams</h2>
            <p className="team-subtitle">
              Tim kami terdiri dari para profesional berdedikasi yang bersemangat menghadirkan inovasi terbaik untuk kesehatan tidur Anda.
            </p>
          </div>

          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card" style={{ borderColor: member.border + "30" }}>
                <div className="team-card-top">
                  <span className="team-role-tag" style={{ background: member.tagBg, color: member.tagColor }}>
                    {member.role}
                  </span>
                  <button className={`team-like-btn ${liked[i] ? "liked" : ""}`} onClick={() => toggleLike(i)}>
                    {liked[i] ? "♥" : "♡"}
                  </button>
                </div>

                <div className="team-photo-wrap" style={{ background: member.bg }}>
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="team-photo" />
                  ) : (
                    <div className="team-avatar-fallback">
                      <div className="avatar-ring" style={{ borderColor: member.border + "60" }} />
                      <div className="avatar-circle" style={{ background: member.avatarBg }}>
                        {member.initials}
                      </div>
                    </div>
                  )}
                </div>

                <div className="team-info">
                  <div className="team-name">{member.name}</div>
                  <div className="team-role-label">{member.role}</div>
                  <div className="team-university">
                    <span className="univ-icon"><UniversityIcon /></span>
                    <div>
                      <span className="univ-name">{member.university}</span>
                      <span className="univ-faculty">{member.faculty}</span>
                    </div>
                  </div>
                  <div className="team-divider" />
                  <div className="team-socials">
                    <a href={member.github} className="social-btn" title="GitHub" target="_blank" rel="noreferrer"><GithubIcon /></a>
                    <a href={member.linkedin} className="social-btn" title="LinkedIn" target="_blank" rel="noreferrer"><LinkedinIcon /></a>
                    <a href={member.email} className="social-btn" title="Email"><MailIcon /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="team-dots">
            <div className="dot active" /><div className="dot" /><div className="dot" />
          </div>
        </div>
      </section>
    </>
  );
}
