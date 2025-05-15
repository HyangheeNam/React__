import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';
import Categories from './components/Categories';

const App = (): JSX.Element => {
  const [category, setCategory] = useState<string>("all"); // 기본 카테고리 설정

  // 카테고리 변경 시 처리하는 함수
  const handleCategorySelect = (category: string): void => {
    setCategory(category);
  };

  return (
    <Router>
      <div>
        <h1>News App</h1>
        <Categories onSelect={handleCategorySelect} category={category} />
        <Routes>
          <Route path="/" element={<NewsList category={category} />} />
          <Route path="/news/:url" element={<NewsDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
