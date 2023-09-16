// import { subscribe } from '../helper';
// import { regSw } from '../helper';
// import { useEffect, useState } from 'react';

// function SubscribeButn() {
//   const handleSubscribe = async () => {
//     const serviceWorkerReg = await regSw();
//     await subscribe(serviceWorkerReg);
//   };

//   const [isSubscribed, setIsSubscribed] = useState(false);

//   useEffect(() => {

//     const checkSubscription = async () => {
//       const serviceWorkerReg = await regSw();
//       const subscription = await serviceWorkerReg.pushManager.getSubscription();
//       setIsSubscribed(!!subscription);
//     };

//     checkSubscription();
//   }, []);

//   return (

//     !isSubscribed && (
//       <button
//         className='z-[150] fixed left-2 top-20 p-2 bg-blue-400 rounded-lg text-white'
//         onClick={handleSubscribe}
//       >
//         Subscribe
//       </button>
//     )
//   );
// }

// export default SubscribeButn;
