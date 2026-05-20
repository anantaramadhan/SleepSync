function Team() {
  return (
    <section id="team" className="team">
      <div className="container">
        <h2>Our Team</h2>
        <p style={{ color: "#64748b", marginTop: "10px" }}>
          Tim di balik kesuksesan SleepSync
        </p>

        <div className="team-grid">
          {[1, 2, 3, 4].map((i) => (
            <div className="team-card" key={i}>
              {/* Anda bisa menambahkan elemen seperti gambar profil atau nama di sini nanti */}
              <div className="team-info">
                <h4>Member {i}</h4>
                <p>Role</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;