/**
 * Created by Mihail on 5/28/2017.
 */
import { expect } from 'chai'
import { List, Map } from 'immutable'

describe('Immutability', () => {
  describe('a number', () => {
    const increment = (currentState) => {
      return currentState + 1
    }

    it('is immutable', () => {
      let state = 43
      let nextState = increment(state)

      expect(nextState).to.equal(44)
      expect(state).to.equal(43)
    })
  })

  describe('A List', () => {
    const addMovie = (currentState, movie) => {
      return currentState.push(movie)
    }

    it('is immutable', () => {
      let state = List.of('Maistor za edin den', 'Toplo')
      let nextState = addMovie(state, 'Capitan Petko Voivoda')

      expect(nextState).to.equal(List.of(
        'Maistor za edin den',
        'Toplo',
        'Capitan Petko Voivoda'
      ))

      expect(state).to.equal(List.of(
        'Maistor za edin den',
        'Toplo'
      ))
    })
  })

  describe('a tree', () => {
    const addMovie = (currentState, movie) => {
      return currentState.set(
        'movies',
        currentState.get('movies').push(movie)
      )
    }

    it('is immutable', () => {
      let state = Map({
        movies: List.of('A', 'B')
      })

      let nextState = addMovie(state, 'C')

      expect(nextState).to.equal(Map({
        movies: List.of(
          'A', 'B', 'C'
        )
      }))

      expect(state).to.equal(Map({
        movies: List.of('A', 'B')
      }))

      const addMovieViaImmutableUpdate = (currentState, movie) => {
        return currentState.update('movies', movies => movies.push(movie))
      }

      let nextStateImmutableUpdate = addMovieViaImmutableUpdate(state, 'Z')

      expect(nextStateImmutableUpdate).to.equal(Map({
        movies: List.of('A', 'B', 'Z')
      }))
    })
  })
})