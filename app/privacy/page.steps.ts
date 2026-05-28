import { Given, Then } from '@/fixtures.steps';
import { expect } from 'playwright/test';

Given('I go to page "privacy"', async ({ page }) => {
  const response = await page.goto('/privacy', { waitUntil: 'networkidle' });
  expect(response?.ok()).toBeTruthy();
});

Then('I see the page "privacy"', async ({ page }) => {
  await expect(page).toHaveURL(/\/privacy$/);
});

Then('I see the privacy page heading', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Privacy Policy.' })).toBeVisible();
});
