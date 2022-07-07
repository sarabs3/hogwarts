Feature: User should get available teacher assigned
 
Scenario: Horace Slughorn is absent Today to teach
  When We create current Schedule
  Then Hermione Granger should get Rubeus Hagrid assigned