import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.bbc.co.uk/sport');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Sport/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.bbc.co.uk/sport');

  // Click the get started link.
  await page.getByRole('link', { name: 'Football' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Football' })).toBeVisible();
});