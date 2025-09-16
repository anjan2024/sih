import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TreePine, Droplets, Recycle, Award } from "lucide-react";

const ImpactTracker = () => {
  const impactData = [
    {
      icon: TreePine,
      title: "Carbon Footprint Reduced",
      value: "2.5 tons",
      progress: 75,
      color: "text-nature"
    },
    {
      icon: Droplets,
      title: "Water Conservation Learned",
      value: "1,200 liters",
      progress: 60,
      color: "text-ocean"
    },
    {
      icon: Recycle,
      title: "Recycling Knowledge",
      value: "85% mastery",
      progress: 85,
      color: "text-earth"
    }
  ];

  return (
    <section id="impact" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Your <span className="text-nature">Environmental Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Track how your learning translates into real-world environmental benefits
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {impactData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto p-3 rounded-full bg-nature-light w-fit">
                    <IconComponent className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2 text-nature">{item.value}</div>
                  <Progress value={item.progress} className="h-2" />
                  <p className="text-sm text-muted-foreground mt-2">{item.progress}% complete</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-r from-nature-light to-ocean-light border-none">
          <CardContent className="p-8 text-center">
            <Award className="h-12 w-12 text-nature mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Eco Warrior Level 5</h3>
            <p className="text-muted-foreground mb-4">
              You're making a real difference! Keep learning to unlock more impact.
            </p>
            <div className="flex justify-center space-x-2">
              <Badge variant="secondary" className="bg-nature text-white">Tree Planter</Badge>
              <Badge variant="secondary" className="bg-ocean text-white">Water Guardian</Badge>
              <Badge variant="secondary" className="bg-earth text-white">Waste Reducer</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ImpactTracker;