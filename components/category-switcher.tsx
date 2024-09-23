"use client";

import { useState } from "react";

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
import { useCategoryModal } from "@/hooks/use-category-modal";
import { Button } from "@/components/ui/button";

interface routeProps {
  href: string;
  label: string;
  active: boolean;
}

interface CategorySwircherProps extends PopoverTriggerProps {
  items: routeProps[];
}

export default function CategorySwitcher({
  className,
  items = [],
}: CategorySwircherProps) {
  const { isOpen, onClose, onOpen } = useCategoryModal();
  const [open, setOpen] = useState<boolean>(false);
  const params = useParams();
  const router = useRouter();

  const formattedItems = items.map((item) => ({
    label: item.label,
    value: item.href,
  }));

  const currentCategory = formattedItems.find(
    (item) => item.value === params.routeId
  );

  const onCategorySelect = (route: { value: string; label: string }) => {
    setOpen(false);
    router.push(`${route.value}`);
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
            <CommandGroup heading="Categorys">
              {formattedItems.map((route) => (
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
          </CommandList>
          <CommandSeparator />
        </Command>
      </PopoverContent>
    </Popover>
  );
}
