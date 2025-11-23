function HeroTextBlock({ font = "light", color = "white", delay = "0s", children }) {
  const fonts = {
    light: "font-light",
    bold: "font-bold",
  };

  const colors = {
    white: "text-white",
    orange: "text-orange-400",
  };

  return (
    <>
      <span
        className={`opacity-0 [font-size:clamp(2rem,8vw,6rem)] ${fonts[font]} ${
          colors[color]
        } [animation:fadeIn_2s_ease-out_forwards] [animation-delay:${delay}]`}
      >
        {children}
      </span>
      <br />
    </>
  );
}

export default HeroTextBlock;
