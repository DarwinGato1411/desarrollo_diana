import { useEffect, useState } from "react"

export const FiltroCliente = () => {


    return (<>
        <span>Filtrar por:</span>
        <div className="filtroCliente">
            <input type="text" />
            <input type="button" value="Buscar" />
            <input type="button" value="Recargar" />
        </div>
    </>)
}