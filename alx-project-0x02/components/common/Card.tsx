import { CardProps } from "@/interfaces";

const Card : React.FC<CardProps> = ({title,content}) => {
    return (
        <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-black-80">  
                {title} 
              </h2>
            </div>
            <div>
              <p className="text-black-600">{content}</p>
            </div>

        </div>
    )
}
export default Card;