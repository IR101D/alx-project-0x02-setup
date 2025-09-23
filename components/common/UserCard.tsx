import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, email, address }) => {
   return (
     <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg">
         <div>
           <p className="text-black-600">{name}</p>
           <p className="text-sm text-gray-500 mt-2">email: {email}</p>
           <p className="text-sm text-gray-500 mt-2">Address: {address}</p>
         </div>
     </div>
   )
}
      
export default UserCard;
