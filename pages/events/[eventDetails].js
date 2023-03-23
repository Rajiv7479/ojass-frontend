import { useRouter } from "next/router"
import { eventData } from "./eventData"

export default function EventDescription() {
    const router = useRouter();
    const eventN = router.query.eventDetails;
  console.log(eventData);
    return (
        <div className="bg-black min-h-screen flex justify-center items-center">
            <div className="w-1/2 min-h-1/2 bg-white rounded-lg descBox ">
              <div className="text-3xl font-sans font-bold my-2 w-full h-25  flex justify-center title">Event <span className="text-blue-600 mx-3"> Description</span></div>
                 
                {
                   eventData&& eventData.map((event) => {
                        return <>
                            {event.eventName === eventN && <><div className="text-2xl font-sans font-bold my-6 w-full h-25  flex justify-center ">{event.eventName}</div><div className="my-2 p-10 text-lg font-sans para ">{event.eventDescription}</div></>
                            }
                        </>
                    })
                }
            </div>

        </div>
    )
}