import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { ArrowRight, ShoppingCart, User } from "lucide-react";
interface Props {
    className?: string; 
}

const Header: React.FC<Props> = ({ className }) => {
    return (
      <header className={cn("border border-b", className)}>
        <Container className="flex items-center justify-between py-8">
            {/* Левая часть */}
            <div className="flex items-center gap-x-4">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={35} height={35} />
                </Link>
                <div>
                    <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                    <p className="text-sm text-gray-500 leading-3">Самая вкусная пицца в городе</p>
                </div>
            </div>
            {/* Правая часть */}
            <div className="flex items-center gap-3">
                <Button variant="outline"
                    className="flex items-center gap-1">
                    <User size={16}/>
                        Войти
                </Button>
                <Button className="group relative">
                    <b>520 Р</b>
                    <span className="h-full w-[1px] bg-white/30 mx-3"/>
                    <div className="flex items-center gap-1 transition-all duration-300 group-hover:text-primary group-hover:opacity-0">
                        <ShoppingCart className="w-4 h-4 relative" strokeWidth={2}/>
                            <b>3</b>
                    </div>
                    <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                </Button>
            </div>
        </Container>

      </header> 
    )
}

export default Header;