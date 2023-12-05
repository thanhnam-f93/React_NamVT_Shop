import React from 'react';
import { createBoard } from '@wixc3/react-board';
import CountryItem from '../../../components/country/CountryItem';

export default createBoard({
    name: 'CountryItem',
    Board: () => <CountryItem />,
    isSnippet: true,
});
