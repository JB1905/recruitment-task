import { expect, type Page } from '@playwright/test';

export const openUserDetails = async (page: Page, userName: string) => {
  await page.getByRole('row', { name: new RegExp(userName, 'i') }).click();
  await expect(page.getByRole('heading', { name: userName })).toBeVisible();
};

export const goBackToUsers = async (page: Page) => {
  await page.getByRole('link', { name: 'Back to users' }).click();
  await expect(page).toHaveURL(/\/users$/);
};
