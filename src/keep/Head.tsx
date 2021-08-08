
  type Head ={
    main : string;
    firstname: string;
    lastname: string;
    id: number;
}

const Head = ({main,firstname,lastname,id}:Head)=>{
      return (
          <div className='flex justify-center items-end space-x-2'>   
              <span className='text-center italic my-2 text-2xl'>{main}</span>
              <span className='text-gray-400 italic my-2 text-xl'>by {firstname+" "+lastname+" "+id}</span>
          </div>
      )
  }
export default Head