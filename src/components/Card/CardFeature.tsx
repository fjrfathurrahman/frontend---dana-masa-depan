import { Card, CardBody, CardHeader } from "@heroui/card";

const CardFeature: React.FC<{
  title: string;
  desc: string;
  icon: React.ReactNode;
}> = (props) => {
  return (
    <Card isPressable className="rounded-xl bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <CardHeader className="flex cursor-pointer flex-col  items-start justify-start gap-4">
        <div className="w-max rounded-full bg-orange-500 p-4 text-white">
          {props.icon}
        </div>
        <h4 className="h4">{props.title}</h4>
      </CardHeader>
      <CardBody>
        <p>{props.desc}</p>
      </CardBody>
    </Card>
  );
};

export default CardFeature;
