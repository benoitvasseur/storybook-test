# storybook-test

    yarn start

Should start the sample project with a single home page, writing "Home page"
The component also log a test made to check if the typescript plugins "ts-transformer-classname" have been correctly loaded.

2 stories have been written :
    - home-working.stories.tsx : Work without dependency injection, and won't use any transformer to do so.
    - home.stories.tsx : depends on a singleton with dependency injection, won't work as is. Note that the log test will also fail here.

I've tried initializing the dependency injector in both the preview.ts and the decorators, without success. The issue being it can't work without the ts-transformer-classname plugins.




