import { Given, Then } from '@/fixtures.steps';
import { expect } from 'playwright/test';

Given('I go to page "docs"', async ({ page }) => {
  const response = await page.goto('/docs', { waitUntil: 'networkidle' });
  expect(response?.ok()).toBeTruthy();
});

Then('I see the page "docs"', async ({ page }) => {
  await expect(page).toHaveURL(/\/docs$/);
});