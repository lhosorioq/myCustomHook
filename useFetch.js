import { useEffect, useRef, useState } from 'react';

export const useFetch = ( url ) => {
    const isMounter = useRef(true);
    const [state, setstate] = useState({ data: null, loading: true, error: null});
    useEffect(() => {
        return () => {
            isMounter.current = false;
        }
    }, [])
    useEffect( () => {
        setstate({ data: null, loading: true, error: null});
        fetch( url)
            .then( resp => resp.json() )
            .then( data => {
                if ( isMounter.current ) {
                    setstate({
                        loading: false,
                        error: null,
                        data
                    });
                } else {
                    console.log('Set State no se llamo');
                }
            });
    }, [ url ]);

    return state;
};
