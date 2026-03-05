export const HeroCarousel = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap min-h-0 gap-y-5 w-full p-0 md:flex-nowrap md:min-h-[auto] md:w-[48%] md:p-2.5">
      <div className="relative box-border caret-transparent gap-x-5 block max-w-full min-h-[auto] gap-y-5 w-full md:hidden md:min-h-0">
        <div className="relative h-[400px] w-full overflow-hidden bg-[#2a2520]">
          <div
            role="img"
            aria-label="Dr. Marcelo Ávila Nascimento"
            className="bg-[url('/images/advogado.jpg')] bg-no-repeat bg-cover box-border caret-transparent min-h-full min-w-full bg-[position:-30%_20%] [transform:scaleX(-1)]"
          ></div>
        </div>
      </div>
      {/* Especialistas - top right */}
      <div className="absolute self-center bg-white shadow-[rgba(0,0,0,0.07)_0px_2px_4px_-2px,rgba(0,0,0,0.1)_0px_10px_15px_-3px] box-border caret-transparent gap-x-5 max-w-full gap-y-5 z-[1] pl-[5px] pr-2.5 py-[5px] rounded-[100px] right-[0%] top-[15%] md:top-[20%]">
        <div className="flex items-center">
          <span className="flex items-center justify-center w-9 h-9 bg-blue-50 rounded-full mr-2">
            <svg className="w-5 h-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>
          </span>
          <span className="text-neutral-600 font-medium self-center block pl-[5px] font-aalto_sans_pro">
            Especialistas
          </span>
        </div>
      </div>
      {/* Confiança - bottom right */}
      <div className="absolute self-center bg-white shadow-[rgba(0,0,0,0.07)_0px_2px_4px_-2px,rgba(0,0,0,0.1)_0px_10px_15px_-3px] box-border caret-transparent gap-x-5 max-w-full gap-y-5 z-[1] pl-[5px] pr-2.5 py-[5px] rounded-[100px] right-[0%] bottom-[15%] md:bottom-[20%]">
        <div className="flex items-center">
          <span className="flex items-center justify-center w-9 h-9 bg-blue-50 rounded-full mr-2">
            <svg className="w-5 h-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
          </span>
          <span className="text-neutral-600 font-medium self-center block pl-[5px] font-aalto_sans_pro">
            Confiança
          </span>
        </div>
      </div>
      {/* Experiência - middle left */}
      <div className="absolute self-center bg-white shadow-[rgba(0,0,0,0.07)_0px_2px_4px_-2px,rgba(0,0,0,0.1)_0px_10px_15px_-3px] box-border caret-transparent gap-x-5 max-w-full gap-y-5 z-[1] pl-[5px] pr-2.5 py-[5px] rounded-[100px] left-[0%] top-2/4">
        <div className="flex items-center">
          <span className="flex items-center justify-center w-9 h-9 bg-blue-50 rounded-full mr-2">
            <svg className="w-5 h-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
          </span>
          <span className="text-neutral-600 font-medium self-center block pl-[5px] font-aalto_sans_pro">
            Experiência
          </span>
        </div>
      </div>
    </div>
  );
};
