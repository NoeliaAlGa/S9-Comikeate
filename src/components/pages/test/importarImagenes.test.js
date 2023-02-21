
import importarImagen from '../hooks/importarImagen';

describe('importarImagen', () => {
  it('should return the correct image for a given product name', () => {
    expect(importarImagen('Ilustración digital')).toEqual(expect.stringContaining('familiabebe.jpg'));
    expect(importarImagen('Ilustración en lienzo')).toEqual(expect.stringContaining('ilustracionconlienzo.jpg'));
    expect(importarImagen('Tote bag Cruella')).toEqual(expect.stringContaining('bolsa cruela.jpg'));
    expect(importarImagen('Camiseta Harry Potter')).toEqual(expect.stringContaining('camiseta HP.jpg'));
    expect(importarImagen('Camiseta Loki')).toEqual(expect.stringContaining('loki camiseta.jpg'));
    expect(importarImagen('Chapa boda')).toEqual(expect.stringContaining('Chapaboda.jpg'));
    expect(importarImagen('Taza dia del padre')).toEqual(expect.stringContaining('taza.jpg'));
    expect(importarImagen('Taza día de la madre')).toEqual(expect.stringContaining('tazadiadelamadre.jpg'));
    expect(importarImagen('Móvil Hércules')).toEqual(expect.stringContaining('mobilHercules.jpg'));
    expect(importarImagen('Cuelga puertas Pokemon')).toEqual(expect.stringContaining('cuelgaPuertaPokemnmon.jpg'));
    expect(importarImagen('Caja Señor de los anillos')).toEqual(expect.stringContaining('cajaPersonalizadaAnillos.jpg'));
    expect(importarImagen('Lienzo Dragon Ball')).toEqual(expect.stringContaining('lienzoDragonBall.jpg'));
    expect(importarImagen('Cuadro madera Joker')).toEqual(expect.stringContaining('maderaJoker.jpg'));
    expect(importarImagen('Darth Moul acrilic acuarela')).toEqual(expect.stringContaining('acuarelaSW.jpg'));
  });
});