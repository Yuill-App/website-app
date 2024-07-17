import { useEffect, } from 'react';
import { osName } from "react-device-detect";

const Referral = () => {

    useEffect(()=>{
        if (osName.toLowerCase() === "ios") {
            window.location.replace('https://apps.apple.com/us/app/yulii/id1602388531?platform=iphone');
        } else {
            window.location.replace('https://play.google.com/store/apps/details?id=com.rasers.yulii');
        }
    })
    return (
        <>

            <div className=' container mx-auto  pt-32 px-6'>
                <div className='flex md:flex-row flex-col justify-between'>


                    <div>
                        <h1 className='lg:text-4xl text-xl  text-center font-semibold lg:px-10' data-aos="fade-right" >Join Yulii and enjoy a new world of fun with friends and family
                        </h1>
                    
                        <div className='flex items-center flex-col lg:px-64'>
                             Redirectly to download Page...
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Referral