/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-x26foywgp4s13wp6.us', // the auth0 domain prefix
    audience: 'admin', // the audience set for the auth0 app
    clientId: '75rLc7Nd8X55DEg9nI5Qm3gt1Drz9xqM', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:4200', // the base url of the running ionic application. 
  }
};
