# NextJS

---

## 1 : Introduction

#### What is Next.js?

- It uses React for building user interfaces
- Provides additional features that enable you to build production-ready applications
- These features include routing, optimized rendering, data fetching, bundling, compiling, and more
- You don't need to install additional packages as Next.js provides everything you need
- Opinions and conventions should be followed to implement these features
- NextJS is a React framework for building web applications

#### Why learn Next.js?

1. Routing
2. API routes
3. Rendering
4. Data fetching
5. Styling
6. Optimization
7. Dev and prod build system

#### Prerequisites

- HTML, CSS, JavaScript strong unserstanding
- ES6+ features
- React fundamentals

---

## 2 : Hello World

- To create a new project write the following command :

  - npx create-next-app@latest
  - then configure your project as per needed

- To start the server enter the following command :
  - npm run dev

---

## 3 : Project Structure

- Go through video for better understanding

---

## 4 : React Server Components (RSC)

- React Server Components is a new architecture introduced by the React team in
  version 18 which was quickly embraced by Next.js
- The architecture introduces a new way of creating React components, splitting
  them into two types:

  - Server components

    - In Next.js, all components are Server components by default
    - They have the ability to run tasks like reading files or fetching data from a database
    - However, they don't have the ability to use hooks or handle user interactions

  - Client components
    - To create a Client component, it's necessary to add "use client" at the top of the component file
    - Client components can't perform tasks like reading files, but they have the ability to use hooks and manage interactions

---

## 5 : Routing

- Next.js has a file-system based routing mechanism
- URL paths that users can access in the browser are defined by files and folders in your codebase

- Routing Conventions
  - All routes must be placed inside the app folder
  - Every file that corresponds to a route must be named as 'page' and extension are highly prefered to be in .js or .jsx or .ts or .tsx
  - Every folder corresponds to a path segment in the browser URL

---

## 6 : Nested Routes

- For example if your routes is like : http://www.localhost:3000/blog/first then create folder in app named blog with page file and inside blog folder create new folder named first with page file

---

## 7 : Dynamic Routes

- Follow the same rule as above but create a folder with name inside [] for dynamic route

---

## 8 : Nested Dynamic Routes

- It is same concept just combine #6 and #7 togather
- Make sure that your {params} will have same object name as your dynamic folder ( If you dont't understand this then check the file structure for products and go through code )

---

## 9 : Catch All Segments

- Simply use the spead Operator for folder name wrap the folder in [[]] format

- So finally you folder will look like docs/[[...slug]]

---

## 10 : Not Found Page

- For the custom not found page you need to create a new file in app folder name as 'not-found' and then display your message as you want
- Make sure that the name of the file must be same as 'not-found'

---

## 11 : File Colocation

- Access the video for better understanding

---

## 12 : Private Folders

- A private folder indicates that it is a private implementation detail and should not be considered by the routing system
- The folder and all its subfolders are excluded from routing
- Prefix the folder name with an underscore

- Uses of Private Folders
  - For separating Ul logic from routing logic
  - For consistently organizing internal files across a project
  - For sorting and grouping files in code editors
  - And finally, for avoiding potential naming conflicts with future Next.js file conventions
  - If you want to include an underscore in URL segments, you can prefix the folder name with "%5F," which is the URL-encoded form of an underscore

---

## 13 : Route Groups

- Allows us to logically group our routes and project files without affecting the URL path structure
- Let's implement authentication routes

  - Register
  - Login
  - Forgot password

- Wrap the folder with () to make a Route Groups

---

## 14 : Layouts

- A page is Ul that is unique to a route
- A layout is Ul that is shared between multiple pages in the app

- How to Create Layouts
  - You can define a layout by default exporting a React component from a layout.js or layout.tsx file
  - That component should accept a children prop that will be populated with a child page during rendering

---

## 15 : Nested Layout

- It is as simple as routes
- For the specific route when you need the different layouts at that folder simply create the file with name "layout.tsx" and main layout will remain same as ago but for that specific route layout will be changed

---

## 16 : Route Group Layout

- Route Group uses:
  - To organize your project in a manner that doesn't affect the URL
  - To electively apply a layout to certain segments while leaving others unchanged

---

## 17 : Routing Metadata

- Ensuring proper search engine optimization (SEO) is crucial for increasing visibility and attracting users
- Next.js introduced the Metadata API which allows you to define metadata for each page
- Metadata ensures accurate and relevant information is displayed when your pages are shared or indexed

- Configuring Metadata
  - Export a static metadata object
  - Export a dynamic generateMetadata function
- Metadata rules
  - Both layout.tsx and page.tsx files can export metadata. If defined in a layout, it applies to all pages in that layout, but if defined in a page, it applies only to that page
  - Metadata is read in order, from the root level down to the final page level
  - When there's metadata in multiple places for the same route, they get combined, but page metadata will replace layout metadata if they have the same properties

---

## 18 : Title Metadata

- The title field's primary purpose is to define the document title
- It can be either a string or an object

---

## 19 : Link Component Navigation

- File based routing
- We manually entered the URLs in the browser's address bar to navigate to the different routes
- Users rely on Ul elements like links to navigate

  - Clicking on them or
  - Through programmatic navigation after completing an action

- To enable client-side navigation Next.js provides us with the Link component
- The <Link> component is a React component that extends the HTML <a> element, and it's the primary way to navigate between routes in Next.js
- To use it, we need to import it from "next/link"
- "replace" is used when the user clicks on the link then it will work normally but when user goes to back then it will rediresct to the homepage

---

## 20 : Active Links

- Note one thing that all react components are server side components by default and hooks can be use in client side so make sure that whenever you used the hooks write "use client" for client side work

---

## 21 : Navigating Programatically

- router.push("...") for specific page navigation
- router.replace("...") for home page navigation
- router.back() for back page navigation "without any argument in ()"
- router.forward() for next page navigation "without any argument in ()"

---

## 22 : Templates

- Templates are similar to layouts in that they wrap each child layout or page
- But, with templates, when a user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated, state
  is not preserved, and effects are re-synchronized
- A template can be defined by exporting a default React component from a template.js or template.tsx file
- Similar to layouts, templates also should accept a children prop which will render the nested segments in the route.

---

## 23 : Loading UI

- loading.tsx
- This file allows us to create loading states that are displayed to users while a specific route segment's content is loading
- The loading state appears immediately upon navigation, giving users the assurance that the application is responsive and actively loading content

- Benefits

1. You can display the loading state as soon as a user navigates to a new route
   - The immediate feedback reassures users that their action has been acknowledged, reduces perceived loading times, and makes the application feel more responsive.
2. Next.js allows the creation of shared layouts that remain interactive while new route segments are loading
   - Users can continue interacting with certain parts of the application, such as a
     navigation menu or sidebar, even if the main content is still being fetched

---

## 24 : Error Handling

- error.tsx

  - Automatically wrap a route segment and its nested children in a React Error Boundary
  - Create error Ul tailored to specific segments using the file-system hierarchy to adjust granularity
  - Isolate errors to affected segments while keeping the rest of the application functional
  - Add functionality to attempt to recover from an error without a full page reload

- All types of files so far in the descending precedence
  1. layout
  2. template
  3. error
  4. loading
  5. not-found
  6. page

---

## 25 : Recovering From Error

- Simply add the reset prop in error.tsx file and add a button for try again and onClick call the reset

- For better understanding go through the code in [reviewID]

---

## 26 : Handling Errors in Nested Routes

- Errors bubble up to the closest parent error boundary
- An error.tsx file will cater to errors for all its nested child segments
- By positioning error.ts files at different levels in the nested folders of a route, you can achieve a more granular level of error handling
- Go through video for better understanding

---

## 27 : Handling Errors in Layouts

- An error.tsx file will handle errors for all its nested child segments
- The error boundary does not catch errors thrown here because it's nested inside the layouts component

---

## 28 : Parallel Routes
- Parallel routes in Next.js are defined using a feature known as slots
- Slots help structure our content in a modular fashion To define a slot, we use the @folder naming convention
- Each slot is then passed as a prop to its corresponding layout.tsx file.

- Benefits
  - A clear benefit of parallel routes is their ability to split a single layout into various slots, making the code more manageable
  - Independent route handling
    - Each slot of your layout, such as user analytics or revenue metrics, can have its own loading and error states
    - This granular control is particularly beneficial in scenarios where different sections of the page load at varying speeds or encounter unique errors
  - Sub-navigation
    - Each slot of your dashboard can essentially function as a mini-application, complete with its own navigation and state management
    - This is especially useful in a complex application such as our dashboard where different sections serve distinct purposes.

---

## 29 : Unmatched Routes
- Navigation from the Ul
  - In the case of navigation within the Ul, Next.js retains the previously active state of a slot regardless of changes in the URL.

- Page reload
  - Next.js immediately searches for a default.ts file within each unmatched slot
  - The presence of this file is critical, as it provides the default content that Next.js will render in the user interface
  - If this default.tsx file is missing in any of the unmatched slots for the current route, Next.js will render a 404 error.

- default.tsx
  - The 'default.tsx' file in Next.js serves as a fallback to render content when the framework cannot retrieve a slot's active state from the current URL
  - You have complete freedom to define the Ul for unmatched routes: you can either mirror the content found in page.tsx or craft an entirely custom view

***

## 30 : Conditional Routing
- Create a new file for another route and apply ternary condition for routing.

***

## 31 : Intercepting Routes
- Intercepting routes allow you to intercept or stop the default routing behaviour to present an alternate view or component when navigating through the Ul, while still preserving the intended route for scenarios like page reloads
- This can be useful if you want to show a route while keeping the context of the current page

- Conventions
  - (.) to match segments on the same level
  - (..) to match segments one level above
  - (..)(..) to match segments two levels above (Currently in Issue)
  - (...) to match segments from the root app directory

***

## 32 : Parallel Intercepting Routing
- Go through video and it's github repo

***

## 33 : Route Handlers

- We've learnt how to route to pages
- We can also create custom request handlers for our routes using a feature called route handlers
- Unlike page routes, which respond with HTML content, route handlers allow you to create RESTful endpoints, giving you full control over the response
- There is no overhead of having to create and configure a separate server
- Route handlers are also great for making external API requests
- Route handlers run server-side, ensuring that sensitive information like private keys remains secure and never gets shipped to the browser
- Route Handlers are the equivalent of API routes in Page router

***

## 34 : GET Request
- Go through video and it's github repo or own code

***

## 35 : POST Request
- Go through video and it's github repo or own code

***

## 36 : Dynamic Route Handlers
- Go through video and it's github repo or own code