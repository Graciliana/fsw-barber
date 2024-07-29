import { db } from '@/app/_lib/prisma'
import React from 'react';
import Image from 'next/image'
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
      <div className='relative w-full h-64 bg-blue-300'>
        <Image src={barbershop.imageUrl} fill alt={barbershop.name} />
      </div>
    </div>
  )
}
export default BarbershopDetailsPage;