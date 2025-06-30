import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { Category } from "@/types";

export default function Sidebar({
  categories,
}: {
  categories: Category[] | null;
}) {
  if (!categories) return <p>Failed to load categories.</p>;

  console.log(categories);

  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <div className="flex items-center gap-2 mr-5">
          <MenuIcon className="text-primary" />
          <span>Category</span>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <div className="overflow-y-auto p-3">
          {!categories ? (
            <p>Failed to load categories.</p>
          ) : (
            <ul>
              {categories.map((category) => (
                <li key={category.id} className="text-xl font-bold mb-2">
                  {category.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
