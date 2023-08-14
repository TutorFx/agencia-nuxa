<template>
  <div>
    <section>
      <div class="relative overflow-hidden">
        <div class="min-h-screen pt-32 grid gap-12">
          <nuxa-container class="h-full grid items-center lg:grid-cols-2 gap-6">
            <div>
              <div class="grid items-start gap-6">
                <nuxa-hero-title class="text-content max-w-2xl text-center md:text-left">
                  Seu sucesso online começa aqui, com nossas soluções inovadoras.
                </nuxa-hero-title>
                <svg class="max-w-[80%] hidden lg:block" width="487" height="34" viewBox="0 0 487 34" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30" stroke="#F42272" stroke-width="8"
                    stroke-linecap="round" />
                </svg>
                <div class="text-content max-w-lg text-xl text-center md:text-left max-md:mx-auto">
                  Desenvolvemos sites de alta qualidade. Seja para promover o seu negócio, mostrar seu trabalho, abrir a
                  sua
                  loja virtual ou criar um blog, você pode fazer tudo isso com nuxa.
                </div>
              </div>
            </div>
            <div class="max-lg:order-first h-full">
              <div class="h-full grid items-center aspect-auto isloading rounded-2xl overflow-hidden">
                <nuxt-img fit="cover" class="block lg:hidden object-cover h-full w-full max-w-full max-h-full"
                  width="1000" height="800" src="/assets/images/handsome-flipped.jpg" />
                <nuxt-img fit="cover" class="hidden lg:block object-cover h-full w-full max-w-full max-h-full" width="852"
                  height="800" src="/assets/images/handsome-flipped.jpg" />
              </div>
            </div>
          </nuxa-container>

          <nuxa-container class="grid gap-12">
            <nuxa-title class="text-content text-center">
              Empresas que já trabalhamos
            </nuxa-title>
            <div class="grid grid-cols-5 gap-12 max-w-6xl mx-auto">
              <Icon name="logos:twilio" size="100%"
                class="grayscale hover:grayscale-0 transition-all duration-100 opacity-40 hover:opacity-100" />
              <Icon name="logos:zendesk" size="100%"
                class="grayscale hover:grayscale-0 transition-all duration-100 opacity-40 hover:opacity-100" />
              <Icon name="logos:webflow" size="100%"
                class="grayscale hover:grayscale-0 transition-all duration-100 opacity-40 hover:opacity-100" />
              <Icon name="logos:todoist" size="100%"
                class="grayscale hover:grayscale-0 transition-all duration-100 opacity-40 hover:opacity-100" />
              <Icon name="logos:workplace" size="100%"
                class="grayscale hover:grayscale-0 transition-all duration-100 opacity-40 hover:opacity-100" />
            </div>
          </nuxa-container>

          <nuxa-container>
            a
          </nuxa-container>
        </div>
        <div
          class="-z-[1] absolute -top-[25%] -left-[25%] w-[634px] h-[634px] bg-pink-600 bg-opacity-40 rounded-full blur-[1000px] pointer-events-none">
        </div>
        <div
          class="-z-[1] absolute top-[50%] -right-[25%] w-[634px] h-[634px] bg-pink-600 bg-opacity-40 rounded-full blur-[1000px] pointer-events-none">
        </div>
        <div
          class="max-md:hidden -z-[1] absolute -top-[25%] left-[50%] w-[634px] h-[634px] bg-pink-600 bg-opacity-40 rounded-full blur-[1000px] pointer-events-none">
        </div>
      </div>
    </section>
  </div>
</template>