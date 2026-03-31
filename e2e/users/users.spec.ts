import { expect, test } from '@playwright/test';

import { expectPackageVisibility } from './assertions';
import { goBackToUsers, openUserDetails } from './commands';

test.describe('Users', () => {
  test('navigates between users and shows packages based on company access', async ({
    page,
  }) => {
    await page.goto('/users');

    await openUserDetails(page, 'Dominic Nitzsche');
    await expectPackageVisibility(page, {
      shown: ['Companies', 'Kittens', 'Random Number'],
      showsFallbackMessage: false,
    });
    await expect(
      page.getByRole('heading', { name: 'Hyatt, Johnston and Hansen' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Tremblay, Davis and West' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Romaguera, Ward and Lubowitz' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Hirthe and Sons' }),
    ).toBeVisible();

    const companiesSection = page
      .locator('section')
      .filter({ has: page.getByRole('heading', { name: 'Companies' }) });

    await expect(
      companiesSection.getByText('Dominic Nitzsche').first(),
    ).toBeVisible();

    await goBackToUsers(page);

    await openUserDetails(page, 'Mrs. Marianne Paucek');
    await expectPackageVisibility(page, {
      hidden: ['Kittens', 'Random Number'],
      showsFallbackMessage: true,
    });
  });
});
