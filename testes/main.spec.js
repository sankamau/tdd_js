import { expect } from 'chai';
import { sum, sub, div, mult } from '../src/main';

describe('Calc', () => {
  describe('Smoke tests', () => {

  it('should extist the method `sum`', () => {
      expect(sum).to.exist;
  });
});

  describe('Soma', function (){
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2,2)).to.be.equal(4);

    })
  })

  describe('Sub', () => {
    it('should return 2 when `sub(4,2)`', () => {
      expect(sub(4,2)).to.be.equal(2);

    });
    it('should return -4 when `sub(6,-10)`', () => {
      expect(sum(6, -10)).to.be.equal(-4);
    });
  });
  describe('Div', () => {
    it('should return 2 when `div(4,2)`', () => {
      expect(div(4, 2)).to.be.equal(2);
    });

    it('should return `nao é possivel divisao por zero` when divide by zero', () => {
      expect(div(4, 0)).to.be.equal('nao é possivel divisao por zero');
    });
  });
});
