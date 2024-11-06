"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Footer } from 'components/footer';

import ExperienciaGaleria from 'components/experienciaGaleria';
import PagoCondiciones from 'components/pagocondiciones';
import AllInclusiveExperiencia from 'components/allinclusiveexperiencia';
import CitasBlock from 'components/citasblock';
import ViajesGaleria from 'components/viajesgaleria';
import LateralImagenesCuadro from 'components/LateralImagenesCuadro';

import calendarioIcono from 'public/images/calendar-days.svg';
import calendarioCheckIcono from 'public/images/calendar-check.svg';

import hockeytecnificacionVid from 'public/images/IDentity-Campus-Tecnificacion-2023.mp4';

import hockeyTecnificacionForm from 'public/images/hockeyTecnificacionForm.webp';

import citasFondo from 'public/images/citasFondoHockeyTecnificacion.jpg';

import hockeytecnificacion01 from 'public/hockeytecnificacion/hockeytecnificacion01.webp';
import hockeytecnificacion02 from 'public/hockeytecnificacion/hockeytecnificacion02.webp';
import hockeytecnificacion03 from 'public/hockeytecnificacion/hockeytecnificacion03.webp';
import hockeytecnificacion04 from 'public/hockeytecnificacion/hockeytecnificacion04.webp';
import hockeytecnificacion05 from 'public/hockeytecnificacion/hockeytecnificacion05.webp';
import hockeytecnificacion06 from 'public/hockeytecnificacion/hockeytecnificacion06.webp';
import hockeytecnificacion07 from 'public/hockeytecnificacion/hockeytecnificacion07.webp';
import hockeytecnificacion08 from 'public/hockeytecnificacion/hockeytecnificacion08.webp';
import hockeytecnificacion09 from 'public/hockeytecnificacion/hockeytecnificacion09.webp';
import hockeytecnificacion10 from 'public/hockeytecnificacion/hockeytecnificacion10.webp';
import hockeytecnificacion11 from 'public/hockeytecnificacion/hockeytecnificacion11.webp';

const imagenesCuadro = [
    hockeytecnificacion01,
    hockeytecnificacion02,
    hockeytecnificacion03,
    hockeytecnificacion04,
    hockeytecnificacion05,
    hockeytecnificacion06,
    hockeytecnificacion07,
    hockeytecnificacion08,
    hockeytecnificacion09,
    hockeytecnificacion10,
    hockeytecnificacion11 ]


import mejorExperienciaA from 'public/images/mejorExperienciaA.png';
import mejorExperienciaC from 'public/images/mejorExperienciaC.png';
import mejorExperienciaD from 'public/images/mejorExperienciaD.png';
import mejorExperienciaG from 'public/images/mejorExperienciaG.png';
import mejorExperienciaH from 'public/images/mejorExperienciaH.png';
import mejorExperienciaI from 'public/images/mejorExperienciaI.png';

const mejorExperienciaImgs = [
    mejorExperienciaI,
    mejorExperienciaH,
    mejorExperienciaD,
    mejorExperienciaA,
    mejorExperienciaG,
    mejorExperienciaC
]

const allInclusiveExperienci = [
    { id: 0, titulo: 'Comida', contenido: 'El Campus incluye pensión completa (4 comidas diarias de todos los días). Así también los complementos alimenticios pre y post entrenamientos con su necesaria hidratación. Para los casos que lo requieran, contamos con la posibilidad de adaptar los menús a vegetarianos, veganos y celíacos. Visitaremos diversos restaurantes sudamericanos (Ej: “El Chalito” de Luís Suárez, como también el Mercado de la Boquería).' },
    { id: 1, titulo: 'Transporte', contenido: 'Desde nuestra llegada al aeropuerto de El Prat, en las afueras de la ciudad Condal, contamos con un transfer privado a exclusiva disposición que nos transportará de manera segura y rápida hacia el alojamiento. También durante toda la estadía en Barcelona y en París, ya sea para acudir a los puntos turísticos, los eventos deportivos, entrenamientos, etc. nos trasladaremos en transporte privado (24 hs. disponible).' },
    { id: 2, titulo: 'Asistencia Médica', contenido: 'Nuestros campus cuentan con un cuerpo médico encabezado por el Dr. Hernán Santiago Boccolini especializados en el área deportiva y traumatología. A diario, al margen de la actividad estrictamente deportiva, el médico visitará nuestro alojamiento a los fines de atender cualquier tipo de necesidad que se presente en los días del viaje. Nos complace contar con el apoyo de Farmacias Briera para cualquier imprevisto o necesidad de medicamentos.' },
    { id: 3, titulo: 'Documentación', contenido: 'A los efectos de ingresar a la Unión Europea (zona Schengen) sin inconvenientes se requiere contar con la siguiente documentación: Pasaporte al día (con fecha de vencimiento no menor a 6 meses); Autorización de viaje del menor de edad ante Escribano Público suscripta por ambos padres, y/o tutor (quien ejerza la patria potestad), y Seguro al Viajero (Cobertura mínima de €60.000) para los días del viaje. La misma deberá ser presentada con 30 días de antelación a la fecha del viaje, sin excepciones.' },
    { id: 4, titulo: 'Autorización Médica', contenido: 'Como en todo Campus deportivo, es menester requerir previamente el alta médica para la actividad física, la cual deberá ser entregada en papel y suscripta por el profesional correspondiente. Asimismo se entregará a cada viajero una Ficha Médica que deberá completar con sus padres y también ser suscripta por el médico. Dicha información se cargará digitalmente, conjuntamente con las preferencias alimenticias y los números de contactos en las pulseras de monitoreo de cada pasajero a los efectos de poder contar con ella en todo momento.' },
    { id: 5, titulo: 'Equipaje Sugerido', contenido: 'Brindaremos un KIT de viaje en el cual se incluye camisetas, shorts, mochila y sudadera para la actividad deportiva (solo restará llevar medias y calzado apropiado). Se recomienda llevar una valija grande (con candado o identificación) y una mochila o equipaje de mano. Es recomendable incluir en el equipaje en cuanto sea posible, trajes de baño, calzado de playa, protector, gorra o sombrero, ropa casual y shorts, camisetas, jeans, abrigo, campera, indumentaria de tu equipo favorito, medias de algodón y ropa interior cómoda.' }
]


import equipamientoA from 'public/images/equipamientoA.png';


import pagoCondicionesSaldo from 'public/images/pagoCondicionesSaldo.svg';
import pagoCondicionesPlane from 'public/images/pagoCondicionesPlane.svg';
import pagoCondicionesPen from 'public/images/pagoCondicionesPen.svg';
import pagoCondicionesCard from 'public/images/pagoCondicionesCard.svg';
import pagoCondicionesBill from 'public/images/pagoCondicionesBill.svg';

const pagoCondiciones = [
    { icono: pagoCondicionesPen, titulo: 'Seña', descripcion: 'Permite reservar el cupo del deportista contra la firma del contrato.' },
    { icono: pagoCondicionesPlane, titulo: 'Aereo', descripcion: 'No incluido. Debe contratarse 90 días antes de la fecha del viaje.' },
    { icono: pagoCondicionesSaldo, titulo: 'Saldo', descripcion: 'Financiación en cuotas sin interés. Cancelación hasta 30 días antes del viaje.' },
    { icono: pagoCondicionesCard, titulo: 'Medios de pago', descripcion: 'Efectivo, transferencia/deposito bancario y transferencia internacional.' },
    { icono: pagoCondicionesBill, titulo: 'Flexibilidad', descripcion: 'Posibilidad de abonar el 100% del Campus en cuotas fijas acordadas en el contrato.' },
]


const citasTecnificacion = [
    { autor: 'Costanza Asrin, mamá de Alfo Moyano', cita: 'Alfi volvió feliz de la clínica, sin ganas de que se termine. Se sintió comodísima a pesar de ser la más chica del grupo. Fascinada con Paco y Agustina, y tranquila y respaldada por Fer de manera permanente. Le encantó el hotel, la experiencia del mundial, la unión con el grupo, conocer chicas de otro lado, etc etc. Ella brilló en esa experiencia.' },
    { autor: 'Cristian Middleton, papá de Sodi Middleton', cita: 'Muchas gracias Facu y Eze estuvo todo buenísimo, a mi hija la veo feliz por haber participado de la experiencia deportiva que ustedes hacen posible, los felicito!. Aprovecho la oportunidad para agradecer a Paco y todo el equipo de Chile por la logística y facilidades para lograr el viaje' },
    { autor: 'Diego Andrade Papá de Morena Andrade', cita: 'Gracias por permitirnos ser parte de la experiencia, mi hija disfrutó cada entrenamiento y cada día de tecnificación. Les agradezco por la atención recibida desde el día 1, estando en cada detalle para los chicos y los padres también' },
    { autor: 'Paula López Mama de Luli Roccia', cita: 'Mil Gracias Facu, Eze, Fer y Paco, ya se los dije en persona, pero no quería dejar de saludarlos en público. ¡Realmente impecable, todo!. Luli volvió feliz y gracias por la calidad, y calidez humana.' },
    { autor: 'Alejandra Nazar Mamá de Vicky Salim', cita: 'Quería agradecerles por todo y felicitarlos por la organización impecable en absolutamente todo, el entrenamiento que vimos nos pareció impecable, el campo del Club Polo es un sueño y sumado a que nuestras hijas puedan vivir todo eso acompañadas de la contención, cariño y paciencia de ustedes.' }
]


export default function Eurohockey() {

    return (
        <main className={`block relative z-0 w-full pl-0 md:pl-32 bg-white mt-[4.4rem] md:mt-0 `}>

            <section className={` block relative w-full aspect-[16/7] bg-black z-30 mb-12 `}>
                <div className={` absolute top-0 left-0 w-full h-full `}>
                    <video poster='images/Hockey-22-Entrenamiento-II.jpg' className='object-cover object-center w-full h-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                        <source src='images/IDentity-Campus-Tecnificacion-2023.mp4' type="video/mp4" />
                    </video>
                </div>
            </section>


            <section className={` block relative w-full max-w-5xl z-30 my-12 px-4 gx:px-0  text-neutral-700 mx-auto `}>
                <div className={` flex flex-col gx:flex-row `}>
                    <div className={` gx:w-8/12 `} data-aos-once="true" data-aos="fade-up">
                        <h2 className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Viaje de Hockey Tecnificación<br/><span className={` text-nowrap text-[rgb(211,0,126)] `}>Barcelona 2025</span></h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8 `} />
                        <p className={` text-center mb-6 h-auto`} ><img className={` mx-auto w-8 `} src={calendarioIcono.src} alt='' /></p>
                        <h2 className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 `}>Del sábado 12 al miércoles 23 de julio</h2>
                        <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify hyphens-auto indent-5 `} >
                            Experiencia orientada a deportistas de 12 a 18 años. Realizamos 14 sesiones de entrenamientos intensivos de perfeccionamiento técnico a cargo de entrenadores  y formadores europeos a los cuáles los avala mucha experiencia en la corrección analítica y de reconocimiento internacional.
                        </p>
                        <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify hyphens-auto indent-5 `} >
                            El Campus se desarrolla en las instalaciones del Real Club de Polo de Barcelona y con la participación de 4 deportistas olímpicos.
                        </p>
                        <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify hyphens-auto indent-5 `} >
                        Una oportunidad única de crecimiento técnico, compartir y hacer amistades con deportistas de Argentina, Chile, Uruguay, España, EEUU y diversos países y visitar las principales atracciones de la ciudad Condal.
                        </p>
                        <p className={` font-Roboto font-normal text-md mt-6 text-center text-white pb-12`}>
                            <Link className={` inline-block mx-auto py-2 px-8 bg-[rgb(188,0,121)] bg-fucsiaAzulRatioFondo hover:bg-none rounded-md border-black border-solid border-1 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-500 `} href="https://calendly.com/identity-campus">
                                Agendá tu reunión 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={` inline-block h-4 w-auto ml-2`}  fill="currentColor">
                                    <path fill="white" d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                                </Link></p>
                    </div>
                    <LateralImagenesCuadro imagenesCuadro={imagenesCuadro} />

                </div>
            </section>

            <ExperienciaGaleria
                ExperienciaImgs={mejorExperienciaImgs}
                title="La mejor experiencia de hockey de vida"
                introtext="En nuestro campus de hockey nos enfocamos en mejorar la performance de juego. Trabajaremos en gestos de definición tanto de área chica como área grande, quites para potenciar la recuperación, gestos de despido tanto para definir cómo pasar bola, y el contenido estelar del desarrollo y perfeccionamiento de la arrastrada. Sin dudas será una oportunidad de crecimiento técnico personal para las deportistas en grupos reducidos y nivelados para lograr un mayor enfoque en la corrección y así asegurarnos una mejora." />

            <section data-aos-once="true" data-aos="fade-up" className={` block relative z-30 py-12 bg-center bg-cover clip-triangle `} style={{ backgroundImage: `url('images/hockey05.jpg')`, clipPath: 'polygon(0 0, calc(50% - 25px) 0, 50% 10%, calc(50% + 25px) 0, 100% 0, 100% 100%, 0 100%)' }}>
                <div className={` absolute inset-0 opacity-90 z-40 bg-fucsiaAzulRatioFondo bg-center bg-cover `} />
                <h2 data-aos-once="true" data-aos="zoom-out-down" className={` relative z-50 text-center tracking-wide font-BebasNeue text-white text-5xl italic mx-8`}>Si eres un club o una institución deportiva,<br className={` hidden gx:inline `} /> armámos tu experiencia a medida</h2>
                <p className={` relative z-50 text-center font-Roboto font-bold text-md text-white leading-loose mt-6`}><Link className={` mx-auto inline-block py-1 px-6 hover:bg-[rgb(141,0,91)] bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-sm shadow-black transition-all ease-in-out duration-300 `} href="/contacto">Contactanos</Link></p>
            </section>

            <AllInclusiveExperiencia
                list={allInclusiveExperienci} />

            <section className={` max-w-5xl w-full mx-auto `}>
                <div className={` flex md:flex-row flex-col px-8 gap-8 md:gap-0 my-20`}>
                    <div className={` w-full md:w-6/12 justify-start items-start`}>
                        <h4 className={` text-left font-BebasNeue text-[#F6BB0E] text-2xl mb-2 md:mr-12 `}>Equipamiento</h4>
                        <h3 className={` text-left font-BebasNeue text-blue-950 text-4xl mb-6 md:mr-12 `}>Kit de Viaje</h3>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block h-1 w-8 border-none bg-[rgb(211,0,126)] mb-8 `} />
                        <p className={` font-Roboto text-lg text-neutral-500 leading-relaxed md:mr-12  `}>Queremos que tu viaje sea inolvidable, y lleno de recuerdos. Incluimos la indumentaria deportiva para realizar las tecnificaciones (shorts / faldas, camisetas de entreno, buzo, mochila). En la cena despedida llevaremos a cabo distintos sorteos. <strong className={` whitespace-nowrap `}>¡No te lo puedes perder!</strong></p>
                    </div>
                    <p className={` w-full md:w-6/12 flex justify-center items-center`}>
                        <img data-aos-once="true" data-aos="fade-down" className={` max-w-md w-full `} src={equipamientoA.src} alt='' />
                    </p>
                </div>
            </section>

            <PagoCondiciones
                pagoCondiciones={pagoCondiciones} />

            <CitasBlock
                citaslista={citasTecnificacion}
                citasfondo={citasFondo} />
            
            <ViajesGaleria
                viajesgalerialist={imagenesCuadro} />

            <section id='reservas' className={` bg-white py-0 px-0 gx:px-4 `}>
                <div className={` max-w-5xl mx-auto grid grid-cols-1 gx:grid-cols-2 gap-6`}>
                    <div className={`  w-full `}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Solicitá más información</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8 `} />
                        <form className={` pb-12 px-6 gx:px-0 font-Roboto text-lg text-neutral-500 `}>
                            <input className={` block mt-5 w-full border-b-2 border-solid border-black border-opacity-40 bg-transparent appearance-none hover:appearance-none focus:outline-none  p-2`} type='text' placeholder='Nombre y apellido' />
                            <input className={` block mt-5 w-full border-b-2 border-solid border-black border-opacity-40 bg-transparent appearance-none hover:appearance-none focus:outline-none p-2 `} type='email' placeholder='Correo electrónico' />
                            <input className={` block mt-5 w-full border-b-2 border-solid border-black border-opacity-40 bg-transparent appearance-none hover:appearance-none focus:outline-none p-2 `} type='tel' placeholder='Número de teléfono' />
                            <textarea className={` block mt-5 w-full border-2 border-solid border-black border-opacity-40 bg-transparent appearance-none hover:appearance-none focus:outline-none p-2 `} rows='8' placeholder='Mensaje'></textarea>

                            <label className={` mt-5 whitespace-normal flex flex-row `} htmlFor='privacidadPoliticas'>
                                <span className={` mr-3 block w-5 h-5 border-2 border-solid border-black border-opacity-40 bg-transparent `}>
                                    <input className={` m-0 p-0 block border-0 w-full h-full bg-transparent focus:outline-none`} type='checkbox' name='privacidadPoliticas' id='privacidadPoliticas' /></span>
                                <span className={`block hyphens-auto font-RobotoCondensed leading-tight `}>
                                    Sí, acepto la política de privacidad y los términos y condiciones.</span></label>
                            <p className={` block align-bottom mt-8 text-center `}>
                                <input type='submit' className={` cursor-pointer inline-block mx-auto py-2 px-8 bg-[rgb(188,0,121)] bg-fucsiaAzulRatioFondo rounded-md border-black border-solid border-1 border-opacity-0 no-underline shadow-black shadow-sm transition-all ease-in-out duration-500 text-white hover:bg-none hover:border-opacity-10 `} value='Enviar mensaje' /></p>

                        </form>
                    </div>
                    <p className={` w-full h-72 gx:min-h-full overflow-hidden `}>
                        <img data-aos-once="true" data-aos="zoom" className={` object-cover object-center w-full h-full `} src={hockeyTecnificacionForm.src} alt='' /></p>
                </div>
            </section>

            <div className={` relative bg-fucsiaAzulFondoDos clear-both `}>
                <div className={` absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />
                <Footer />
            </div>
        </main>
    );
}


