import { Then, When } from '@/fixtures.steps';
import { expect } from 'playwright/test';

Then('I see the update password form', async ({ page }) => {
  await expect(page.getByTestId('reset-update-form')).toBeVisible();
});

When('I type {string} in the new password field', async ({ page }, password: string) => {
  await page.getByTestId('input-password').fill(password);
});

When('I type {string} in the confirm password field', async ({ page }, password: string) => {
  await page.getByTestId('input-confirm').fill(password);
});

When('I submit the update password form', async ({ page }) => {
  await page.getByTestId('submit-btn').click();
});

Then('I see the update success message', async ({ page }) => {
  await expect(page.getByTestId('reset-update-success')).toBeVisible();
});

Then('I see a server error on update password', async ({ page }) => {
  await expect(page.getByTestId('server-error')).toBeVisible();
});
