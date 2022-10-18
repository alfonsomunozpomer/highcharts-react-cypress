import CellTypeWheel from '../../src/CellTypeWheel'

import tCellData from '../fixtures/cell-type-wheel-t-cell-fixture.json'

describe('<CellTypeWheel>', () => {
  it('mounts', () => {
    const callbackWrapper = {
      foo: function(cellType, species, experimentAccessions) {
        console.log('${cellType}')
      }
    }
    const s = cy.spy(callbackWrapper, 'foo').as('foo')

    cy.mount(
      <CellTypeWheel
        data={tCellData}
        onCellTypeWheelClick={callbackWrapper.foo}
      />)

    const outerRingTextElement = cy.contains('mature T cell').parent('textPath')
    outerRingTextElement.click()

    cy.get('@foo').should('have.been.calledOnce')
  })
})
