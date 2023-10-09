import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const PaginaPrincipal = () => {
    return(
        <div>
            <Link to="/museos">Museos</Link>
            <Link to="/actividades">Actividades</Link>
        </div>
    )
}

export default PaginaPrincipal;