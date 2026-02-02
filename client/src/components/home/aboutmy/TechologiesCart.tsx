import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaBootstrap, FaNodeJs, FaPhp, FaJava, FaMicrosoft } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiAngular, SiExpress, SiC, SiCplusplus, SiMysql, SiFirebase, SiFigma, SiSqlite, SiMongodb, SiTypescript, SiPostgresql } from 'react-icons/si';


export const TechologiesCart = () => {
    return (
        <div className='contenedor-tecnologias flex flex-row flex-wrap justify-center items-center gap-6 mt-6'>

            {/* Íconos con texto debajo */}
            <div className='tecnologia flex flex-col items-center text-center'>
                <FaHtml5 className='text-2xl sm:text-3xl md:text-4xl text-[#e34c26]' />
                <span className='text-xs text-[#dde1e9] mt-1'>HTML5</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <FaCss3Alt className='text-2xl sm:text-3xl md:text-4xl text-[#264de4]' />
                <span className='text-xs text-[#dde1e9] mt-1'>CSS3</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <FaJsSquare className='text-2xl sm:text-3xl md:text-4xl text-[#f0db4f]' />
                <span className='text-xs text-[#dde1e9] mt-1'>JavaScript</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <SiTypescript className='text-2xl sm:text-3xl md:text-4xl text-[#3178c6]' />
                <span className='text-xs text-[#dde1e9] mt-1'>TypeScript</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <FaReact className='text-2xl sm:text-3xl md:text-4xl text-[#61dafb]' />
                <span className='text-xs text-[#dde1e9] mt-1'>React</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <SiNextdotjs className='text-2xl sm:text-3xl md:text-4xl text-white' />
                <span className='text-xs text-[#dde1e9] mt-1'>Next.js</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <SiAngular className='text-2xl sm:text-3xl md:text-4xl text-[#dd1b16]' />
                <span className='text-xs text-[#dde1e9] mt-1'>Angular</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <FaBootstrap className='text-2xl sm:text-3xl md:text-4xl text-[#7952b3]' />
                <span className='text-xs text-[#dde1e9] mt-1'>Bootstrap</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <SiTailwindcss className='text-2xl sm:text-3xl md:text-4xll text-[#38bdf8]' />
                <span className='text-xs text-[#dde1e9] mt-1'>Tailwind</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <FaNodeJs className='text-2xl sm:text-3xl md:text-4xl text-[#68a063]' />
                <span className='text-xs text-[#dde1e9] mt-1'>Node.js</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <SiExpress className='text-2xl sm:text-3xl md:text-4xl text-[#ffffff]' />
                <span className='text-xs text-[#dde1e9] mt-1'>Express.js</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <FaPhp className='text-2xl sm:text-3xl md:text-4xl text-[#8892be]' />
                <span className='text-xs text-[#dde1e9] mt-1'>PHP</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <SiC className='text-2xl sm:text-3xl md:text-4xl text-[#555]' />
                <span className='text-xs text-[#dde1e9] mt-1'>C</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <SiCplusplus className='text-2xl sm:text-3xl md:text-4xl text-[#00599c]' />
                <span className='text-xs text-[#dde1e9] mt-1'>C++</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <FaMicrosoft className='text-2xl sm:text-3xl md:text-4xl text-[#239120]' />
                <span className='text-xs text-[#dde1e9] mt-1'>C#</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <FaJava className='text-2xl sm:text-3xl md:text-4xl text-[#007396]' />
                <span className='text-xs text-[#dde1e9] mt-1'>Java</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <SiMysql className='text-2xl sm:text-3xl md:text-4xl text-[#00758f]' />
                <span className='text-xs text-[#dde1e9] mt-1'>MySQL</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <SiPostgresql className='text-2xl sm:text-3xl md:text-4xl text-[#336791]' />
                <span className='text-xs text-[#dde1e9] mt-1'>PostgreSQL</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <SiSqlite className='text-2xl sm:text-3xl md:text-4xl text-[#003b57]' />
                <span className='text-xs text-[#dde1e9] mt-1'>SQLite</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <SiMongodb className='text-2xl sm:text-3xl md:text-4xl text-[#47A248]' />
                <span className='text-xs text-[#dde1e9] mt-1'>MongoDB</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <SiFirebase className='text-2xl sm:text-3xl md:text-4xl text-[#ffca28]' />
                <span className='text-xs text-[#dde1e9] mt-1'>Firebase</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <SiFigma className='text-2xl sm:text-3xl md:text-4xl text-[#f24e1e]' />
                <span className='text-xs text-[#dde1e9] mt-1'>Figma</span>
            </div>

            <div className='tecnologia flex flex-col items-center text-center'>
                <FaGitAlt className='text-2xl sm:text-3xl md:text-4xl text-[#f1502f]' />
                <span className='text-xs text-[#dde1e9] mt-1'>Git</span>
            </div>


        </div>
    )
}
