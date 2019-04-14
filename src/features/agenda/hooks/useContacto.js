import { useState } from 'react';

const useContacto = (values = {}) => {
  const [contacto, setContacto] = useState(values);
  return [contacto, setContacto];
};

export default useContacto;
