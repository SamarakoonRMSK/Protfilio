
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const packages = [
  "react@18.3.1",
  "next@15.3.3",
  "tailwindcss@3.4.1",
  "framer-motion@11.3.19",
  "lucide-react@0.475.0",
  "shadcn-ui@latest",
  "genkit@1.14.1",
  "typescript@5"
];

const LoadingStep = ({ text, isCompleted }: { text: string, isCompleted: boolean }) => {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      {isCompleted ? (
        <CheckCircle className="h-4 w-4 text-green-500" />
      ) : (
        <Loader className="h-4 w-4 animate-spin" />
      )}
      <span>{text}</span>
    </div>
  );
};

export function AppLoader({ onFinished }: { onFinished: () => void }) {
  const [currentPackage, setCurrentPackage] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (currentPackage < packages.length) {
      const timeout = setTimeout(() => {
        setCurrentPackage(currentPackage + 1);
      }, 350); // Time per package
      return () => clearTimeout(timeout);
    } else {
      const finishTimeout = setTimeout(() => {
        setCompleted(true);
        onFinished();
      }, 500);
      return () => clearTimeout(finishTimeout);
    }
  }, [currentPackage, onFinished]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      >
        <div className="w-full max-w-md p-8 font-mono">
          <div className="flex items-center gap-2 text-lg font-bold text-foreground">
            <span className="text-primary">&gt;</span>
            <span>./initialize-portfolio.sh</span>
          </div>
          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            <p>$ npm install</p>
            <div className="pl-4">
              {packages.slice(0, currentPackage).map((pkg) => (
                <LoadingStep key={pkg} text={`Installed ${pkg}`} isCompleted={true} />
              ))}
              {currentPackage < packages.length && (
                <LoadingStep text={`Installing ${packages[currentPackage]}...`} isCompleted={false} />
              )}
            </div>
            {currentPackage === packages.length && (
              <>
                 <p className="mt-4 text-green-400">$ All packages installed successfully!</p>
                 <p className="text-green-400">$ Launching application...</p>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
