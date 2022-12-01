import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const ListarArray = (listado,numerado) => {
  let retorno;
  if (numerado==false){
    retorno = <ul>{listado.map(elemento => {return <li key ={elemento}>{elemento}</li>})}</ul>
  }else{
    retorno = <ol>{listado.map(elemento => {return <li key ={elemento}>{elemento}</li>})}</ol>
  }    
  return retorno;
};
const AmpliarArray = (listado,valor) => {
  return [...listado,valor]
}


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {    
    
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <>

      <h1>GifExpertApp</h1>
      <AddCategory 
          onNewCategory ={event => onAddCategory(event)}
      />             
      {categories.map(category => (
        <GifGrid 
          key = {category}
          category= {category} />
        ))
      }
    </>    
  )
}
