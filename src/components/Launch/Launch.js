import React from 'react';

const Launch = ({launch}) => {
    const {mission_name, launch_year, mission_patch_small} = launch
    return (
        <div>
           <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Launch;