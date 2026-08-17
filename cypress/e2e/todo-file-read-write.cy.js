const completedActivities = [
  'Complete Cypress task',
  'Shifting the room',
  "Today'company task"
];

describe('Todo - Read, Add and Update Activities', () => {

  it('should read activities, add them and update their status', () => {

    cy.visit('https://example.cypress.io/todo#/');

    cy.readFile('cypress/test-data/activities.json').then((data) => {

      const activities = data.activities;

      // Add all activities
      activities.forEach((activity) => {

        cy.get('.new-todo')
          .type(activity.title)
          .type('{enter}');

        cy.contains('.todo-list li', activity.title)
          .should('be.visible');

      });

      // Set the required checkbox state
      activities.forEach((activity) => {

        cy.contains('.todo-list li', activity.title)
          .find('.toggle')
          .then(($checkbox) => {

            const shouldBeCompleted =
              completedActivities.includes(activity.title);

            if (shouldBeCompleted && !$checkbox.is(':checked')) {

              cy.wrap($checkbox).check();

            } else if (!shouldBeCompleted && $checkbox.is(':checked')) {

              cy.wrap($checkbox).uncheck();

            }

          });

        // Read the actual UI state
        cy.contains('.todo-list li', activity.title)
          .find('.toggle')
          .should(($checkbox) => {

            if ($checkbox.is(':checked')) {

              activity.status = 'completed';

            } else {

              activity.status = 'added';

            }

          });

      });

      // Write final result
      cy.writeFile('cypress/file-results/todo-result.json', {
        activities: activities
      });

    });

  });

});