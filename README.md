Curryup makes it easy to incrementally provide dependencies to entities over
time.

When developing modern JavaScript applications, we require a number of
dependency types.

 * Environment: Global features, usually supporting IO or time like
   `window.setTimeout`, `window.indexedDB` or `XMLHttpRequest`.
 * Configuration: Parameters that may be found in a variety of locations
   (e.g., `process.env.NODE_ENV` or `?debug=true` or `window.LOG_LEVEL`),
   and must be processed in a deterministic order as there may also be
   contextual overrides.
 * Application Services: We often need some small collection of Singleton
   services that store some state across a running application.
 * Context-specific values: Throughout the leaves and nodes of our applications
   we need to provide granular values to entities that make them unique.

The first three of these dependency types tend to be made available either
globally, or within global module scopes and consumers simply reach out and
grab them whenever they are needed.

This practice makes our code unnecessarily complex, non-portable and very
difficult to test.

The authors of the many module systems that have appeared in recent years have
made claims that these systems solve this set of problems. It is my position
that this is not the case, because:

 * Modules are resolved at load-time and in the order they are
   encountered, we cannot reliably manage or shim global state without
   controlling every single module definition. For example, the React library
   (as of 3/20/2016) finds and stores a reference to global.window at the time
   it is loaded and it cannot be used with a different window object. This
   makes it very difficult to write tests for React components.
 * Whenever state is stored in a module, that module must be explicitly cleared
   between test runs, or else we risk having interacting temporally dependent
   tests. This can lead to highly complex, inaccurate and inefficient tests.
 * When modules make assumptions about where to find stateful or environmental 
   dependencies, they become much less portable and often less efficient. For
   example, many node modules make use of Node's "utils" module for
   inheritance, but this module transitively requires Node's Buffer utils which
   unnecessarily bloats browser applications.
 * We cannot explicitly sort `require` statements based on transitive
   dependency ordering because we do not have control over library require
   blocks and it would be an absurd exercise to distribute this knowledge
   throughout every declared module.

These issues tend to be mitigated by using the Inversion Of Control (IOC)
pattern which is usually (but not always) implemented as a Dependency
Injection (DI) container. While DI containers can mitigate these problems
and lead to more _environmentally_ portable application code, it usually leads
to highly complex configuration and tight coupling between application entities
and a particular container interface.

I have built and used a number of Dependency Injection containers and while I 
do feel they are probably the best solution for large, sophisticated
applications, they are not appropriate in many cases.

An ideal solution for some of these smaller, more modular use cases would
instead allow entities to be defined as Plain Old JavaScript entities
(callables or constructors) and consumed with whatever pattern is prevalent in a
given environment (e.g., `new` keyword or factory methods).


Curryup is a library that attempts to solve the problems outlined above in a
tiny, lightweight, high-performance, easy-to-understand package that helps us
write fast, portable, testable code in any version of EcmaScript.


This library was in-part inspired by the interfaces found in [Ramda](http://ramdajs.com).

