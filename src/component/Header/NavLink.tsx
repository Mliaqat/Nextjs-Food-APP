"use client";
import Link from "next/link";
import React from "react";
import classes from "./Header.module.css";
import { usePathname } from "next/navigation";

function NavLink({ href, children }: any) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={path.startsWith(href) ? classes.active : undefined}
    >
      {children}
    </Link>
  );
}

export default NavLink;
