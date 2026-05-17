import { posts } from "@/app/data";
export default function ServiceList() {
  return (
    <div className="p-10 bg-[#F4F5F6] rounded-2xl">
      <h3>Service List</h3>
      {posts.map((post, index) => {
        return (
          <div
            key={index}
            className=" py-2 rounded-md flex gap-6 w-[18rem] bg-white p-3 m-4 cursor-pointer justify-between"
          >
            <p>{post.name}</p>
            <p>(0{post.number})</p>
          </div>
        );
      })}
    </div>
  );
}
