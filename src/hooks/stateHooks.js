import {useState, useEffect} from 'react';

export const useContinue = isTrue => {
    const [cont, setCont] = useState(isTrue);
    const handleSetCont = (input) => {
        setCont(input);
    }
    return [cont, handleSetCont];
}