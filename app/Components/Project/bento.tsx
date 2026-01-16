import cn from "@/app/utils/utils";
import { Brain, Native, Note } from "./svgs";
import Chats from "./Chats";

export default function Bento() {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 rounded-lg p-px bg-white">
      <Card classname="md:border-r border-neutral-300">
        <CardHeader>
          <Brain /> LLM Model Selector
        </CardHeader>
        <CardBody>
          Track real-time activity of agents with detailed records of triggers,
          tools used, outcomes, and timestamps.
        </CardBody>
        <CardSkeleton>
          <></>
        </CardSkeleton>
      </Card>

      <Card>
        <CardHeader>
          <Note /> Text to workflow builder
        </CardHeader>
        <CardBody>
          Preview and debug workflow logic in a safe sandbox before deploying,
          helping you iterate with confidence.
        </CardBody>
        <CardSkeleton>
          <Chats/>
        </CardSkeleton>
      </Card>

      <Card classname=" md:col-span-2 border-t border-neutral-300 ">
        <CardHeader>
          <Native />
          Native Tools Integration
        </CardHeader>
        <CardBody>
          Track real-time activity of agents with detailed records of triggers,
          tools used, outcomes, and timestamps.
        </CardBody>
        <CardSkeleton>
          <></>
        </CardSkeleton>
      </Card>
    </div>
  );
}

export function Card({
  classname,
  children,
}: {
  classname?: string;
  children: React.ReactNode;
}) {
  return <div className={cn(" p-2  ", classname)}>{children}</div>;
}

export function CardHeader({
  className,
  children,
}: {
  className?: String;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex items-center text-sm text-neutral-800 font-medium",
        className
      )}
    >
      {children}
    </div>
  );
}
export function CardBody({
  className,
  children,
}: {
  className?: String;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("text-xs text-neutral-600 font-medium pt-5", className)}>
      {children}
    </div>
  );
}
export function CardSkeleton({
  className,
  children,
}: {
  className?: String;
  children: React.ReactNode;
}) {
  return (
    <div
    // style={{
    //   backgroundImage : 'radial-gradient(oklch(86.9% 0.005 56.366) 1px,transparent 1px)',
    //   backgroundSize : "10px 10px"
    // }}
      className={cn(
        "mx-auto my-2 bg-neutral-50  mask-radial-from-82% rounded-md  text-neutral-800 h-40 text-sm ",
        className
      )}
    >
      {children}
    </div>
  );
}
