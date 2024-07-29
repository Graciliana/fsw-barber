'use client'

import React from 'react';
import Image from 'next/image'
import { Button } from '@/app/_components/ui/button';
import { ChevronLeftIcon, MapPin, MenuIcon, Star } from 'lucide-react';
import { Barbershop } from '@prisma/client';
import { useRouter } from 'next/navigation';

interface BarbershopsServicesProps {
  barbershop: Barbershop
}

export const BarbershopsServices = ({ barbershop }: BarbershopsServicesProps) => {
  const router = useRouter();
  const handleBackClick = ()=>{
    router.back()
  }
  return (
    
       <div>
      <div className='relative w-full h-64 text-white'>
        <Button size="icon" variant="outline"  onClick={handleBackClick}className='bg-red-300'>
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
    <div className="h-px bg-gray-03"></div>
<div className="flex gap-3 px-5 py-4 text-gray-03">
        <Button className='text-sm font-bold rounded-lg hover:text-white hover:bg-primary-purple' variant="outline">Serviços</Button>
        
        <Button className='text-sm font-bold rounded-lg hover:text-white hover:bg-primary-purple' variant="outline">Informações</Button>
</div>
    </div>
    
  );
};