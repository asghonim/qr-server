import { Then } from '@/fixtures.steps';
import { expect } from 'playwright/test';

Then('I see a server error', async ({ page }) => {
  await expect(page.getByTestId('server-error')).toBeVisible();
});

Then('I see server error {string}', async ({ page }, message: string) => {
  await expect(page.getByTestId('server-error')).toContainText(message);
});
