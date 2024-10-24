import React, { useState } from 'react';
import './App.css';

function App() {
  // useState로 animal 상태를 선언
  const [animal, setAnimal] = useState({
    name: "멍멍",
    emoji: "🐶",
    friend: {
        name: "핑핑",
        emoji: "🐌",
    },
  });

  return (
    <div>
      {/* 동물과 친구의 상태를 화면에 출력 */}
      <h1>
        안녕👋 {animal.emoji} 나는 {animal.name} 이야❗
      </h1>
      <h2>
        안녕👋 {animal.friend.emoji} 나는 {animal.name}의 친구 {animal.friend.name} 이야❗
      </h2>

      {/* 새로운 친구의 이름과 이모지를 바꾸는 버튼 */}
      <button className='btn1'
        onClick={() => {
          const name = prompt("친구의 이름이 무엇인가요❓");
          const emoji = prompt("친구의 이모지가 무엇인가요❓");

          // 상태 업데이트 : 이름과 이모지 입력받아 friend 속성을 변경
          setAnimal((animal) => ({
            ...animal,
            friend: {
                ...animal.friend,
                // 입력이 없으면 기존 이름을 유지하기
                name: name || animal.friend.name, 
                // 입력이 없으면 기존 이모지 유지하기
                emoji: emoji || animal.friend.emoji,
            },
          }));
        }}
      >
        새로운 친구를 사귀었어요 ❗❗
      </button>

      {/* 친구 이모지만 바꾸는 버튼 */}
      <button className='btn2'
        onClick={() => {
          const emoji = prompt("어떤 이모지로 바꾸고 싶나요❓");

          // 상태 업데이트: 친구의 이모지만 변경
          setAnimal((animal) => ({
            ...animal,
            friend: {
              ...animal.friend,
              // 입력 없으면 기존 이모지 유지
              emoji: emoji || animal.friend.emoji, 
            },
          }));
        }}
      >
        동물의 이모지를 바꿔요 ❗❗ 
      </button>
    </div>
  );
}

export default App;
