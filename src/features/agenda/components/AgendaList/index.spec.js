import React from 'react';
import { render } from '@testing-library/react';
import { AgendaList } from './index';

const props = {
  list: [
    { id: 1, nombre: 'Juan', direccion: 'Santiago' },
    { id: 2, nombre: 'Jose', direccion: 'Santiago' },
    { id: 3, nombre: 'Pedro', direccion: 'Santiago' },
  ]
};

it('AgendaList render properly', () => {
  render(<AgendaList {...props} />);
});
