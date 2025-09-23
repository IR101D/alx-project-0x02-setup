import { ButtonHTMLAttributes } from "react";

export interface CardProps {
    title : string ;
    content : string ; 
}

export interface PostModalProps {
    isOpen : boolean;
    onClose () : void;
    onSave: (post: { title: string; content: string }) => void;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size : "small" | "medium" | "large";
    shape : "rounded-sm"|"rounded-md"|"rounded-lg";
}

export interface PostProps {
    userId : number;
    title : string;
    content : string;
    id: number;
}

export interface UserProps {
    id : number;
    name: string;
    email: string;
    address: string;
}
