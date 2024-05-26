import React from 'react'

const DestinationDetails = ({ data }) => {
    console.log(data);
    return (
        <div>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100 dark:bg-[#111111] dark:text-white py-10">
                <div>
                    <img className="h-full rounded" src="https://www.tourmyindia.com/blog//wp-content/uploads/2015/11/best-things-to-do-in-coorg.jpg" alt="" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-[#689A5E] mb-5">Coorg, Karnataka</h1>
                    <p className='mb-5'>Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is a popular coffee producing hill station. It is popular for its beautiful green hills and the streams cutting right through them. It also stands as a popular destination because of its culture and people. The Kodavas, a local clan specializing in martial arts, are especially notable for their keen hospitality.  <br />



                        Coorg, officially known as Kodagu, is the most affluent hill station in Karnataka. It is well known for its breathtakingly exotic scenery and lush greenery. Forest covered hills, spice and coffee plantations only add to the landscape. Madikeri is the region's centre point with all transportation for getting around starting from here. On a visit to Coorg, cover the beautiful towns like Virajpet, Kushalnagar, Gonikoppal, Pollibetta, and Somwarpet, and experience the beautiful concept of "homestays" to make your experience more memorable! </p>
                    <div>
                        <h1 className="text-3xl font-bold text-[#689A5E] mb-3">Flora</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorum sapiente natus porro debitis at laborum rerum hic omnis molestias expedita, modi neque id, aut quod corrupti unde ipsa voluptas.</p>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-[#689A5E] mt-4 mb-3">Fauna</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorum sapiente natus porro debitis at laborum rerum hic omnis molestias expedita, modi neque id, aut quod corrupti unde ipsa voluptas.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DestinationDetails
