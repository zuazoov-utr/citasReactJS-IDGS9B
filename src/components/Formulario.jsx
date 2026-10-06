import { useState, useEffect, use } from "react";
import '../css/formulario.css';

const Formulario = ({
    modalVisible,
    setModalVisible,
    pacientes,
    setPacientes
}) => {
    const [paciente, setPaciente] = useState('');
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [fechaAlta, setFechaAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    /**
     * Create 5 new states
     *   - nombrePropietario
     *   - correo
     *   - telefono
     *   - fechaAlta
     *   - sintomas (descripcion del problema)
     * Create 5 new inputs with state
     * Type Inputs
     *  - text
     *  - tel
     *  - email
     *  - date
     * Inputs
     *   - input
     *   - textarea (contenido con mucho texto)
     */

    const handleCita = (e) => {
        e.preventDefault();
        // Validation
        if ([paciente.trim(), nombrePropietario.trim(), telefono.trim(),
        correo.trim(), fechaAlta, sintomas.trim()].includes('')) {
            window.alert('Error: Todos los campos son obligatorios');
            return;
        }

        // Create an object with all values in the form
        const nuevoPaciente = {
            paciente,
            nombrePropietario,
            telefono,
            correo,
            fechaAlta,
            sintomas
        };
        nuevoPaciente.id = Date.now();
        console.log(nuevoPaciente);

        // Save all new records
        // state = add my object into the array
        setPacientes([...pacientes, nuevoPaciente]);
    }

    return (
        <div className="formulario-contenido">
            <h2 className="formulario-titulo">Nueva
                <span className="formulario-titulo-bold"> Cita</span>
            </h2>
            <button
                className="formulario-btn-cancelar"
                onClick={() => setModalVisible(false)}
            >
                <span className="formulario-btn-texto-cancelar">Cancelar</span>
            </button>

            <form onSubmit={(e) => handleCita(e)}>
                <div className="formulario-campo">
                    <label
                        htmlFor="paciente"
                        className="formulario-label"
                    >Nombre Paciente</label>
                    <input
                        id="paciente"
                        type="text"
                        className="formulario-input"
                        placeholder="Perrito Poppy"
                        value={paciente}
                        onChange={(e) => setPaciente(e.target.value)}
                    />
                </div>
                <div className="formulario-campo">
                    <label
                        htmlFor="nombrePropietario"
                        className="formulario-label"
                    >Nombre Propietario</label>
                    <input
                        id="nombrePropietario"
                        type="text"
                        className="formulario-input"
                        placeholder="Juan"
                        value={nombrePropietario}
                        onChange={(e) => setNombrePropietario(e.target.value)}
                    ></input>
                </div>
                <div className="formulario-campo">
                    <label
                        htmlFor="telefono"
                        className="formulario-label"
                    >Telefono</label>
                    <input
                        id="telefono"
                        type="tel"
                        className="formulario-input"
                        placeholder="123456789"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    ></input>
                </div>
                <div className="formulario-campo">
                    <label
                        htmlFor="correo"
                        className="formulario-label"
                    >Correo</label>
                    <input
                        id="correo"
                        type="email"
                        className="formulario-input"
                        placeholder="usuario@gmail.com"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    ></input>
                </div>
                <div className="formulario-campo">
                    <label
                        htmlFor="fechaAlta"
                        className="formulario-label"
                    >Fecha de Alta</label>
                    <input
                        id="fechaAlta"
                        type="date"
                        className="formulario-input"
                        placeholder="usuario@gmail.com"
                        value={fechaAlta}
                        onChange={(e) => setFechaAlta(e.target.value)}
                    ></input>
                </div>
                <div className="formulario-campo">
                    <label
                        htmlFor="sintomas"
                        className="formulario-label"
                    >Sintomas</label>
                    <textarea
                        id="sintomas"
                        className="formulario-input"
                        placeholder="Describir sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                        rows={4}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="formulario-btn-submit"
                >Agregar Paciente</button>
            </form>
        </div>
    );
};

export default Formulario;