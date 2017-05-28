/**
 * Created by Mihail on 5/28/2017.
 */
import { createStore } from 'redux'
import reducer from './reducer'

export default function makeStore() {
  return createStore(reducer)
}