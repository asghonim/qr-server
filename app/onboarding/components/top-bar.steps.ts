import { Then, When } from '@/fixtures.steps';
import { expect } from 'playwright/test';

Then('I see the onboarding brand link', async ({ page }) => {
  await expect(page.getByTestId('ob-brand-link')).toBeVisible();
});

When('I click the onboarding brand link', async ({ page }) => {
  await page.getByTestId('ob-brand-link').click();
});

Then('I see onboarding step {int} indicator', async ({ page }, step: number) => {
  await expect(page.getByTestId(`ob-step-${step}`)).toBeVisible();
});

When('I click skip setup', async ({ page }) => {
  await page.getByTestId('ob-skip-link').click();
});

Then('I see the skip setup link', async ({ page }) => {
  await expect(page.getByTestId('ob-skip-link')).toBeVisible();
});
