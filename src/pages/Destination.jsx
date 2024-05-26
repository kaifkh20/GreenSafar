import React, { useEffect, useState } from 'react'
import { HomeCont } from '../HomeCont';
import { URL } from '../App';
import he from "he"

async function fetchAllDestination() {
    try {
      const response = await fetch(`${URL}/getAllSites`,{method:"GET"})
    //   console.log(response.body)
      const sites = await response.json()
      
      return sites
    } catch (err) {
      console.log(err)
      throw Error('Error Occured')
    }
  }



const Destination = () => {

    const [HomeData,setHomeData] = useState([])

    useEffect(() => {
        const getSites = async () => {
          try {
            const sites = await fetchAllDestination()
            // console.log(books)
            setHomeData(sites)
            // console.log(booksData)
            // setError(null)
          } catch (e) {
            console.log(e)
            // setError(true)
          }
        }
        getSites()
        // setIsLoading(false)
      }, [])

      console.log(HomeData);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 px-3 dark:bg-black duration-200 ">
            {HomeData.map((data) => (

                <div className="shadow-lg py-8 px-6 rounded-xl dark:bg-bark bg-primary/10 relative bg-gray-100 dark:bg-[#111111] " key={data._id}>
                    <div className="mb-4">
                        <img className="rounded h-[200px] w-full" src={data.image_url} alt="Photo" />
                    </div>
                    <div className="flex flex-col items-centergap-4 dark:text-white">
                        <div className="space-y-2 ">
                            <p className="font-bold text-xl text-gray-500 dark:text-white" >{data.site}</p>
                            <p className="text-black/80 dark:text-white">{he.decode(data.short_description).substring(3,100)+"..."}</p>
                        </div>
                    </div>
                    <button className="ml-[200px] mt-6 md:ml-[320px] md:mt-6 px-4 py-2 bg-[#68A95E]/80 text-white rounded-xl hover:bg-[#68A95E]">Know More</button>
                    {/* <p className="text-9xl text-gray-500 absolute top-0 right-0 font-serif text-primary/20">,,</p> */}
                </div>
            ))}
        </div>
    );
};

export default Destination;
