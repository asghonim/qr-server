import { Given, Then } from '@/fixtures.steps';
import { expect } from 'playwright/test';

Given('I go to page "status"', async ({ page }) => {
  const response = await page.goto('/status', { waitUntil: 'networkidle' });
  expect(response?.ok()).toBeTruthy();
});

Then('I see the page "status"', async ({ page }) => {
  await expect(page).toHaveURL(/\/status$/);
});

Then('I see the status page heading', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'All systems operational' })).toBeVisible();
});

Then('I see the service {string} status', async ({ page }, serviceName: string) => {
  await expect(page.getByText(serviceName)).toBeVisible();
});
