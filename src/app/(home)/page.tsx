import { Separator } from "@radix-ui/react-separator";
import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import Schedules from "../_components/schedules";
import BarbershopItem from "./_components/barbershop-item";
import { db } from "../_lib/prisma";
import { Footer } from "../_components/footer";

export default async function Home() {
  //chamar prisma e pegar barbearias
  const barbershops = await db.barbershop.findMany({})
  //chamar prisma e pegar agendamentos
  return (
    <div className="bg-background-black">
      <Header />
      <div className="pb-2 divide-y divide-blue-200"></div>
      <span className="ml-6 text-xl text-bold text-primary-purple">Olá, </span>
      <span className="text-sm text-white"> Faça seu Login!</span>
      <p></p>
      <span className="ml-6 text-sm text-white capitalize">
        {format(new Date(), "EEEE", {
          locale: ptBR,
        })}
        ,
      </span>
      <span className="ml-2 text-sm text-white lowercase">
        {format(new Date(), "dd", {
          locale: ptBR,
        })}{" "}
        de
      </span>
      <span className="ml-2 text-sm text-white capitalize">
        {format(new Date(), "MMMM", {
          locale: ptBR,
        })}
      </span>
      <span className="ml-2 text-sm text-white capitalize">
        {format(new Date(), "yyyy", {})}
      </span>
      <div className="px-6 pt-6">
        <Search />
      </div>
      <div className="px-6 pt-14">
        <h2 className="uppercase text-bold text-gray-03">Agendamentos</h2>
        <div className="mt-4">
          <Schedules />
        </div>
      </div>
      <div className="px-6 pt-14">
        <h2 className="pb-6 uppercase text-bold text-gray-03">Recomendados</h2>
        <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
          ))}
        </div>
      </div>
      
      <div className="px-6 pt-14">
        <h2 className="pb-6 uppercase text-bold text-gray-03">Populares</h2>
        <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
          ))}
        </div>
      </div>
    </div>
  );
}
