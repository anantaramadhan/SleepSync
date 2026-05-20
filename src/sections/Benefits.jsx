function Benefits() {
  return (
    <section id="benefits" className="benefits">
      {/* Container ini memastikan konten sejajar dengan section lainnya */}
      <div className="container">
        <h2>Benefits</h2>

        <div className="benefit-grid">
          {[1, 2, 3].map((i) => (
            <div className="card" key={i}>
              <div className="card-img"></div>
              {/* Menambahkan sedikit margin agar teks tidak menempel ke gambar */}
              <p style={{ marginTop: "15px", fontWeight: "600" }}>Benefit {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;