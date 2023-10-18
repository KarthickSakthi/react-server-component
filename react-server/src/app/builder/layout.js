
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export  default function  AppLayout({children}){
    return (
        <div>
        <nav className="">
            <h2></h2>
            <Input/>
            <div>
            <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
            </div>
        </nav>
        {children}
        </div>
    )
}