"use client";
import React, { createContext, useContext, useState } from "react";

interface EventImage {
  url: string;
  alt: string;
}

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  images: EventImage[];
}

interface EventsContextType {
  events: Event[];
  addEvent: (event: Omit<Event, "id">) => void;
  getEventById: (id: number) => Event | undefined;
}

const EventsContext = createContext<EventsContextType | undefined>(undefined);

export const EventsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Evento 1",
      description: "Descrição do evento 1.",
      date: "2023-10-01",
      location: "Local 1",
      images: [{ url: "/images/event1.jpg", alt: "Imagem 1" }],
    },
    {
      id: 2,
      title: "Evento 2",
      description: "Descrição do evento 2.",
      date: "2023-10-02",
      location: "Local 2",
      images: [{ url: "/images/event2.jpg", alt: "Imagem 2" }],
    },
  ]);

  const addEvent = (newEvent: Omit<Event, "id">) => {
    setEvents((prevEvents) => [
      ...prevEvents,
      { ...newEvent, id: prevEvents.length + 1 },
    ]);
  };

  const getEventById = (id: number) => {
    return events.find((event) => event.id === id);
  };

  return (
    <EventsContext.Provider value={{ events, addEvent, getEventById }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error("useEvents must be used within an EventsProvider");
  }
  return context;
};
