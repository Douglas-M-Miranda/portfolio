import { useState } from 'react';
import avatarDrawing from '../../assets/undraw_developer_avatar.svg'
import logo from '../../components/imageBank/ImageBank'
import styles from './About.module.scss'
import { X } from 'lucide-react';

function About() {
    const [detailhsUp, setDetailhsUp] = useState<boolean>(false);
    console.log(detailhsUp)

    return (
        <section className={styles.containerAbout}>
            <article className={styles.imageAbout}>
                <img src={avatarDrawing} alt="" />
            </article>

            <article className={styles.textAbout}>
                <p>
                    Sou estudante de Ciência da Computação com foco em desenvolvimento Front-End. Tenho experiência prática em projetos pessoais utilizando HTML, CSS, JavaScript e React, além de estar aprendendo TypeScript e consumo de APIs. Atualmente, dedico-me a construir meu portfólio para consolidar meu aprendizado e demonstrar minhas habilidades na prática.
                </p>
                <p>
                    Estou em busca da minha primeira oportunidade como desenvolvedor Front-End, onde possa aplicar o que venho estudando, ganhar experiência real e continuar evoluindo como profissional. Tenho disciplina, curiosidade em aprender novas tecnologias e muita dedicação para crescer na área.
                </p>
            </article>

            <article className={styles.technicsAbout}>
                <div>
                    <div
                        onClick={() => !detailhsUp && setDetailhsUp(!detailhsUp)}
                        className={styles.containerTechnology}>
                        <img src={logo.html} alt="" />
                    </div>
                    {detailhsUp && (
                        <div
                        // style={{ display: detailhsUp ? 'block' : 'none' }}
                        className={styles.containerDetails}>
                        <p>
                            HTML
                        </p>

                        <X
                            onClick={() => setDetailhsUp(!detailhsUp)}
                            className={styles.exit} />
                    </div>
                    )}
                </div>

                <div>
                    <div
                        onClick={() => !detailhsUp && setDetailhsUp(!detailhsUp)}
                        className={styles.containerTechnology}>
                        <img src={logo.css} alt="" />
                    </div>
                    <div
                        style={{ display: detailhsUp ? 'block' : 'none' }}
                        className={styles.containerDetails}>
                        <p>
                            CSS
                        </p>

                        <X
                            onClick={() => setDetailhsUp(!detailhsUp)}
                            className={styles.exit} />
                    </div>
                </div>

                <div>
                    <div
                        onClick={() => !detailhsUp && setDetailhsUp(!detailhsUp)}
                        className={styles.containerTechnology}>
                        <img src={logo.javaScript} alt="" />
                    </div>
                    <div
                        style={{ display: detailhsUp ? 'block' : 'none' }}
                        className={styles.containerDetails}>
                        <p>1Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi odit pariatur, rem ullam dolorum officiis repellat deserunt, enim quas aspernatur eveniet, ipsa alias nesciunt rerum mollitia velit ea perspiciatis.</p>

                        <X
                            onClick={() => setDetailhsUp(!detailhsUp)}
                            className={styles.exit} />
                    </div>
                </div>

                <div>
                    <div
                        onClick={() => !detailhsUp && setDetailhsUp(!detailhsUp)}
                        className={styles.containerTechnology}>
                        <img src={logo.react} alt="" />
                    </div>
                    <div
                        style={{ display: detailhsUp ? 'block' : 'none' }}
                        className={styles.containerDetails}>
                        <p>2Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi odit pariatur, rem ullam dolorum officiis repellat deserunt, enim quas aspernatur eveniet, ipsa alias nesciunt rerum mollitia velit ea perspiciatis.</p>

                        <X
                            onClick={() => setDetailhsUp(!detailhsUp)}
                            className={styles.exit} />
                    </div>
                </div>

                <div>
                    <div
                        onClick={() => !detailhsUp && setDetailhsUp(!detailhsUp)}
                        className={styles.containerTechnology}>
                        <img src={logo.typeScript} alt="" />
                    </div>
                    <div
                        style={{ display: detailhsUp ? 'block' : 'none' }}
                        className={styles.containerDetails}>
                        <p>3Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi odit pariatur, rem ullam dolorum officiis repellat deserunt, enim quas aspernatur eveniet, ipsa alias nesciunt rerum mollitia velit ea perspiciatis.</p>

                        <X
                            onClick={() => setDetailhsUp(!detailhsUp)}
                            className={styles.exit} />
                    </div>
                </div>

                <div>
                    <div
                        onClick={() => !detailhsUp && setDetailhsUp(!detailhsUp)}
                        className={styles.containerTechnology}>
                        <img src={logo.sass} alt="" />
                    </div>
                    <div
                        style={{ display: detailhsUp ? 'block' : 'none' }}
                        className={styles.containerDetails}>
                        <p>4Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi odit pariatur, rem ullam dolorum officiis repellat deserunt, enim quas aspernatur eveniet, ipsa alias nesciunt rerum mollitia velit ea perspiciatis.</p>

                        <X
                            onClick={() => setDetailhsUp(!detailhsUp)}
                            className={styles.exit} />
                    </div>
                </div>

                <div>
                    <div
                        onClick={() => !detailhsUp && setDetailhsUp(!detailhsUp)}
                        className={styles.containerTechnology}>
                        <img src={logo.git} alt="" />
                    </div>
                    <div
                        style={{ display: detailhsUp ? 'block' : 'none' }}
                        className={styles.containerDetails}>
                        <p>5Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi odit pariatur, rem ullam dolorum officiis repellat deserunt, enim quas aspernatur eveniet, ipsa alias nesciunt rerum mollitia velit ea perspiciatis.</p>

                        <X
                            onClick={() => setDetailhsUp(!detailhsUp)}
                            className={styles.exit} />
                    </div>
                </div>
            </article>
        </section>
    );
}

export default About;