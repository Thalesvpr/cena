"use client";

import { ArticlesSection } from "@/ui/ArticleSection";
import { HeroSection } from "@/ui/Hero";
import { Page } from "@/ui/Page";
import { Button } from "@/widgets/Button";
import React from "react";

export default function Home() {
  return (
    <Page>
      <HeroSection />
      <ArticlesSection limit={3} />
      {/* Outros componentes ou conteúdo da página */}
    </Page>
  );
}
