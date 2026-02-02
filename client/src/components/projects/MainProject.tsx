import { slideInBottom, slideInLeft, slideInRight } from "../../helpers/animations"
import { useProjectStore } from "../../store/projectStore"
import { motion } from 'framer-motion'
import { ProjectCardInfo } from "./project-card/ProjectCardInfo"
import { GlobalImageProject } from "../../helpers/config/env"
import { Link } from "react-router-dom"

export const MainProject = () => {
    const { projects } = useProjectStore()


    const project = projects[0]

    return (
        <div className="flex flex-col gap-6 mx-auto max-w-7xl px-4">
            <motion.div {...slideInBottom}>
                <h2 className='font-bold text-3xl lg:text-4xl relative inline-block mb-6'>
                    Último Proyecto
                    <span className="absolute left-0 -bottom-1.5 w-16 h-1 bg-[#b03a3a] rounded-full"></span>
                </h2>
            </motion.div>

            <div className="relative flex flex-col  group">
                <motion.div {...slideInLeft()} className="w-full ">
                    <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#272727]">

                        <Link to={`/proyectos/${project.slug}`}>
                            <img
                                src={`${GlobalImageProject.url}${project.images[0]}`}
                                alt="Producto"
                                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                        </Link>

                        {/* Overlay oscuro leve */}
                        <div className="absolute inset-0 bg-black opacity-5 pointer-events-none"></div>
                    </div>
                </motion.div>

                <motion.div {...slideInRight()}
                    className="                     
                        bg-[#eceff5]
                        rounded-lg
                        shadow-lg
                        p-6
                        z-10
                        relative

                        /* 📱 < sm: normal, debajo de la imagen */
                        w-full
                        mt-5

                        /* 📱 sm–md: sobrepuesta, centrada y más angosta */
                        sm:-mt-24
                        md:-mt-28
                        sm:mx-auto
                        sm:w-[80%]
                        md:w-[70%]
                    "
                >

                    <ProjectCardInfo project={project} />
                </motion.div>
            </div>

        </div>
    )
}
