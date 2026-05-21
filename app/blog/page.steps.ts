import { Given, Then } from '@/fixtures.steps';
import { expect } from 'playwright/test';

Given('I go to page "blog"', async ({ page }) => {
  const response = await page.goto('/blog', { waitUntil: 'networkidle' });
  expect(response?.ok()).toBeTruthy();
});

Then('I see the page "blog"', async ({ page }) => {
  await expect(page).toHaveURL(/\/blog$/);
});

Then('I see the blog page heading', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Writing from the team.' })).toBeVisible();
});

Then('I see blog post {string}', async ({ page }, title: string) => {
  await expect(page.getByRole('heading', { name: title })).toBeVisible();
});
