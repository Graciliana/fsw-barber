'use client';

import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import {  SearchIcon } from 'lucide-react';

 const Search = () => {
  return (
    <div className='flex items-center gap-2'>
      <Input placeholder='Busque por uma barbearia ' className='bg-gray-01'/>
      <Button variant="default" size="icon" className='bg-primary-purple'><SearchIcon size={ 20} className='text-white bg-primary-purple '/></Button>
    </div>
  );
};
export default Search;