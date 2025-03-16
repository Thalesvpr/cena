"use client";

import React from "react";
import { metadata } from "../metadata";
import { Button } from "@/widgets/Button";
import { BodyTexts, Texts } from "@/widgets/Texts";
import { IconName } from "@/utils/iconUtils";
import Link from "next/link";
import { PaddingMargin } from "@/theme/themeConstants";
import Img from "@/widgets/Img";
import { ThemedText } from "@/widgets/ThemedText";
import useMedia from "@/hooks/useMidia";

export const HeroSection = () => {
  const midia = useMedia();
  return (
    <section
      className="relative h-[600px] md:h-90 flex items-center justify-center"
      style={{
        paddingInline: PaddingMargin.lg,
        paddingBlock: PaddingMargin.lg,
      }}
    >
      <div className="w-full flex flex-col items-center justify-center gap-12 md:flex-row">
        <Img
          src={metadata.sections.hero.biglogourl}
          alt="Logo"
          size={midia == "desktop" ? 300 : 150} // Tamanho fixo para a logo
          dimensionType="width" // Mantém a proporção baseada na largura
          className="object-contain"
        />
        <div className="relative z-10 flex flex-col h-full gap-6 justify-center items-center md:items-start">
          <div className=" flex flex-col gap-6 text-center md:text-left">
            <Texts.Headline>{metadata.sections.hero.title}</Texts.Headline>
            <ThemedText fontSize={28} className=" max-w-2xl">
              {metadata.brand.description}
            </ThemedText>
            <ThemedText className=" max-w-2xl">
              {metadata.sections.hero.description}
            </ThemedText>
          </div>

          <div className="flex gap-6">
            {metadata.sections.hero.cta.map((cta, index) => {
              return (
                <Link key={index} href={cta.path}>
                  <Button
                    title={cta.label}
                    icon={cta.icon as IconName}
                    themeColor={index === 0 ? "primary" : "secondary"}
                    iconPosition="right"
                    outline={index !== 0}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
