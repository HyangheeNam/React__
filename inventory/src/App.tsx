import React, { useState } from 'react';
import './App.css';
import ListDisplay from './components/listDisplay';

interface Item {
    date: string;
    item: string;
    quantity: number;
    content: string;
}

function App() {
    const [items, setItems] = useState<Item[]>([
        { date: '2024-10-10', item: '밀가루', quantity: 10, content: '국내산 밀가루(중력분)' },
        { date: '2024-10-11', item: '전분', quantity: 20, content: '중국산 감자전분(베이징산)' },
        { date: '2024-10-12', item: '튀김가루', quantity: 20, content: '일본산 튀김가루(군마산)' },
        { date: '2024-10-10', item: '밀가루', quantity: 10, content: '국내산 밀가루(박력분)' },
        { date: '2024-10-13', item: '전분', quantity: 20, content: '중국산 옥수수전분(웨이하이산)' },
        { date: '2024-10-14', item: '튀김가루', quantity: 20, content: '일본산 튀김가루(군마산)' },
        { date: '2024-10-09', item: '밀가루', quantity: 10, content: '국내산 밀가루(중력분)' },
        { date: '2024-10-01', item: '전분', quantity: 20, content: '중국산 감자전분(베이징산)' },
        { date: '2024-10-02', item: '튀김가루', quantity: 20, content: '일본산 자연산 곡물 튀김가루(군마산)' }
    ]);

    const addItem = (newItem: Item) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <div>
            <ListDisplay items={items} addItem={addItem} /> {/* addItem 함수 전달 */}
        </div>
    );
}

export default App;
