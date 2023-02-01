import { test } from '@jest/globals';
import {capitalize,reverseString,calculator} from './prac.js'

let calc = calculator();


test('capitalize', () => 
  expect(capitalize("hi i am jason")).toMatch(/^HI I AM JASON/)
)

test('reverse string', ()=>
    expect(reverseString("hi i am jason")).toMatch(/^nosaj ma i ih/)
    )

    
test('calculator add', () => 
  expect(calc.add(10,15)).toBe(25)
)


test('calc subtract', () => 
  expect(calc.subtract(10,15)).toBe(-5)
)

test('Calc divide', () => 
  expect(calc.divide(20,10)).toBe(2)
)

  test('calc multiply', () => 
  expect(calc.multiply(5,3)).toBe(15)
)

