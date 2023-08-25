// let temaTerminata = true;

// let promise = new Promise((resolve, reject) => {
//     if(temaTerminata === true) {
//         resolve('Tema is resolved');
//     }else{
//         reject('Tema is not resolved');
//     }
// })

// promise.then(result => {
//     console.log(result);
// })
// .catch(result => {
//     console.error(result);
// })

function handleJimWork(successCallback, errorCallback) {
    // Slow method that runs in the background
   const success = doJimWork()
   if (success) {
     successCallback()
   } else {
     errorCallback()
   }
 }
 
 handleJimWork(() => {
   console.log('Success')
 }, () => {
   console.error("Error")
 })