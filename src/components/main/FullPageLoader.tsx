"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const colors = ["#F3B870", "#FFD700", "#FFFFFF", "#FFA500"];

interface SparkleType {
  id: number;
  x: string;
  y: string;
  color: string;
  size: number;
  duration: number;
}


export default function FullPageLoader() {
  const [isClient, setIsClient] = useState(false);
  const [sparkles, setSparkles] = useState<SparkleType[]>([]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleType = () => {
    const newSparkles: SparkleType[] = Array.from({ length: 2 }).map(() => {
      const id = Date.now() + Math.random();
      const x = `${Math.random() * 100}%`;
      const y = `${Math.random() * 20}px`;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = 12 + Math.random() * 8;
      const duration = 0.6 + Math.random() * 0.2;
      return { id, x, y, color, size, duration };
    });

    setSparkles((prev) => {
      const updated = [...prev, ...newSparkles];
      return updated.slice(-20); 
    });

    newSparkles.forEach((s) =>
      setTimeout(() => {
        setSparkles((prev) => prev.filter((p) => p.id !== s.id));
      }, s.duration * 1000)
    );
  };

  if (!isClient) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(255,255,255,0.95)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        textAlign: { xs: "center", md: "left" },
        zIndex: 9999,
        px: { xs: 2, sm: 4 },
        py: { xs: 3, sm: 0 },
      }}
    >
      <Typography variant="h4" sx={{ mb: { xs: 2, md: 0 }, mr: { md: 4 } }} >
        Loading...
      </Typography>
    </Box>
  );
}
