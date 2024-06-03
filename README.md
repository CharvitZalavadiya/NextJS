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

---

## 30 : Conditional Routing

- Create a new file for another route and apply ternary condition for routing.

---

## 31 : Intercepting Routes

- Intercepting routes allow you to intercept or stop the default routing behaviour to present an alternate view or component when navigating through the Ul, while still preserving the intended route for scenarios like page reloads
- This can be useful if you want to show a route while keeping the context of the current page

- Conventions
  - (.) to match segments on the same level
  - (..) to match segments one level above
  - (..)(..) to match segments two levels above (Currently in Issue)
  - (...) to match segments from the root app directory

---

## 32 : Parallel Intercepting Routing

- Go through video and it's github repo

---

## 33 : Route Handlers

- We've learnt how to route to pages
- We can also create custom request handlers for our routes using a feature called route handlers
- Unlike page routes, which respond with HTML content, route handlers allow you to create RESTful endpoints, giving you full control over the response
- There is no overhead of having to create and configure a separate server
- Route handlers are also great for making external API requests
- Route handlers run server-side, ensuring that sensitive information like private keys remains secure and never gets shipped to the browser
- Route Handlers are the equivalent of API routes in Page router

---

## 34 : GET Request

- Go through video and it's github repo or own code

---

## 35 : POST Request

- Go through video and it's github repo or own code

---

## 36 : Dynamic Route Handlers

- Go through video and it's github repo or own code

---

## 37 : PATCH Request

- Go through video and it's github repo or own code

---

## 38 : DELETE Request

- Go through video and it's github repo or own code

---

## 39 : URL Query Parameter

- During search url will have "?qurey=..." and search functionality is implemented in "../comments/route.ts"

- Go through video and it's github repo or own code

---

## 40 : Redirects in Route Handler

- When user search for the data that is not available then simply add the {redirect} from "next/navigation" to the file then in GET request function before you show the data add condition and give the respect url that you want you want to redirect the user

---

## 41 : Headers in Route Handler

- HTTP headers represent the metadata associated with an API request and response.

- Request Headers

  - These are sent by the client, such as a web browser, to the server. They contain essential information about the request, which helps the server understand and process it correctly.
  - 'User-Agent' which identifies the browser and operating system to the server.
  - 'Accept' which indicates the content types like text, video, or image formats that the client can process.
  - 'Authorization' header used by the client to authenticate itself to the server

- Response Headers
  - These are sent back from the server to the client. They provide information about the server and the data being sent in the response.
  - 'Content-Type' header which indicates the media type of the response. It tells the client what the data type of the returned content is, such as text/html for HTML documents, application/json for JSON data, etc.

---

## 42 : Cookie in Route Handler

- Cookies are small pieces of data that a server sends to a user's web browser
- The browser may store the cookie and send it back to the same server with later requests
- Cookies are mainly used for three purposes
  - Session management like logins and shopping carts
  - Personalization like user preferences and themes
  - Tracking like recording and analyzing user behavior.

---

## 43 : Caching in Route Handler

- Route Handlers are cached by default when using the GET method with the Response object in Next.js

- How to opt out of caching?
  - dynamic mode in Segment Config Option
  - using the Request object with the GET method
  - employing dynamic functions like headers() and cookies()
  - using any HTTP method other than GET

---

## 44 : Middleware

- Middleware in Next.js is a powerful feature that offers a robust way to intercept and control the flow of requests and responses within your applications
- It does this at a global level significantly enhancing features like redirection, URL rewrites, authentication, headers and cookies management, and more.
- Middleware allows us to specify paths where it will be active
  - Custom matcher config
  - Conditional statements.

---

## 45 : Rendering

- Rendering is the process that transforms the code you write into user interfaces
- In Next.js, choosing the right time and place to do this rendering is vital for building a performant application CSR, SSR and RSCs
- Rendering in React → Rendering in Next.js

---

## 46 : Client Side Rendering

- Rendering in React

  - You'll remember React being the go-to library for creating Single Page Applications (SPAs)

- Client Side Rendering

  - This method of rendering, where the component code is transformed into a user interface directly within the browser (the client), is known as client-side rendering (CSR)
  - CSR quickly became the standard for SPAs (Single Page Applications), with widespread adoption
  - It wasn't long before developers began noticing some inherent drawbacks to this approach

- Drawbacks of CSR
  - SEO
    - Generating HTML that mainly contains a single div tag is not optimal for SEO, as it provides little content for search engines to index
  - Performance
    - Having the browser (the client) handle all the work, such as fetching data, computing the Ul, and making the HTML interactive, can slow things down. Users might see a blank screen or a loading spinner while the page loads
    - Each new feature added to the application increases the size of the JavaScript bundle, prolonging the wait time for users to see the Ul

---

## 47 : Server Side Rendering

- Server-side Solutions

  - It significantly improves SEO because search engines can easily index the server-rendered content
  - Users can immediately see the page HTML content, instead of a blank screen or loading spinner

- Hydration

  - During hydration, React takes control in the browser, reconstructing the component tree in memory based on the static HTML that was served
  - It carefully plans the placement of interactive elements within this tree. Then, React proceeds to bind the necessary JavaScript logic to these elements
  - This involves initializing the application state, attaching event handlers for actions such as clicks and mouseovers, and setting up any other dynamic functionalities required for a fully interactive user experience

- Server-side Solutions

  1. Static Site Generation (SSG)
     - SSG occurs at build time, when the application is deployed on the server
     - This results in pages that are already rendered and ready to serve
     - It is ideal for content that doesn't change often, like blog posts
  2. Server-Side Rendering (SSR)
     - SSR, on the other hand, renders pages on-demand in response to user requests
     - It is suitable for personalized content like social media feeds, where the HTML depends on the logged-in user

  - Server-Side Rendering (SSR) was a significant improvement over Client-Side Rendering (CSR), providing faster initial page loads and better SEO

- Drawbacks of SSR
  1. You have to fetch everything before you can show anything
     - Components cannot start rendering and then pause or "wait" while data is still being loaded
     - If a component needs to fetch data from a database or another source (like an API), this fetching must be completed before the server can begin rendering the page
     - This can delay the server's response time to the browser, as the server must finish collecting all necessary data before any part of the page can be sent to the client
  2. You have to load everything before you can hydrate anything
     - For successful hydration, where React adds interactivity to the server-rendered HTML, the component tree in the browser must exactly match the server-generated component tree
     - This means that all the JavaScript for the components must be loaded on the client before you can start hydrating any of them
  3. You have to hydrate everything before you can interact with anything
     - React hydrates the component tree in a single pass, meaning once it starts hydrating, it won't stop until it's finished with the entire tree
     - As a consequence, all components must be hydrated before you can interact with any of them.
  4. All or Nothing Waterfall
     1. having to load the data for the entire page
     2. load the JavaScript for the entire page, and
     3. hydrate the entire page
     - Create an "all or nothing" waterfall problem that spans from the server to the client, where each issue must be resolved before moving to the next one
     - This is inefficient if some parts of your app are slower than others, as is often the case in real-world apps

---

## 48 : Suspense of SSR

- Use the <Suspense> component to unlock two major SSR features:

  1. HTML streaming on the server
  2. Selective hydration on the client

- HTML streaming on the Server

  - You don't have to fetch everything before you can show anything
    -If a particular section delays the initial HTML, it can be seamlessly integrated into the stream later
  - This is the essence of how Suspense facilitates server-side HTML streaming

- The other challenge

  - Until the JavaScript for the main section is loaded, client-side app hydration cannot start
  - And if the JavaScript bundle for the main section is large, this could significantly delay the process

- Code splitting
  - Code splitting allows you to mark specific code segments as not immediately necessary for loading, signalling your bundler to segregate them into separate '<script> tags'
  - Using 'React.lazy' for code splitting enables you to separate the main section's code from the primary JavaScript bundle
  - The JavaScript containing React and the code for the entire application, excluding the main section, can now be downloaded independently by the client, without having to wait for the main section's code

- Selective Hydration on the Client
  - By wrapping the main section within <Suspense>, you've indicated to React that it should not prevent the rest of the page from not just streaming but also from hydrating
  - This feature, called selective hydration allows for the hydration of sections as they become available, before the rest of the HTML and the JavaScript code are fully downloaded
  - Thanks to Selective Hydration, a heavy piece of JS doesn't prevent the rest of the page from becoming interactive
  - Selective Hydration offers a solution to the third issue: the necessity to "hydrate everything to interact with anything"
  - React begins hydrating as soon as possible, enabling interactions with elements like the header and side navigation without waiting for the main content to be hydrated
  - This process is managed automatically by React
  - In scenarios where multiple components are awaiting hydration, React prioritizes hydration based on user interactions

- Drawbacks of Suspense SSR
  - First, even though JavaScript code is streamed to the browser asynchronously, eventually, the entire code for a web page must be downloaded by the user
    - As applications add more features, the amount of code users need to download also grows. This leads to an important question:
    - should users really have to download so much data?
  - Second, the current approach requires that all React components undergo hydration on the client-side, irrespective of their actual need for interactivity
    - This process can inefficiently spend resources and extend the loading times and time to interactivity for users, as their devices need to process and render components that might not even require client-side interaction. This leads to another question:
    - should all components be hydrated, even those that don't need interactivity?
  - Third, in spite of servers' superior capacity for handling intensive processing tasks, the bulk of JavaScript execution still takes place on the user's device
    - This can slow down the performance, especially on devices that are not very powerful. This leads to another important question:
    - should so much of the work be done on the user's device?

---

## 49 : React Server Components (RSCs)
- RSC represent a new architecture designed by the React team
- This approach aims to leverage the strengths of both server and client environments, optimizing for efficiency, load times, and interactivity
- The architecture introduces a dual-component model
  - Client Components
  - Server Components
- This distinction is not based on the functionality of the components but rather on where they execute and the specific environments they are designed to interact with

- Client Components
  - Client Components are the familiar React components we've been using
  - They are typically rendered on the client-side (CSR) but, they can also be rendered to HTML on the server (SSR), allowing users to immediately see the page's HTML content rather than a blank screen
  - Components that primarily run on the client but can (and should) also be executed once on the server as an optimization strategy
  - Client Components have access to the client environment, such as the browser, allowing them to use state, effects, and event listeners to handle interactivity and also access browser-exclusive APIs like geolocation or localStorage, allowing you to build Ul for specific use cases
  - In fact, the term "Client Component" doesn't signify anything new; it simply helps differentiate these components from the newly introduced Server Components

- Server Components
  - Server Components represent a new type of React component specifically designed to operate exclusively on the server
  - And unlike client components, their code stays on the server and is never downloaded to the client
  - This design choice offers multiple benefits to React applications

- Benefits of Server Components
  - Reduced Bundle Sizes
    - Server Components do not send code to the client, allowing large dependencies to remain server-side
    - This benefits users with slower internet connections or less capable devices by eliminating the need to download, parse, and execute JavaScript for these components
    - Additionally, it removes the hydration step, speeding up app loading and interaction
  - Direct Access to Server-side Resources
    - By having direct access to server-side resources like databases or file systems, Server Components enable efficient data fetching and rendering without needing additional client-side processing
    - Leveraging the server's computational power and proximity to data sources, they manage compute-intensive rendering tasks and send only interactive pieces of code to the client
  - Enhanced Security
    - Server Components' exclusive server-side execution enhances security by keeping sensitive data and logic, including tokens and API keys, away from the client-side
  - Improved Data Fetching
    - Server Components enhance data fetching efficiency
    - Typically, when fetching data on the client-side using useEffect, a child component cannot begin loading its data until the parent component has finished loading its own
    - This sequential fetching of data often leads to poor performance
    - The main issue is not the round trips themselves, but that these round trips are made from the client to the server
    - Server Components enable applications to shift these sequential round trips to the server side
    - By moving this logic to the server, request latency is reduced, and overall performance is improved, eliminating client-server "waterfalls"
  - Caching
    - Rendering on the server enables caching of the results, which can be reused in subsequent requests and across different users
    - This approach can significantly improve performance and reduce costs by minimizing the amount of rendering and data fetching required for each request
  - Faster Initial Page Load and First Contentful Paint
    - Sixth, Initial Page Load and First Contentful Paint (FCP) are significantly improved with Server Components
    - By generating HTML on the server, pages become immediately visible to users without the delay of downloading, parsing, and executing JavaScript
  - Improved SEO
    - Regarding Search Engine Optimization (SEO), the server-rendered HTML is fully accessible to search engine bots, enhancing the indexability of your pages
  - Efficient Streaming
    - Server Components allows the rendering process to be divided into manageable chunks, which are then streamed to the client as soon as they are ready
    - This approach allows users to start seeing parts of the page earlier, eliminating the need to wait for the entire page to finish rendering on the server

- RSC
  - Server Components take charge of data fetching and static rendering, while Client Components are tasked with rendering the interactive elements of the application
  - The bottom line is that the RSC architecture enables React applications to leverage the best aspects of both server and client rendering, all while using a single language, a single framework, and a cohesive set of APls

---

## 50 : Server and Client Components
- In the RSC architecture and by extension in the Next.js app router, components are server components by default
- To use client components, you must include the "use client" directive at the top
- Server components are rendered only on the server
- Client components are rendered once on the server and then on the client

---

## 51 : RSC Rendering Cycle
- Go through the video for better understanding

---

## 52 : Static Rendering
- Static rendering is a server rendering strategy where we generate HTML pages at the time of building our application
- This approach allows the page to be built once, cached by a CDN, and served to the client almost instantly
- This optimization also enables you to share the result of the rendering work among different users, resulting in a significant performance boost for your application
- Static rendering is particularly useful for blog pages, e-commerce product pages, documentation, and marketing pages

- How to Statically Render?
  - Static rendering is the default rendering strategy in the app router
  - All routes are automatically prepared at build time without additional setup

- Production Server vs Dev Server
  - For production, an optimized build is created once, and you deploy that build
  - A development server, on the other hand, focuses on the developer experience
  - We can't afford to build our app once, make changes, rebuild, and so on
  - For production builds, a page will be pre-rendered once when we run the build command
  - In development mode, a page will be pre-rendered for every request

- Prefetching
  - Prefetching is a technique used to preload a route in the background before the user navigates to it
  - Routes are automatically prefetched as they become visible in the user's viewport, either when the page first loads or as it comes into view through scrolling
  - For static routes, the entire route is prefetched and cached by default
  - When we load the homepage, Next.js prefetches the About and Dashboard routes, keeping them ready for instant navigation

- Summary
  - Static rendering is a strategy where the HTML is generated at build time
  - Along with the HTML, the RSC payload is created for each component, and JavaScript chunks are produced for client-side component hydration in the browser
  - If you navigate directly to a page route, the corresponding HTML file is served
  - If you navigate to the route from a different one, the route is created on the client side using the RSC payload and JavaScript chunks, without any additional requests to the server
  - Static rendering is great for performance and use cases include blogs, documentation, marketing pages etc.

---

## 53 : Dynamic Rendering
- Dynamic rendering is a server rendering strategy where routes are rendered for each user at request time
- It is useful when a route has data that is personalized to the user or contains information that can only be known at request time, such as cookies or the URL's search parameters
- News websites, personalized e-commerce pages, and social media feeds are some examples where dynamic rendering is beneficial

- How to Dynamically Render
  - During rendering, if a dynamic function is discovered, Next.js will switch to dynamically rendering the whole route
  - In Next.js, these dynamic functions are: cookies(), headers(), and searchParams
  - Using any of these will opt the whole route into dynamic rendering at request time

- Summary
- Dynamic rendering is a strategy where the HTML is generated at request time
- Next.js automatically switches to dynamic rendering when it comes across a dynamic function in the component, such as cookies() headers(), or the searchParams object
- This form of rendering is great for when we need to render HTML personalized to a user, such as a social media feed
- As a developer, you do not need to choose between static and dynamic rendering. Next.js will automatically choose the best rendering strategy for each route based on the features and APIs used

---

## 54 : Streaming
- Streaming is a strategy that allows for progressive Ul rendering from the server
- Work is divided into chunks and streamed to the client as soon as it's ready
- This enables users to see parts of the page immediately, before the entire content has finished rendering
- Streaming significantly improves both the initial page loading performance and the rendering of Ul elements that rely on slower data fetches, which would otherwise block the rendering of the entire route
- Streaming is integrated into the Next.js App Router by default

---

## 55 : Server and Client Composition Patterns
- Server Components
  - Fetching data
  - Directly accessing backend resources
  - Protecting sensitive information (like access tokens and API keys) on the server
  - Keeping large dependencies server-side, which helps in reducing client-side JavaScript.

- Client Components
  - Adding interactivity
  - Handling event listeners (such as onClick(), onChange(), etc)
  - Managing state and lifecycle effects (using hooks like useState(), useReducer(), useEffect())
  - Using browser-exclusive APIs
  - Using custom hooks
  - Using React Class components.

---

## 56 : Server only Code
- Certain code is intended to execute only on the server
- You might have modules or functions that use multiple libraries, use environment variables, interact directly with a database, or process confidential information
- Since JavaScript modules can be shared, it's possible for code that's meant only for the server to unintentionally end up in the client
- If server-side code gets bundled into the client-side JavaScript, it could lead to a bloated bundle size, expose secret keys, database queries, and sensitive business logic
- It is crucial to separate server-only code from client-side code to protect the application's security and integrity

- Server only Package
  - Provide a build-time error if developers accidentally import one of these modules into a Client Component

---

## 57 : Third Party Packages
- Third Party Packages
  - Third-party packages in the ecosystem are gradually adapting, beginning to add the "use client" directive to components that rely on client-only features, marking a clear distinction in their execution environment
  - Many components from pm packages, which traditionally leverage client-side features, haven't yet integrated this directive
  - The absence of "use client" means that while these components will function correctly in Client Components, they may encounter issues or might not work at all within Server Components
  - To address this, you can wrap third-party components that rely on client-only features in your own Client Components

- When you want to use a third party package in server side code then it will give you error if the third party package is client side and if you want to use client side code in server side code then you have to encapsulate the third-party components.

- To do that you need to create a new file in other folder like components folder and create a new file for that client side code and make to write "use client" at the top of the file to make that file client side then simply import that file in your server side code.

- With this method if you want to add a single or more client side code in your server side code then you can add and your code will still remain as server side code

- Go through vedio once to have better understanding

---

## 58 : Context Provider
- Context providers are typically rendered near the root of an application to share global application state and logic for example, the application theme
- However, since React context is not supported in Server Components, attempting to create a context at the root of your application will result in an error
- To address this, you can create a context and render its provider inside a separate Client Component

---

## 59 : Client-only Code
- Simply add dependency named "client-only" and import it to your file for using that component as client side component

---

## 60 : Client Component Placement
-