export default function ReplyForm() {
  return (
    <div className="border-2 border-blue-400 p-5 w-full max-w-4xl bg-white">
      <h2 className="text-4xl font-bold text-[#1F2937] mb-6">
        Leave a reply
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Your name"
          className="bg-[#F3F3F3] p-4 outline-none rounded-sm text-sm"
        />

        <input
          type="email"
          placeholder="Email address"
          className="bg-[#F3F3F3] p-4 outline-none rounded-sm text-sm"
        />
      </div>

      <input
        type="text"
        placeholder="Select website"
        className="w-full bg-[#F3F3F3] p-4 outline-none rounded-sm text-sm mb-4"
      />

      <textarea
        placeholder="Type your message"
        rows={8}
        className="w-full bg-[#F3F3F3] p-4 outline-none rounded-sm text-sm mb-5 resize-none"
      />

      <div className="flex items-center gap-2 mb-6">
        <input type="checkbox" className="w-4 h-4" />

        <p className="text-sm text-gray-600">
          Save my name, email, and website in this browser for the next
          time I comment.
        </p>
      </div>

      <button className="bg-[#8DA184] text-white px-8 py-3 rounded-md font-medium hover:opacity-90 transition">
        Message Here
      </button>
    </div>
  );
}