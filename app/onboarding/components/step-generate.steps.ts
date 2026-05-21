import { Then, When } from '@/fixtures.steps';
import { expect } from 'playwright/test';

When('I type {string} in the onboarding payload field', async ({ page }, payload: string) => {
  await page.getByTestId('ob-payload-textarea').fill(payload);
});

When('I click the onboarding generate button', async ({ page }) => {
  await page.getByTestId('ob-generate-btn').click();
});

Then('I see the onboarding QR result', async ({ page }) => {
  await expect(page.getByTestId('ob-qr-result')).toBeVisible();
});

Then('I see the payload textarea', async ({ page }) => {
  await expect(page.getByTestId('ob-payload-textarea')).toBeVisible();
});

Then('the onboarding generate button is disabled', async ({ page }) => {
  await expect(page.getByTestId('ob-generate-btn')).toBeDisabled();
});
