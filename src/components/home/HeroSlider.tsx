'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';
import { Box, Typography, Button, useMediaQuery, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { images } from '@/data/images';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function HeroSlider() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';

  const swiperRef = useRef<any>(null);

  return (
    <Box sx={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        style={{ height: '100%' }}
        navigation={false}
      >
        {images.hero.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src={isMobile ? slide.mobile : slide.desktop}
                alt={slide.title}
                fill
                priority={index === 0}
                style={{ objectFit: 'cover' }}
                sizes="100vw"
              />

              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
                }}
              />

              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent:
                    slide.position === 'left'
                      ? 'flex-start'
                      : slide.position === 'right'
                      ? 'flex-end'
                      : 'center',
                  px: { xs: 3, md: 10 },
                  zIndex: 2,
                  animation: 'fadeInUp 0.8s ease',
                }}
              >
                <Box
                  sx={{
                    maxWidth: 520,
                    color: '#fff',
                    textAlign:
                      slide.position === 'left'
                        ? 'left'
                        : slide.position === 'right'
                        ? 'right'
                        : 'center',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      display: 'inline-block',
                      px: 3,
                      py: 0.5,
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontWeight: 500,
                    }}
                  >
                    {t(slide.title)}
                  </Typography>

                  <Typography
                    variant="h2"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                      fontSize: { xs: '2rem', md: '3rem' },
                      lineHeight: 1.2,
                    }}
                  >
                    {t(slide.subtitle)}
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
                    {t(slide.description)}
                  </Typography>

                  <Button
                    component={Link}
                    href={`/${currentLocale}/plan-your-trip`}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      px: 5,
                      py: 1.6,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: '999px',
                      textTransform: 'none',
                      background: 'linear-gradient(135deg, #657b43, #8aa65a)',
                      color: '#fff',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px) scale(1.03)',
                        boxShadow: '0 12px 25px rgba(0,0,0,0.35)',
                        background: 'linear-gradient(135deg, #5a6e3a, #7d944f)',
                      },
                      '&:active': { transform: 'scale(0.97)' },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '999px',
                        background: 'rgba(255,255,255,0.15)',
                        opacity: 0,
                        transition: 'opacity 0.3s',
                      },
                      '&:hover::after': { opacity: 1 },
                    }}
                  >
                    {t('nav.planTrip')}
                  </Button>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}

        <Box
          sx={{
            position: 'absolute',
            top:'50%' ,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            px: 3,
            zIndex: 20,
            transform: 'translateY(-50%)',
          }}
        >
          <IconButton
            onClick={() => swiperRef.current?.slidePrev()}
            sx={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              background: 'none',
              color: '#fff',
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            onClick={() => swiperRef.current?.slideNext()}
            sx={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              background: 'none',
              color: '#fff',
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        <Box
          className="custom-pagination"
          sx={{
            position: 'absolute',
            bottom: 30,
            left:  '50vw',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
            zIndex: 10,
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            animation: 'bounce 2s infinite',
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 40,
              border: '2px solid white',
              borderRadius: 12,
              display: 'flex',
              justifyContent: 'center',
              p: '4px',
            }}
          >
            <Box
              sx={{
                width: 4,
                height: 8,
                bgcolor: 'white',
                borderRadius: 2,
                animation: 'scroll 2s infinite',
              }}
            />
          </Box>
        </Box>
      </Swiper>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 40px;
          height: 4px;
          background: rgba(255,255,255,0.5);
          border-radius: 2px;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: white;
        }

        @keyframes bounce {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -10px); }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Box>
  );
}