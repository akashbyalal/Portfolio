import TextType from "./reactbits/TextType/TextType";

function Type() {
  return (
    <a
      className="underline pointer-events-auto hover:text-blue-600 dark:hover:text-blue-400"
      href="#"
    >
      <TextType
        text={["Frontend Developer", "Backend Developer", "Web Designer"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
    </a>
  );
}

export default Type;
