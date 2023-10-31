"use client";

import React, { useEffect } from "react";
import { PiShieldCheck } from "react-icons/pi";

function page() {


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[80%] relative ">
        <div className="relative space-y-5 overflow-hidden rounded-2xl  p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-rose-100/10 before:bg-gradient-to-r before:from-transparent before:via-rose-100/10 before:to-transparent">
          <div className="h-10 w-full rounded-md bg-gradient-to-tr from-neutral-700 to-neutral-900"></div>

          <div className="flex flex-col md:flex-row justify-between gap-x-6 ">
            <div>
              <div>
                <div className="h-56 rounded-md bg-gradient-to-b from-neutral-700 to-neutral-900  w-full "></div>
                <div className="h-3 w-96 mt-2 rounded-lg bg-neutral-100/10"></div>
                <div className="h-3 w-3/5 mt-2 rounded-lg bg-neutral-100/10"></div>
              </div>

              <div className=" my-3">
                <div className="h-56 rounded-md bg-gradient-to-b from-neutral-700 to-neutral-900  w-[800px] "></div>
                <div className="h-3 w-96 mt-2 rounded-lg bg-neutral-100/10"></div>
                <div className="h-3 w-3/5 mt-2 rounded-lg bg-neutral-100/10"></div>
              </div>
            </div>

            <div>
              <div className="h-32  rounded-md bg-gradient-to-b from-neutral-700  to-neutral-900  w-96 "></div>
              <div className="h-3 w-96 mt-2 rounded-lg bg-neutral-100/10"></div>
              <div className="h-3 w-3/5 mt-2 rounded-lg bg-neutral-100/10"></div>

              <div className="my-3">
                <div className="h-32   rounded-md bg-gradient-to-b from-neutral-700  to-neutral-900  w-96 "></div>
                <div className="h-3 w-96 mt-2 rounded-lg bg-neutral-100/10"></div>
                <div className="h-3 w-3/5 mt-2 rounded-lg bg-neutral-100/10"></div>
              </div>

              <div className="h-32  rounded-md bg-gradient-to-b from-neutral-700  to-neutral-900  w-96 "></div>
              <div className="h-3 w-96 mt-2 rounded-lg bg-neutral-100/10"></div>
              <div className="h-3 w-3/5 mt-2 rounded-lg bg-neutral-100/10"></div>
            </div>

            <div className="bg-black w-12 h-12 rounded-lg border-t flex items-center justify-center border-neutral-500 absolute right-9 bottom-2 ">
              <PiShieldCheck className="text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* <button className="inactive">
        <div className="icon"></div>
        <div className="text">
          Like<span>d</span>
        </div>
        <div className="numbers">
          <span>24</span>
          <span>25</span>
        </div>
      </button> */}
    </div>
  );
}

export default page;
