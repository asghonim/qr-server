import { Given, Then, When } from '@/fixtures.steps';
import { expect } from 'playwright/test';

Given('I go to page "onboarding"', async ({ page }) => {
  const response = await page.goto('/onboarding', { waitUntil: 'networkidle' });
  expect(response?.ok()).toBeTruthy();
});

Then('I see the page "onboarding"', async ({ page }) => {
  await expect(page).toHaveURL(/\/onboarding$/);
});

Then('I see onboarding step {int}', async ({ page }, step: number) => {
  await expect(page.getByTestId(`ob-step-${step}`)).toBeVisible();
});

When('I select algorithm {string}', async ({ page }, algo: string) => {
  await page.getByTestId('ob-algo-select').selectOption(algo);
});

When('I type {string} in the TTL field', async ({ page }, ttl: string) => {
  await page.getByTestId('ob-ttl-input').fill(ttl);
});
