import styles from './Home.module.scss'
import draw from '../../assets/undrawProgramming.svg'
import { motion, AnimatePresence, easeIn } from 'motion/react';

function Home() {
    return (
        <section className={styles.containerPresentation}>
            <AnimatePresence>
                <motion.article
                    className={styles.summary}
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: easeIn, duration: .7 }}
                >
                    <h2>Bem-vindo ao meu portfólio</h2>

                    <p>Olá! Sou
                        <motion.span 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ ease: easeIn, duration: .7, delay: .8 }}
                        >
                            Douglas
                        </motion.span>, estudante de Ciência da Computação focado em desenvolvimento Front-End. Busco minha primeira oportunidade na área para aplicar meus conhecimentos e crescer como desenvolvedor.</p>
                </motion.article>

                <motion.article 
                className={styles.draw}
                initial={{ opacity: 0, x: -500, rotate: 90 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ ease: easeIn, duration: .8, delay: .4 }}
                >
                    <img src={draw} alt="" />
                </motion.article>
            </AnimatePresence>
        </section>
    );
}

export default Home