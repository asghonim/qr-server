import { Given, Then } from '@/fixtures.steps';
import { expect } from 'playwright/test';

Given('I go to page "about"', async ({ page }) => {
  const response = await page.goto('/about', { waitUntil: 'networkidle' });
  expect(response?.ok()).toBeTruthy();
});

Then('I see the page "about"', async ({ page }) => {
  await expect(page).toHaveURL(/\/about$/);
});

Then('I see the about page heading', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'A focused tool, run by a small team.' })).toBeVisible();
});
