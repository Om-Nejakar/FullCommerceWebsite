import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint('process.env.REACT_APP_APPWRITE_ENDPOINT')  // API endpoint
  .setProject('process.env.REACT_APP_APPWRITE_PROJECT_ID');          // project ID

const account = new Account(client);

export { account, client };
