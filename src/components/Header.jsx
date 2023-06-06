import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { UserAuth } from "../utils/AuthContext"
import Place from "./Place";
const Header = () => {


    const { user } = UserAuth();
    let name;
    if (user) {
        if (user.displayName != null) {
            name = user.displayName;
        } else {
            name = user.email;
        }
    }
    const cart = useSelector(store => store.cart.items)

    return (
        <div className="flex flex-row shadow-lg justify-between ">
            <div className="flex flex-row ">
                <Link to={"/"}>
                    <img className="h-14 w-20 " src="https://scontent.fjai1-3.fna.fbcdn.net/v/t39.30808-6/308548692_604670684684747_1330594698216450146_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sQPDWOCA4fgAX-0kgkW&_nc_ht=scontent.fjai1-3.fna&oh=00_AfBvPK7XFEvVhaCzeplKlF_mi7bNCdKTEJMGCdzx6tfyXA&oe=642D90F3" alt="" />
                </Link>

            </div>
            <div className="m-2 p-2 text-lg  ">
                <Place />
            </div>
        
            <ul className="flex flex-row m ">
                <Link to={"/"} ><li className="m-2 p-2 text-lg  ">Home</li></Link>
                <Link to={"/about"}><li className="m-2 p-2 text-lg">About</li> </Link>
                <Link to={"/instamart"}><li className="m-2 p-2 text-lg">Instamart</li></Link>
                <Link to={"/help"}><li className="m-2 p-2 text-lg">Help</li></Link>
                <Link to={"/cart"}><li className="m-2 p-2 text-lg">Cart-{(Object.values(cart)).length}</li></Link>
                <Link to={"/login"}><li className="m-2 p-2 text-lg">Login</li></Link>
                <Link to={"/login"}><li className="m-2 p-2 text-lg">Logout {user && name} </li></Link>
            </ul>



        </div>
    )
}

export default Header