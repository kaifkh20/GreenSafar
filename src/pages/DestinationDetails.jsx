import React, { useCallback, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { URL } from '../App'
import he from "he"
import striptags from 'striptags'

async function fetchDestByID(id,name,setData) {
    try {
      console.log(id,name)
      const response = await fetch(`${URL}/getSite/${id}?name=${name}`)
      const sites = await response.json()
      setData(sites)
      console.log(sites);
      return sites
    } catch (err) {
      console.log(err)
      throw Error('Error Occured')
    }
  }



const DestinationDetails = () => {
    // console.log(data);
    
    const {id} = useParams()
    const [searchParams,setSearchParams] = useSearchParams()
    const nameQ = searchParams.get('name')
    const [data,setData] = useState({})
    const[flora,setFlora] = useState([])
    const[fauna,setFauna] = useState([])

    const [error,setError] = useState(false)

    useEffect(() => {
      const getSites = async () => {
        try {
          const sites = await fetchDestByID(id,nameQ,setData)
          setFlora(sites.flora)
          setFauna(sites.fauna)
        } catch (e) {
          console.log(e)
          setError(true)
          // setError(true)
        }
      }
      getSites()
      // setIsLoading(false)
    }, [])
    


    return (
        <div>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100 dark:bg-[#111111] dark:text-white py-10">
                <div>
                    <img className="h-full" src="https://www.tourmyindia.com/blog//wp-content/uploads/2015/11/best-things-to-do-in-coorg.jpg" alt="" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-[#689A5E] mb-5">{data.site}</h1>
                    <>{striptags(data.short_description)}</>
                    
                </div>
                <div>
                        <h1 className="text-3xl font-bold text-[#689A5E] mb-3">Flora</h1>
                        {flora.map((flora)=>{
                            return(
                                <p>{flora}</p>
                            )
                        })}
                  </div>
                  <div>
                        <h1 className="text-3xl font-bold text-[#689A5E] mb-3">Fauna</h1>
                        {fauna.map((fauna)=>{
                            return(
                                <p>{fauna}</p>
                            )
                        })}
                    </div>
                    <div>
                      <p>Location : <a href={`https://www.google.com/maps/place/${data.latitude}+-${data.longitude}`}>Location Map</a></p>
                    </div>
            </div>
        </div>
    )
}

export default DestinationDetails
