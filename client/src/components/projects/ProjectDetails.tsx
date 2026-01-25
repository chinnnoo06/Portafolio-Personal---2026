import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { slideInBottom } from '../../helpers/animations'
import { useProjectStore } from '../../store/projectStore'
import { GlobalImageProject } from '../../helpers/config/env'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ProjectTechnologies } from './ProjectTechnologies'

export const ProjectDetails = () => {
    const { projectSelected } = useProjectStore()
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    if (!projectSelected) return null

    useEffect(() => {
        if (!emblaApi || !projectSelected) return

        emblaApi.reInit()

        setScrollSnaps(emblaApi.scrollSnapList())
        setSelectedIndex(emblaApi.selectedScrollSnap())

    }, [emblaApi, projectSelected.images])

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap())
        }

        emblaApi.on('select', onSelect)

        return () => {
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi])

    return (
        <div className="flex flex-col gap-6 mx-auto max-w-7xl px-4">

            {/* TÍTULO */}
            <motion.div {...slideInBottom}>
                <div className="flex items-center text-sm md:text-base  mb-2">
                    <Link to="/" className="hover:text-[#b03a3a] transition-colors duration-200">Inicio</Link>

                    <span className="mx-2">/</span>

                    <Link
                        to='/proyectos'
                        className="hover:text-[#b03a3a] transition-colors duration-200"
                    >
                        Proyectos
                    </Link>

                    <span className="mx-2">/</span>

                    <span className=" font-medium truncate max-w-50 md:max-w-75">
                        {projectSelected.name}
                    </span>
                </div>
            </motion.div>

            <motion.div {...slideInBottom} className='flex flex-col gap-6'>
                <h1 className="font-bold text-3xl lg:text-4xl relative inline-block mb-6">
                    {projectSelected.name}
                    <span className="absolute left-0 -bottom-2 w-16 h-1 bg-[#b03a3a] rounded-full"></span>
                </h1>

                {projectSelected.githubUrl !== null && (
                    <div>
                        <a
                            href={projectSelected.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-medium text-sm lg:text-base opacity-80
                             hover:opacity-100 hover:text-[#b03a3a] transition-all duration-200 break-all max-w-full"
                        >
                            <i className="fab fa-github text-lg shrink-0" />
                            <span className="break-all">
                                {projectSelected.githubUrl}
                            </span>
                        </a>
                    </div>
                )}
            </motion.div>


            {/* IMAGEN + LINK */}
            <motion.div {...slideInBottom} className="space-y-6">

                <div className="relative overflow-hidden space-y-6">
                    <div ref={emblaRef} className="overflow-hidden rounded-lg">
                        <div className="flex">
                            {projectSelected.images.map((image, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_100%] relative"
                                >
                                    <img
                                        src={`${GlobalImageProject.url}${image}`}
                                        alt={`${projectSelected.name} ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-5 pointer-events-none"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center gap-2">
                        {scrollSnaps.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => emblaApi?.scrollTo(index)}
                                className={`
                                     h-2 lg:h-2.5 rounded-full transition-all duration-300
                                    ${index === selectedIndex
                                        ? 'bg-[#b03a3a] w-4 lg:w-4.5'
                                        : 'bg-[#272727]/40 hover:bg-[#272727]/60 w-2 lg:w-2.5'}
                                `}
                                aria-label={`Ir a imagen ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <ProjectTechnologies technologies={projectSelected.technologies} />


                <h2 className="font-bold text-3xl lg:text-4xl relative inline-block mb-6">
                    Descripción
                    <span className="absolute left-0 -bottom-2 w-16 h-1 bg-[#b03a3a] rounded-full"></span>
                </h2>

                {/* CONTENIDO */}
                <section className="space-y-6 leading-relaxed">

                    {projectSelected.content.map((block, index) => {
                        switch (block.type) {
                            case "paragraph":
                                return (
                                    <p
                                        key={index}
                                        className="text-base lg:text-lg leading-8 opacity-90"
                                    >
                                        {block.text}
                                    </p>
                                )

                            case "heading":
                                return block.level === 2 ? (
                                    <h2
                                        key={index}
                                        className="
                                            text-2xl lg:text-3xl
                                            font-bold
                                            tracking-tight
                                        "
                                    >
                                        {block.text}
                                    </h2>
                                ) : (
                                    <h3
                                        key={index}
                                        className="
                                            text-lg lg:text-xl
                                            font-semibold
                                            opacity-65
                                        "
                                    >
                                        {block.text}
                                    </h3>
                                )

                            case "quote":
                                return (
                                    <blockquote
                                        key={index}
                                        className="border-l-4 border-[#b03a3a] pl-6 italic text-base lg:text-lg text-[#272727]/65 my-6"
                                    >
                                        “{block.text}”
                                    </blockquote>
                                )
                        }
                    })}

                </section>

            </motion.div>

        </div>
    )
}