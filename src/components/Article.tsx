"use client";

import { useThemeColor, useThemeColors } from "@/hooks/useThemeColor";
import { BaseColors, getForwardsColor } from "@/theme/themeColors";
import { Design } from "@/theme/themeConstants";
import { Button } from "@/widgets/Button";
import { Message } from "@/widgets/Message";
import { ReadingTexts, Texts } from "@/widgets/Texts";
import React, { useState } from "react";

interface ArticleProps {
  article: Article;
  themeColor: BaseColors;
}

export const ArticleComponent: React.FC<ArticleProps> = ({
  article,
  themeColor = "tertiary",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const colors = useThemeColors();
  const containerColor = useThemeColor(`${themeColor}Container` as BaseColors);
  const color = useThemeColor(`${themeColor}`);

  return (
    <div
      style={{
        gap: Design.Layout.reading.paragraphGap,
        padding: Design.Base.SpaceGaps.xxl,
        maxWidth: Design.Layout.reading.contentWidth,
        marginInline: "auto",
      }}
    >
      {/* Título */}
      <ReadingTexts.Title>{article.title}</ReadingTexts.Title>

      {/* Imagem principal */}
      {article.img && (
        <img
          src={article.img.url}
          alt={article.img.alt}
          className="w-full h-auto rounded-lg"
        />
      )}

      {/* Subtítulo */}
      {article.subtitle && (
        <ReadingTexts.Subtitle>{article.subtitle}</ReadingTexts.Subtitle>
      )}

      {/* Conteúdo com altura máxima e overflow */}
      <div
        className={`relative space-y-4 transition-all duration-500 ${
          !isExpanded ? "max-h-96 overflow-hidden" : ""
        }`}
      >
        {/* Máscara gradiente para o efeito de fade */}
        {!isExpanded && (
          <div
            className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-${colors.surface} to-transparent pointer-events-none`}
          ></div>
        )}

        {(() => {
          let messageIndex = 0; // Contador específico para mensagens
          let paragraphIndex = 0; // Contador específico para mensagens

          return article.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                paragraphIndex += 1;
                return (
                  <ReadingTexts.Paragraph
                    key={index}
                    highlightFirstLetter={paragraphIndex == 1}
                    firstLetterColor={themeColor}
                  >
                    {block.text}
                  </ReadingTexts.Paragraph>
                );
              case "title":
                return (
                  <ReadingTexts.Title key={index}>
                    {block.text}
                  </ReadingTexts.Title>
                );
              case "subtitle":
                return (
                  <ReadingTexts.Title key={index}>
                    {block.text}
                  </ReadingTexts.Title>
                );
              case "centered":
                return (
                  <ReadingTexts.Paragraph
                    key={index}
                    style={{ textAlign: "center" }}
                  >
                    {block.text}
                  </ReadingTexts.Paragraph>
                );
              case "message":
                messageIndex += 1; // Incrementa apenas para mensagens
                // Verifica se o texto é uma lista
                const isTextArray = Array.isArray(block.text);

                {
                  /* Se for uma lista, renderiza cada item */
                }
                {
                  if (isTextArray) {
                    return (
                      <div key={index} className="space-y-2">
                        {(block.text as Array<string>).map(
                          (text, textIndex) => {
                            // Último item da lista segue a alternância, os demais são centralizados
                            const isLastMessage =
                              textIndex === block.text.length - 1;
                            const position = isLastMessage
                              ? messageIndex % 2 === 0
                                ? "right"
                                : "left"
                              : "center";

                            const justifyClass =
                              messageIndex % 2 === 0
                                ? "justify-end"
                                : "justify-start";

                            return (
                              <div
                                key={textIndex}
                                className={`w-full flex ${justifyClass}`}
                              >
                                {messageIndex % 2 === 0 ? (
                                  <Message
                                    text={text}
                                    position={position}
                                    themeBackgroundColor={themeColor}
                                    themeTextColor={getForwardsColor(
                                      themeColor
                                    )}
                                  />
                                ) : (
                                  <Message
                                    text={text}
                                    position={position}
                                    themeBackgroundColor={"surfaceContainer"}
                                    themeTextColor={"onSurface"}
                                  />
                                )}
                              </div>
                            );
                          }
                        )}
                      </div>
                    );
                  }
                }

                {
                  /* Se não for uma lista, renderiza normalmente */
                }
                return (
                  <div
                    key={index}
                    className={`w-full flex ${
                      messageIndex % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                  >
                    {messageIndex % 2 === 0 ? (
                      <Message
                        text={block.text as string}
                        position={"right"}
                        themeBackgroundColor={themeColor}
                        themeTextColor={getForwardsColor(themeColor)}
                      />
                    ) : (
                      <Message
                        text={block.text as string}
                        position={"left"}
                        themeBackgroundColor={"surfaceContainer"}
                        themeTextColor={"onSurface"}
                      />
                    )}
                  </div>
                );
              case "quote":
                return (
                  <div key={index} className="border-l-4 pl-4 border-primary">
                    <ReadingTexts.Paragraph>
                      {block.text}
                    </ReadingTexts.Paragraph>
                    {block.author && (
                      <ReadingTexts.Paragraph className="mt-2">
                        — {block.author}
                      </ReadingTexts.Paragraph>
                    )}
                  </div>
                );
              case "image":
                return (
                  <img
                    key={index}
                    src={block.url}
                    alt={block.alt}
                    className="w-full h-auto rounded-lg"
                  />
                );
              default:
                return null;
            }
          });
        })()}
      </div>

      {/* Botão "Ler mais" ou "Ler menos" */}
      <div className="flex justify-center mt-6">
        <Button
          outline
          title={isExpanded ? "Ler menos" : "Ler mais"}
          themeColor="tertiary"
          onPress={() => setIsExpanded(!isExpanded)}
        />
      </div>
    </div>
  );
};
