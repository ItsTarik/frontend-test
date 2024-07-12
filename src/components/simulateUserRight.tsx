"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Checkbox } from "@/components/system/checkbox";
import { SubmitButton } from "@/components/system/submitButton";
import { updateUser } from "@/app/action";
import { SubscriptionRight } from "@/dto/newsletter";
import { UserDto } from "@/dto/user";

export function SimulateUserRight({ user }: { user: UserDto }) {
  const [open, setIsOpen] = useState(false);

  return (
    <div className="absolute md:-top-4 -top-2 left-2">
      <div className="relative inline-flex">
        <img
          width={50}
          height={50}
          alt="avatar"
          src="/assets/svg/avatar-thinking.svg"
          className="rounded-full flex justify-center items-center hover:cursor-pointer"
          onClick={() => setIsOpen((v) => !v)}
        ></img>

        <div
          className={twMerge(
            "transition-[opacity,margin] duration opacity-100 bg-slate-200 shadow-md rounded-lg p-2 mt-2 ml-1 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full",
            !open && "opacity-0 invisible ml-0 mt-0"
          )}
          aria-labelledby="hs-dropdown-default"
        >
          <form action={updateUser}>
            <div className="flex flex-col">
              {[SubscriptionRight.RIGHT_1, SubscriptionRight.RIGHT_2].map(
                (right) => {
                  return (
                    <Checkbox
                      key={right}
                      checked={user.subscriptions.includes(right)}
                      label={right}
                    />
                  );
                }
              )}
            </div>
            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  );
}
