import { Separator } from "@radix-ui/react-separator";
import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";


export default function Home() {
  return (
 <div className="bg-background-black">
      <Header />
     <div className="divide-y divide-blue-200 pb-2"></div>
      <span className="text-primary-purple text-xl text-bold ml-6">Olá, </span><span className="text-white text-sm"> Faça seu Login!</span><p></p>
      <span className="text-white text-sm capitalize ml-6">{format(new Date(), "EEEE", {
        locale: ptBR,
      })},</span>
       <span className="text-white text-sm lowercase ml-2">{format(new Date(), "dd", {
        locale: ptBR,
       })} de</span>
        <span className="text-white text-sm capitalize ml-2">{format(new Date(), "MMMM", {
        locale: ptBR,
        })}</span>
       <span className="text-white text-sm capitalize ml-2">{format(new Date(), "yyyy", {
       })}</span>
      <div className="px-6 pt-6">
        <Search />
      </div>
    

 </div>
 
 

  );
}
