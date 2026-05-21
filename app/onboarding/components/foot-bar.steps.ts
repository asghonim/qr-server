import { Then, When } from '@/fixtures.steps';
import { expect } from 'playwright/test';

Then('I see the onboarding progress bar', async ({ page }) => {
  await expect(page.getByTestId('ob-progress')).toBeVisible();
});

When('I click the onboarding next button', async ({ page }) => {
  await page.getByTestId('ob-next-btn').click();
});

When('I click the onboarding back button', async ({ page }) => {
  await page.getByTestId('ob-back-btn').click();
});

Then('the onboarding next button is disabled', async ({ page }) => {
  await expect(page.getByTestId('ob-next-btn')).toBeDisabled();
});

Then('the onboarding next button is enabled', async ({ page }) => {
  await expect(page.getByTestId('ob-next-btn')).toBeEnabled();
});

Then('the onboarding back button is disabled', async ({ page }) => {
  await expect(page.getByTestId('ob-back-btn')).toBeDisabled();
});
