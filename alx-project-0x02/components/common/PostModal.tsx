import { PostModalProps } from "@/interfaces";
import React, { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSave }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    onSave({ title, content });
    setTitle("");
    setContent("");
    onClose();
    };
    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justtify-center bg-black/50">
         <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
           <h2 className="text-xl font-semibold mb-4">Create Post</h2>
           <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text"
             placeholder="Title"
             value={title}
             onChange={(e)=>setTitle(e.target.value)}
             className="w-full border-rounded-lg px-3 py-2"/> 
            <textarea placeholder="content"
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
            rows={4}/>
            <div className="flex justify-end gap-3">
               <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border">
                Cancel
               </button>
               <button type="submit" className="px-4 py-2 rounded-lg bg-blue-600 text-white">
                Save
               </button>
            </div>
           </form>
        </div>
        </div>
    )
}
export default PostModal;