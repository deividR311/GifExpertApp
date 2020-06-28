import React from 'react';
import { GiftGridItem } from './GiftGridItem';
// import { getGifs } from '../services/getGifs.Service';
import { useFetchGifs } from '../hooks/useFetchGifs.hook';

export const GiftGrid = ({ category }) => {

    //////////////               esta es una forma de consumir el servicio con el http llamado           /////////////////////
    //estado del componente
    // const [images, setimages] = useState([]);

    //esto me permite llamar el metodo una unica vez
    // useEffect(() => {

    //servicio con el llamado http y pasando como parametro category
    //     getGifs( category )
    //     .then( imgs => {
    //         setimages(imgs);
    //     })
    // }, 
    // se pone el parametro aca solo cuando este cambia varias veces
    // [category])


    //////////////////            esta es otra forma de utilizar el servicio a traves de un hook           /////////////////////
    // este es el hook. dentro esta la peticion http get y este hook solicita como parametro el category
    const { data, loading } = useFetchGifs(category);

    return (
        <>
            <h1 className="animate__animated animate__bounce animate__fadeIn" > {category} </h1>

            {/* hook: si loading es true muestre cargando, si no, data cargada */}
            {loading && <p className="animate__animated animate__bounce animate__flash"> Loading... </p>}
            <div className="card-grid">
                {
                    //recorrremos la data con el metodo map y pasamos cada elemento de la data
                    //como prop para el componente <GiftGridItem />
                    data.map(image => (
                        <GiftGridItem
                            key={image.id}
                            img={image}
                        />
                    ))
                }
            </div>
        </>
    )
}
