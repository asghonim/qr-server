import { Given, Then } from '@/fixtures.steps';
import { expect } from 'playwright/test';

Given('I go to page "changelog"', async ({ page }) => {
  const response = await page.goto('/changelog', { waitUntil: 'networkidle' });
  expect(response?.ok()).toBeTruthy();
});

Then('I see the page "changelog"', async ({ page }) => {
  await expect(page).toHaveURL(/\/changelog$/);
});

Then('I see the changelog page heading', async ({ page }) => {
  await expect(page.getByRole('heading', { name: "What's new in qr-server." })).toBeVisible();
});

Then('I see changelog entry {string}', async ({ page }, title: string) => {
  await expect(page.getByRole('heading', { name: title })).toBeVisible();
});
