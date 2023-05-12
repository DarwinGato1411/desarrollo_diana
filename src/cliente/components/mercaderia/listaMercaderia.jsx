import { FiltroCliente } from "../clientes/filtroBusqueda"

export const ListaMercaderia = (props) => {



    return (<>
        <h1>Lista {props.title}</h1>
      

        <div class="listaMercaderia">

            <div class='tblMercaderia'>
                <div className="tblCabecera">
                    <span>Nombre</span>
                    <span>Cantidad</span>
                    <span>Tipo</span>
                </div>
                <div className="tblCuerpo">
                    {props.data.filter
                        (item => (item.tipoM == props.tipo)).map(item => (
                            <>
                                <div className="itemCliente">
                                    <div>{item.nombreProducto}</div>
                                    <div>{item.cantidad}</div>
                                    <div>{item.Clasificacion}</div>
                                   
                                </div>
                            </>
                        ))}
                </div>
            </div>
        </div>
    </>)
}