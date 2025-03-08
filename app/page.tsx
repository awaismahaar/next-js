import { prisma } from "./utils/db";

async function getData() {
  const data = await prisma.blogPost.findMany({
    select : {
      title: true,
      content : true,
      id : true,
    }
  })
  return data;
}
type Post = {
  id: string;
  title: string;
};

export default async function Home() {
  const data = await getData()
  return (
    <div className="py-6">
      <h1 className="text-2xl md:text-5xl tracking-tight font-bold">Latest Posts</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.map((item:Post)=>(
        <div key={item?.id}>
          <p>{item?.title}</p>
        </div>
      ))}
     </div>
    </div>
  );
}
