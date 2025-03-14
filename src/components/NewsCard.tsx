import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import Link from "next/link";
import { Texts } from "@/widgets/Texts";

interface NewsCardProps {
  id: number;
  title: string;
  description: string;
  date: string;
  images: { url: string; alt: string }[];
}

export const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  description,
  date,
  images,
}) => {
  const backgroundColor = useThemeColor("surfaceContainer");
  const textColor = useThemeColor("onSurface");

  return (
    <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor }}>
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
        Publicado em: {date}
      </Texts.Caption>
      <Link
        href={`/news/${id}`}
        className="text-blue-500 hover:underline mt-4 block"
      >
        Leia mais
      </Link>
    </div>
  );
};
