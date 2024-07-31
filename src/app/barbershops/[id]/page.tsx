import { db } from '@/app/_lib/prisma'
import { BarbershopsServices } from './_components/barbershops-services';
import { ServiceItem } from './_components/service-item';

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
    },
    include: {
      services: true
    }
  });
  if (!barbershop) {
    //todo: redirecionar para home page
    return null
  }
  
  return (
    <div>
      <BarbershopsServices barbershop={barbershop} />
       {barbershop.services.map((service) =>
    <ServiceItem key={service.id} service={service} />
    )}
    </div>
  
  )
}
export default BarbershopDetailsPage;