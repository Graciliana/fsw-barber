import { db } from '@/app/_lib/prisma'
import React from 'react';
import Image from 'next/image'
import { Button } from '@/app/_components/ui/button';
import { ChevronLeftIcon, MapPin, MenuIcon, Star } from 'lucide-react';
interface BarbershopDetailsPageProps{
  params: {
    id?: string;
  }
}
const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {
  if (!params) {
    //todo: redirecionar para home page
    return null
  }
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id
    }
  });
  if (!barbershop) {
    //todo: redirecionar para home page
    return null
  }
  
  return (
    <div className='text-white'>
      <div className='relative w-full h-64'>
        <Button size="icon" variant="outline" className='bg-red-300'>
          <ChevronLeftIcon className='absolute z-50 w-10 h-10 rounded-lg left-4 top-4 bg-gray-01'/>
        </Button>
         <Button size="icon" variant="outline">
          <MenuIcon className='absolute z-50 w-10 h-10 rounded-lg right-4 top-4 bg-gray-01'/>
        </Button>
        <Image src={barbershop.imageUrl} fill alt={barbershop.name} style={{objectFit:"cover"}} className='opacity-75' />
      </div>
      <div className="px-5 py-6 text-white">
        <h1 className='pb-2 text-xl font-bold'>{barbershop.name}</h1>
        <div className="flex items-center pb-1">
           <MapPin className=' text-primary-purple' size={ 18} /> 
        <span className='text-sm font-normal'>{barbershop.address}</span>
        </div>      
        <div className="flex items-center pb-1">
          <Star className=' text-primary-purple' size={ 18} /> 
       
        <span className='text-sm font-normal'>5,0 (889 avaliações)</span>
        </div>
  
    </div>
    <div className="h-px bg-primary-purple"></div>
<div className="flex gap-3 px-5 py-4 text-gray-03">
        <Button className='text-sm font-bold rounded-lg hover:text-white hover:bg-primary-purple' variant="outline">Serviços</Button>
        
        <Button className='text-sm font-bold rounded-lg hover:text-white hover:bg-primary-purple' variant="outline">Informações</Button>
</div>
    </div>
  )
}
export default BarbershopDetailsPage;