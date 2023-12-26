const { test } = require('../support')

const data = require('../support/fixtures/movies.json')
const { executeSQL } = require('../support/database')

test('deve cadastrar um novo filme', async ({ page }) => {
  const payload = {
    email: 'admin@zombieplus.com',
    senha: 'pwd123'
  }

  const movie = data.create

  await executeSQL(`DELETE from movies WHERE title = '${movie.title}';`)

  await page.login.visit()
  await page.login.submit(payload)
  await page.movies.isLoggedIn()

  await page.movies.create(movie)

  await page.toast.containText('Cadastro realizado com sucesso!')
})
