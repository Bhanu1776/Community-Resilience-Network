
import axios from 'axios';
async function regSw () {
  if ('serviceWorker' in navigator) {
    let url = import.meta.env.VITE_PUBLIC_URL + '/sw.js';
    const reg = await navigator.serviceWorker.register (url, {scope: '/'});
    console.log ('service config is', {reg});
    return reg;
  }
  throw Error ('serviceworker not supported');
}

export { regSw };

async function subscribe(serviceWorkerReg) {
  let subscription = await serviceWorkerReg.pushManager.getSubscription();
  console.log({ subscription });
  if (subscription === null) {
    subscription = await serviceWorkerReg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: import.meta.env.VITE_PUBLIC_KEY,
    });
  }
  await axios.post('http://localhost:8800/subscribe', subscription)
}

export { subscribe };
