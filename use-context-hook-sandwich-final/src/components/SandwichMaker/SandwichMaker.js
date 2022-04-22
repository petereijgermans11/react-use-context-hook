import React, { useReducer, createContext } from 'react';
import { createUseStyles } from 'react-jss';
import SandwichBuilder from '../SandwichBuilder/SandwichBuilder';
import SandwichSummary from '../SandwichSummary/SandwichSummary';

const useStyles = createUseStyles({
    wrapper: {
        textAlign: 'center',
    }
});

export const SandwichContext = createContext();

function reducer(state, item) {
    return [...state, item]
}

export default function SandwichMaker() {
    const classes = useStyles();
    const [sandwich, setSandwich] = useReducer(reducer, []);
    return(
        <SandwichContext.Provider value={{ sandwich, setSandwich }}>
            <h1 className={classes.wrapper}>
                <span role="img" aria-label="sandwich">🥪 </span>
                Build Your Custom Sandwich!
                <span role="img" aria-label="sandwich"> 🥪</span>
            </h1>
            <SandwichBuilder />
            <SandwichSummary />
        </SandwichContext.Provider>
    )
}
