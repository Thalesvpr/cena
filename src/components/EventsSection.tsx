import React from "react";
import { useEvents } from "@/hooks/useEvents";
import { EventCard } from "./EventCard";

export const EventsSection: React.FC = () => {
  const { events } = useEvents();

  return (
    <section className="space-y-4">
      {events.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          title={event.title}
          description={event.description}
          date={event.date}
          location={event.location}
          images={event.images}
        />
      ))}
    </section>
  );
};
