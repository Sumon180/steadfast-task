"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import Rating from "./Rating";

export default function RatingSummery() {
  const RatingDistribution = () => {
    return (
      <>
        <div className="flex flex-wrap items-center gap-1 cursor-help">
          <Rating />
          <span className="text-lg font-semibold">4.0 out of 5</span>
        </div>
        <div className="text-lg ">12 ratings</div>
        <div className="space-y-3">
          <div className="grid grid-cols-[50px_1fr_30px] gap-2 items-center">
            <div className="text-sm">5 star</div>
            <Progress value={20} className="h-4" />
            <div className="text-sm text-right">20%</div>
          </div>
          <div className="grid grid-cols-[50px_1fr_30px] gap-2 items-center">
            <div className="text-sm">4 star</div>
            <Progress value={40} className="h-4" />
            <div className="text-sm text-right">40%</div>
          </div>
          <div className="grid grid-cols-[50px_1fr_30px] gap-2 items-center">
            <div className="text-sm">3 star</div>
            <Progress value={15} className="h-4" />
            <div className="text-sm text-right">50%</div>
          </div>
          <div className="grid grid-cols-[50px_1fr_30px] gap-2 items-center">
            <div className="text-sm">2 star</div>
            <Progress value={0} className="h-4" />
            <div className="text-sm text-right">0%</div>
          </div>
          <div className="grid grid-cols-[50px_1fr_30px] gap-2 items-center">
            <div className="text-sm">1 star</div>
            <Progress value={10} className="h-4" />
            <div className="text-sm text-right">10%</div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="mt-3">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="hover:bg-!none !p-0">
            <span className="text-gray-600">4.0</span>
            <Rating />
            <span className="text-gray-600">2,254</span>
            <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4" align="end">
          <div className="flex flex-col gap-2">
            <RatingDistribution />
            <Separator />
            <Link
              className="highlight-link text-center hover:underline"
              href="#reviews"
            >
              See customer reviews
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
