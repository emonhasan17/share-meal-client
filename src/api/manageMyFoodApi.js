export const manageMyFoodPromise = (email) => {
   return fetch(`https://food-sharing-server-kappa.vercel.app/foods?email=${email}`).then(res => res.json())
}