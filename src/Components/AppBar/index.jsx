export default function AppBar() {
  return (
    <>
      <nav className="Navbar">
        <div className="Left">
          <div className="Wrapper">Racine14</div>
        </div>
        <div className="Center">
          <div className="Wrapper">Center</div>
        </div>
        <div className="Right">
          <div className="Right">
            <ul className="menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Profil</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
