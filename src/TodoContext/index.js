import React, {Component, useState} from 'react';
import { useLocalStorage } from './useLocalStorage';
const TodoContext = React.createContext(); //esto devuleve un objeto provider y consumer

function TodoProvider(props){
    const {
    item: currentTodos,
    saveItem: saveTodos,
    loading,
    error,} = useLocalStorage("TODOS_V1", []);

    const [currentSearch, setSearch] = useState("");
    const [isfrmOpen, setfrmOpen] = useState(false);
    const todosCompleted = currentTodos.filter(item=>!!item.completed).length;
    const todosAll = currentTodos.length;

    let searchedTodos = [];
    if(!currentSearch.length >= 1){
        searchedTodos = currentTodos;
    } else{
        searchedTodos = currentTodos.filter(item=>{
        const todoText = item.text.toLowerCase();
        const searchText = currentSearch.toLowerCase();
        return todoText.includes(searchText);
    });
    }


    const addTodo = (text)=>{
            let tmp_array = [...currentTodos];
            tmp_array.push({
                completed:false,
                text,
        });
            saveTodos(tmp_array);
        };


    const completeTodos = (text_)=>{
    const todoIndex = currentTodos.findIndex(item=>(item.text===text_)); //hasta aca va el profe
    if(todoIndex >= 0){
        let tmp_array = [...currentTodos];
        tmp_array[todoIndex].completed = !currentTodos[todoIndex].completed;
        saveTodos(tmp_array);
    };
    };

    const taskDelete = (text_)=>{
    const todoIndex = currentTodos.findIndex(item=>(item.text===text_)); //hasta aca va el profe
    if(todoIndex >= 0){
        let tmp_array = [...currentTodos];
        tmp_array.splice(todoIndex,1);
        console.log(tmp_array);
        saveTodos(tmp_array);
    };
    };
    return(
    <TodoContext.Provider value={{
        loading,
        error,
        todosCompleted ,
        todosAll,
        setSearch,
        searchedTodos,
        completeTodos,
        // onComplete,
        taskDelete,
        isfrmOpen,
        setfrmOpen,
        addTodo,
    }}>
        {props.children}
    </TodoContext.Provider> //
    );
}

export {TodoContext, TodoProvider};
