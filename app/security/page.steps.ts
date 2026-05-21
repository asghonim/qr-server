import { Given, Then } from '@/fixtures.steps';
import { expect } from 'playwright/test';

Given('I go to page "security"', async ({ page }) => {
  const response = await page.goto('/security', { waitUntil: 'networkidle' });
  expect(response?.ok()).toBeTruthy();
});

Then('I see the page "security"', async ({ page }) => {
  await expect(page).toHaveURL(/\/security$/);
});

Then('I see the security page heading', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Built to be trusted.' })).toBeVisible();
});
