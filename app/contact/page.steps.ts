import { Given, Then } from '@/fixtures.steps';
import { expect } from 'playwright/test';

Given('I go to page "contact"', async ({ page }) => {
  const response = await page.goto('/contact', { waitUntil: 'networkidle' });
  expect(response?.ok()).toBeTruthy();
});

Then('I see the page "contact"', async ({ page }) => {
  await expect(page).toHaveURL(/\/contact$/);
});

Then('I see the contact page heading', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Get in touch.' })).toBeVisible();
});
