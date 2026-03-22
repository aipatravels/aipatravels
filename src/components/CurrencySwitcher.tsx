'use client';

import React, { useState, useEffect } from 'react';
import { IconButton, Menu, MenuItem, Box, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import { currencies } from '@/data/config';

interface CurrencySwitcherProps {
  currentCurrency?: string;
}

export default function CurrencySwitcher({ currentCurrency }: CurrencySwitcherProps) {
  const [currency, setCurrency] = useState(currentCurrency || 'LKR');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    setCurrency(currentCurrency || Cookies.get('NEXT_CURRENCY') || 'LKR');
  }, [currentCurrency]);

  const currentCurrencyObj = currencies.find(c => c.code === currency);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelect = (selectedCurrency: string) => {
    setCurrency(selectedCurrency);
    Cookies.set('NEXT_CURRENCY', selectedCurrency, { path: '/', expires: 365 });
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleOpen} sx={{color: "white"}}>
        <Typography>
          {currentCurrencyObj ? `${currentCurrencyObj.symbol}` : currency}
        </Typography>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        disableScrollLock
      >
        {currencies.map((c) => (
          <MenuItem key={c.code} onClick={() => handleSelect(c.code)}>
             {c.code} ({c.symbol})
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}