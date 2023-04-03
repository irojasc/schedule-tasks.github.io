import React, {Component, useState} from 'react';


export const useLocalStorage = (itemName, initialValue) => { //custom hooks
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = useState(initialValue);
    React.useEffect(
    ()=>{
        try {
            setTimeout(() => {
                const localStoreItem = localStorage.getItem(itemName);
                let parsedItem;
                
                if (!localStoreItem){
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                }else{
                    parsedItem = JSON.parse(localStoreItem);
                }
    
                setItem(parsedItem);
                setLoading(false);
        
            }, 2000);
            }
         catch (error) {
            setError(error);
        }
    });

    const saveItem = (newItem)=>{
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    };

    return { // cuando retornar mas 2 estados, tienes que regresar un objeto
    item,
    saveItem,
    loading,
    error,
    };
}