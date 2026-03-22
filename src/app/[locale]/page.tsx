'use client';

import Box from '@mui/material/Box';
import HeroSlider from '@/components/home/HeroSlider';
import { WhoWeAre } from '@/components/home/WhoWeAre';
import MiddleBanner from '@/components/home/MiddleBanner';
import Extraordinary from '@/components/home/Extraordinary';
export default function HomePage() {

  return (
      <Box sx={{ m: 0, p: 0, position: 'relative', top: -100}}>
        <HeroSlider />
        <WhoWeAre />
        <MiddleBanner />
        <Extraordinary />
      </Box>
  );
}