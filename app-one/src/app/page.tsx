'use client';
import React, { useEffect, useRef, useState } from 'react';
export default function Home() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [valor, setValor] = useState(0);
    const setValorInput = () => {
      setValor(inputRef?.current.value)
    }
    useEffect(() => {
      setValorInput()  
    }, []);  

    return (
        <div>
            <label>Total de Usuarios Ativos</label>
            <div>{valor}</div>
            <input  ref={inputRef}  type="number" value={valor || undefined} />
        </div>
            

    );
}