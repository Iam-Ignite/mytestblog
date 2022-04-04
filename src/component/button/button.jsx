import './button.scss'

const Button = ({children, btnbg, lg}) => {
    return ( 
        <>
        <button className={`btn ${btnbg ? "btn-main" : `btn-sub ${lg ? "btn-size": "" }`}`}>
         {children}
        </button>
        </>
     );
}
 
export default Button;