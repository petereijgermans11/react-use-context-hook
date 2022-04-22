import React from 'react';
import Navigation from '../src/components/Navigation/Navigation';
import SandwichMaker from '../src/components/SandwichMaker/SandwichMaker';
import UserContext from '../src/components/User/User';

const user = {
    name: 'Peter',
    favorites: [
        'egg',
        'bread',
        'cheese',
        'salad'
    ]
}

function App() {
    return (
        <UserContext.Provider value={user}>
            <Navigation />
            <SandwichMaker />
        </UserContext.Provider>
    );
}

export default App;
