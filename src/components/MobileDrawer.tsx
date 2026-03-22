// src/components/MobileDrawer.tsx
'use client';

import { Drawer, Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import Link from 'next/link';
import { navLinks } from '@/data/links';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  locale: string;
}

export default function MobileDrawer({ open, onClose, locale }: MobileDrawerProps) {
  const { t } = useTranslation();

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 250, p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navLinks.map((link) => {
            const fullPath = `/${locale}${link.path}`;
            return (
              <ListItem key={link.name} onClick={onClose}>
                <Link href={fullPath}>
                  <ListItemText primary={t(link.name)} />
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}