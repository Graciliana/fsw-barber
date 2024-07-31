
import { Card, CardContent } from '@/app/_components/ui/card';
import { Service } from '@prisma/client';
import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/app/_components/ui/button';

interface ServiceItemProps  {
  service: Service
};
export const ServiceItem = ({service}: ServiceItemProps) => {
  return (
    <div>
      <Card className='bg-gray-02'>
        <CardContent className='p-3'>
          <div className="flex items-center gap-4">
            <div className="relative min-h-28 min-w-28 max-h-28 max-w-28">
              <Image src={service.imageUrl} fill style={{objectFit:"contain"}} alt={service.name} className='rounded-lg'/>
            </div>
            <div className="flex flex-col w-full">
              <h2 className="text-white font-sm bold">{service.name}</h2>
              <p className="text-xs text-gray-03">{service.description}</p>
              <div className="flex items-center justify-between mt-3">
                <p className="font-sm bold text- text-primary-purple">
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(Number(service.price))}
                 
                  </p>
                <Button  className='text-white bg-gray-02'>Reservar</Button>
              </div>
            </div>
          </div>
        </CardContent>
     </Card>
    </div>
  );
};