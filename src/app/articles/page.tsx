"use client";

import { useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { ReadingTexts } from "@/widgets/Texts";
import { Button } from "@/widgets/Button";
import { useArticle } from "@/hooks/useArticles";
import { useRouter } from "next/navigation";
import { Page } from "@/ui/Page";

export default function ArticlePage() {
  const router = useRouter();

  const { articles } = useArticle();
  const [filters, setFilters] = useState({
    category: "",
    author: "",
    date: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"date" | "title">("date");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const handleReadMore = (id: number) => {
    router.push(`/articles/${id}`);
  };

  // Função para aplicar filtros e busca
  const filteredArticles = articles
    .filter((article) => {
      const matchesCategory = filters.category
        ? article.category === filters.category
        : true;
      const matchesAuthor = filters.author
        ? article.author === filters.author
        : true;
      const matchesDate = filters.date ? article.date === filters.date : true;
      const matchesSearch = article.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesCategory && matchesAuthor && matchesDate && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return a.title.localeCompare(b.title);
      }
    });

  // Paginação
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Total de páginas
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  // Função para mudar de página
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // if (loading) return <ReadingTexts.Description>Carregando...</ReadingTexts.Description>;
  // if (error) return <ReadingTexts.Description>{error}</ReadingTexts.Description>;

  return (
    <Page showBackButton>
      {/* Título da página */}
      <ReadingTexts.Title>Artigos Recentes</ReadingTexts.Title>

      {/* Filtros e busca */}
      <div className="my-6 space-y-4">
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Buscar artigos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded-lg flex-1"
          />
          <select
            value={filters.category}
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
            className="p-2 border rounded-lg"
          >
            <option value="">Todas as categorias</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="politica">Política</option>
            <option value="cultura">Cultura</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "date" | "title")}
            className="p-2 border rounded-lg"
          >
            <option value="date">Ordenar por data</option>
            <option value="title">Ordenar por título</option>
          </select>
        </div>
      </div>

      {/* Lista de artigos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentArticles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onReadMore={() => handleReadMore(article.id)}
          />
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1}
            title={(index + 1).toString()}
            onPress={() => handlePageChange(index + 1)}
            themeColor={currentPage === index + 1 ? "primary" : "secondary"}
          />
        ))}
      </div>
    </Page>
  );
}
