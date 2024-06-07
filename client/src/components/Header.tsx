import { Link } from "react-router-dom";

const Header = () => {
  return(
    <div className="border-b-2 border-b-customOrange-500 py-6">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold tracking-tight text-customOrange-500">
                BiteBox.
            </Link>
        </div>
    </div>
  )
}

export default Header;