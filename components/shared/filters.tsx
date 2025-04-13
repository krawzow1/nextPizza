import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { RangeSlider } from "../ui/range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("flex flex-col gap-5", className)}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold"/>

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="collect" />
                <FilterCheckbox text="Новинки" value="new" />
            </div>

            <div className="mt-5 border-y border-y-neutral-200 py-5">
                <Title text="Цена" size="sm" className="mb-5 font-bold"/>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="От" />
                    <Input type="number" placeholder="До" />
                </div>
                
               <RangeSlider min={0} max={5000} step={50} />
            </div>

            <CheckboxFiltersGroup 
                title="Ингредиенты"
                limit={6}
                className="mt-5"
                defaultItems={[
                    {
                        text: "Сырный соус",
                        value: "1"
                    },
                    {
                        text: "Моцарелла",
                        value: "2"
                    },
                    {
                        text: "Сырный соус",
                        value: "3"
                    },
                    {
                        text: "Сырный соус",
                        value: "4"
                    },
                    {
                        text: "Сырный соус",
                        value: "5"
                    }
                ]}
                items={[
                    {
                        text: "Сырный соус",
                        value: "1"
                    },
                    {
                        text: "Моцарелла",
                        value: "2"
                    },
                    {
                        text: "Сырный соус",
                        value: "3"
                    },
                    {
                        text: "Сырный соус",
                        value: "4"
                    },
                    {
                        text: "Сырный соус",
                        value: "5"
                    },
                    {
                        text: "Сырный соус",
                        value: "1"
                    },
                    {
                        text: "Моцарелла",
                        value: "2"
                    },
                    {
                        text: "Сырный соус",
                        value: "3"
                    },
                    {
                        text: "Сырный соус",
                        value: "4"
                    },
                    {
                        text: "Сырный соус",
                        value: "5"
                    },
                    {
                        text: "Сырный соус",
                        value: "1"
                    },
                    {
                        text: "Моцарелла",
                        value: "2"
                    },
                    {
                        text: "Сырный соус",
                        value: "3"
                    },
                    {
                        text: "Сырный соус",
                        value: "4"
                    },
                    {
                        text: "Сырный соус",
                        value: "5"
                    }
                ]}
            />



        </div>
    )
}
