import React, { useState } from 'react';

interface Item {
    date: string;
    item: string;
    quantity: number;
    content: string;
}

interface ListDisplayProps {
    items: Item[];
    addItem: (newItem: Item) => void;
}

const ListDisplay = ({ items, addItem }: ListDisplayProps) => {
    const [newItem, setNewItem] = useState<Item>({
        date: '',
        item: '',
        quantity: 0,
        content: '',
    });

    const [showItems, setShowItems] = useState<Item[]>(items); // 초기 상태 설정
    const [selectedProduct, setSelectedProduct] = useState<string>('');

    //제품등록 input- e: React.ChangeEvent<HTMLInputElement>사용해서 이벤트 사용
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewItem((prevItem) => ({
            ...prevItem, //기존 상태 복사
            [name]: value,
        }));
    };

    //제품 등록될 때 데이터 
    const addItemHandle = () => {
        if (newItem.item) {
            const currentDate = new Date().toISOString().split('T')[0]; // 오늘 날짜
            const defaultQuantity = 1; // 기본 개수
            const defaultContent = '방금 입고된 제품입니다'; // 기본 내용

            const newItemToAdd = {
                date: currentDate,
                item: newItem.item,
                quantity: defaultQuantity,
                content: defaultContent,
            };

            addItem(newItemToAdd);

            // 새 항목을 최상단에 추가
            setShowItems((prevItems) => [newItemToAdd, ...prevItems]);

            // 입력 필드 초기화
            setNewItem({ date: '', item: '', quantity: 0, content: '' });
        }
    };

    //필터 중복제거
    // 중복 제거한 제품명 리스트 생성
    const uniqueItems = Array.from(new Set(items.map(item => item.item)));

    // 제품명 클릭 시 해당 제품에 대한 아이템 필터링
    const handleProductClick = (product: string) => {
        setSelectedProduct(product); // 선택된 제품 업데이트
        const filtered = product === '전체' ? items : items.filter(item => item.item === product);
        setShowItems(filtered);
    };

    //삭제버튼 - itemToDelete: 삭제할 아이템
    const handleDeleteBtn = (itemToDelete: Item) => {
        setShowItems(showItems.filter(item => item !== itemToDelete));
    };

    //수정버튼 
    const handleUpdateBtn = (itemToEdit: Item) => {
        setNewItem(itemToEdit); // 수정할 수 있도록 상태 업데이트
    };

    return (
        <div className='form-container'>
            <div className="top-container">
                <div className="logo-container">
                    <img src={process.env.PUBLIC_URL + "/images/box.png"} alt="box-logo" className='logo-img' />
                    <span>재고관리</span>
                </div>
                <div className="register-container">
                    <span>제품입고</span>

                    <input 
                        className='add-input'
                        type="text"
                        name="item" // name 속성 추가
                        placeholder="제품을 등록해주세요"
                        value={newItem.item} //새로 생성될 제품
                        onChange={handleInputChange}
                    />

                    <button className='registerBtn' onClick={addItemHandle}>등록</button>
                </div>
            </div>

            <div className='middle-container'>
                <div className="filter-container">
                    <div className="search-title">검색</div>
                    
                    <div className="search-item">
                        {/* uniqueItems 제품명 중복제거 후 list */}
                        {uniqueItems.map((product, index) => ( 
                            <label key={index}>
                                <input 
                                    type="radio"
                                    name="product"
                                    value={product}
                                    onClick={() => handleProductClick(product)} // 클릭 시 필터링
                                />
                                {product} {/* 제품명 표시 */}
                            </label>
                        ))}
                            <label>
                            <input 
                                type="radio"
                                name="product"
                                value="전체"
                                checked={selectedProduct === '전체'}
                                onChange={() => handleProductClick('전체')}
                            />
                            전체
                        </label>
                    </div>
                </div>
            </div>

            <div className='bottom-container'>
                <div className='list-container'>
                    <div className='list-title'>
                        <span className='list-date'>등록일자</span>
                        <span className='list-items'>제품명</span>
                        <span className='list-quantity'>개수</span>
                        <span className='list-content'>제품내용</span>
                        <span className='list-Btn'>수정/삭제버튼</span>
                    </div>

                    <ul className='show-list'>
                        {showItems.map((item, index) => (
                            <li key={index} className='list-item'>
                                <span className='show-list-date'>{item.date}</span>
                                <span className='show-list-items'>{item.item}</span>
                                <span className='show-list-quantity'>{item.quantity}</span>
                                <span className='show-list-content'>{item.content}</span>
                                <span>
                                    <button className='updateBtn' onClick={() => handleUpdateBtn(item)}>수정</button>
                                    <button onClick={() => handleDeleteBtn(item)}>삭제</button>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ListDisplay;
