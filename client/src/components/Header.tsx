import { Button } from "@/components/ui/button";
import { LogIn, UserPlus, Leaf } from "lucide-react";

const Header = () => {
  const handleLogin = () => {
    // Login functionality will be implemented with Supabase integration
    console.log("Login clicked");
  };

  const handleSignup = () => {
    // Signup functionality will be implemented with Supabase integration
    console.log("Signup clicked");
  };

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-nature" />
          <span className="text-xl font-bold bg-gradient-to-r from-nature to-ocean bg-clip-text text-transparent">
            EcoLearn India
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#states" className="text-muted-foreground hover:text-nature transition-colors">
            Explore States
          </a>
          <a href="#challenges" className="text-muted-foreground hover:text-nature transition-colors">
            Challenges
          </a>
          <a href="#impact" className="text-muted-foreground hover:text-nature transition-colors">
            My Impact
          </a>
          <a href="#feedback" className="text-muted-foreground hover:text-nature transition-colors">
            Feedback
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" onClick={handleLogin} className="hover:bg-nature-light">
            <LogIn className="h-4 w-4 mr-2" />
            Login
          </Button>
          <Button variant="nature" onClick={handleSignup}>
            <UserPlus className="h-4 w-4 mr-2" />
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;