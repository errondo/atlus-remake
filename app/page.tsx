"use client"
import * as React from "react"
import Link from "next/link"
import  logo  from "@/imgs/atlus-log.png";
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
import { Dock, DockIcon } from "@/components/magicui/dock";

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
      <NavigationMenu className="border-b-[2px] border-s-slate-50 ">
        <Image priority src={logo} alt='logo' className="aspect-4/1 h-auto w-[90px]"/>
        <NavigationMenuList>
        <NavigationMenuItem key='1'>
          {theme === "dark"?<Button onClick={()=> setTheme('light')} variant={"outline"}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
</svg></Button>: <Button onClick={()=> setTheme('dark')} variant={"outline"}>
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun-low" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
        <NavigationMenuItem key='2'>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white`}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem key='3'>
            <NavigationMenuTrigger className="text-white">games</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-1 p-6 w-[435px] ">
                <li key={'1'} className="">
                  <NavigationMenuLink >
                  <p className="flex">
                    Upcoming  <svg xmlns="http://www.w3.org/2000/svg" className="icon stroke-black dark:stroke-white w-6 h-6 " width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                      <path d="M16 12l-4 -4" />
                      <path d="M16 12h-8" />
                      <path d="M12 16l4 -4" />
                    </svg>
                  </p>
                  </NavigationMenuLink>
                </li>
                <li key={'2'}>
                  <NavigationMenuLink>
                  <p className="flex">
                    Available  <svg xmlns="http://www.w3.org/2000/svg" className="icon stroke-black dark:stroke-white w-6 h-6 " width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                      <path d="M16 12l-4 -4" />
                      <path d="M16 12h-8" />
                      <path d="M12 16l4 -4" />
                    </svg>
                  </p>
                  </NavigationMenuLink>
                </li>
                <li key={'3'}>
                  <NavigationMenuLink>
                  <p className="flex">
                    Classic Titles  <svg xmlns="http://www.w3.org/2000/svg" className="icon w-6 stroke-black dark:stroke-white h-6 " width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
          <NavigationMenuItem key='4'>
            <NavigationMenuTrigger className="text-white">Contacts</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[435px]  gap-3 p-4   ">
               <li>support</li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem  key='5'>
            <Link href="/shop" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white`}>
                Shop
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem key='6'>
            <Link href="/news" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white`}>
                News<span className="relative -translate-y-2 flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>
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
          <CarouselItem id={`${url}`} key={ind} className="w-full aspect-[4/1.8]">
            <div className="absolute top-0 w-full h-full bg-gradient-to-t from-5% from-black to-90% to-transparent">
              <div className="absolute p-14 w-[50%] bottom-0">
                <h1 className="pl-10 text-4xl font-bold">THE TITLE OF GAME</h1>
                <p className="line-clamp-2 leading-tight">the game has a description that most likely no body would read so here i am writing some nonsence to be followed by lorem ipsum ,TAKE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar mollis faucibus. Sed commodo lacus quis lacus ullamcorper varius. Mauris vel mollis enim, nec consectetur nulla. Phasellus tempor dui non dolor consectetur malesuada. Curabitur quis posuere enim. Aenean venenatis quam ut sapien luctus consectetur. Nunc lobortis, odio id lacinia accumsan, orci felis fermentum erat, quis fringilla sem orci non massa. Vivamus sed mollis lorem. Donec accumsan convallis lacinia. Vivamus venenatis massa non massa ullamcorper, ut mollis elit posuere.</p>
                <Button className="m-3" variant={"outline"}>Read more..</Button>
              </div>
            </div>
            <Image className="bg-cover  w-full h-full" key={ind} src={url} alt={`image ${ind}`}/>
            
          </CarouselItem>
        )}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2"/>
      <CarouselNext className="absolute top-1/2" />
      <p className="absolute w-24 rounded-2xl p-5 bg-slate-300 dark:bg-slate-600 -translate-y-8 left-1/2 right-1/2 -translate-x-1/2">{current} of {count}</p>
      </Carousel>
      <section className="dark:bg-slate-800 bg-slate-400 py-16 w-full">
         <div className="flex my-0 mx-auto items-center justify-center">
           <div className="flex my-20 p-14 flex-wrap items-center justify-evenly gap-10">
             {Array.from({length:11}).map((_,ind)=>
                     <div className="" key={ind} id={`${ind}`}>
                     <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler bg-slate-950 icon-tabler-brand-apple-arcade" width="200" height="200" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
               <path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
               <path d="M20 12.5v4.75a.734 .734 0 0 1 -.055 .325a.704 .704 0 0 1 -.348 .366l-5.462 2.58a5 5 0 0 1 -4.27 0l-5.462 -2.58a.705 .705 0 0 1 -.401 -.691l0 -4.75" />
               <path d="M4.431 12.216l5.634 -2.332a5.065 5.065 0 0 1 3.87 0l5.634 2.332a.692 .692 0 0 1 .028 1.269l-5.462 2.543a5.064 5.064 0 0 1 -4.27 0l-5.462 -2.543a.691 .691 0 0 1 .028 -1.27z" />
               <path d="M12 7l0 6" />
             </svg>
             <div className=" -translate-y-10 p-3 bg-gradient-to-t from-white to-transparent from-85% dark:from-black dark:to-transparent dark:from-85% dark:bg-gradient-to-t">
              <h3 className="text-center font-bold font-sans">game title</h3>
              <p>decription</p>
              <span className="flex pt-2">4.5<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler translate-y-1 icon-tabler-star-filled" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffec00" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" strokeWidth="0" fill="currentColor" />
</svg></span><p className="text-right text-orange-400 -translate-y-5">9.99$</p> 

             </div>
                     </div>
                     )}
           </div>
           <div>

           </div>
         </div>
      </section>
      <footer className="w-full flex justify-evenly items-center bg-slate-500 dark:bg-slate-700 h-[200px]">
        <Image className="aspect-auto w-[200px]" src={logo} alt={'logo'} />
        <div>
          <h2 className="text-center mt-5">join our news letter</h2>
          <Dock direction="middle">
          <DockIcon>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
</svg>
          </DockIcon>
          <DockIcon>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M16.5 7.5l0 .01" />
</svg>
          </DockIcon>
          <DockIcon>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitch" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c.266 0 .52 -.105 .707 -.293l2.415 -2.414c.187 -.188 .293 -.442 .293 -.708v-8.585a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1z" />
  <path d="M16 8l0 4" />
  <path d="M12 8l0 4" />
</svg>
          </DockIcon>
          <DockIcon>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
</svg>
          </DockIcon>
          <DockIcon>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
  <path d="M10 9l5 3l-5 3z" />
</svg>
          </DockIcon>
          </Dock>
        </div>
        <div>
        <h3>Company</h3>
        <h4>careers</h4>
        </div>
      </footer>
    </main>
  )
}

