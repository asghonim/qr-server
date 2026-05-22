import { Then, When } from '@/fixtures.steps';
import { expect } from 'playwright/test';

Then('I see the forgot password form', async ({ page }) => {
  await expect(page.getByTestId('reset-forgot-form')).toBeVisible();
});

When('I submit the forgot password form', async ({ page }) => {
  await page.getByTestId('submit-btn').click();
});

Then('I see the reset success message', async ({ page }) => {
  await expect(page.getByTestId('reset-success')).toBeVisible();
});

When('I click resend reset link', async ({ page }) => {
  await page.getByTestId('reset-resend-link').click();
});

When('I click back to login from reset', async ({ page }) => {
  await page.getByTestId('reset-back-to-login-link').click();
});

When('I click the back to sign in link on reset', async ({ page }) => {
  await page.getByTestId('reset-back-link').click();
});
