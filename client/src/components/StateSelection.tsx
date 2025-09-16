import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Leaf, Droplets, Mountain } from "lucide-react";

const indianStates = [
  { 
    name: "Kerala", 
    region: "South", 
    challenges: 8, 
    difficulty: "Medium",
    icon: Leaf,
    specialty: "Backwaters & Biodiversity"
  },
  { 
    name: "Rajasthan", 
    region: "West", 
    challenges: 12, 
    difficulty: "Hard",
    icon: Mountain,
    specialty: "Desert Conservation"
  },
  { 
    name: "Himachal Pradesh", 
    region: "North", 
    challenges: 15, 
    difficulty: "Hard",
    icon: Mountain,
    specialty: "Mountain Ecosystems"
  },
  { 
    name: "West Bengal", 
    region: "East", 
    challenges: 10, 
    difficulty: "Medium",
    icon: Droplets,
    specialty: "Wetlands & Mangroves"
  },
  { 
    name: "Gujarat", 
    region: "West", 
    challenges: 9, 
    difficulty: "Medium",
    icon: Leaf,
    specialty: "Coastal & Marine Life"
  },
  { 
    name: "Tamil Nadu", 
    region: "South", 
    challenges: 11, 
    difficulty: "Medium",
    icon: Droplets,
    specialty: "Water Conservation"
  }
];

const StateSelection = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-nature text-white";
      case "Medium": return "bg-ocean text-white";
      case "Hard": return "bg-earth text-white";
      default: return "bg-muted";
    }
  };

  return (
    <section id="states" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Explore India's <span className="text-nature">Ecosystems</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose a state to begin your environmental learning journey and discover unique challenges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {indianStates.map((state, index) => {
            const IconComponent = state.icon;
            return (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-[var(--shadow-nature)] transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-nature"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-nature-light">
                        <IconComponent className="h-6 w-6 text-nature" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{state.name}</h3>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {state.region} India
                        </p>
                      </div>
                    </div>
                    <Badge className={getDifficultyColor(state.difficulty)}>
                      {state.difficulty}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{state.specialty}</p>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-nature font-medium">
                      {state.challenges} Challenges
                    </span>
                    <span className="text-muted-foreground">Click to start</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StateSelection;