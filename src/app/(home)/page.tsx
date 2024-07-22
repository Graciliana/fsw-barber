import { Separator } from "@radix-ui/react-separator";
import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import Schedules from "../_components/schedules";
import BarbershopItem from "./_components/barbershop-item";
import { db } from "../_lib/prisma";

export default async function Home() {
  //chamar prisma e pegar barbearias
  const barbershops = await db.barbershop.findMany({})
  //chamar prisma e pegar agendamentos
  return (
    <div className="bg-background-black">
      <Header />
      <div className="divide-blue-200 divide-y pb-2"></div>
      <span className="text-bold ml-6 text-xl text-primary-purple">Olá, </span>
      <span className="text-sm text-white"> Faça seu Login!</span>
      <p></p>
      <span className="ml-6 text-sm capitalize text-white">
        {format(new Date(), "EEEE", {
          locale: ptBR,
        })}
        ,
      </span>
      <span className="ml-2 text-sm lowercase text-white">
        {format(new Date(), "dd", {
          locale: ptBR,
        })}{" "}
        de
      </span>
      <span className="ml-2 text-sm capitalize text-white">
        {format(new Date(), "MMMM", {
          locale: ptBR,
        })}
      </span>
      <span className="ml-2 text-sm capitalize text-white">
        {format(new Date(), "yyyy", {})}
      </span>
      <div className="px-6 pt-6">
        <Search />
      </div>
      <div className="px-6 pt-14">
        <h2 className="text-bold uppercase text-gray-03">Agendamentos</h2>
        <div className="mt-4">
          <Schedules />
        </div>
      </div>
      <div className="px-6 pt-14">
        <h2 className="text-bold uppercase text-gray-03 pb-6">Recomendados</h2>
        <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
          ))}
        </div>
      </div>
      
    </div>
  );
}
