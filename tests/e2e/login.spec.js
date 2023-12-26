const { test } = require('../support')

test('Deve logar como administrador', async ({ page }) => {
  const payload = {
    email: 'admin@zombieplus.com',
    senha: 'pwd123'
  }
  await page.login.visit()

  await page.login.submit(payload)
  await page.movies.isLoggedIn()
})

test('Não deve logar com senha incorreta', async ({ page }) => {
  const payload = {
    email: 'admin@zombieplus.com',
    senha: 'abc123',
    message: 'Oops!Ocorreu um erro ao tentar efetuar o login. Por favor, verifique suas credenciais e tente novamente.'
  }

  await page.login.visit()

  await page.login.submit(payload)

  await page.toast.containText(payload.message)
})

test('Não deve logar com email inválido', async ({ page }) => {
  const payload = {
    email: 'adminzombieplus.com',
    senha: 'pwd123',
    message: 'Email incorreto'
  }

  await page.login.visit()

  await page.login.submit(payload)

  await page.login.alertHaveText(payload.message)
})

test('Não deve logar quando o email não é preenchido', async ({ page }) => {
  const payload = {
    email: '',
    senha: 'pwd123',
    message: 'Campo obrigatório'
  }

  await page.login.visit()

  await page.login.submit(payload)

  await page.login.alertHaveText(payload.message)
})

test('Não deve logar quando a senha não é preenchido', async ({ page }) => {
  const payload = {
    email: 'admin@zombieplus.com',
    senha: '',
    message: 'Campo obrigatório'
  }

  await page.login.visit()

  await page.login.submit(payload)

  await page.login.alertHaveText(payload.message)
})

test('Não deve logar quando nenhum campo é preenchido', async ({ page }) => {
  const payload = {
    email: '',
    senha: '',
    message: 'Campo obrigatório'
  }

  await page.login.visit()

  await page.login.submit(payload)

  await page.login.alertHaveText([payload.message, payload.message])
})
