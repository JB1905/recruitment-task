import { expect, type Page } from '@playwright/test';

import { NO_PACKAGES_MESSAGE } from './constants';

interface PackageVisibilityOptions {
  hidden?: string[];
  shown?: string[];
  showsFallbackMessage: boolean;
}

export const expectPackageVisibility = async (
  page: Page,
  { hidden = [], shown = [], showsFallbackMessage }: PackageVisibilityOptions,
) => {
  for (const packageName of shown) {
    await expect(
      page.getByRole('heading', { name: packageName }),
    ).toBeVisible();
  }

  for (const packageName of hidden) {
    await expect(
      page.getByRole('heading', { name: packageName }),
    ).not.toBeVisible();
  }

  const fallbackMessage = page.getByText(NO_PACKAGES_MESSAGE);

  if (showsFallbackMessage) {
    await expect(fallbackMessage).toBeVisible();

    return;
  }

  await expect(fallbackMessage).not.toBeVisible();
};
