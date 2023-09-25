import Container from "@/components/ui/container";
import Skeleton from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="w-full h-full p-8">
        <Skeleton className="w-full h-[100px] rounded-xl my-4" />
        <div className="grid grid-cols-5 gap-x-4">
          <Skeleton className="h-[230px]" />
          <Skeleton className="h-[230px] col-span-2" />
          <Skeleton className="h-[230px] col-span-2" />
        </div>
      </div>
    </Container>
  );
};

export default Loading;
