# Contributing

I appreciate any contributions to this project to make it more efficient and accessible!

**This is your first Pull Request?** Check out this guide on [How to make your first Open Source contribution on Github][alissanguyen].

## Technical Changes 

For any technical changes, clone the repository and make a new branch with the branch name following the below template:
```
git checkout -b <what_changes_you_are_working_on> 
```
Then, open a pull request and provide a description of what you worked on. 

## Blog Content Changes such as Typos and Incorrect Information
IF you find any typos or incorrect information (or outdated), please shoot me an email at im.tamnguyen@gmail.com. I appreciate any contribution to make my blog a better place for learners and readers.

## Translation contributions

Translations for blog posts are more than welcome, you can clone the repository, go to the `translations` folder and add a `.md` file with the below information:
- Title of the blog post
- The language you will be translating to
- Your contact information (email required, facebook/linkedin/twitter required)
When you are done, submit a pull request and I'll review it as soon as possible.
- The translation
You can look at the `template.md` file to copy over the template for translations.
**IMPORTANT!** Please do not modify the `template.md` file, you want to create a new file and follow the instructions in the `template.md` file.

## Error in Translation
If you notice an error in an existing translation, reach out to the translator directly using their contact information to get it fixed. 

## Project setup

If you do need to set the project up locally yourself, feel free to follow these
instructions:

### System Requirements

- [Node.js](https://nodejs.org/) >= 14.10.0
- [git](https://git-scm.com/) >= 2.24.3

### Setup steps

First, fork the repo, then do this:

```sh
git clone <your-fork>
cd ./alissanguyen-dot-dev
npm run dev
```
You should be able to see the website at `http://localhost:3000`.

## Caching

My website is built and run with Cloudflare, Netlify, Namecheap and sometimes can be slow in development, you can try deleting the `.cache` folder and re-run the server.


<!-- prettier-ignore-start -->
[alissanguyen]: https://www.alissanguyen.dev/blog/how-to-make-your-first-open-source-contribution-on-github
<!-- prettier-ignore-end -->