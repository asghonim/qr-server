import { Then, When } from '@/fixtures.steps';
import { expect } from 'playwright/test';

When('I click copy app ID', async ({ page }) => {
  await page.getByTestId('ob-copy-app-id-btn').click();
});

When('I click copy public key', async ({ page }) => {
  await page.getByTestId('ob-copy-public-key-btn').click();
});

When('I click reveal signing key', async ({ page }) => {
  await page.getByTestId('ob-reveal-signing-key-btn').click();
});

When('I click copy signing key', async ({ page }) => {
  await page.getByTestId('ob-copy-signing-key-btn').click();
});

When('I check the key acknowledgement', async ({ page }) => {
  await page.getByTestId('ob-ack-checkbox').check();
});

Then('I see the copy app ID button', async ({ page }) => {
  await expect(page.getByTestId('ob-copy-app-id-btn')).toBeVisible();
});

Then('I see the copy public key button', async ({ page }) => {
  await expect(page.getByTestId('ob-copy-public-key-btn')).toBeVisible();
});

Then('I see the reveal signing key button', async ({ page }) => {
  await expect(page.getByTestId('ob-reveal-signing-key-btn')).toBeVisible();
});

Then('I see the key acknowledgement checkbox', async ({ page }) => {
  await expect(page.getByTestId('ob-ack-checkbox')).toBeVisible();
});
