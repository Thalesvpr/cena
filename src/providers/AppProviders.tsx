import React from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { NewsProvider } from "@/contexts/NewsContext";
import { EventsProvider } from "@/contexts/EventsContext";

interface AppProvidersProps {
  children: React.ReactNode;
}

/**
 * Componente que encapsula a aplicação com todos os providers necessários.
 * Isso inclui ThemeProvider, NewsProvider, EventsProvider, etc.
 */
export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <NewsProvider>
        <EventsProvider>
          {children}
        </EventsProvider>
      </NewsProvider>
    </ThemeProvider>
  );
};