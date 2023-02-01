
import {caesarCipher} from './prac.js'

test('ceasarCipher shifts 2', () => {
  expect(caesarCipher('zebra',2)).toMatch(/^bgdtc/)
})

test('ceasarCipher punctuation', () => {
  expect(caesarCipher('zebra, hi',2)).toMatch(/^bgdtc, jk/)
})

test('ceasarCipher keeps CASE', () => {
  expect(caesarCipher('zebrA, Hi',2)).toMatch(/^bgdtC, Jk/)
})
