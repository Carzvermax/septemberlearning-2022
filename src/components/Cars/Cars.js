import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carActions} from "../../redux";
import {Car} from "../Car/Car";
import {useSearchParams} from "react-router-dom";

const Cars = () => {
    const {cars, prev, next} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        dispatch(carActions.getAll({page:query.get('page')}))
    }, [dispatch, query])

    return (
        <div>
            <button disabled={!prev} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>Prev</button>
            <button disabled={!next} onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>Next</button>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};