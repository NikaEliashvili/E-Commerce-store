"use client";

import { useMemo, useState } from "react";

import { useParams, useRouter } from "next/navigation";
import { PopoverTrigger, PopoverTriggerProps } from "@radix-ui/react-popover";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  Check,
  ChevronsUpDown,
  PlusCircle,
  Filter as Filter,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

interface routeProps {
  routeId: string;
  href: string;
  label: string;
  active: boolean;
  storeName?: string;
  storeId?: string;
}

interface CategorySwircherProps extends PopoverTriggerProps {
  items: routeProps[];
}

export default function CategorySwitcher({
  className,
  items = [],
}: CategorySwircherProps) {
  const [open, setOpen] = useState<boolean>(false);
  const params = useParams();
  const router = useRouter();

  const filteredCategories = items.filter(
    (item) => item.storeId === params.storeId
  );

  const formattedItems = useMemo(
    () =>
      filteredCategories.map((item) => ({
        label: item.label,
        value: item.href,
        id: item.routeId,
      })),
    [items]
  );

  const currentCategory = useMemo(
    () => formattedItems.find((item) => item.id === params.categoryId),
    [formattedItems, params.categoryId]
  );

  const onCategorySelect = (route: { value: string; label: string }) => {
    setOpen(false);
    router.push(`${route.value}`);
  };

  const clearCategory = () => {
    setOpen(false);
    router.push(`/store/${params.storeId}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-label="Select a Category"
          className={cn("w-[200px] justify-between", className)}
        >
          <Filter className="mr-2 h-4 w-4" />
          {currentCategory?.label || "Choose Category"}
          <ChevronsUpDown className="ml-auto shrink-0 opacity-50 size-4 " />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 relative">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search a route..." />
            <CommandEmpty>No Category Found.</CommandEmpty>

            <CommandGroup heading="Categories">
              {formattedItems?.map((route) => (
                <CommandItem
                  key={route.value}
                  onSelect={() => onCategorySelect(route)}
                  className="text-sm cursor-pointer"
                >
                  <Filter className="mr-2 size-4" />
                  {route.label}
                  <Check
                    className={cn(
                      "ml-auto size-4",
                      currentCategory?.value === route.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
            {currentCategory && (
              <CommandItem onSelect={clearCategory}>
                <Button className="ml-auto" variant="outline">
                  Clear
                </Button>
              </CommandItem>
            )}
          </CommandList>
          <CommandSeparator />
        </Command>
      </PopoverContent>
    </Popover>
  );
}
