export default function Button({children , type = "button" , bgColor="bg-pink-600" ,textColor = "text-white" ,className = "" ,...props}){
       return (
              <div >
                     <button className={`${bgColor} ${textColor} ${className} px-4 py-2 rounded-lg`}{...props}>{children}</button>
              </div>
       )
}