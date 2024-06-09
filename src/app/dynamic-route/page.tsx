import Link from "next/link";
import React from "react";

function DynamicRoute() {
  return (
    <div>
      DynamicRoute
      <Link href="/dynamic-route/anything-dynamic">Any thing in query </Link>
    </div>
  );
}

export default DynamicRoute;
