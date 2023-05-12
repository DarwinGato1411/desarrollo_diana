export const Servicios = () => {
    return (
        <>
            <main class="contenedor">
                <h2 class="centrar-texto">Contacto</h2>
                <div class="grid">
                    <div class="imagen">
                        <img src="../img/contacto.jpg" alt=""/>
                    </div>
                    <div class="formulario-contacto">
                        <form action="#">
                            <div class="campo">
                                <label for="nombre">Nombre</label>
                                <input type="text" id="nombre" placeholder="Tu nombre"/>
                            </div>

                            <div class="campo">
                                <label for="email">E-mail</label>
                                <input type="text" id="email" placeholder="Tu correo electrónico"/>
                            </div>
                            <div class="campo">
                                <label for="mensaje">Mensaje</label>
                                <textarea id="mensaje"></textarea>
                            </div>

                        </form>
                    </div>
                </div>

            </main>
        </>
    )
}

