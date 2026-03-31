import { test } from '@playwright/test';

import { expectPackageVisibility } from './assertions';
import { goBackToUsers, openUserDetails, selectCompany } from './commands';

test.describe('Users', () => {
  test('navigates between users and shows packages based on company access', async ({
    page,
  }) => {
    await page.goto('/users');

    await openUserDetails(page, 'Dominic Nitzsche');
    await expectPackageVisibility(page, {
      shown: ['Kittens'],
      hidden: ['Random Number'],
      showsFallbackMessage: false,
    });

    await selectCompany(page, '2');
    await expectPackageVisibility(page, {
      shown: ['Random Number'],
      hidden: ['Kittens', 'Companies'],
      showsFallbackMessage: false,
    });

    await selectCompany(page, '4');
    await expectPackageVisibility(page, {
      shown: ['Companies'],
      hidden: ['Kittens', 'Random Number'],
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
    await expect(page.getByText('Dominic Nitzsche')).toBeVisible();

    await goBackToUsers(page);

    await openUserDetails(page, 'Mrs. Marianne Paucek');
    await expectPackageVisibility(page, {
      hidden: ['Kittens', 'Random Number'],
      showsFallbackMessage: true,
    });
  });
});
