
import blog1 from '../../assets/img/guiacontabilidad.webp'
import blog2 from '../../assets/img/images.jfif'
import blog3 from '../../assets/img/Contabilidad.png'
export const Inicio = () => {
    return (
        <>
            <div class="contenedor contenido-principal">
                <main class="blog">
                    <h2>Nuestro Blog</h2>
                    <article class="entrada-blog">
                        <div class="imagen">
                            <img src={blog1} alt="Imagen Blog"/>
                        </div>
                        <div class="contenido-blog">
                            <h3 class="no-margin">Lorem ipsum dolor</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maiores libero dolorem ab quam
                                ipsa dolor quo et? Nostrum officia tempore repudiandae sint corporis iure eum voluptatem tenetur
                                nisi doloremque?</p>
                            <a  class="btn btn-primario"> Leer Entrada </a>
                        </div>
                    </article>
                    <article class="entrada-blog">
                        <div class="imagen">
                            <img src={blog2} alt="Imagen Blog"/>
                        </div>
                        <div class="contenido-blog">
                            <h3 class="no-margin">Lorem ipsum dolor</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maiores libero dolorem ab quam
                                ipsa dolor quo et? Nostrum officia tempore repudiandae sint corporis iure eum voluptatem tenetur
                                nisi doloremque?</p>
                            <a  class="btn btn-primario"> Leer Entrada </a>
                        </div>
                    </article>
                    <article class="entrada-blog">
                        <div class="imagen">
                            <img src={blog3} alt="Imagen Blog"/>
                        </div>
                        <div class="contenido-blog">
                            <h3 class="no-margin">Lorem ipsum dolor</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maiores libero dolorem ab quam
                                ipsa dolor quo et? Nostrum officia tempore repudiandae sint corporis iure eum voluptatem tenetur
                                nisi doloremque?</p>
                            <a  class="btn btn-primario"> Leer Entrada </a>
                        </div>
                    </article>

                </main>
                <aside class="cursos">
                    <h2>Nuestros cursos y talleres</h2>
                    <ul class="cursos-lista">
                        <li class="curso">
                            <h4 class="no-margin">Tecnicas de extracción de café</h4>
                            <p class="no-margin">Precio: <span>Gratis</span></p>
                            <p class="no-margin">Cupo: <span>20</span></p>
                            <a href="cursos.html" class="btn btn-secundario">Mas información</a>
                        </li>

                        <li class="curso">
                            <h4 class="no-margin">4 Recetas de café para principiante</h4>
                            <p class="no-margin">Precio: <span>Gratis</span></p>
                            <p class="no-margin">Cupo: <span>20</span></p>
                            <a href="cursos.html" class="btn btn-secundario">Mas información</a>
                        </li>
                    </ul>


                </aside>

            </div>

        </>
    )
}
