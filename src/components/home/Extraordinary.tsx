'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { images } from '@/data/images';

const MotionBox = motion(Box);

const ACTIVITIES = [
  {
    id: '1',
    title: 'Yala Leopard Safari',
    category: 'Wildlife',
    image: images.home.leopard,
    span: { mdCol: 2, mdRow: 2 },
  },
  {
    id: '2',
    title: 'Sigiriya Rock Fortress',
    category: 'History',
    image: images.home.sigiriya,
    span: { mdCol: 1, mdRow: 1 },
  },
  {
    id: '3',
    title: 'Galle Fort Heritage',
    category: 'colonial',
    image: images.home.galle_fort,
    span: { mdCol: 1, mdRow: 2 },
  },
  {
    id: '4',
    title: 'Temple of the Tooth',
    category: 'Religon',
    image: images.home.temple_of_tooth,
    span: { mdCol: 1, mdRow: 1 },
  },
  {
    id: '5',
    title: 'Hikkaduwa Beach',
    category: 'Coastal',
    image: images.home.hikkaduwa,
    span: { mdCol: 2, mdRow: 1 },
  },
  {
    id: '6',
    title: 'Little Adams Peak',
    category: 'Highlands',
    image: images.home.littleAdams,
    span: { mdCol: 2, mdRow: 1 },
  },
];

export default function BentoGrid() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
        gridAutoRows: '250px',
        gap: 3,
        p: 5
      }}
    >
      {ACTIVITIES.map((item) => (
        <MotionBox
          key={item.id}
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '24px',
            gridColumn: { md: `span ${item.span.mdCol}` },
            gridRow: { md: `span ${item.span.mdRow}` },
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.03 }}
        >
          {/* Image */}
          <Image
            src={item.image.src}
            alt={item.title}
            fill
            style={{
              objectFit: 'cover',
              transition: 'transform 0.6s ease',
            }}
          />

          {/* Gradient Overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent)',
              opacity: 0.9,
              transition: '0.3s',
            }}
          />

          {/* Content */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              p: 3,
              color: '#fff',
              transform: 'translateY(10px)',
              transition: 'all 0.4s ease',
              '&:hover': {
                transform: 'translateY(0)',
              },
            }}
          >
            <Typography
              variant="caption"
              sx={{
                textTransform: 'uppercase',
                letterSpacing: 2,
                opacity: 0.8,
              }}
            >
              {item.category}
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {item.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mt: 1,
                opacity: 0,
                transition: '0.4s',
                '.MuiBox-root:hover &': { opacity: 1 },
              }}
            >
              Discover Journey →
            </Typography>
          </Box>
        </MotionBox>
      ))}
    </Box>
  );
}