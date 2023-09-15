async function regSw() {
    if ('serviceWorker' in navigator) {
      try {
        // URL to your service worker file
        const swUrl = `${import.meta.env.VITE_PUBLIC_URL}/sw.js`;
  
        
        const registration = await navigator.serviceWorker.register(swUrl, {
          scope: '/',
        });
  
        console.log('Service Worker registered with scope:', registration.scope);
        
        return registration;
      } catch (error) {
        console.error('Error registering Service Worker:', error);
      }
    } else {
      console.warn('Service Worker is not supported in this browser.');
    }
  }
  
  export { regSw };

  async function subscribe(serviceWorkerReg) {
    try {
      const subscription = await serviceWorkerReg.pushManager.getSubscription();
  
      if (!subscription) {
        const applicationServerKey = import.meta.env.VITE_PUBLIC_KEY;
  
        const newSubscription = await serviceWorkerReg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey,
        });
  
        console.log('New subscription:', newSubscription);
      } else {
        console.log('Subscription already exists:', subscription);
      }
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  }
  
  export { subscribe };
  