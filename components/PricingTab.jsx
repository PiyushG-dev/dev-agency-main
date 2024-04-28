import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export function TabsDemo() {
  return (
    <Tabs defaultValue="startup" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="startup">Startup</TabsTrigger>
        <TabsTrigger value="pro">Pro</TabsTrigger>
      </TabsList>
      <TabsContent value="startup">
        <Card>
          <CardHeader>
            <CardTitle>$4999/month</CardTitle>
            <CardDescription>
              Perfect for smaller teams and startups
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>One request at a time</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>1-2 day revisons</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Weekly sync calls</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Private Slack channel</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>10 day notice before cancel</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="lg">Book a 15-min call</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="pro">
        <Card>
          <CardHeader>
            <CardTitle>$6999/month</CardTitle>
            <CardDescription>
              Perfect for larger teams & enterprises
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Multiple request at a time</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Priority support & delivery</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Weekly sync calls</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Private Slack channel</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Pause or cancel anytime</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="lg">Book a 15-min call</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
