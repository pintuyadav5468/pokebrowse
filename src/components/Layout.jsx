import React from "react";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <main className="main-content">{children}</main>
      <footer className="footer">
        <p>
          Built with ❤️ using{" "}
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PokéAPI
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Layout;


