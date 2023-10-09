import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Map, Marker} from 'react-map-gl';
import PinImagen from './imagenes/wing.png';
import './CrearMuseo.css'
//import 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';

const CrearMuseo = () => {
    const [museo, setMuseo] = useState("");
    const [encargado, setEncargado] = useState("");
    const [imagen, setImagen] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [horario, setHorario] = useState("");
    const [tipo, setTipo] = useState("");
    const [lugar, setLugar] = useState("");
    const [petfriendly, setPetfriendly] = useState(false);
    const [ventadecomidas, setVentadecomidas] = useState(false);
    const [paginaweb, setPaginaweb] = useState("");

    const navigate = useNavigate();

    const [errors, setErrors] = useState({}); //errors.ATRIBUTO.message

    const [viewState, setViewState] = React.useState({
        longitude: -84.08587837222639,
        latitude: 9.65,
        zoom: 6.1
    });

    const guardarMuseo = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/museos", {
            museo,
            encargado,
            imagen,
            descripcion,
            horario,
            tipo,
            lugar,
            petfriendly,
            ventadecomidas,
            paginaweb
        })
            .then(res => navigate("/museos"))
            .catch(err => setErrors(err.response.data.errors));
    }
    return (
        <div>
            <h1>Nuevo Museo</h1>
            <form onSubmit={guardarMuseo}>
                <div>
                    <label>Museo:</label>
                    <input type="text" id="museo" value={museo} onChange={e => setMuseo(e.target.value)} />
                    {errors.museo ? <span>{errors.museo.message}</span> : null}
                </div>
                <div>
                    <label>Encargado:</label>
                    <input type="text" id="encargado" value={encargado} onChange={e => setEncargado(e.target.value)} />
                    {errors.encargado ? <span>{errors.encargado.message}</span> : null}
                </div>
                <div>
                    <label>imagen:</label>
                    <input type="text" id="imagen" value={imagen} onChange={e => setImagen(e.target.value)} />
                    {errors.imagen ? <span>{errors.imagen.message}</span> : null}
                </div>
                <div>
                    <label>descripcion:</label>
                    <input type="text" id="descripcion" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                    {errors.descripcion ? <span>{errors.descripcion.message}</span> : null}
                </div>
                <div>
                    <label>horario:</label>
                    <input type="text" id="horario" value={horario} onChange={e => setHorario(e.target.value)} />
                    {errors.horario ? <span>{errors.horario.message}</span> : null}
                </div>
                <div>
                    <label>tipo:</label>
                    <input type="text" id="tipo" value={tipo} onChange={e => setTipo(e.target.value)} />
                    {errors.tipo ? <span>{errors.tipo.message}</span> : null}
                </div>
                <div>
                    <label>lugar:</label>
                    <div>
                        <div id='map'>
                        <Map
                            mapboxAccessToken='pk.eyJ1IjoibW9uaWNhbHVjaWExOTk0IiwiYSI6ImNsbmkwNHVvczFiODkybG1zcmFoMXQ1eHIifQ.X4HfG7hokZo_mNBg3Dxs3Q'
                            {...viewState}
                            onMove={evt => setViewState(evt.viewState)}
                            mapStyle="mapbox://styles/mapbox/streets-v9"
                            style={{width: 400, height: 350}}>
                                <div id='marcador'>
                                    <Marker longitude={-80.050303} latitude={9.93712595251539} anchor="bottom">
                                    <img src={PinImagen} style={{fontSize: viewState.zoom}}/>
                                    </Marker>
                                </div>
                        </Map>
                        </div>
                    </div>
                    <input type="text" id="lugar" value={lugar} onChange={e => setLugar(e.target.value)} />
                    {errors.lugar ? <span>{errors.lugar.message}</span> : null}
                </div>
                <div>
                    <input type="checkbox" id='petfriendly' name="petfriendly" checked={petfriendly} onChange={e => setPetfriendly(e.target.checked)} />
                    <label htmlFor='petfriendly'>Pet Friendly</label>
                </div>
                <div>
                    <input type="checkbox" id='ventadecomidas' name="ventadecomidas" checked={ventadecomidas} onChange={e => setVentadecomidas(e.target.checked)} />
                    <label htmlFor='ventadecomidas'>Venta de Comidas</label>
                </div>
                <div>
                    <input type="checkbox" id='paginaweb' name="paginaweb" checked={paginaweb} onChange={e => setPaginaweb(e.target.checked)} />
                    <label htmlFor='paginaweb'>Página web</label>
                </div>
                <input type="submit" value="Guardar" />
            </form>
        </div>
    )
}

export default CrearMuseo;