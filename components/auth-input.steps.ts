import { Then, When } from '@/fixtures.steps';
import { expect } from 'playwright/test';

When('I type {string} in input {string}', async ({ page }, value: string, id: string) => {
  await page.getByTestId(`input-${id}`).fill(value);
});

Then('I see input {string}', async ({ page }, id: string) => {
  await expect(page.getByTestId(`input-${id}`)).toBeVisible();
});

Then('input {string} has value {string}', async ({ page }, id: string, value: string) => {
  await expect(page.getByTestId(`input-${id}`)).toHaveValue(value);
});
