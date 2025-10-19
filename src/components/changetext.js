import React from 'react';
import Typewriter from './pechat';

class TextChanger extends React.Component {
    render() {
        // ↓ Получаем состояние из App.js через props ↓
        const { activeSection } = this.props;
        
        return (
            <div>
                {activeSection === 'profession' ? (
                    <div className='changeText_cont'>
                    <p className='changeText'>
                        <Typewriter text="Я начинающий Fullstack-разработчик с фокусом на современные веб-технологии." />
                    </p>
                    <p className='changeText'>
                        <Typewriter text="Моя цель — создавать интуитивно понятные и производительные приложения, которые решают реальные проблемы." 
                        delay={4000}/>
                    </p>
                    </div>
                ) : activeSection === 'history' ? (
                    <div className='changeText_cont'>
                        <p className='changeText'>
                            <Typewriter text="В двух словах о Югорске: Это современный, благоустроенный город в сибирской тайге, который играет огромную роль в энергетической безопасности всей страны. Его история — это история подвигов геологов, строителей и газовиков, которые в суровых условиях построили процветающий город." />
                        </p>
                    </div>
                ) : (
                    <div className='changeText_cont'>
                        <p className='changeText'>Привет!</p> <p className='changeText'>Я Михаил, и мне 17.</p>
<p className='changeText'>Мой мир — это код, музыка в наушниках и бесконечный поиск интересных решений. Сейчас я погружен в изучение веб-технологий, а этот сайт — моя пробная площадка, где я учусь превращать идеи в работающие проекты.
Когда не пишу код,  или просто гулять с друзьями.</p> <p className='changeText'>Верю, что с помощью технологий можно менять мир к лучшему, и я только в начале этого пути.</p>
                    </div>
                    
                )}
            </div>
        );
    }
}

export default TextChanger;