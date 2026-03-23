import { test, expect } from '@playwright/test'

test('page loads with 200 status', async ({ page }) => {
  const response = await page.goto('/')
  expect(response?.status()).toBe(200)
})

test('nav is present', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('nav')).toBeVisible()
})

test('hero CTA is present', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('text=Start Your MVP')).toBeVisible()
})

test('mobile viewport renders', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 })
  await page.goto('/')
  await expect(page.locator('nav')).toBeVisible()
})
