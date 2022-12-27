# aws-authentication

- Start next.js app
`npx create-next-app client`

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

- Set redirect endpoint into app settings in google and facebook
[https://clientf7d72519-f7d72519-dev.auth.us-east-1.amazoncognito.com/oauth2/idpresponse]

- Add domains to both google and facebook

- To have access to see if users are added to amplify in the console
`amplify console auth`
  - Select User Pool in the dropdown
  - Go to Users and Groups inside the console