import React, {useEffect, useState} from 'react';
import {axiosService} from "../../services/axiosService";
import Launch from "../Launch/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/').then(resp => resp.json()).then(resp => setLaunches(resp))
    }, [])
    return (
        <div>
            {launches.filter(item => item.launch_year !== '2020').map(launch => <Launch key={launch.id} launch={launch}/>)}
        </div>
    );
};

export default Launches;