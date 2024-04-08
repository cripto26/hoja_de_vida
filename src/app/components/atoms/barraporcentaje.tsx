
export default function Barraporcentaje({ label, porcentage }:{label:string, porcentage:number}) {
    const barWidth = `${porcentage}%`;
  
    return (
      <div >

      <div className="flex items-center justify-between py-2">
        <span className="text-lg font-medium text-gray-600 hover:drop-shadow-md text-[14.5px]">{label}</span>
        <span className="text-lg font-medium text-gray-600 hover:drop-shadow-md text-[14.5px]">{porcentage}%</span>
      </div>

     
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-500 hover:text-gray-200 hover:drop-shadow-md ">
      <div className="bg-red-500 h-[5px]  rounded-full flex absolute my-[2.5px] " style={{ width: barWidth }}></div>
      <div className="h-[10px] rounded-full" style={{ width: "100%", backgroundColor: 'transparent', borderWidth: '1px', borderStyle: 'solid', borderColor: 'blue' }}></div>


        </div>
      </div>
    
    );
  }
  




  