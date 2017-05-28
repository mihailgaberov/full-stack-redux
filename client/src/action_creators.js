/**
 * Created by Mihail on 5/28/2017.
 */
export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  }
}

export function vote(entry) {
  return {
    meta: { remote: true },
    type: 'VOTE',
    entry
  }
}