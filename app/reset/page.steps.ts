import { Given, Then } from '@/fixtures.steps';
import { expect } from 'playwright/test';

Given('I go to page "reset"', async ({ page }) => {
  const response = await page.goto('/reset', { waitUntil: 'networkidle' });
  expect(response?.ok()).toBeTruthy();
});

Given('I go to page "reset update"', async ({ page }) => {
  const response = await page.goto('/reset?step=update', { waitUntil: 'networkidle' });
  expect(response?.ok()).toBeTruthy();
});

Then('I see the page "reset"', async ({ page }) => {
  await expect(page).toHaveURL(/\/reset/);
});
