"use client";

import { articledata } from "@/articledata";
import { useState } from "react";

export const useArticle = () => {
  const [articles, setArticles] = useState<Article[]>(articledata);

  // Função para buscar todos os artigos
  const getAllArticles = () => {
    return articles;
  };

  // Função para buscar um artigo por ID
  const getArticleById = (id: number) => {
    return articles.find((article) => article.id === id);
  };

  // Função para adicionar um novo artigo
  const addArticle = (article: Article) => {
    setArticles((prevArticles) => [...prevArticles, article]);
  };

  // Função para atualizar um artigo existente
  const updateArticle = (id: number, updatedArticle: Article) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === id ? { ...article, ...updatedArticle } : article
      )
    );
  };

  // Função para excluir um artigo
  const deleteArticle = (id: number) => {
    setArticles((prevArticles) =>
      prevArticles.filter((article) => article.id !== id)
    );
  };

  return {
    articles,
    getAllArticles,
    getArticleById,
    addArticle,
    updateArticle,
    deleteArticle,
  };
};