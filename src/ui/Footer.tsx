"use client";

import React from "react";
import Link from "next/link";
import { useThemeColor } from "@/hooks/useThemeColor";
import { SocialLinks } from "./SocialLinks";
import { metadata } from "@/metadata";
import { ReadingTexts } from "@/widgets/Texts";

export const Footer = () => {
  const surfaceColor = useThemeColor("surface");
  const onSurfaceColor = useThemeColor("onSurface");

  return (
    <footer
      className="border-t border-opacity-10"
      style={{
        backgroundColor: surfaceColor,
        color: onSurfaceColor,
        padding: "2rem",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Seção da Marca */}
        <div>
          <ReadingTexts.Subtitle themeColor="onSurfaceVariant" className="mb-4">
            {metadata.brand.name}
          </ReadingTexts.Subtitle>
          <ReadingTexts.Description>
            {metadata.brand.description}
          </ReadingTexts.Description>
        </div>

        {/* Navegação no Footer */}
        <nav>
          <ReadingTexts.Subtitle themeColor="onSurfaceVariant" className="mb-4">
            Navegação
          </ReadingTexts.Subtitle>
          <ul className="flex flex-col gap-2">
            {metadata.navigation.footer.map((route, index) => (
              <li key={index}>
                <Link
                  href={route.path}
                  className="text-inherit no-underline hover:underline"
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Redes Sociais */}
        <div>
          <ReadingTexts.Subtitle themeColor="onSurfaceVariant" className="mb-4">
            Siga-nos
          </ReadingTexts.Subtitle>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};
