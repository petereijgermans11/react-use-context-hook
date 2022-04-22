import React, {useContext} from 'react';
import { createUseStyles } from 'react-jss';
import { SandwichContext } from '../SandwichMaker/SandwichMaker';

const useStyles = createUseStyles({
    list: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        maxHeight: 50,
        '& li': {
            width: 100
        }
    },
    wrapper: {
        borderTop: 'black solid 1px',
        display: 'flex',
        padding: 25,
    }
});

export default function SandwichSummary() {
    const classes = useStyles();
    const { sandwich } = useContext(SandwichContext);
    return(
        <div className={classes.wrapper}>
            <h2>Your Sandwich</h2>
            <ul className={classes.list}>
                {sandwich.map(({ name, id }) => (<li key={id}>{name}</li>))}
            </ul>
        </div>
    )
}
