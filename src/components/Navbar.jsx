function Navbar() {
  return (
    <nav className="navbar">
      {/* Container ini memastikan elemen navbar sejajar dengan konten di bawahnya */}
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        <h2 style={{ cursor: "pointer" }}>SleepSync</h2>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Feature</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;