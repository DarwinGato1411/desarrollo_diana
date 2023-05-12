import { useEffect, useState } from 'react';
import { ListaMercaderia } from '../components/mercaderia/listaMercaderia'
import { FiltroCliente } from '../components/clientes/filtroBusqueda';

export const Mercaderia = () => {

    const mercaderiaDatos = [
        {
            nombreProducto: "Camisa",
            cantidad: "20",
            Clasificacion: "Ropa",
            tipoM: "Ingreso"
        }, {
            nombreProducto: "Pantalon",
            cantidad: "20",
            Clasificacion: "Ropa",
            tipoM: "Ingreso"
        }, {
            nombreProducto: "Sueter",
            cantidad: "20",
            Clasificacion: "Ropa",
            tipoM: "Ingreso"
        }, {
            nombreProducto: "Gorra",
            cantidad: "20",
            Clasificacion: "Ropa",
            tipoM: "Ingreso"
        }, {
            nombreProducto: "Zapatos",
            cantidad: "20",
            Clasificacion: "Ropa",
            tipoM: "Ingreso"
        }, {
            nombreProducto: "Medias",
            cantidad: "20",
            Clasificacion: "Ropa",
            tipoM: "Salida"
        }, {
            nombreProducto: "Camisa",
            cantidad: "20",
            Clasificacion: "Ropa",
            tipoM: "Salida"
        }, {
            nombreProducto: "Bufanda",
            cantidad: "20",
            Clasificacion: "Ropa",
            tipoM: "Salida"
        }, {
            nombreProducto: "Poncho",
            cantidad: "20",
            Clasificacion: "Ropa",
            tipoM: "Salida"
        }, {
            nombreProducto: "Corbata",
            cantidad: "20",
            Clasificacion: "Ropa",
            tipoM: "Salida"
        }
    ]

    const [mercaderia, setMercaderia] = useState([]);


    useEffect(() => {
        setMercaderia(mercaderiaDatos)
    }, []);

    return (
        <>
           
            <ListaMercaderia
                title="Ingreso de Mecaderia"
                tipo="Ingreso"
                data={mercaderia}
            />


            <ListaMercaderia
                title="Salida de Mecaderia"
                tipo="Salida"
                data={mercaderia}
            />
        </>
    )
}