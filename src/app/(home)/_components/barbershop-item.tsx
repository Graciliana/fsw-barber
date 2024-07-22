import { Button } from '@/app/_components/ui/button';
import { Card, CardContent } from '@/app/_components/ui/card';
import { Barbershop } from '@prisma/client';
import Image from "next/image";
import React from 'react';

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
      <Card className='min-w-[167px] max-w-[167px] rounded-2xl border-primary-purple'>
      <CardContent className='p-0 px-1 text-white'>
       <div className=" w-full h-[159px] relative">
         <Image src={barbershop.imageUrl} height={0} alt={barbershop.name}
        fill style={{objectFit:"cover",}} className="rounded-2xl" />
       </div>
         
        
        <div className="px-3 pb-3">
<h2 className='font-bold text-base overflow-hidden text-ellipsis text-nowrap'>{ barbershop.name}</h2>
        <p className="text-gray-03 text-xs overflow-hidden text-ellipsis text-nowrap mb-2">{barbershop.address}</p>
        <Button variant="secondary" className='bg-gray-02 text-white font-bold w-full mt-3'>Reservar</Button>
        </div>
        
      </CardContent>
      </Card>   
  );
};

export default BarbershopItem ;