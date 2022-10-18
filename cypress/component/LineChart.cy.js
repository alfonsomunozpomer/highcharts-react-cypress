import LineChart from '../../src/LineChart'

const buttonSelector = '[aria-label=update]'

describe('<LineChart>', () => {
  it('mounts', () => {
    cy.mount(<LineChart/>)
    cy.get(buttonSelector).should('have.text', 'Update Series')
  })

  it('clicking on the Update Series button updates the chart', () => {
    cy.mount(<LineChart/>)
    cy.get(buttonSelector).click()
  })

})
