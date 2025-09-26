"use client";
import React from "react";

export default function PageContent({ currentPage }: { currentPage: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 md:p-16">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 animate-fade-in">
        Sales Pro Sample
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl animate-fade-in-2">
        Content for the {currentPage.replace("-", " ")} page goes here.
      </p>
    </div>
  );
}
