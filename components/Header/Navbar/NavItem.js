import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

function NavItem({ item }) {
  const router = useRouter();
  return (
    <>
      <li
        className={
          router.asPath === item.link ? "nav-item active" : "nav-item "
        }
      >
        <Link className="nav-link text-white fw-bold" href={item.link}>
          {item.icon ? <i className={item.icon}></i> : null}
          <span className={item.icon ? "mx-1" : ""}>{item.lable}</span>
        </Link>
      </li>
    </>
  );
}

export default NavItem;
