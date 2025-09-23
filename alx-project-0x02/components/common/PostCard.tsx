import { PostProps } from "@/interfaces";

const PostCard : React.FC<PostProps> = ({userId, title, content,id}) => {
   return (
     <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg">
         <div className="mb-4">
           <h2 className="text-2xl font-semibold text-black-80">  
             {title} 
           </h2>
         </div>
         <div>
           <p className="text-black-600">{content}</p>
           <p className="text-sm text-gray-500 mt-2">User ID: {userId}</p>
           <p className="text-sm text-gray-500 mt-2">ID: {id}</p>
         </div>
     </div>
   ) 
}
export default PostCard;