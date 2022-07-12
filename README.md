# Next-JS Demo

This Repo Covers the Basics of [Next-Js](https://nextjs.org/)
Specifically ```Routing``` in Next Js.

## Routing in Next:

Unlike React, Next Handles Routing a Bit Differently.
The main Project Folder is As usual , `App.js` and `Index.js`.
But Next Takes things a Bit Differently  by Offering `File Based-Routing`.

This Allows us to nest Routes without even adding that Code in the index.js folder.

### For Ex:
Here we have Defined `About ` Folder , So when we run the Project using `npm run dev` , We can just go to `localhost:3000\About` , to Access the Route within the `About` Folder.

#### Dynamic Routing:
We Can add Dynamic Routes using `[]` .
This will Create the a dynamic route and we can access the data from the dynamic routes using the `useRouter` prop from `next/router`.

**Note** : For more on [Click here](https://nextjs.org/docs/api-reference/next/router)