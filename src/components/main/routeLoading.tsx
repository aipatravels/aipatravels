"use client";

import React, { useState, useEffect } from "react";
import FullPageLoader from "./FullPageLoader"; 

export default function RouteLoading({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showLoading) {
    return <FullPageLoader />;
  }
  return <>{children}</>;
}
