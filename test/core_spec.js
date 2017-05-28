/**
 * Created by Mihail on 5/28/2017.
 */
import { List, Map } from 'immutable'
import { expect } from 'chai'

import { setEntries, next } from '../src/core'

describe('application logic', () => {

  describe('setEntries', () => {

    it('adds the entries to the state', () => {
      const state = Map()
      const entries = List.of('Trainspotting', '28 Days Later')
      const nextState = setEntries(state, entries)
      expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }))
    })

    it('converts to immutable', () => {
      const state = Map()
      const entries = ['Trainspotting', '28 Days Later']
      const nextState = setEntries(state, entries)
      expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }))
    })
  })

  describe('next', () => {
    it('takes the next two entries under vote', () => {
      const state = Map({
        entries: List.of('A', 'B', 'C')
      })
      const nextState = next(state)

      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('A', 'B')
        }),
        entries: List.of('C')
      }))
    })
  })
})