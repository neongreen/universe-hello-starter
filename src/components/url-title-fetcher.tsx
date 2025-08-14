import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Globe } from "lucide-react";

export const UrlTitleFetcher = () => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const fetchTitle = async () => {
    if (!url.trim()) {
      toast({
        title: "Error",
        description: "Please enter a URL",
        variant: "destructive",
      });
      return;
    }

    // Basic URL validation
    try {
      new URL(url);
    } catch {
      toast({
        title: "Error", 
        description: "Please enter a valid URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setTitle("");

    try {
      const { data, error } = await supabase.functions.invoke('fetch-url-title', {
        body: { url }
      });

      if (error) {
        throw error;
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      setTitle(data.title);
      toast({
        title: "Success",
        description: "Title fetched successfully",
      });
    } catch (error) {
      console.error('Error fetching title:', error);
      toast({
        title: "Error",
        description: "Failed to fetch page title",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchTitle();
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-6 backdrop-blur-sm bg-background/80 border border-border/50">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-foreground">
          <Globe className="h-5 w-5" />
          <h3 className="text-lg font-semibold">URL Title Fetcher</h3>
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter a URL (e.g., https://example.com)"
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading || !url.trim()}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Fetch Title"
            )}
          </Button>
        </form>

        {title && (
          <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border/30">
            <h4 className="font-medium text-sm text-muted-foreground mb-2">Page Title:</h4>
            <p className="text-foreground">{title}</p>
          </div>
        )}
      </div>
    </Card>
  );
};