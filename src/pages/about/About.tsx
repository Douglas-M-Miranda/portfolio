import { useState } from 'react';
import avatarDrawing from '../../assets/undraw_developer_avatar.svg'
import Technologybank from '../../components/Technologybank/Technologybank'
import styles from './About.module.scss'
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';


function About() {
    const [detailhsUp, setDetailhsUp] = useState<number | null>(null);
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

                {Technologybank.map((tech) => (
                    <div>
                        <div
                            onClick={() => {
                                if (detailhsUp === 0 || detailhsUp === null) {
                                    setDetailhsUp(tech.id)
                                }
                            }}
                            className={styles.containerTechnology}
                        >
                            <img src={tech.image} alt="" />
                        </div>

                        <AnimatePresence mode="wait">
                            {detailhsUp !== null && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    transition={{ ease: "easeIn", duration: 0.2 }}
                                    style={{ display: detailhsUp ? 'block' : 'none' }}
                                    className={styles.containerDetails}
                                >
                                    <motion.p
                                    initial={{ opacity: 0, translateY: 10 }}
                                    animate={{ opacity: 1, translateY: 0  }}
                                    exit={{ opacity: 0, translateY: 10 }}
                                    transition={{ ease: "easeOut", duration: 0.3, delay: 0.3 }}
                                    >
                                        {Technologybank.find((t) => t.id === detailhsUp)?.history}
                                    </motion.p>
                                    <X
                                        className={styles.exit}
                                        onClick={() => setDetailhsUp(null)}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}

            </article>
        </section>
    );
}

export default About;