import { Then } from '@/fixtures.steps';
import { expect } from 'playwright/test';

Then('I see a success card', async ({ page }) => {
  await expect(page.getByTestId('reset-success').or(page.getByTestId('reset-update-success'))).toBeVisible();
});
