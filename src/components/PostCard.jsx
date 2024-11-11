import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config.js"

function PostCard({
       $id , title , featuredImage
}){
       return(
              <Link to={`/posts/${$id}`}>
                     <div className="w-full bg-gray-200 rounded-xl p-4">
                            <div className="w-full justify-center mb-4">
                                   <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className="rounded-xl" />
                            </div>
                            <h2 className="text-xl font-bold">{title}</h2>
                     </div>
              </Link>
       )
}

export default PostCard