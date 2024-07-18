import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from 'next/image';

const Header = () => {
  return (
    <Card>
      <CardContent className="py-8 px-5 justify-between flex flex-row items-center">
        <Image src="/Logo2.png" alt="FSW Barber" height={22} width={120} />
        <Button variant="outline" size='icon'>
          <MenuIcon className="text-white" size={18} />
        </Button>
      </CardContent>
    </Card>
  )
}
export default Header;