import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavItem from "./NavItem";
import Stack from "@/sdk-plugins/index";
import { getSpecificEntryKeyValue } from "@/sdk-plugins/index";
import Image from "next/image";
import logo from "@/public/logo.png"

function Navbar({navitems}) {
  

  return (
    <>
      <div className="">
        <nav className="navbar navbar-expand-lg bg-primary">
          <div className="container">
            <Link className="navbar-brand fw-bold text-white brand-logo" href="/">
              <i class="fa fa-home mx-1"></i>
              CITY REAL ESTATE
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul id="header-nav" className=" navbar-nav me-auto mb-2 mb-lg-0">
                {navitems.navigation_items &&
                  navitems.navigation_items.map((link, index) => (
                   <NavItem key={index} item={link} />
                  ))}
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0">
                {/* {rightMenu &&
                  rightMenu.map((link, index) => (
                    <li
                      key={index}
                      className={
                        "nav-item " + (router.asPath == link.link)
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        className={"nav-link  fw-bold text-white active"}
                        href={link.link}
                      >
                        {link.icon ? <i className={link.icon}></i> : null}
                        <span className="mx-1">{link.lable}</span>
                      </Link>
                    </li>
                  ))} */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
