import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')  // API endpoint
  .setProject('68835744001fa9bc5478');          // Your project ID

const account = new Account(client);

export { account, client };
