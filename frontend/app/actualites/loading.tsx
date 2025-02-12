import { Loader2 } from "lucide-react";

export default function ActualitesLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-950 space-y-4">
      <Loader2 className="h-12 w-12 animate-spin text-neutral-200" />
      <p className="text-lg text-neutral-400 animate-pulse">
        Chargement des actualités...
      </p>
    </div>
  );
}
