import styles from './Projects.module.scss'
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CodeXml, Link } from 'lucide-react';
import projectsList from '../../components/projectsBank/ProjectsBank'


function Projets() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    return (
        <section className={styles.containerProjets}>
            <article className={styles.containerProjetsItems}>
                {projectsList.map((project) => (
                    <div
                        key={project.id}
                        className={styles.projectDetails}
                    >
                        <div className={styles.projectImage}>
                            <img
                                src={project.image}
                                alt=""
                                onClick={() => {
                                    if (selectedProject === 0 || selectedProject === null) {
                                        setSelectedProject(project.id)
                                    }
                                }}
                            />
                        </div>

                        <div className={styles.projectDescription}>
                            <p>{project.description}</p>
                        </div>

                        <div className={styles.containerIcons}>
                            <div className={styles.iconCode}>
                                <span>
                                    Código no GitHub
                                </span>
                                <a href={project.linkCode} target='_blank'><CodeXml size={19}/></a>
                            </div>

                            <div className={styles.iconPage}>
                                <span>
                                    Ver online
                                </span>
                                <a href={project.linkPage} target='_blank'><Link size={19}/></a>
                            </div>
                        </div>
                    </div>
                ))}
                <div className={styles.containerAmplifiedImage}>
                    <AnimatePresence mode="wait">
                        {selectedProject !== null && (
                            <>
                                <motion.div
                                    className={styles.overlay}
                                    key={`overlay-${selectedProject}`}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    transition={{ ease: "easeOut", duration: 0.2 }}
                                >
                                    <img
                                        src={projectsList.find((t) => t.id === selectedProject)?.image}
                                        className={styles.amplifiedImage}
                                        alt=""
                                    />
                                </motion.div>

                                <motion.div
                                    key={`exit-${selectedProject}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { ease: "easeOut", duration: 0.8, delay: 0.4 } }}
                                    exit={{ opacity: 0, transition: { ease: "easeOut", duration: 0 } }}
                                >
                                    <X
                                        className={styles.exit}
                                        onClick={() => setSelectedProject(null)}
                                    />
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                    
                </div>

            </article>
        </section>
    );
}

export default Projets;