import Link from 'next/link'
export default function Event() {
    const branchList1 = ["CE", "ECE", "CSE", "PIE"];
    const branchList2 = ["ME", "EE", "MME"];
  return (
    <div className="grid grid-rows-4 grid-flow-col bg-black text-white gap-10 h-screen">
      <div className="text-5xl font-sans font-bold my-12 w-full h-25  flex justify-center ">Our <span className="text-red-600 mx-3">Events</span></div>
     <div className=" w-full flex justify-around content-center">
         {
           branchList1.map((branch) => {
          return <>
              <div className="branchLogo">
              <Link href={ `/${branch}`}>
                 <div className="w-36 h-36 rounded-full bg-purple-600 branchImg">
                 </div> 
                 <div className="w-full my-3 text-2xl font-bold flex justify-center branchName">{branch}</div>  
                </Link>
              </div>  </>
                 })
            }        
        </div>
          
        <div className=" w-full flex justify-evenly content-center  ">
           {
           branchList2.map((branch) => {
          return <>
            <div className="branchLogo">
              <Link href={`/${branch}`}>
              <div className="w-36 h-36 rounded-full bg-purple-600 branchImg">
              </div> 
              <div className="w-full my-3 text-2xl font-bold flex justify-center branchName">{branch}</div>  
            </Link>  
            </div>  </>
                 })
            }        
               
        </div>
        
      </div>

  )
}
