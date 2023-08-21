import React, { useState } from 'react';
import './Calculator.css'

const Calculator = () => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const ButtonClick = (value) => {
        setInputValue(prev => prev + value);
    };

    const calculate = () => {
        try {
            setInputValue(eval(inputValue).toString());
        } catch (e) {
            setInputValue("Ошибка");
            setTimeout(() => {
                clearInput()
            }, '1000');
        }
    };

    const clearInput = () => {
        setInputValue("");
    };

    return (
        <div className="calculator">
            <input type="text" value={inputValue} onChange={ handleChange } />
            <div className="buttons">
                <button onClick={() => ButtonClick('1')}>1</button>
                <button onClick={() => ButtonClick('2')}>2</button>
                <button onClick={() => ButtonClick('3')}>3</button>
                <button onClick={() => ButtonClick('4')}>4</button>
                <button onClick={() => ButtonClick('5')}>5</button>
                <button onClick={() => ButtonClick('6')}>6</button>
                <button onClick={() => ButtonClick('7')}>7</button>
                <button onClick={() => ButtonClick('8')}>8</button>
                <button onClick={() => ButtonClick('9')}>9</button>
                <button onClick={() => ButtonClick('-')}>-</button>
                <button onClick={() => ButtonClick('+')}>+</button>
                <button onClick={() => ButtonClick('*')}>*</button>
                <button onClick={() => ButtonClick('0')}>0</button>
                <button onClick={() => ButtonClick('/')}>/</button>
                <button onClick={calculate}>=</button>
                <button onClick={clearInput}>C</button>
            </div>
        </div>
    );
}

export default Calculator;