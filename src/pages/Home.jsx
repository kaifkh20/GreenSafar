
import NatureVid from "../assets/video.mp4"
import { ReactTyped } from "react-typed";
import { HomeCont } from '../HomeCont';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {

    

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // console.log(HomeCont);
    return (
        <div>
            <div className="relative bg-white/10 dark:bg-[#111111]/20 duration-200 h-[400px] md:h-[400px]">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute right-0 top-0 h-full w-full object-cover z-[-1]"
                >
                    <source src={NatureVid} type="video/mp4" />
                </video>
                <div className="text-4xl md:text-5xl flex flex-col space-y-2 font-bold text-[#DDE1E4] justify-center items-center tracking-wider h-[400px]">
                    <ReactTyped strings={["FIND YOUR"]} showCursor={false} />
                    <ReactTyped
                        strings={[
                            "ECO EXPERIENCES",
                            "DESTINATIONS",
                        ]}
                        typeSpeed={120}
                        backSpeed={120}
                        startDelay={1200}
                        showCursor={false}
                        loop
                    >
                    </ReactTyped>
                </div>
            </div>
            <div className='dark:bg-black'>
                <Slider {...settings}>
                    {HomeCont.map((data) => (
                        <div className="my-6 " key={data.id}>
                            <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-bark bg-primary/10 relative bg-gray-100 dark:bg-[#111111] ">
                                <div className="mb-4">
                                    <img className="rounded h-[200px] w-full" src={data.img} alt="" />
                                </div>
                                <div className="flex flex-col items-centergap-4 dark:text-white">
                                    <div className="space-y-2 ">
                                        <p className="font-bold text-xl text-gray-500 dark:text-white" >{data.location}</p>
                                        <p className="text-black/80 dark:text-white">{data.description}</p>
                                    </div>
                                </div>
                                {/* <p className="text-9xl text-gray-500 absolute top-0 right-0 font-serif text-primary/20">,,</p> */}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Home
