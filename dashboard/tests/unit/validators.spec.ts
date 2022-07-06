import { validateEmptyAndEmail, validateEmptyAndLength3 } from '@/utils/validators'

describe('Validators Utils', () => {
  it('should give an error with empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with less then 3 character payload', () => {
    expect(validateEmptyAndLength3('12')).toBe('*Este campo precisa de no mínimo 3 caractéres')
  })

  it('should returns true when pass a correct param', () => {
    expect(validateEmptyAndLength3('123')).toBe(true)
  })

  it('should give an error with empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with a invalid param', () => {
    expect(validateEmptyAndEmail('lincoln@mail')).toBe('*Este campo precisa ser um e-mail válido')
  })

  it('should returns true when pass a correct param', () => {
    expect(validateEmptyAndEmail('lincoln@mail.com')).toBe(true)
  })
})
