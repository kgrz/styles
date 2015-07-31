1. Create a `package.json` file in each repo.
2. Install this package in each repo by doing:
   `npm install <git remote> --save`.  That command will save this
   package as a dependency in the other repo's `package.json`.
3. Once that is done, in each repo, run `npm link ≤local styles repo>`
   so that there is no need to push the changes in this repo and pick
   them up in the other repos while in development. The CSS in these
   files can be edited and he changes can be seen immediately.
