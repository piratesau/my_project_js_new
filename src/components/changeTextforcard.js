import React from 'react';
import Typewriter from './pechat';

class TextChangerforCard extends React.Component {
    render() {
        // ↓ Получаем состояние из App.js через props ↓
        const { activeRejim } = this.props;
        
        return (
            <div>
                {activeRejim === 'react' ? (
                    <div className='changeText_cont'>
                    <p className='changeText'>
                        <Typewriter text="Изучаю React в течение 2 месяцев. Владею основами функциональных компонентов, хуков (useState, useEffect) и JSX. Разрабатываю учебные проекты с использованием современных подходов." />
                    </p>
                    </div>
                ) : activeRejim === 'html' ? (
                    <div className='changeText_cont'>
                        <p className='changeText'>
                            <Typewriter text="Опыт работы с HTML

Владею основами HTML5 на уверенном уровне. Создаю семантически правильную и доступную разметку для веб-страниц.

Мои навыки:

    📄 Семантические теги (header, main, section, article, footer)

    🖼 Работа с медиа (img, video, audio)

    📝 Формы и input-элементы с различными типами

    🔗 Ссылки, списки, таблицы

    ♿ Основы доступности (accessibility)" />
                        </p>
                    </div>
                ) : activeRejim=='php' ?(
                    <div className='changeText_cont'>
                        <p className='changeText'>
                        <Typewriter text="Уровень: Junior / Начинающий разработчик

За последние 2 месяца активно осваиваю PHP через практическую разработку учебных и пет-проектов.
Освоенные и применяемые навыки:

    Базовый синтаксис и конструкции языка:

        Работа с переменными, типами данных, операторами

        Использование условий (if/else, switch), циклов (for, while, foreach)

        Создание и вызов пользовательских функций

        Основы ООП: классы, объекты, методы, свойства"/>
        </p>

                    </div>
                    
                ):activeRejim=='git'?(
                    <div className='changeText_cont'>
                        <p className='changeText'>
                        <Typewriter text="Уровень: Начинающий / Junior

За последние 2 месяца активно осваиваю систему контроля версий Git в рамках учебных проектов и практических задач.
Освоенные и регулярно используемые навыки:"/>
    
    <br/><Typewriter text="Базовые операции ежедневного использования:" delay={8500}/>

        <br/><Typewriter text="git init - инициализация репозиториев" delay={9000}/>

        <br/><Typewriter text="git clone - клонирование существующих репозиториев" delay={10000}/>

      <br/>  <Typewriter text="git add - добавление файлов в индекс" delay={15000}/>

        
        </p>
        </div>
                ):activeRejim=='tablet'?(
                    <div className='changeText_cont'>
                        <p className='changeText'>
                        <Typewriter text="Уровень: Senior Frontend Developer / HTML/CSS Developer
За 4 года профессиональной деятельности разработал и внедрил более 50+ веб-проектов с полной адаптацией под все типы устройств и современных стандартов веб-разработки."/>
    
    <br/><Typewriter text="Технический стек и технологии:" delay={8500}/>

        <br/><Typewriter text="Медиа-запросы сложной логики: min-width, max-width, orientation, hover" delay={9000}/>

        <br/><Typewriter text="CSS Grid и Flexbox — основная методология построения сеток" delay={10000}/>

      <br/>  <Typewriter text="Глубокая семантика: <section>, <article>, <nav>, <header>, <footer>" delay={15000}/>

        
        </p>
        </div>):(
                    <div className='changeText_cont'>
                        <p className='changeText'>Нажмите на кнопки чтобы увидеть информацию</p>
                    </div>
                )}
            </div>
        );
    }
}

export default TextChangerforCard;