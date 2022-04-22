import React from 'react';
import SandwichItem from '../SandwichItem/SandwichItem';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: [10, 50],
        justifyContent: 'center',
    }
});

const ingredients = [
    {
        image: '🍞',
        name: 'bread',
    },
    {
        image: '🥓',
        name: 'bacon',
    },
    {
        image: ' 🐄',
        name: 'beef',
    },
    {
        image: '🍗',
        name: 'chicken',
    },
    {
        image: '🍳',
        name: 'egg',
    },
    {
        image: '🥫',
        name: 'ketchup',
    },
    {
        image: '🥗',
        name: 'salad',
    },
    {
        image: '🧀',
        name: 'cheese',
    },
    {
        image: '🥒',
        name: 'cucumber',
    },
    {
        image: '🌶️',
        name: 'pepper',
    },
];

export default function SandwichBuilder() {
    const classes = useStyles();
    return(
        <div className={classes.wrapper}>
            {
                ingredients.map(ingredient => (
                    <SandwichItem
                        key={ingredient.name}
                        image={ingredient.image}
                        name={ingredient.name}
                    />
                ))
            }
        </div>
    )
}
