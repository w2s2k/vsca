import React from 'react';
import search from './search';

it('sums numbers', () => {
    expect(search.updateTable('ABCA3')).toEqual(3);
});
