import { useRouter } from "next/router"
import Link from "next/link";
import { branchEventName } from "./events/eventData";
export default function BranchEvent() {
    const router = useRouter();
    const branchName = router.query.branchEvent;
 
  return (
    <div className="grid grid-rows-4 grid-flow-col bg-black text-white gap-10 h-screen flex justify-center ">
      <div className="text-5xl font-sans font-bold my-12 w-full h-25  flex justify-center title ">{branchName} Branch <span className="text-red-600 mx-3">Events</span></div>
     
    <div className="grid grid-cols-1 grid-flow-row gap-4 ">
    {
        branchEventName&&  branchEventName.map((event) => {
      //  console.log(event)
         return <>
           {
             event.branch === branchName &&
             event.branchEvent.map(e => {
              //  console.log(event.branch, e)
               return <><Link href={`/events/${e}`}> <div className="  text-black bg-white   hover:bg-red-600 hover:text-white hover:font-bold h-10  rounded-full flex justify-center items-center " style={{ cursor: "pointer" }}> {e} </div>
               </Link> 
               </>
             })
               
           }
         </>
         })
    }
    </div>
     
      </div>

  )
}
