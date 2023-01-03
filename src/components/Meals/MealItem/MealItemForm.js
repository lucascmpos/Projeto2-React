import React, { useRef, useState } from 'react';


import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();


    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().lenght === 0 || 
            enteredAmountNumber <1 || 
            enteredAmountNumber > 5) 
            {
            setAmountIsValid(false);
            return;
        }

    };


    return (
        <form className={classes.form} onSubmit ={submitHandler}>
            <Input 
            ref={amountInputRef}
            label="Quantidade"
            input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button>+ Adicionar</button>
            {!amountIsValid && <p>Por favor adicione uma quantidade entre 1 a 5.</p>}
        </form>
    );
};

export default MealItemForm;