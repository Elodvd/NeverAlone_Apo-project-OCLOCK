import React from 'react';
import { useState } from 'react';

import { Spin as Hamburger } from 'hamburger-react';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Hamburger rounded toggled={isOpen} onToggle={setIsOpen} />
        </div>
    );
};

export default BurgerMenu;
