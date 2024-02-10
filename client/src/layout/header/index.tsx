import React, { FC } from 'react';

import { HeaderTop } from './top';
import { HeaderBottom } from './bottom';

export const Header: FC = () => {
    return (
        <section>
            <HeaderTop />
            <HeaderBottom />
        </section>
    );
}