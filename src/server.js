/**
 * Created by Mihail on 5/28/2017.
 */
import Server from 'socket.io'

export default function startServer() {
  const io = new Server().attach(8090)
}