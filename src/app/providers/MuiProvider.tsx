'use client';

import { useEffect } from "react";
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/styles/theme';
import RouteLoading from "@/components/main/routeLoading";
import "@/fonts/FivoSans/style.css";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n/i18n";
import { Locale, locales } from "@/i18n/settings";

interface MuiProviderProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

export default function MuiProvider({ children, params }: MuiProviderProps) {
  const locale = params.locale;

  useEffect(() => {
    if (!locales.includes(locale)) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouteLoading>
          {children}
        </RouteLoading>
      </ThemeProvider>
    </I18nextProvider>
  );
}
