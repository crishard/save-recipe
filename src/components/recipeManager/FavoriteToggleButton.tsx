import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import React from "react";

interface FavoriteToggleButtonProps {
  showFavorites: boolean;
  onToggle: () => void;
}

const FavoriteToggleButton: React.FC<FavoriteToggleButtonProps> = ({
  showFavorites,
  onToggle,
}) => (
  <Button
    variant={showFavorites ? "secondary" : "outline"}
    size="lg"
    className="text-lg py-5 h-12"
    onClick={onToggle}
  >
    <Star className={`${showFavorites ? "text-yellow-400 fill-yellow-400" : ""}`} />
    {showFavorites ? "Todas" : "Favoritas"}
  </Button>
);

export default FavoriteToggleButton;