import { cn } from "@/lib/utils";
import React from "react";
import { ArrowUpDownIcon } from "lucide-react";

interface Props {
    className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer", className)}>
            <ArrowUpDownIcon className="w-4 h-4"/>
            <button className="text-sm">Сортировка</button>
        </div>
    )
}
