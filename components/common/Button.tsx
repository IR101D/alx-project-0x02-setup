import { ButtonProps } from "@/interfaces";
import { Children } from "react";

const Button : React.FC<ButtonProps> = ({ size, shape, children}) => {
    return (
        <button className={`bg-blue-600 text-white ${size} ${shape}`}>
          {children}
        </button>
        
    )
}
export default Button