<template>
  <div>
    <section>
      <div class="relative overflow-hidden">
        <div class="min-h-screen pt-32 grid gap-48">
          <nuxa-container class="h-full grid items-center lg:grid-cols-2 gap-6">
            <div>
              <div class="grid items-start gap-12 py-12 lg:py-24">
                <nuxa-hero-title class="text-content max-w-2xl text-center md:text-left">
                  Seu <span class="text-nuxa">sucesso</span> online começa aqui<span class="inline md:hidden">, com nossas
                    soluções inovadoras</span>.
                </nuxa-hero-title>
                <div class="text-content max-w-lg text-xl text-center md:text-left max-md:mx-auto">
                  Desenvolvemos sites de alta qualidade. Seja para promover o seu negócio, mostrar seu trabalho, abrir a
                  sua
                  loja virtual ou criar um blog, você pode fazer tudo isso com nuxa.
                </div>
                <div class="flex gap-6 items-center group justify-center md:justify-start">
                  <nuxa-button>conheça nossas vantagens</nuxa-button>
                  <div class="hidden md:block">
                    <Icon size="64" name="mdi-light:arrow-right"
                      class="relative transition-all left-0 group-hover:left-6 ease-in-expo duration-300" />
                  </div>
                </div>
              </div>
            </div>
            <div class="max-lg:order-first h-full">
            </div>
          </nuxa-container>

          <nuxa-marqee />

          <nuxa-container class="grid gap-24 lg:gap-12">
            <nuxa-content title="TECNOLOGIA E INOVAÇÃO" src="/assets/images/vr.jpg" alt="Homem usando óculos de realidade virtual">
              No desenvolvimento de sites, a tecnologia e a inovação podem ser aplicadas em várias áreas, como design,
              programação, otimização para mecanismos de busca (SEO) e marketing digital. Por exemplo, a tecnologia nos
              permite criar sites responsivos que se adaptam automaticamente a diferentes tamanhos de tela, enquanto a
              inovação nos permite encontrar maneiras criativas de apresentar conteúdo e interagir com os usuários da
              forma mais performática possível.
              <template #action>
                <nuxa-button>
                  Entrar em contato
                </nuxa-button>
              </template>
            </nuxa-content>
            <nuxa-content title="VELOCIDADE PARA IMPULSIONAR SUAS VENDAS" src="/assets/images/tablet.jpg" alt="Mulher interage com tablet" reverted>
              Um site rápido pode ter um impacto significativo nas vendas, pois os usuários tendem a ficar mais tempo em
              sites que carregam rapidamente e têm uma experiência de navegação mais suave. Além disso, a velocidade do
              site é um dos fatores que o Google leva em consideração ao classificar os resultados de pesquisa, então um
              site rápido pode ajudar a melhorar sua visibilidade nos resultados de pesquisa e atrair mais tráfego
              orgânico para o seu site.
              <template #action>
                <nuxa-button>
                  Entrar em contato
                </nuxa-button>
              </template>
            </nuxa-content>
          </nuxa-container>

          <nuxa-container class="grid gap-6 md:gap-24 xl:gap-48 md:grid-cols-[max-content_1fr]">
            <div>
              <nuxa-title class="uppercase">O que fazemos</nuxa-title>
              <nuxa-title class="uppercase font-thin">na nuxa?</nuxa-title>
            </div>
            <div>
              Combinamos tecnologia de ponta com criatividade e estratégia para criar soluções personalizadas que atendam
              às necessidades específicas de cada cliente. Seja através do desenvolvimento de um site responsivo, da
              criação de um aplicativo móvel ou da implementação de uma campanha de marketing digital bem-sucedida,
              estamos sempre buscando maneiras de ajudar nossos clientes a se destacarem da concorrência.
            </div>
          </nuxa-container>

          <nuxa-container class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <nuxa-card src="">
              <template #head>
                Web Site
              </template>
              <template #body>
                Apresente sua marca para um público global com um site atraente e fácil de usar.
              </template>
              <template #action>
                <nuxa-button to="/beneficios/webpage">
                  Saiba mais
                </nuxa-button>
              </template>
            </nuxa-card>
            <nuxa-card src="">
              <template #head>
                Landing Page
              </template>
              <template #body>
                Converta visitantes em leads ou clientes com uma landing page persuasiva.
              </template>
              <template #action>
                <nuxa-button to="/beneficios/landing-page">
                  Saiba mais
                </nuxa-button>
              </template>
            </nuxa-card>
            <nuxa-card src="">
              <template #head>
                Back Office
              </template>
              <template #body>
                Otimize suas operações e reduza custos com um back office eficiente.
              </template>
              <template #action>
                <nuxa-button to="/beneficios/backoffice" >
                  Saiba mais
                </nuxa-button>
              </template>
            </nuxa-card>
            <nuxa-card src="">
              <template #head>
                Aplicativo
              </template>
              <template #body>
                Alcance e engaje clientes em seus dispositivos móveis com um aplicativo personalizado.
              </template>
              <template #action>
                <nuxa-button to="/beneficios/aplicativo">
                  Saiba mais
                </nuxa-button>
              </template>
            </nuxa-card>
          </nuxa-container>
        </div>
        <div
          class="grid isloading overflow-hidden absolute top-0 right-0 left-0 -z-[1] aspect-[3/6] sm:aspect-square xl:aspect-[1437/790] pointer-events-none">
          <nuxt-img fit="cover" width="1437" height="790" class="w-full h-full hidden xl:block"
            src="/assets/images/hero.png" />
          <nuxt-img fit="cover" width="790" height="790" class="w-full h-full hidden sm:block xl:hidden"
            src="/assets/images/hero-tablet.png" />
          <nuxt-img fit="cover" width="300" height="600" class="w-full h-full block sm:hidden"
            src="/assets/images/hero-mobile.png" />
        </div>
      </div>
  </section>
</div></template>