import { Fragment } from "react"
import vidthumb2 from '../Assests/vidthumb2.png'
import { useRef } from "react"
import leader from "../Assests/leader.png"
import leader1 from "../Assests/leader (1).png"
import leader2 from "../Assests/leader (2).png"
import profile1 from "../Assests/profile (1).png"
import profile2 from "../Assests/profile (2).png"
import profile3 from "../Assests/profile (3).png"

const WebSpecial = () => {
    const webspec = [
        "Cinema industry welcomes lowering GST rates", "Patanjali Ayurveda TO SELL 7% ", "Select city opens unn stores", "industry welcomes lowering GST rates", "Patanjali Ayurveda TO SELL 7% "
    ]

    const trend = [
        "Apple",
        "Trump Become President", "Joe bieden", "Meta", "Microsoft thinking on Artificial Intekligent", "Carl pei launch nothing phone 3", "Going to be the world", "patnjali on time delevery", "why are you be an arront", "waste management", "ind money foe use stock", "hello world",
    ]

    const trendContainerRef = useRef();

    const scrollLeft = () => {
        if (trendContainerRef.current) {
            trendContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (trendContainerRef.current) {
            trendContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    const leaders = [{
        profileImg: profile1,
        img: leader,
        title:'I have to be a James bond was a Holly wood actor and Tom cruise too',
        name:'Arunthandhi'
    },
    {
        profileImg: profile3,
        img: leader1,
        title:'I have to be a James bond was a Holly wood actor and Tom cruise too',
        name:'Mahesh'
    },
    {
        profileImg: profile2,
        img: leader2,
        title:'I have to be a James bond was a Holly wood actor and Tom cruise too',
        name:'Geaorge'
    },
    {
        profileImg: profile3,
        img: leader1,
        title:'I have to be a James bond was a Holly wood actor and Tom cruise too',
        name:'Biden charles'
    },
    {
        profileImg: profile2,
        img: leader2,
        title:'I have to be a James bond was a Holly wood actor and Tom cruise too',
        name:'Arun Kumar'
    }]

    const text = ["B@B have to br thing", "All the best for the election", "I have to be a docter", "Artificial Intelligent", "Progaram of a thug", "justify the crime"]
    return (
        <Fragment>
            <h1 className="m-5 font-bold">Web Specials</h1>
            <main>
                <div className="w-[70%] flex border-b-2 border-solid">
                    <div className="w-full m-5">
                        <img className="rounded-md" src={vidthumb2} alt="" />
                    </div>
                    <div className="px-5 w-full my-5 flex flex-col justify-between gap-2 border-x border-solid">
                        {
                            webspec.map((data) => {
                                return <div className="flex border-b border-solid items-center p-2 gap-2">
                                    <i class="fa-solid text-red-500 fa-xs fa-circle-dot"></i>
                                    <p>{data}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="w-[70%] flex justify-between p-2 gap-2">
                    {
                        text.map((data) => {
                            return <div className="flex text-sm items-center p-2 gap-2">
                                <i class="fa-solid text-red-500 fa-xs fa-circle-dot"></i>
                                <p>{data}</p>
                            </div>
                        })
                    }
                </div>
                <section className="m-5">
                    <h1 className="font-bold my-5">Trending</h1>
                    <div className="flex gap-10 items-center">
                        <div
                            className="flex cursor-default gap-5 overflow-x-auto scrollbar"
                            ref={trendContainerRef}
                        >
                            {
                                trend.map((data, index) => (
                                    <p key={index} className="p-3 border border-solid rounded-md flex-shrink-0">
                                        {data}
                                    </p>
                                ))
                            }
                        </div>
                        <div className="flex gap-5">
                            <button onClick={scrollLeft}><i className="fa-solid fa-xl fa-arrow-left"></i></button>
                            <button onClick={scrollRight}><i className="fa-solid fa-xl fa-arrow-right"></i></button>
                        </div>
                    </div>
                </section>
                <section className="m-5 flex gap-5">
                    <div className="w-[65%]">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold my-5">Leaders Ink</h1>
                            <p className="text-gray-400">See more</p>
                        </div>
                        <div className="flex gap-5 overflow-auto scrollbar">
                            {
                                leaders.map((data)=>{
                                    return <div className="rounded-md flex-shrink-0 border border-solid flex text-sm flex-col gap-3 w-[25%]">
                                        <div>
                                            <img className="rounded-t-md" src={data.img} alt="" />
                                        </div>
                                        <div className="px-3 flex gap-3">
                                            <img className="rounded-full w-10 h-10" src={data.profileImg} alt="" />
                                            <p className="font-semibold">{data.title}</p>
                                        </div>
                                        <div className="px-3 pb-3">
                                            <p className="text-gray-500">{data.title}</p>
                                            <p className="text">{data.name}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>

                    </div>
                    <div className="w-[30%]">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold my-5">Research</h1>
                            <p className="text-gray-400">See more</p>
                        </div>

                    </div>
                </section>
            </main>
        </Fragment>
    )
}

export default WebSpecial