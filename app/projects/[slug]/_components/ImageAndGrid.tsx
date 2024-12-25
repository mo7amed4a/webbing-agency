import Image from 'next/image'
import React from 'react'

export default function ImageAndGrid({images}: {images: {
    url: string;
}[]}) {

    function getCol(colIndex: number) {
        return images.filter((resource: { url: string }, index: number)=>{
            return index % 3 === colIndex
        })
    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        { typeof images != 'undefined' && images.length > 0 ? [getCol(0),getCol(1),getCol(2)].map((col, indx)=>{
            return <div key={indx} className='flex flex-col gap-4'>
            {col.map((e, eIndex)=> (
                <Image
                fill
                alt=''
                key={eIndex}
                src={e.url}  
                />
            ))}
            </div>
        }) :
            <div className="h-[85vh] col-span-full flex justify-center items-center">
                <h1 className="text-xl text-base-content/70 font-medium">No Image yet</h1>
            </div>
        }
    </div>
  )
}
