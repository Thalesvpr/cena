import React from "react";
import { Texts } from "@/widgets/Texts";
import { useThemeColor } from "@/hooks/useThemeColor";
import Link from "next/link";

interface EventCardProps {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  images: { url: string; alt: string }[];
}

export const EventCard: React.FC<EventCardProps> = ({ id, title, description, date, location, images }) => {
  const backgroundColor = useThemeColor("surfaceContainer");
  const textColor = useThemeColor("onSurface");

  return (
    <div
      className="p-6 rounded-lg shadow-md"
      style={{ backgroundColor }}
    >
      {images.length > 0 && (
        <img
          src={images[0].url}
          alt={images[0].alt}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <Texts.Headline style={{ color: textColor }}>{title}</Texts.Headline>
      <Texts.SupportingText style={{ color: textColor, marginTop: "8px" }}>
        {description}
      </Texts.SupportingText>
      <Texts.Caption style={{ color: textColor, marginTop: "8px" }}>
        Data: {date}
      </Texts.Caption>
      <Texts.Caption style={{ color: textColor, marginTop: "8px" }}>
        Local: {location}
      </Texts.Caption>
      <Link href={`/events/${id}`} className="text-blue-500 hover:underline mt-4 block">
        Detalhes
      </Link>
    </div>
  );
};
