"use client"
import * as React from "react"
import Link from "next/link"
import  logo  from "@/imgs/atlus-logo.png";
import { cn } from "@/lib/utils"
import img1 from '@/imgs/carousel-img/download (1).jpeg'
import img2 from '@/imgs/carousel-img/download.jpeg'
import img3 from '@/imgs/carousel-img/mL7099_1024x1024.webp'
import img4 from '@/imgs/carousel-img/metaphor-refantazio-ps4-ps5-pc-steam-confirmed.png'
import img5 from '@/imgs/carousel-img/p3r_bg.jpg'
import img6 from '@/imgs/carousel-img/persona-3-reload-episode-aegis.jpg'
import img7 from '@/imgs/carousel-img/shin-megami-tensei-v-vengeance.webp'
import { useTheme } from "next-themes";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button";

const imgSet = [
  img1,img2,img3,img4,img5,img6,img7
]
export default function Home() {
  const {theme , setTheme} = useTheme()
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  )
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <main>
      <NavigationMenu className="">
        <Image priority src={logo} alt='logo' className="aspect-4/1 w-[90px]"/>
        <NavigationMenuList>
        <NavigationMenuItem>
          {theme == "dark"?<Button onClick={()=> setTheme('light')} variant={"outline"}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
</svg></Button>: <Button onClick={()=> setTheme('dark')} variant={"outline"}>
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun-low" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M4 12h.01" />
  <path d="M12 4v.01" />
  <path d="M20 12h.01" />
  <path d="M12 20v.01" />
  <path d="M6.31 6.31l-.01 -.01" />
  <path d="M17.71 6.31l-.01 -.01" />
  <path d="M17.7 17.7l.01 .01" />
  <path d="M6.3 17.7l.01 .01" />
</svg>
  </Button>}
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white`}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white">games</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-1 p-6 w-[435px] ">
                <li className="">
                  <NavigationMenuLink >
                  <p className="flex">
                    Upcoming  <svg xmlns="http://www.w3.org/2000/svg" className="icon w-6 h-6 " width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                      <path d="M16 12l-4 -4" />
                      <path d="M16 12h-8" />
                      <path d="M12 16l4 -4" />
                    </svg>
                  </p>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>
                  <p className="flex">
                    Available  <svg xmlns="http://www.w3.org/2000/svg" className="icon w-6 h-6 " width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                      <path d="M16 12l-4 -4" />
                      <path d="M16 12h-8" />
                      <path d="M12 16l4 -4" />
                    </svg>
                  </p>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>
                  <p className="flex">
                    Classic Titles  <svg xmlns="http://www.w3.org/2000/svg" className="icon w-6 h-6 " width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                      <path d="M16 12l-4 -4" />
                      <path d="M16 12h-8" />
                      <path d="M12 16l4 -4" />
                    </svg>
                  </p>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white">Contacts</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[435px]  gap-3 p-4   ">
               <li><p>support</p></li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/shop" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white`}>
                Shop
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/news" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white`}>
                News
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Carousel plugins={[plugin.current]}
      className="w-full max-w-[100vw]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset} opts={{
        align: "start",
        loop: true
      }} setApi={setApi} >
      <CarouselContent className="">
        {imgSet.map((url,ind)=>
          <CarouselItem className="w-full aspect-[4/1.8]">
            <Image className="bg-cover w-full h-full" key={ind} src={url} alt={`image ${ind}`}/>
          </CarouselItem>
        )}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2"/>
      <CarouselNext className="absolute top-1/2" />
      <p className="absolute w-24 rounded-2xl p-5 bg-slate-600 -translate-y-8 left-1/2 right-1/2 -translate-x-1/2">{current} of {count}</p>
      </Carousel>
      <div className="bg-slate-800 h-[2000px] w-full">

      </div>
      <footer className="w-full flex justify-between bg-slate-700 h-[200px]">
        <Image className="aspect-4/1" src={logo} alt={'logo'} />
        <div>
          
        </div>
      </footer>
    </main>
  )
}

