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