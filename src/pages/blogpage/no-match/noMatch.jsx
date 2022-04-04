import { useEffect } from "react";


const NoMatch = () => {
	    //  const isAuthenticated = localStorage.getItem("email");
       useEffect(() => {
		   setTimeout(() => {
          window.location.reload(true)
			   
		   }, 800);	
	   }, [])
	   
   
	return (
	
			<div className='no-match'>
			<h1>Page Not Found</h1><br />
			<span>Redirect in 3s</span>
            <a className="link" href="/">Back</a>
		</div>
	
	);
};

export default NoMatch;
