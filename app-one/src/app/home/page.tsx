import { useState } from 'react';
export default function Home() {

    const [valor, setValor] = useState(18.765);

    return (
        <div>
            <label>Total de Usuarios Ativos</label>
            <input type="number" value={valor}/>
        </div>

    );
}