import { cn } from "@/lib/utils";
import React from "react";
import { ArrowUpDown, ArrowUpDownIcon } from "lucide-react";
import { Popover } from "@radix-ui/react-popover";

interface Props {
    className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
    return (
          <div
            className={cn(
              'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
              className,
            )}>
            <ArrowUpDown className="w-4 h-4" />
            <b>Сортировка:</b>
  
            <b className="text-primary">популярное</b>
          </div>
    )
}
