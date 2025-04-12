import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("flex flex-col gap-5", className)}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold"/>

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" />
                <FilterCheckbox text="Новинки" />
            </div>
        </div>
    )
}
