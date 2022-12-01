import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setInputValue] = useState('');
    
    const onInputChanged = (event) =>{
        setInputValue (event.target.value);
    }

    const onSumit = (event) =>{
        event.preventDefault();                
        if(inputValue.trim().length <= 0) return;        
        //func_setCategories(categories => [inputValue,... categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        //<form onSubmit={(event => onSumit (event))}>
        <form onSubmit={onSumit}>
            <input
                type = "text"
                placeholder="Buscar gifs"
                value = {inputValue}
                //onChange={(event) => onInputChanged(event)}
                onChange={onInputChanged}
            />    
        </form>
  )
}
