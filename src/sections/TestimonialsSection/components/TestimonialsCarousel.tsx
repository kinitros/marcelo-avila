import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";

export const TestimonialsCarousel = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent text-left w-full">
          <div className="text-black text-sm box-border caret-transparent leading-[19.6px] mt-[5px] mb-[15px] font-trustindex_poppins">
            <div className="relative box-border caret-transparent">
              <div className="absolute box-border caret-transparent hidden h-0 mt-[-15px] w-full z-[1] top-0 md:block">
                <div
                  aria-label="Próxima avaliação"
                  role="button"
                  className="absolute bg-blue-700 box-border caret-transparent h-[30px] outline-zinc-300 outline outline-1 transform-none w-[30px] border border-blue-700 p-[18px] rounded-[100px] border-solid right-0 top-0 md:translate-y-[-58px] before:accent-auto before:box-border before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-2.5 before:tracking-[normal] before:leading-[19.6px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-left before:no-underline before:indent-[0px] before:normal-case before:transform-none before:visible before:w-2.5 before:border-l-2 before:border-b-2 before:border-separate before:border-solid before:border-white before:left-2/4 before:top-2/4 before:font-trustindex_poppins before:md:translate-x-[-7px] before:md:translate-y-[-5px] before:md:rotate-[-135deg]"
                ></div>
                <div
                  aria-label="Avaliação anterior"
                  role="button"
                  className="absolute bg-blue-700 box-border caret-transparent h-[30px] outline-zinc-300 outline outline-1 transform-none w-[30px] border border-blue-700 p-[18px] rounded-[100px] border-solid right-0 top-0 md:translate-x-[-54px] md:translate-y-[-58px] before:accent-auto before:box-border before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-2.5 before:tracking-[normal] before:leading-[19.6px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-left before:no-underline before:indent-[0px] before:normal-case before:transform-none before:visible before:w-2.5 before:border-l-2 before:border-b-2 before:border-separate before:border-solid before:border-white before:left-2/4 before:top-2/4 before:font-trustindex_poppins before:md:translate-x-[-3px] before:md:translate-y-[-5px] before:md:rotate-45"
                ></div>
              </div>
              <div className="box-border caret-transparent flex overflow-hidden -mx-2 py-3 md:mx-2">
                <TestimonialCard
                  platformIconUrl="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                  profileImageUrl="https://lh3.googleusercontent.com/a/ACg8ocI_-jCOPjhKUUijbdD931_9PNjufk_lQ0wKYdOj5SZ1t_W2UA=w40-h40-c-rp-mo-br100"
                  profileImageAlt="Ariene profile picture"
                  authorName="Ariene"
                  timeAgo="4 meses atrás"
                  starIconUrl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                  starCount={5}
                  testimonialText="Ótimo atendimento"
                />
                <TestimonialCard
                  platformIconUrl="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                  profileImageUrl="https://lh3.googleusercontent.com/a/ACg8ocKxbmVfcnfbO2ibHh3ADT0bpm4PWBaggaigTkyCGj1v1z0hfg=w40-h40-c-rp-mo-br100"
                  profileImageAlt="Luciana Leal profile picture"
                  authorName="Luciana Leal"
                  timeAgo="4 meses atrás"
                  starIconUrl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                  starCount={5}
                  testimonialText="Empresa séria que preza pela qualidade e assertividade nos atendimentos dos clientes."
                />
                <TestimonialCard
                  platformIconUrl="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                  profileImageUrl="https://lh3.googleusercontent.com/a-/ALV-UjXIpMkKLqG5BvEvNPxzWpUtqs4iGSmBhjnApiQ3O8RKLxYnCFik5g=w40-h40-c-rp-mo-ba3-br100"
                  profileImageAlt="Juliana Becker profile picture"
                  authorName="Juliana Becker"
                  timeAgo="4 meses atrás"
                  starIconUrl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                  starCount={5}
                  testimonialText="A melhor experiência para o cliente. Ávila Nascimento solucionando uma das principais questões jurídicas com dedicação e competência. Resultado excelente."
                  hasReadMore={true}
                />
                <TestimonialCard
                  platformIconUrl="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                  profileImageUrl="https://lh3.googleusercontent.com/a/ACg8ocIjx4lmk_MW3dctpaMyX_Etryj9jVbcA6zlefT6GlVEIHaRiQ=w40-h40-c-rp-mo-br100"
                  profileImageAlt="Fernando Motta profile picture"
                  authorName="Fernando Motta"
                  timeAgo="4 meses atrás"
                  starIconUrl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                  starCount={5}
                  testimonialText="Empresa conta com excelentes profissionais e trabalha com seriedade. Recomendo"
                />
                <TestimonialCard
                  platformIconUrl="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                  profileImageUrl="https://lh3.googleusercontent.com/a-/ALV-UjXF3cgS7ir6iz3pa3G3b6C8GeAM9tQAl5ksP71SNftlCs3hfWbl=w40-h40-c-rp-mo-br100"
                  profileImageAlt="Salete Soares da Rosa profile picture"
                  authorName="Salete Soares da Rosa"
                  timeAgo="4 meses atrás"
                  starIconUrl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                  starCount={5}
                  testimonialText="Só tenho a agradecer pelo excelente atendimento. O time do escritório Ávila Nascimento é maravilhoso e muito competente."
                />
                <TestimonialCard
                  platformIconUrl="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                  profileImageUrl="https://lh3.googleusercontent.com/a-/ALV-UjUfvcHd7-EC9pMOkiPlTcvfPzANjeHIsCX93qbWGTi3KtDN6DnkNQ=w40-h40-c-rp-mo-br100"
                  profileImageAlt="Ana Saskia Tavares profile picture"
                  authorName="Ana Saskia Tavares"
                  timeAgo="4 meses atrás"
                  starIconUrl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                  starCount={5}
                  testimonialText="O escritório consegue reunir experiência e ferramentas jurídicas imprescindíveis para a proteção dos direitos dos seus clientes"
                  hasReadMore={true}
                />
                <TestimonialCard
                  platformIconUrl="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                  profileImageUrl="https://lh3.googleusercontent.com/a-/ALV-UjU32Uz7TRIbQCX_nx2RrYFGEvoot0w5l-e_Knb5m9IUa5pihVdn1Q=w40-h40-c-rp-mo-br100"
                  profileImageAlt="*Raquel Perret* profile picture"
                  authorName="*Raquel Perret*"
                  timeAgo="4 meses atrás"
                  starIconUrl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                  starCount={5}
                  testimonialText={
                    <>
                      Escritório de excelência que cuida de todo o processo
                      jurídico com dedicação e profissionalismo.
                      <br className="text-sm box-border caret-transparent leading-[19.6px]" />
                      A equipe do Ávila Nascimento resolve seu caso de forma
                      eficiente, sem que você precise se preocupar com a
                      burocracia e os prazos legais.
                      <br className="text-sm box-border caret-transparent leading-[19.6px]" />
                      Recomendo!
                    </>
                  }
                  hasReadMore={true}
                />
                <TestimonialCard
                  platformIconUrl="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                  profileImageUrl="https://lh3.googleusercontent.com/a/ACg8ocKILAVJro1unybJJ5bEPB12b449761PWsFYKWqD0uBMqnmaXA=w40-h40-c-rp-mo-br100"
                  profileImageAlt="Vânia Togni VALENTIM profile picture"
                  authorName="Vânia Togni VALENTIM"
                  timeAgo="4 meses atrás"
                  starIconUrl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                  starCount={5}
                  testimonialText="Empresa comprometida com seus clientes e parceiros"
                />
                <TestimonialCard
                  platformIconUrl="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                  profileImageUrl="https://lh3.googleusercontent.com/a/ACg8ocJ4O2ftYu6nkXUYLGg8a2hoKzdp6Fz8aPxJYlauNjzxsIuDlA=w40-h40-c-rp-mo-br100"
                  profileImageAlt="sou desenvolvimento profile picture"
                  authorName="sou desenvolvimento"
                  timeAgo="4 meses atrás"
                  starIconUrl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                  starCount={5}
                  testimonialText={
                    <>
                      Ávila Nascimento Advocacia é um escritório que nos entrega
                      todo o suporte jurídico necessário, além de conhecimento
                      técnico e prático. É um ambiente acolhedor, em que os
                      profissionais realmente se importam com o bem-estar dos
                      clientes. Só tenho a agradecer.
                    </>
                  }
                  hasReadMore={true}
                />
              </div>
              <div className="relative bg-zinc-600/40 box-border caret-transparent block h-[3px] w-[150px] overflow-hidden mx-auto my-5 rounded-[3px] md:hidden">
                <div className="absolute bg-zinc-600 box-border caret-transparent h-full w-px px-1 rounded-[3px] left-[17%] top-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
