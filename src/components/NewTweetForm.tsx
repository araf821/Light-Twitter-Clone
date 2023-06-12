import { useSession } from "next-auth/react";
import Button from "./Button";
import ProfileImage from "./ProfileImage";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

function updateTextareaSize(textarea?: HTMLTextAreaElement) {
  if (!textarea) {
    return;
  }

  textarea.style.height = "0";
  textarea.style.height = `${textarea.scrollHeight}px`;
}

const NewTweetForm = ({}) => {
  const session = useSession();
  if (session.status !== "authenticated") return null;

  return <Form />;
};

function Form() {
  const session = useSession();
  const [inputValue, setInputValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>();
  const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
    updateTextareaSize(textArea);
    textAreaRef.current = textArea;
  }, []);

  useLayoutEffect(() => {
    updateTextareaSize(textAreaRef.current);
  }, []);

  if (session.status !== "authenticated") return null;

  return (
    <form className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        <ProfileImage src={session.data.user.image} />
        <textarea
          ref={inputRef}
          className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
          style={{ height: 0 }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What's Happening?"
          name=""
          id=""
        ></textarea>
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
}

export default NewTweetForm;
