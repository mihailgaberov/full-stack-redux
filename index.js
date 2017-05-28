/**
 * Created by Mihail on 5/28/2017.
 */
import makeStore from './src/store'
import startServer from './src/server'

export const store = makeStore()
startServer(store)