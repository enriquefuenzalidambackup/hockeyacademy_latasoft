import { Footer } from "components/footer";

export default function Contacto() {
    return (
        <main className={`block relative z-0 w-full pl-0 md:pl-32 bg-white`}>

            <div className={` relative w-full h-auto bg-white `}>

                <div className={`absolute w-full h-full bg-otoContactoGradient `} />
                <div className={`absolute w-full h-full opacity-20 bg-cover bg-center bg-no-repeat bg-[url('/images/ESTADIO-FC.jpg')] grayscale `} />

                <section className={`relative bg-transparent py-0 z-30 mt-16 md:mt-0 `}>
                    <div className={`max-w-3xl mx-auto flex justify-center items-center`}>
                        <div className={`bg-[#4698d6] bg-opacity-50 px-8 shadow-lg w-full`}>
                            <h2 data-aos-once="true" data-aos="fade-up" className={`text-center font-BebasNeue text-[#00445f] text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-12 mx-8 mb-6 uppercase`}>
                                Contacto
                            </h2>
                            <hr data-aos-once="true" data-aos="flip-left" className={`block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-8`} />
                            <form className={`pb-12 px-6 gx:px-0  text-white font-Roboto text-base gx:text-lg`}>
                                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5`}>
                                    <input className={`flex-1 border-b-2 border-solid border-white bg-transparent p-1 lg:p-2 xl:p-3 focus:outline-none appearance-none placeholder:text-white `} type='text' placeholder='Nombre' />
                                    <input className={`flex-1 border-b-2 border-solid border-white bg-transparent p-1 lg:p-2 xl:p-3 focus:outline-none placeholder:text-white `} type='text' placeholder='Apellido' />
                                    <input className={`flex-1 border-b-2 border-solid border-white bg-transparent p-1 lg:p-2 xl:p-3 focus:outline-none appearance-none placeholder:text-white `} type='email' placeholder='Correo electrónico' />
                                    <input className={`flex-1 border-b-2 border-solid border-white bg-transparent p-1 lg:p-2 xl:p-3 focus:outline-none appearance-none placeholder:text-white `} type='tel' placeholder='Número de teléfono' />
                                </div>
                                <div className={`mb-5`}>
                                    <label htmlFor='experiencia' className={`block mb-2 appearance-none`}>¿Qué experiencia deportiva te interesa?</label>
                                    <select id='experiencia' className={`w-full border-b-2 border-solid border-white bg-transparent p-0 lg:p-1 xl:p-2 focus:outline-none appearance-none rounded-none`}>
                                        <option value='hockey-evento'  >Hockey + Evento + Entrenamiento</option>
                                        <option value='hockey-personalizado'>Hockey | Experiencia personalizada</option>
                                        <option value='futbol'>Fútbol</option>
                                    </select>
                                </div>
                                <textarea className={`block mt-5 w-full border-2 border-solid border-white bg-transparent p-2 md:p-3 lg:p-4 xl:p-4 focus:outline-none placeholder:text-white `} rows='6' placeholder='Mensaje'></textarea>

                                <label className={` mt-5 text-white whitespace-normal flex flex-row `} htmlFor='privacidadPoliticas'>
                                    <span className={` block mr-3 mt-1 w-5 h-5 border-2 border-solid border-white bg-transparent`}>
                                        <input className={` m-0 p-0 block border-2 w-full h-full focus:outline-none`} type='checkbox' name='privacidadPoliticas' id='privacidadPoliticas' />
                                    </span>
                                    <span className={`block hyphens-auto `}>
                                    Sí, acepto la política de privacidad y los términos y condiciones.
                                    </span>
                                </label>
                                <p className={`block mt-8 text-center`}>
                                    <input type='submit' className={`cursor-pointer inline-block mx-auto py-2 px-6 md:py-3 md:px-8 lg:py-3 lg:px-10 xl:py-3 xl:px-10 bg-otoFondoRatioFondo hover:bg-otoFondoRatioFondoHover rounded-md border-none shadow-black shadow-sm transition-all ease-in-out duration-500 text-white `} value='Enviar mensaje' />
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

            <div className={`relative bg-otoFondoDos clear-both `}>
                <div className={`absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('/images/lineasPatron__.png')` }} />
                <Footer />
            </div>

        </main>
    );
}
