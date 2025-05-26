import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl text-center space-y-6">
        <div className="flex justify-center">
          <AlertCircle className="w-16 h-16 text-red-500" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold ">
          Page Not Found
        </h1>
        <p className="text-lg ">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <Button className="text-sm px-6 py-3">
            Back to Home
          </Button>
        </Link>
      </div>
    </section>
  );
}
