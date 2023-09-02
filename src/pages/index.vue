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
            <nuxa-content title="TECNOLOGIA E INOVACAO" src="/assets/images/vr.jpg">
              Ex elit esse occaecat exercitation voluptate proident sint ipsum. Est ex tempor consectetur dolore cupidatat
              aute commodo anim id deserunt cupidatat. Voluptate consequat cupidatat veniam voluptate Lorem adipisicing ut
              cillum commodo cillum eiusmod magna exercitation proident. In sunt adipisicing culpa ex incididunt laboris
              magna do occaecat officia mollit nulla. Dolore officia dolore reprehenderit ut dolore aute.
              <template #action>
                <nuxa-button>
                  Entrar em contato
                </nuxa-button>
              </template>
            </nuxa-content>
            <nuxa-content title="TECNOLOGIA E INOVACAO" src="/assets/images/tablet.jpg" reverted>
              Ex elit esse occaecat exercitation voluptate proident sint ipsum. Est ex tempor consectetur dolore cupidatat
              aute commodo anim id deserunt cupidatat. Voluptate consequat cupidatat veniam voluptate Lorem adipisicing ut
              cillum commodo cillum eiusmod magna exercitation proident. In sunt adipisicing culpa ex incididunt laboris
              magna do occaecat officia mollit nulla. Dolore officia dolore reprehenderit ut dolore aute.
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
              Nisi id fugiat culpa duis sint occaecat. Proident nisi et ullamco id cupidatat esse id ex velit anim ipsum
              sit laborum. Amet duis duis fugiat ipsum. Consequat duis magna velit sit Lorem dolore pariatur quis veniam.
              Amet dolor sit do sit ipsum aliquip aute quis fugiat minim amet ea. Dolore sunt nostrud sunt qui et occaecat
              esse non laborum.
            </div>
          </nuxa-container>

          <nuxa-container class="grid gap-6 lg:grid-cols-4">
            <lazy-nuxa-card src="">
              <template #head>
                Web Site
              </template>
              <template #body>
                Qui sint sunt eiusmod ea duis et anim aliquip nisi voluptate id. Nostrud labore dolore voluptate
                voluptate. Eiusmod ut dolore velit amet occaecat consequat eu culpa id dolor enim.
              </template>
              <template #action>
                <nuxa-button>
                  Saiba mais
                </nuxa-button>
              </template>
            </lazy-nuxa-card>
            <lazy-nuxa-card src="">
              <template #head>
                Landing Page
              </template>
              <template #body>
                Qui sint sunt eiusmod ea duis et anim aliquip nisi voluptate id. Nostrud labore dolore voluptate
                voluptate. Eiusmod ut dolore velit amet occaecat consequat eu culpa id dolor enim.
              </template>
              <template #action>
                <nuxa-button>
                  Saiba mais
                </nuxa-button>
              </template>
            </lazy-nuxa-card>
            <lazy-nuxa-card src="">
              <template #head>
                Back Office
              </template>
              <template #body>
                Qui sint sunt eiusmod ea duis et anim aliquip nisi voluptate id. Nostrud labore dolore voluptate
                voluptate. Eiusmod ut dolore velit amet occaecat consequat eu culpa id dolor enim.
              </template>
              <template #action>
                <nuxa-button>
                  Saiba mais
                </nuxa-button>
              </template>
            </lazy-nuxa-card>
            <lazy-nuxa-card src="">
              <template #head>
                Aplicativo
              </template>
              <template #body>
                Qui sint sunt eiusmod ea duis et anim aliquip nisi voluptate id. Nostrud labore dolore voluptate
                voluptate. Eiusmod ut dolore velit amet occaecat consequat eu culpa id dolor enim.
              </template>
              <template #action>
                <nuxa-button>
                  Saiba mais
                </nuxa-button>
              </template>
            </lazy-nuxa-card>
          </nuxa-container>
        </div>
        <div
          class="grid isloading overflow-hidden absolute top-0 right-0 left-0 -z-[1] aspect-[3/6] sm:aspect-square xl:aspect-[1437/790] pointer-events-none">
          <nuxt-img fit="cover" width="1437" height="790" class="w-full h-full hidden xl:block" src="/assets/images/hero.png" />
          <nuxt-img fit="cover" width="790" height="790" class="w-full h-full hidden sm:block xl:hidden"
            src="/assets/images/hero-tablet.png" />
          <nuxt-img fit="cover" width="300" height="600" class="w-full h-full block sm:hidden" src="/assets/images/hero-mobile.png" />
        </div>
      </div>
    </section>
</div></template>