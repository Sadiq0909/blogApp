import { Client, Databases, Storage  , ID, Query} from "appwrite";
import conf from "../conf/conf.js"

export class Service{
       client = new Client() ; 
       databases ;
       bucket ; 
       constructor(){
              this.client
              .setEndpoint(conf.appwriteUrl)
              .setProject(conf.appwriteDatabaseId)

              this.databases = new Databases(this.client) ;
              this.bucket  = new Storage(this.client)
       }

       // Database Services

       async getPost(slug){
              try {
                     return await this.databases.getDocument(
                            conf.appwriteDatabaseId ,
                            conf.appwriteCollectionId,
                            slug
                            )
              } catch (error) {
                     console.log("Service : Get Post");
                     return false
              }
       }
       async getPosts(queries =[Query.equal("status" , "active")]){
              try {
                     return await this.databases.listDocuments(
                            conf.appwriteDatabaseId ,
                            conf.appwriteCollectionId,
                            queries
                     )
              } catch (error) {
                     console.log("Service : Get Posts");
                     return false
              }
       }
       async createPost({title, slug,content ,featuredImage , status , userId}){
              try {
                     await this.databases.createDocument(
                            conf.appwriteDatabaseId,
                            conf.appwriteCollectionId,
                            slug,
                            {title , content ,featuredImage ,status , userId}
                     )
              } catch (error) {
                     console.log("Service : create Posts");
                     return false      
              }
       }
       async updatePost(slug , {title , content,featuredImage,status}){
              try {
                     return await this.databases.updateDocument(
                            conf.appwriteDatabaseId,
                            conf.appwriteCollectionId,
                            slug,
                            {
                                   title , content , featuredImage , status
                            }
                     )
              } catch (error) {
                     console.log("Service : Update Posts");
                     return false
              }
       }
       async deletePost(slug){
              try {
                     await this.databases.deleteDocument(
                            conf.appwriteDatabaseId,
                            conf.appwriteCollectionId,
                            slug
                     )
                     return true ;
              } catch (error) {
                     console.log("Service : Delete Posts");
                     return false
              }
       }

       //  Storage Services

       async uploadFile(file){
              try {
                     return await this.bucket.createFile(
                            conf.appwriteBucketId ,
                            ID.unique(),
                            file 
                     )
              } catch (error) {
                     console.log("Service : Upload File");
                     return false
              }
       }
       async deleteFile(fileId){
              try {
                     await this.bucket.deleteFile(
                            conf.appwriteBucketId,
                            fileId
                     )
                     return true
              } catch (error) {
                     console.log("Service : Delete File");
                     return false
              }
       }
       getFilePreview(fileId){
              return this.bucket.getFilePreview(
                     conf.appwriteBucketId,
                     fileId
              ).href
       }

}

const service = new Service()
export default service;