import { db } from '@/app/_lib/prisma'
import { BarbershopsServices } from './_components/barbershops-services';

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
   <BarbershopsServices barbershop={barbershop}/>
  )
}
export default BarbershopDetailsPage;