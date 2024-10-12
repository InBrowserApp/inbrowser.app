import { removeOwnerPassword } from './remove-owner-password'

onmessage = async function (e: MessageEvent<Blob>) {
  postMessage(await removeOwnerPassword(e.data))
}
