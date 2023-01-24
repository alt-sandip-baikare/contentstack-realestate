import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

function NavItem({ item }) {
  const { pathname } = useRouter();
  return (
    <>
      <li
        className={
          pathname === item.link_url.href 
          ? "nav-item active" 
          : "nav-item "
        }
      >
        <Link className="nav-link text-white fw-bold" href={item.link_url.href}>
          {item.icon ? <i className={item.icon}></i> : null}
          <span className={item.icon ? "mx-1" : ""}>{item.link_url.title}</span>
        </Link>
      </li>
    </>
  );
}

export default NavItem;
