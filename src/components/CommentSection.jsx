const comments = [
  {
    name: "Chinenye Joy",
    text: "This post was really helpful, thanks for sharing!",
  },
  {
    name: "Nenye Dev.",
    text: "I love how clear your explanations are.",
  },
  {
    name: "Devine Dev",
    text: "Please write more on JavaScript soon 🙌",
  },
];

const CommentSection = () => {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold text-black mb-4">Comments</h3>
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md p-4 bg-gray-50"
          >
            <p className="font-medium text-gray-800">{comment.name}</p>
            <p className="text-gray-600 mt-1">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
