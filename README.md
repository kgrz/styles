1. Create a `package.json` file in each repo.
2. Install this package in each repo by doing:
   `npm install <git remote> --save`.  That command will save this
   package as a dependency in the other repo's `package.json`.
3. Once that is done, in each repo, run `npm link ≤local styles repo>`
   so that there is no need to push the changes in this repo and pick
   them up in the other repos while in development. The CSS in these
   files can be edited and he changes can be seen immediately.


To link a npm package that has not been published yet, the following
command can be used. That said, it won't add the linked package details
to the target repo's `package.json`.

    npm link @codemancers/styles ../styles <git remote url>

If the module is already installed, then running the above link command
won't work. Just the plain `npm link ../styles` will do.
