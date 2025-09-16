"use client"

import { useState } from 'react';
import Display from './Display';
import Button from './Button';
import styles from '../style/Calculator.module.css';

export default function Calculator() {
    const [displayValue, setDisplayValue] = useState('0');

    const handleButtonClick = (label) => {
        if (label === 'C') {
            // Limpar
            setDisplayValue('0');
        } else if (label === '=') {
            // Calcular
            try {
                // A função eval() calcula uma string de expressão.
                // CUIDADO: eval() pode ser inseguro se usado com input do usuário na web.
                // Para esta calculadora controlada, é uma solução simples.
                const result = eval(displayValue.replace('x', '*').replace('÷', '/'));
                setDisplayValue(String(result));
            } catch (error) {
                setDisplayValue('Erro');
            }
        } else {
            // Adicionar valor ao display
            if (displayValue === '0' || displayValue === 'Erro') {
                setDisplayValue(label);
            } else {
                setDisplayValue(displayValue + label);
            }
        }
    };

    return (
        <div className={styles.calculator}>
            <Display value={displayValue} />
            <div className={styles.keypad}>
                <Button label="C" onClick={handleButtonClick} />
                <Button label="÷" onClick={handleButtonClick} type="operator" />
                <Button label="x" onClick={handleButtonClick} type="operator" />
                <Button label="-" onClick={handleButtonClick} type="operator" />

                <Button label="7" onClick={handleButtonClick} />
                <Button label="8" onClick={handleButtonClick} />
                <Button label="9" onClick={handleButtonClick} />
                <Button label="+" onClick={handleButtonClick} type="operator" />

                <Button label="4" onClick={handleButtonClick} />
                <Button label="5" onClick={handleButtonClick} />
                <Button label="6" onClick={handleButtonClick} />
                <Button label="%" onClick={handleButtonClick} type="operator" />

                <Button label="1" onClick={handleButtonClick} />
                <Button label="2" onClick={handleButtonClick} />
                <Button label="3" onClick={handleButtonClick} />
                <Button label="=" onClick={handleButtonClick} type="operator" />

                <Button label="," onClick={handleButtonClick} />
                <Button label="0" onClick={handleButtonClick} />
                <Button label="." onClick={handleButtonClick} />
            </div>
        </div>
    );
}