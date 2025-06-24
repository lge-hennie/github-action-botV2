import React from "react";
import styles from "./index.module.css";
import { Link } from "@tanstack/react-router";

interface NavItemProps {
  href: string;
  title: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, title }) => {
  return (
    <li className={`${styles.menuItem}`}>
      <Link to={href} className="body-03">
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
