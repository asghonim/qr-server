import { Given, Then } from '@/fixtures.steps';
import { expect } from 'playwright/test';

Given('I go to page "login"', async ({ page }) => {
  const response = await page.goto('/login', { waitUntil: 'networkidle' });
  expect(response?.ok()).toBeTruthy();
});

Then('I see the page "login"', async ({ page }) => {
  await expect(page).toHaveURL(/\/login$/);
});