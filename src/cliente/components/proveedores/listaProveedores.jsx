export const ListaProveedores = (props) => {

    return (<>

        <div class="listaProveedor">
            <div class='tblCliente'>
                <div className="tblCabecera">
                    <span>Nombre</span>
                    <span>Apellido</span>
                    <span>Telefono</span>
                </div>
                <div className="tblCuerpo">
                    {props.proveedor.map(cliente => (
                        <>
                            <div className="itemCliente">
                                <div>{cliente.nombre}</div>
                                <div>{cliente.apellido}</div>
                                <div>{cliente.telefono}</div>
                            </div>
                        </>
                    ))}

                </div>
            </div>
        </div>

    </>)
}