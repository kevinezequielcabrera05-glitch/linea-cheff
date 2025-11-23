import HeroTextBlock from "../molecules/HeroTextBlock";

function HeroSection() {
  return (
    <section
      id="hero"
      style={{
         backgroundImage: `url("../../../public/images/bg-hero.jpg")`
       }}
      className={`relative w-full h-dvh bg-cover bg-center min-h-screen bg-no-repeat flex justify-center items-center snap-start`}
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-0 bg-[radial-gradient(circle,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_70%)] blur-3xl [animation:scale-up-bottom_2s_ease-out_forwards] [animation-delay:0.6s]"></span>

      <div className="flex leading-none z-20">
        <h1 className="text-center">
          <HeroTextBlock font="light" color="white" delay="0s">
            Fabricamos
          </HeroTextBlock>
          <HeroTextBlock font="bold" color="orange" delay="0.3s">
            Grandes
          </HeroTextBlock>
          <HeroTextBlock font="bold" color="orange" delay="0.6s">
            Sueños
          </HeroTextBlock>
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
