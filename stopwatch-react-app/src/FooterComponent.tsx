import React from "react";

type Props = {};

function FooterComponent({}: Props) {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/stopwatch" className="nav-link px-2 text-muted">
              Stopwatch
            </a>
          </li>
          <li className="nav-item">
            <a href="timer" className="nav-link px-2 text-muted">
              Timer
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/billowdev"
              className="nav-link px-2 text-muted"
            >
              GitHub
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">
          <a
            href="https://github.com/billowdev"
            className="nav-link px-2 text-muted"
          >
            © 2022 Billowdev
          </a>
        </p>
      </footer>
    </div>
  );
}

export default FooterComponent;
