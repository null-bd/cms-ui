import { setup, fetch } from '@nuxt/test-utils/e2e'
import { describe, test, expect } from 'vitest'

describe('login page', async () => {
  await setup({
    server: true,
  })

  test('Check homepage', async () => {
    const response = await fetch('/')
    expect(response.status).toBe(200)
  })

  test('Check homepage Title', async () => {
    const response = await fetch('/')
    const html = await response.text()
    expect(html).toContain('<title>My Amazing Site | nuxt-app</title>')
  })
})
