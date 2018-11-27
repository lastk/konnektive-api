import * as dotenv from "dotenv";
import * as fs from 'fs';

let env = process.env.NODE_ENV;

if (fs.existsSync(".env")) {
    console.log("Using .env file to supply config environment variables")
    dotenv.config({ path: ".env" });
} else {
    console.log(`Using .env.${env} file to supply config environment variables`);
    dotenv.config({ path: `.env.${env}` });  // you can delete this after you create your own .env file!
}

export const LOGINID:string = process.env["LOGINID"] as string
export const PASSWORD:string = process.env["PASSWORD"] as string
export const CAMPAIGNTEST:string = process.env["CAMPAIGNID"] as string
