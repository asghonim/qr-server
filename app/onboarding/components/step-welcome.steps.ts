import { Then, When } from '@/fixtures.steps';
import { expect } from 'playwright/test';

When('I select use case {string}', async ({ page }, useCaseId: string) => {
  await page.getByTestId(`ob-use-case-${useCaseId}`).click();
});

Then('I see use case card {string}', async ({ page }, useCaseId: string) => {
  await expect(page.getByTestId(`ob-use-case-${useCaseId}`)).toBeVisible();
});

Then('use case {string} is selected', async ({ page }, useCaseId: string) => {
  await expect(page.getByTestId(`ob-use-case-${useCaseId}`)).toHaveClass(/active/);
});
