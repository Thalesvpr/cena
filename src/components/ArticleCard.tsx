"use client";

import { Texts } from "@/widgets/Texts";
import { Button } from "@/widgets/Button";
import Img from "@/widgets/Img";
import { useThemeColors } from "@/hooks/useThemeColor";
import { useState } from "react";

interface ArticleCardProps {
  article: Article;
  onReadMore: () => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onReadMore,
}) => {
  return (
    <div className={`rounded-lg overflow-hidden`}>
      {/* Imagem do artigo */}
      {/* {article.img && (
        <Img
          src={article.img.url}
          alt={article.img.alt}
          size={300}
          dimensionType="width"
          className="w-full h-48 object-cover"
        />
      )} */}

      {/* Conteúdo do artigo */}
      <div className="p-4  h-60 flex flex-col justify-between items-center">
        <div className=" flex flex-col gap-4 max-w-72">
          <Texts.Headline>{article.title}</Texts.Headline>
          <Texts.Subheadline themeColor={"onSurfaceVariant"}>
            {article.subtitle}
          </Texts.Subheadline>
        </div>
        <Button
          title="Ler mais"
          onPress={onReadMore}
          themeColor="tertiary"
          raw
        />
      </div>
    </div>
  );
};
