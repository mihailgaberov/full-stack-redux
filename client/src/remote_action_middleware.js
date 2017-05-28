/**
 * Created by Mihail on 5/28/2017.
 */
export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action)
  }

  return next(action)
}