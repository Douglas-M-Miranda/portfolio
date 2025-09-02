import styles from './Home.module.scss'
import draw from '../../assets/undrawProgramming.svg'

function Home() {
    return (
        <section className={styles.containerPresentation}>
            <article className={styles.summary}>
                <h2>Bem-vindo ao meu portfólio</h2>
                <p>Olá! Sou <span>Douglas</span>, estudante de Ciência da Computação focado em desenvolvimento Front-End. Busco minha primeira oportunidade na área para aplicar meus conhecimentos e crescer como desenvolvedor.</p>
            </article>
            
            <article className={styles.draw}>
                <img src={draw} alt="" />
            </article>
        </section>
    );
}

export default Home