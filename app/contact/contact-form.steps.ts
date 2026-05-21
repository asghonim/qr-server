import { Then, When } from '@/fixtures.steps';
import { expect } from 'playwright/test';

Then('I see the contact form', async ({ page }) => {
  await expect(page.getByTestId('contact-form')).toBeVisible();
});

When('I type {string} in the contact name field', async ({ page }, name: string) => {
  await page.getByTestId('contact-name-input').fill(name);
});

When('I type {string} in the contact email field', async ({ page }, email: string) => {
  await page.getByTestId('contact-email-input').fill(email);
});

When('I select topic {string} on contact form', async ({ page }, topic: string) => {
  await page.getByTestId('contact-topic-select').selectOption(topic);
});

When('I type {string} in the contact message field', async ({ page }, message: string) => {
  await page.getByTestId('contact-message-textarea').fill(message);
});

When('I submit the contact form', async ({ page }) => {
  await page.getByTestId('contact-submit-btn').click();
});

Then('I see the contact success message', async ({ page }) => {
  await expect(page.getByTestId('contact-success')).toBeVisible();
});

Then('the contact submit button is disabled', async ({ page }) => {
  await expect(page.getByTestId('contact-submit-btn')).toBeDisabled();
});
