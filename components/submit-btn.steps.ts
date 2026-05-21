import { Then, When } from '@/fixtures.steps';
import { expect } from 'playwright/test';

When('I click the submit button', async ({ page }) => {
  await page.getByTestId('submit-btn').click();
});

Then('I see the submit button', async ({ page }) => {
  await expect(page.getByTestId('submit-btn')).toBeVisible();
});

Then('the submit button is disabled', async ({ page }) => {
  await expect(page.getByTestId('submit-btn')).toBeDisabled();
});

Then('the submit button is enabled', async ({ page }) => {
  await expect(page.getByTestId('submit-btn')).toBeEnabled();
});
