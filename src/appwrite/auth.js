import conf from "../conf/conf.js"
import { Client , Account , ID } from "appwrite";

export class AuthService{
       client = new Client();
       account ;

       constructor(){
              this.client
              .setEndpoint(conf.appwriteUrl)
              .setProject(conf.appwriteProjectId)

              this.account = new Account(this.client);
       }

       async createAccount({email , password, name}){
              try {
                     const userAccount = await this.account.create(ID.unique() , email , password ,name)
                     if(userAccount){
                            return this.login({email , password})
                     }else{
                            console.log("Error User Account");
                     }
              } catch (error) {
                     console.log("Error Create Account");
              }
       }
       async login({email , password}){
              try {
                     return await this.account.createEmailPasswordSession(email , password)
              } catch (error) {
                     console.log("Error Logging ");
              }
       }
       async getCurrentUser(){
              try {
                     return await this.account.get();
              } catch (error) {
                     console.log("Error getting current user");
              }
       }
       async logout(){
              try {
                     await this.account.deleteSessions();
              } catch (error) {
                     console.log("Error Logging Out");
              }
       }

}


const authService = new AuthService()
export default authService ;