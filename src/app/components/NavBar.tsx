import { useState } from "react";
import Link from "../../../node_modules/next/link";

interface Props {
  isMobile: boolean;
  activeRef: number;
  isTop: boolean;
}

export default function NavBar(props: Props) {
  const { isMobile, activeRef, isTop } = props;

  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="desktop" style={{ boxShadow: isTop ? "none" : "0 0 20px rgba(0, 0, 0, 0.16)" }}>
      <ul className="container" style={{ padding: isTop ? "20px 0" : "10px 0" }}>
        <li className="left">
          <ul>
            <li className={activeRef === 0 ? "active logo" : "logo"}>
              <Link offset="100" href="#home">
                <JRKLogo />
                <span className="hidden-text">Home</span>
              </Link>
            </li>
            <li className="divider">
              <div></div>
            </li>
            <li className="icon">
              <a href="https://github.com/JackRKelly" target="_blank" rel="noopener noreferrer">
                <span className="main">
                  <Github />
                </span>
                <span className="sub">
                  <ExternalLinkIcon />
                </span>
                <span className="hidden-text">Github</span>
              </a>
            </li>
            <li className="icon">
              <a href="https://dev.to/jackrkelly" target="_blank" rel="noopener noreferrer">
                <span className="main">
                  <Devto />
                </span>
                <span className="sub">
                  <ExternalLinkIcon />
                </span>
                <span className="hidden-text">Dev to</span>
              </a>
            </li>
            <li className="icon">
              <a href="https://www.linkedin.com/in/jackkelly4/" target="_blank" rel="noopener noreferrer">
                <span className="main">
                  <LinkedInBox />
                </span>
                <span className="sub">
                  <ExternalLinkIcon />
                </span>
                <span className="hidden-text">LinkedIn</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="right">
          <ul>
            <li>
              <Link
                href="#main" className={activeRef === 0 ? "anchor active" : "anchor"}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about" className={activeRef === 1 ? "anchor active" : "anchor"}>
                About
              </Link>
            </li>
            <li>
              <Link
                href="#work" className={activeRef === 2 ? "anchor active" : "anchor"}>
                Work
              </Link>
            </li>
            <li>
              <Link
                href="#articles" className={activeRef === 3 ? "anchor active" : "anchor"}>
                Articles
              </Link>
            </li>
            <li>
              <Link
                href="#contact" className={activeRef === 4 ? "anchor active" : "anchor"}>
                Contact
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
