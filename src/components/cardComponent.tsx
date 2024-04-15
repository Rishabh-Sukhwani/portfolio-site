import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  export default function CardComponent({ title, description, content, footer, url }) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="cursor-pointer">
          <Card>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{content}</p>
            </CardContent>
            <CardFooter>
              <p>{footer}</p>
            </CardFooter>
          </Card>
        </div>
      </a>
    );
  }