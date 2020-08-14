This is a starter template for [Learn Next.js](https://nextjs.org/learn).

-Link component enables **client-side navigation**, which uses Javscript. This is faster than default navigation by browser. In NextJS version, link does not load the full page.
-**Code splitting** load first page assets first, other pages loaded later.
-**Prefetching** loads Links to other pages in background, page transition near instant.

-Assets like images go in **public folder**, '/image.jpg' is sufficient to locate.
-**styled-jsx** write CSS in React Component and other components not affected.

### **Static Generation** of HTML at build time
**getStaticProps** runs only on server setImmediate, it is never sent client side.
In production getStaticProps only runs at build time.

If you need to fetch data at request time, try server-side rendering or skip pre-render altogether

### **Server-side** generation of HTML at request time
**getServerSideProps**


Static Generation + Fetch data on client side
**SWR**

getStaticPaths
in dev mode, runs on every request
in production, runs at build time

