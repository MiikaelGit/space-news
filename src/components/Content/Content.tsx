import { Card } from "../Card/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../Content/Content.module.scss";
import { Triangle } from "react-loader-spinner";

interface PostType {
  id: number;
  imageUrl: string;
  title: string;
  newsSite: string;
  summary: string;
  url: string;
}

export const Content: React.FC = () => {
  const [news, setNews] = useState<PostType[]>([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles/"
      );

      const newsData = response.data.results;
      setNews(newsData);
    }
    loadNews();
  }, []);
  return (
    <main className={styles.main}>
      {news.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <Triangle
            visible={true}
            height="100"
            width="100"
            color="#FFF"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        news.map((article) => {
          return (
            <Card
              key={article.id}
              imgPath={article.imageUrl}
              title={article.title}
              provider={article.newsSite}
              description={article.summary}
              newsLink={article.url}
            />
          );
        })
      )}
    </main>
  );
};
