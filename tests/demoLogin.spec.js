const { test, expect } = require("@playwright/test");

test.describe('Web UI Demo', () => {
    test('TC-1 Login & Add Item', async ({ page }) => {

        // Login & Validate
        await page.goto('https://www.saucedemo.com/')
        await page.locator('[id="user-name"]').fill('standard_user')
        await page.getByPlaceholder('Password').fill('secret_sauce')
        await page.getByText('Login').click()
        
        await expect(page.getByText('Swag Labs')).toBeVisible()
        await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible()

        // Add item & Validate
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();

        await expect(page.getByText('1Sauce Labs Backpackcarry.')).toBeVisible();
        await expect(page.getByText('1Sauce Labs Bike LightA red')).toBeVisible();
        await expect(page.getByText('1Sauce Labs Bolt T-ShirtGet')).toBeVisible();
        await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
        await expect(page.getByText('Swag Labs')).toBeVisible();
        
        await page.waitForTimeout(5000);
   
    });
});