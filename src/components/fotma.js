

import React, { useRef } from 'react';
function MyForm() {
    const ui1Ref = useRef(null);
    const ui2Ref = useRef(null);
    const ui3Ref = useRef(null);

    const op1 = () => {
        const ui1 = ui1Ref.current.value;
        const ui2 = ui2Ref.current.value;
        const ui3 = ui3Ref.current.value;
        const a1=prompt("Введите сою цель посещения")
        if (a1==="Сайт"){
            alert("Molodec")
            
        }
        else{
            alert("Неверно")
            return a1;
        }
        if (ui1 === "" || ui2 === "" || ui3 === "") {
            alert("Введи пжлст все поля");
        } else {
            alert("Ты ввел все поля");
        }
    };

    return (
        <footer>
        <div className='forma'  style={{
           
            /*height:'130px',*/
            
        }
            
        }>
            <input 
                type="text" 
                ref={ui1Ref}
                placeholder="Ваш номер телефона для связи"
                className='proverka'
                
            />
            <input 
                type="text" 
                ref={ui2Ref}
                placeholder="Ваши пожелания к проекту"
                className='proverka'
            />
            <br/>
            <select
                
                ref={ui3Ref}
                placeholder="Vidy"
                className='proverka'
                
                >
                    <option value=''>Выбери функцию</option>
                    <option value={0}>Sait</option>
                    <option value={1}>Verstka</option>
                    </select> 
            <br/>
            <button onClick={op1} style={{
                fontSize:'20px'
            }}>Проверить</button>
        </div>
        </footer>
    );
}

export default MyForm;
