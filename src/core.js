/**
 * Created by Mihail on 5/28/2017.
 */
import { List } from 'immutable'

export function setEntries(state, entries) {
  return state.set('entries', List(entries))
}