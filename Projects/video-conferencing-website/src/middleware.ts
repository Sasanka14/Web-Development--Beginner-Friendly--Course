import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Create a matcher for protected routes
const protectedRoutes = createRouteMatcher([
  '/',
  '/upcoming',
  '/previous',
  '/recordings',
  '/personal-room',
  '/meeting(.*)',
]);

// Middleware to protect routes
export default clerkMiddleware(async (auth, req) => {
  const authObject = await auth(); // Await the auth() promise
  if (protectedRoutes(req)) {
    // Check if the user is signed in
    if (!authObject.userId) {
      // Redirect to sign-in page if user is not authenticated
      return authObject.redirectToSignIn();
    }
  }
});

// Configuration for matcher
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
