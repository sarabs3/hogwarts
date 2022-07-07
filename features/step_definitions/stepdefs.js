const assert = require('assert');
const { When, Then, After } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');

When('We create current Schedule', async function () {
    this.driver = new Builder().forBrowser('chrome').build();

    this.driver.wait(until.elementLocated(By.tagName('h4')));

    await this.driver.get('http://localhost:3000');
});
Then('Hermione Granger should get Rubeus Hagrid assigned', async function () {
    const assignedTeacherName = await this.driver.findElement(By.xpath("//tr[@data-testid='student2']")).getText();
    assert.equal(assignedTeacherName, 'Hermione Granger Potions Master Rubeus Hagrid');
});

After(async function(){
    await this.driver.close();
});