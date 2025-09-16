import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MessageSquare, ThumbsUp } from "lucide-react";
import { useState } from "react";

const FeedbackSection = () => {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex);
  };

  const handleStarHover = (starIndex: number) => {
    setHoveredStar(starIndex);
  };

  return (
    <section id="feedback" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Share Your <span className="text-nature">Feedback</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Help us improve the platform and create better learning experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Feedback Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-nature" />
                Submit Feedback
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Feedback Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select feedback type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bug">Bug Report</SelectItem>
                    <SelectItem value="feature">Feature Request</SelectItem>
                    <SelectItem value="content">Content Suggestion</SelectItem>
                    <SelectItem value="general">General Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Rating</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-6 w-6 cursor-pointer transition-colors ${
                        star <= (hoveredStar || rating)
                          ? 'fill-nature text-nature'
                          : 'text-muted-foreground hover:text-nature'
                      }`}
                      onClick={() => handleStarClick(star)}
                      onMouseEnter={() => handleStarHover(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Your Message</label>
                <Textarea 
                  placeholder="Tell us about your experience or suggestions..."
                  className="min-h-24"
                />
              </div>

              <Button variant="nature" className="w-full">
                Submit Feedback
              </Button>
            </CardContent>
          </Card>

          {/* Recent Feedback Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ThumbsUp className="h-5 w-5 mr-2 text-nature" />
                Community Feedback
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-nature mb-2">4.8/5</div>
                <div className="flex justify-center space-x-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-nature text-nature" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Based on 1,247 reviews</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Content Quality</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-3 w-3 fill-nature text-nature" />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">User Experience</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-3 w-3 fill-ocean text-ocean" />
                    ))}
                    <Star className="h-3 w-3 text-muted-foreground" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Learning Effectiveness</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-3 w-3 fill-nature text-nature" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground italic">
                  "The gamified approach makes learning about environmental issues so engaging!" 
                </p>
                <p className="text-xs text-muted-foreground mt-2">- Recent learner</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;