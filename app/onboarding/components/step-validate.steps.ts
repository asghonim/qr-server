import { Then, When } from '@/fixtures.steps';
import { expect } from 'playwright/test';

When('I click the onboarding validate button', async ({ page }) => {
  await page.getByTestId('ob-validate-btn').click();
});

Then('I see the onboarding validate result', async ({ page }) => {
  await expect(page.getByTestId('ob-validate-result')).toBeVisible();
});

Then('the onboarding validate button is disabled', async ({ page }) => {
  await expect(page.getByTestId('ob-validate-btn')).toBeDisabled();
});
