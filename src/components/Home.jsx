import { Fragment } from "react"
import WebSpecial from "./WebSpecial"
import Nav from "./Nav"
import c1 from "../Assests/card (1).png"
import c2 from "../Assests/card (2).png"
import c3 from "../Assests/card (3).png"
import vidthumb from '../Assests/vidthumb.png'
import news1 from "../Assests/news (1).png"
import news2 from "../Assests/news (2).png"

const Home = () => {
    const cards = [{
        title: "HOTPOTS",
        desc: " The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, ",
        img: c1
    },
    {
        title: "AI",
        desc: " The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, ",
        img: c2
    },
    {
        title: "SHIPPING",
        desc: " The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, ",
        img: c3
    }]

    const cards2 = [{
        title: "HOTPOTS",
        desc: " The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, ",
        img: c1,
        more: "e for ChatGPT to answer "
    },
    {
        title: "AI",
        desc: " The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, ",
        img: c2,
        more: "e for ChatGPT to answer "
    },
    {
        title: "SHIPPING",
        desc: " The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, ",
        img: c3,
        more: "e for ChatGPT to answer "
    }]

    const news = [{
        title: "Unwrapping the Archies' reinvention plan",
        img: news1
    },
    {
        title: "How AI is enhancing stores, How AI is enhancing stores",
        img: news2
    }]

    const subNews = [
        {
            title: "Croma opens 58 outlets in 6, Croma retails more than 16000",
            desc: "These companies created a lot of hype when they listed on the..."
        },
        {
            title: "Select Citywalk opens 4 new stores inn June",
            desc: "These companies created a lot of hype when they listed on the..."
        }
    ]
    return (
        <Fragment>
            <Nav />
            <main>
                <div className="p-7 flex gap-3 bg-gray-200">
                    {
                        cards.map((data) => {
                            return <div className="flex rounded-xl gap-2 items-center p-3 bg-white">
                                <div className="w-56">
                                    <img className="rounded-md" src={data.img} alt="" />
                                </div>
                                <div className="flex flex-col gap-2 p-2">
                                    <h1 className="font-bold">{data.title}</h1>
                                    <p className="text-sm">{data.desc}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="flex border-b-2 border-solid border-gray-300">
                    <div className="w-[40%]">
                        <div className="pt-10 px-10">
                            <img className="rounded-md" src={vidthumb} alt="" />
                        </div>
                        <div className="p-7">
                            {
                                cards2.map((data) => {
                                    return <div className="flex border-b border-solid gap-2 items-center p-3 bg-white">
                                        <div className="w-56">
                                            <img className="rounded-md" src={data.img} alt="" />
                                        </div>
                                        <div className="flex flex-col gap-2 p-2">
                                            <p className="font-bold text-red-500">{data.title}</p>
                                            <h1 className="text-sm" >{data.desc}</h1>
                                            <p className="text-sm font-semibold">{data.more}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="p-5 w-[30%]">
                        <div>
                            <h1 className="font-bold my-5">Latest News</h1>
                            <div className="flex flex-col gap-3">
                                {
                                    news.map((data) => {
                                        return <div className="flex flex-col gap-3">
                                            <img className="rounded-md" src={data.img} alt="" />
                                            <p className="text-sm font-semibold">{data.title}</p>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className="mt-5">
                            {
                                subNews.map((data) => {
                                    return <div className="border-t text-sm flex flex-col gap-2 py-3 border-solid">
                                        <h1 className="font-bold">{data.title}</h1>
                                        <p>{data.desc}</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <WebSpecial/>
            </main>
        </Fragment>
    )
}

export default Home