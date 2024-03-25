const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <h1>
            <a href="index.html">Company Name</a>
          </h1>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
