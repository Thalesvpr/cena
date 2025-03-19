"use client";

import { useRouter } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { useArticle } from "@/hooks/useArticles";
import { ReadingTexts } from "@/widgets/Texts";
import { Button } from "@/widgets/Button";

interface ArticlesSectionProps {
  limit?: number; // Propriedade opcional para definir o limite de artigos exibidos
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ limit }) => {
  const router = useRouter();
  const { articles } = useArticle();

  // Função para navegar para a página de detalhes do artigo
  const handleReadMore = (id: number) => {
    router.push(`/articles/${id}`);
  };

  // Função para navegar de volta para a lista de artigos
  const handleBackToArticles = () => {
    router.push("/articles");
  };

  // Verifica se há mais artigos do que o limite definido
  const hasMoreArticles = limit && articles.length > limit;

  // Limita a lista de artigos se o limite estiver definido
  const displayedArticles = limit ? articles.slice(0, limit) : articles;

  if (false)
    return <ReadingTexts.Description>Carregando...</ReadingTexts.Description>;
  if (false) return <ReadingTexts.Description>{}</ReadingTexts.Description>;

  return (
    <div className="space-y-6">
      {/* Lista de artigos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedArticles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onReadMore={() => handleReadMore(article.id)}
          />
        ))}
      </div>

      {/* Botão para voltar à lista de artigos */}
      {hasMoreArticles && (
        <div className="flex justify-center">
          <Button
            title="Ler mais"
            icon="MdReadMore"
            onPress={handleBackToArticles}
            themeColor="tertiary"
            outline
          />
        </div>
      )}
    </div>
  );
};
