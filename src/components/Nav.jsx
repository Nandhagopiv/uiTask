import { Fragment } from "react"
import ad from '../Assests/ad.png'
import logo from '../Assests/logo.png'

const Nav = () => {
    const menu = ["Home", "Categories", "IR Prime", "Events", "Bookstore", "Newsletter", "Video"]
    const subMenu = ["Fashion and Lifestyle", "Beauty and Wellness", "Food and Beverages", "Entertainment", "Home and Decor"]
    return (
        <Fragment>
            <main className="w-full">
                <div className="w-full flex flex-col item-center">
                    <div className="flex justify-center">
                        <img src={ad} alt="" />
                    </div>
                    <div className="flex p-5 items-center border-solid border-b justify-between">
                        <div className="flex items-center gap-2">
                            <i class="fa-solid fa-magnifying-glass text-gray-400 fa-sm"></i>
                            <input className="p-2 outline-none" placeholder="Search here..."></input>
                        </div>
                        <div className="flex justify-center">
                            <img src={logo} alt="" />
                        </div>
                        <div className="flex text-sm gap-3">
                            <button className="bg-red-500 px-5 h-min py-2 text-white rounded-sm">Subcribe</button>
                            <button className="border border-solid h-min px-5 py-2">Sign In</button>
                        </div>
                    </div>
                    <div className="p-3 flex justify-between">
                        <div>
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        <div className="flex font-bold gap-2">
                            {
                                menu.map((data) => {
                                    return <p>{data}</p>
                                })
                            }
                        </div>
                        <div></div>
                    </div>
                    <div className="flex gap-5 p-5 text-sm text-gray-500 justify-center">
                        {
                            subMenu.map((data) => {
                                return <p>{data}</p>
                            })
                        }
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default Nav