import { expect } from 'chai';
import { fizzbuzz } from '../src/fizzbuzz';

describe('fizzbuzz', () => {
  it('should exist the method fizzbuzz', () => {
    expect(fizzbuzz).to.exist;
  });
  it('should return `fizz` if number is divisible for 3', () => {
    expect(fizzbuzz(3)).to.be.equal('fizz');
    expect(fizzbuzz(6)).to.be.equal('fizz');
  });
  it('should return `buzz` if number is divisble for 5', () => {
    expect(fizzbuzz(5)).to.be.equal('buzz');
    expect(fizzbuzz(10)).to.be.equal('buzz');
  });
  it('should return `fizzbuzz` if number is divisible for 5 and 3', () => {
    expect(fizzbuzz(15)).to.be.equal('fizbuzz');
  });
  it('should return number if number is not divisible for 3 or 5', () => {
    expect(fizzbuzz(16)).to.be.equal(16);
  });
  it('should return 0 when number for iguals 0', () => {
    expect(fizzbuzz(0)).to.be.equals(0);
  });
});
