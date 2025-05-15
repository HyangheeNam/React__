import React, { useState, useEffect } from "react";
import axios from "axios";
import { NewsArticle } from "../types";

interface NewsListProps {
    category: string;
}

const NewsList = ({ category }: NewsListProps) => {
    const [articles, setArticles] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const API_KEY = "483921e4f69f49caa41438374cdb664e";  

    useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true); // 로딩 시작
        try {
        // category를 business로 변경하여 테스트
        const url = `https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=${API_KEY}`;

        console.log("Requesting URL: ", url); 
        const response = await axios.get(url);
        console.log(response.data); 

        if (response.data.status === "ok" && response.data.articles.length > 0) {
          setArticles(response.data.articles); // 기사 데이터 설정
        } else {
            console.log("No articles found");
          setArticles([]); // 기사가 없으면 빈 배열로 상태 설정
        }
        } catch (e) {
            console.error("Error fetching news:", e); // 오류 처리
            setArticles([]); // 오류 발생 시 빈 배열 설정
        } finally {
            setLoading(false); // 로딩 종료
        }
        };

        fetchData();
    }, [category]); // `category`가 변경될 때마다 API 요청

    if (loading) {
        return <div>대기 중...</div>; 
    }

    return (
        <div>
        <h2>{category} 뉴스 목록</h2>
        <ul>
            {articles.length > 0 ? (
            articles.map((article, index) => (
                <li key={index}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                    자세히 보기
                </a>
                </li>
            ))
            ) : (
            <p>뉴스가 없습니다.</p> 
            )}
        </ul>
        </div>
    );
};

export default NewsList;
