
import * as React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
type Props = {
  
};
 const Schedules = (props: Props) => {
  return (
    <Card className='border-gray-03' >
      <CardContent className='p-5 flex  justify-between py-0'>
        <div className='flex flex-col gap-2 py-5'>
          <Badge variant="outline" className='bg-dark-purple text-primary-purple text-2xl mt-6 w-max'>
          Confirmado 
        </Badge>
        <h1 className='text-white text-3xl font-bold mt-6'>Corte de cabelo</h1>
        <div className="flex mt-6 items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png" alt="shadcn" />
            <AvatarFallback>G</AvatarFallback>
          </Avatar>
          <h2 className= "text-white text-xl">Vintage Barber</h2>
          
        </div>
        </div>
       <div className="flex flex-col items-center justify-center px-3 border-l border-solid border-gray-03 text-white">
            <p className="text-2xl font-semibold">Fevereiro</p>
              <p className="text-2xl font-bold">21</p>
              <p className="text-2xl font-bold">09:58</p>
        </div>

        
       
      </CardContent>
      </Card>
  );
};
export default Schedules;