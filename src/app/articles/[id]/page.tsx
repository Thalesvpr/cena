"use client"; // Indica que este é um Client Component

import { ArticleComponent } from "@/components/Article";
import { useArticle } from "@/hooks/useArticles";
import { Page } from "@/ui/Page";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ArticleById() {
  // Usa useParams para acessar o parâmetro dinâmico [id]
  const params = useParams();
  const id = params.id as string; // Acessa o id da URL

  const [articleId, setArticleId] = useState<number | null>(null);
  const { getArticleById } = useArticle();
  const article = articleId ? getArticleById(articleId) : null;

  // Converte o id para número quando o componente é montado
  useEffect(() => {
    if (id) {
      setArticleId(Number(id));
    }
  }, [id]);

  // Verifica se o id existe
  if (!id) {
    return <div>ID não encontrado</div>;
  }

  // Verifica se o artigo foi encontrado
  if (!article) {
    return <div>Artigo não encontrado</div>;
  }

  return (
    <Page showBackButton>
      <ArticleComponent article={article} />
    </Page>
  );
}
