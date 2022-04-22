import React from 'react';
import { createUseStyles } from 'react-jss';
import SandwichBuilder from '../SandwichBuilder/SandwichBuilder';
import SandwichSummary from '../SandwichSummary/SandwichSummary';

const useStyles = createUseStyles({
    wrapper: {
        textAlign: 'center',
    }
});

export default function SandwichMaker() {
    const classes = useStyles();
    return(
        <>
            <h1 className={classes.wrapper}>
                <span role="img" aria-label="sandwich">🥪 </span>
                Build Your Custom Sandwich!
                <span role="img" aria-label="sandwich"> 🥪</span>
            </h1>
            <SandwichBuilder />
            <SandwichSummary />
        </>
    )
}
