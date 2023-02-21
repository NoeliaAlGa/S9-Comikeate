import BuscarUsuario from '../hooks/BuscarUsuario';

describe('BuscarUsuario', () => {
  test('devuelve un boolean', () => {
    const resultado = BuscarUsuario('usuario', 'contraseña');
    expect(typeof resultado).toBe('boolean');
  });
});