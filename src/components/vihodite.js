import React, { useState } from 'react';
import Typewriter from './pechat'; // путь к вашему компоненту Typewriter


function  Vihodite() {
  const [currentText, setCurrentText] = useState("Нажмите кнопку для отображения текста");
  const [previousText, setPreviousText] = useState("");
  const [useTypewriter, setUseTypewriter] = useState(true);

  const getRandomText = () => {
    const texts = [
      "Это новый текст с анимацией печати!",
      "Привет, мир! React Typewriter работает!",
      "Текст появляется постепенно...",
      "Отличная работа с Typewriter!",
      "Анимация печати делает интерфейс живым!"
    ];
    return texts[Math.floor(Math.random() * texts.length)];
  };

  const handleNewText = () => {
    setPreviousText(currentText);
    setCurrentText(getRandomText());
    // Принудительно перезапускаем Typewriter при смене текста
    setUseTypewriter(false);
    setTimeout(() => setUseTypewriter(true), 100);
  };

  const handleOldText = () => {
    if (previousText) {
      setPreviousText(currentText);
      setCurrentText(previousText);
      // Принудительно перезапускаем Typewriter
      setUseTypewriter(false);
      setTimeout(() => setUseTypewriter(true), 100);
    }
  };

  const handleToggleTypewriter = () => {
    setUseTypewriter(!useTypewriter);
  };

  return (
    <div className="app">
      <div className="buttons">
        <button onClick={handleNewText}>Показать новый текст</button>
        <button onClick={handleOldText}>Вернуть старый текст</button>
        <button onClick={handleToggleTypewriter}>
          {useTypewriter ? 'Отключить' : 'Включить'} анимацию
        </button>
      </div>
      
      <div className="display">
        {useTypewriter ? (
          <Typewriter 
            text={currentText} 
            speed={30} 
            delay={100}
          />
        ) : (
          <span>{currentText}</span>
        )}
      </div>

      {/* Информация о предыдущем тексте */}
      {previousText && (
        <div className="history">
          <h4>Предыдущий текст:</h4>
          <p>{previousText}</p>
        </div>
      )}
    </div>
  );
}

export default Vihodite;