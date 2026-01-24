import { inputStyle } from "../../../helpers/styles";
import { useContactForm } from "../../../hooks/useContactForm";

export const ContactForm = () => {
    const {loading, errors, actions} = useContactForm()

    return (
        <form className='space-y-6' onSubmit={actions.handleSubmit(actions.onSubmit)}>

            <div className="form-group ">
                <label htmlFor="name" className="block font-semibold text-[#dde1e9] mb-2 text-sm lg:text-base ">
                    Nombre
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Ej. Francsico Inda"
                    {...actions.register("name")}
                    className={inputStyle}
                />

                {errors.name && (
                    <div className="mt-1"><span className="text-sm text-[#b03a3a]">{errors.name?.message}</span></div>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="email" className="block font-semibold text-[#dde1e9] mb-2 text-sm lg:text-base ">
                    Correo Electrónico
                </label>
                <input
                    type="text"
                    id="email"
                    placeholder="Ej. correo@ejemplo.com"
                    {...actions.register("email")}
                    className={inputStyle}
                />

                {errors.email && (
                    <div className="mt-1"><span className="text-sm text-[#b03a3a]">{errors.email?.message}</span></div>
                )}

            </div>


            <div className="form-group">
                <label htmlFor="Subject" className="block font-semibold text-[#dde1e9] mb-2 text-sm lg:text-base ">
                    Tema
                </label>
                <input
                    type="text"
                    id="Subject"
                    placeholder="Ej. Cotización Proyecto"
                    {...actions.register("subject")}
                    className={inputStyle}
                />

                {errors.subject && (
                    <div className="mt-1"><span className="text-sm text-[#b03a3a]">{errors.subject?.message}</span></div>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="Message" className="block font-semibold text-[#dde1e9] mb-2 text-sm lg:text-base ">
                    Mensaje
                </label>
                <textarea

                    maxLength={450}
                    id="Message"
                    placeholder="Escribe tu mensaje"
                    {...actions.register("message")}
                    className={inputStyle}
                />

                {errors.message && (
                    <div className="mt-1"><span className="text-sm text-[#b03a3a]">{errors.message?.message}</span></div>
                )}
            </div>

            <button
                disabled={loading}
                className='disabled:opacity-65 text-sm lg:text-base px-3 py-2 bg-[#b03a3a] text-white rounded hover:bg-[#932f2f] transition-colors duration-300 cursor-pointer'
                type="submit">
                {loading ? 'Cargando...' : 'Mandar Mensaje'}
            </button>
        </form>
    )
}
