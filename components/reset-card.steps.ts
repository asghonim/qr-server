import { Then } from '@/fixtures.steps';
import { expect } from 'playwright/test';

Then('I see the reset card heading {string}', async ({ page }, heading: string) => {
  await expect(page.getByRole('heading', { name: heading })).toBeVisible();
});
