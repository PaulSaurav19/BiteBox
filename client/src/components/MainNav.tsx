import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  
  return(
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? ( <UsernameMenu /> ) : ( <Button className="bg-customBlue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:text-white hover:bg-customBlue-100 hover:border-customBlue-500 hover:border transition-all duration-300 ease-in-out transform hover:scale-105"
      onClick={async() => await loginWithRedirect()}
    >
        Log In
    </Button>
    )}
    </span>
   
  );
}

export default MainNav;