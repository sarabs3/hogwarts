describe('Mark Horace Slughorn absent', () => {
  it('should change Harry Potter teacher to Rubeus Hagrid', () => {
    cy.visit('localhost:3000');
    cy.get('[data-testid="student1"]').children().last().contains('Horace Slughorn');
    cy.get('[data-testid="changeAvailability4"]').select('absent');
    cy.get('[data-testid="student1"]').children().last().contains('Rubeus Hagrid');
  })
})

describe('Mark Horace Slughorn and Rubeus Hagrid absent', () => {
  it('should change Harry Potter teacher to Professor Dumbledore as Minerva McGonagall also absent', () => {
    cy.visit('localhost:3000');
    cy.get('[data-testid="student1"]').children().last().contains('Horace Slughorn');
    cy.get('[data-testid="changeAvailability4"]').select('absent');
    cy.get('[data-testid="changeAvailability3"]').select('absent');
    cy.get('[data-testid="student1"]').children().last().contains('Professor Dumbledore');
    cy.get('[data-testid="changeAvailability1"]').select('absent');
    cy.get('[data-testid="student1"]').children().last().contains('Not Assigned');
  })
})

describe('Mark Severus Snape present', () => {
  it('should change Ron Weasley teacher to Severus Snape', () => {
    cy.visit('localhost:3000');
    cy.get('[data-testid="student3"]').children().last().contains('Horace Slughorn');
    cy.get('[data-testid="changeAvailability5"]').select('present');
    cy.get('[data-testid="student3"]').children().last().contains('Severus Snape');
  })
})