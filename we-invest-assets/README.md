# Technical test Front-end Engineer

This technical test is meant for Front-end Engineer candidates.

All of the tasks are described in user stories. This already gives you an idea about the way we like to work as a team.
Of course some of these user stories don't make a lot of sense because they are based on a free dummy API. This is build to test you technical capabilities.

## Objectives

- [ ] Build this application by using this tech stack:
  - A **[REST API](https://jsonplaceholder.typicode.com/)**
  - **TypeScript**
  - **React.js**
  - **Next.js**, this is optional. Only use is if you already know it and think it will help you go either faster or deliver a better project.
  - **[TailwindCSS](https://www.npmjs.com/package/tailwindcss)**
  - **[HeadlessUI](https://www.npmjs.com/package/@headlessui/react)**
- [ ] You have max. 3 hours to complete the test.
- [ ] We will be evaluating what you are able to do based on this. So show us what you're capable of 🚀
- [ ] We also expect you to make the right decisions and to be able explain why you made that decision.

## Delivery
We would like to ask you to create a git repo and manage this test in the same way you would for any other project. (Git best practices)

Once you're done with this test we would please ask you to push this on a private GitHub repo and share it with [elliott@weinvest.be](mailto:elliott@weinvest.be).

## Evaluation Criteria

- **TypeScript** and **React** best practices
- We're looking for you to produce working code, with enough room to demonstrate how to structure components in a small program.
- Show us your work through your commit history
- Completeness: did you complete the features?
- Correctness: does the functionality act in sensible, thought-out ways?
- Maintainability: is it written in a clean, maintainable way?
- Testing: is the system adequately tested?

## User Stories

### Homepage

As a user, I want to find all of the posts and comments when accessing the APP, so that I can read all of the latest posts and their comments.

#### Acceptance Criteria's

- [ ] The homepage should be accessible on the root url ("/") of the application.
- [ ] The user should be able to see all of the post that are available.
- [ ] All of the comments related to the post should also be loaded with the post.
- [ ] Should use the "posts.html" as template.

### Sort the posts

As a user, I want to be able to sort the posts either by ID or by most comments, so that I can find the most relevant posts.

_Acceptance Criteria_

- [ ] The user should be able to sort either by ID or by the post with the most comments.

### Copy to clipboard

As a user, I want to be able to copy the ID of a post to my clipboard, so that I can share it later on.

_Acceptance Criteria_

- [ ] The user should be able to use the dropdown menu on a post to copy the ID to clipboard.
- [ ] He should recieve a alert when it's done or if there is an error.

### Delete a post

As a user, I want to be able to delete a post.

_Acceptance Criteria_

- [ ] The user should be able to use the dropdown menu on a post to delete a post.
- [ ] He should recieve an alert when it's done or if there is an error.

### Create a new post

As a user, I want to be able to create a new post, to share my experience.

_Acceptance Criteria_

- [ ] The user should be able to use the new post button to publish a new post.
- [ ] When clicking on the “new post" button the user should see a slideover open with the fields needed to publish the new post.
- [ ] He should recieve a alert when it's published or if there is an error.
- [ ] You should use "new-post.png" to integrate the slide-over that will open when clicking on the new post button.
