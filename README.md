# aws-authentication

- Start next.js app 
- Install dependencies 
  - aws-amplify
  - tailwindcss postcss autoprefixer 

- Initialize new amplify project
  - amplify init 
    - This will enable you setup the project an also log into the aws account 
  - After that is completing, setup project on console.developers.google.com
    - Create credentials from there
  - Also go to facebook and create project 

- Get id from facebook and google then run `amplify add auth`
- After that deploy to aws by running `amplify push --y`

- Configure amplify, either with amplify.configure in file itself whenever its needed, or create a global that can always used in any case 