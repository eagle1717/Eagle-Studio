<template>
  <section id="about" class="about-us base-section container flex lg:grid">
    <div class="about-us__left">
      <h1 class="about-us__left__title">About our Eagle Studio team</h1>
      <p class="about-us__left__description text-base-xl text-grey">
        Eagle Studio is a web studio that offers clients a service for creating
        a website interface. We will provide the best service for those of you
        who use our services.
      </p>
      <base-button class="about-us__left__button" href="#service">
        Our Services
      </base-button>
    </div>
    <div class="about-us__right">
      <base-img format="png" src="about-us/man" />
    </div>
  </section>

  <section
    v-if="service.length > 0"
    id="service"
    class="service base-section container"
  >
    <h2 class="service__title m-auto text-center">
      The Service We Provide For You
    </h2>
    <div class="service__items grid grid-cols-3 md:grid-cols-2">
      <div
        v-for="(item, key) in service"
        :key="key"
        class="service__items__item text-center"
      >
        <div class="service__items__item__container sm:m-auto">
          <base-img
            :src="`service/${item.icon}`"
            class="service__items__item__container__icon m-auto"
          />
          <h3 class="service__items__item__container__title text-lg">
            {{ item.title }}
          </h3>
          <p
            class="service__items__item__container__description text-grey text-base-sm"
          >
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section
    v-if="slides.length > 0"
    id="projects"
    class="portfolio base-section container"
  >
    <div class="portfolio__nav flex-start md:grid">
      <h2 class="portfolio__nav__title">
        Why Eagle Studio Is The Best Choice?
      </h2>
      <p class="portfolio__nav__description text-grey text-base-xl">
        Check out these projects to see why you should use our Services!
      </p>
    </div>
    <vueper-slides fade :touchable="false" class="portfolio__projects w-full">
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content"
      />
    </vueper-slides>
  </section>
  <ContactUs />
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import ContactUs from "@/components/ContactUs.vue";
import "vueperslides/dist/vueperslides.css";
export default {
  components: {
    ContactUs,
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      navigationStep: 1,
      service: [],
      slides: [],
    };
  },
  created() {
    this.axios.get("service.json").then((res) => {
      this.service = res.data;
    });
    this.axios.get("projects.json").then((res) => {
      this.slides = res.data;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins";
.base-section {
  scroll-margin-block-start: 150px;
  @include premobile {
    scroll-margin-block-start: 140px;
  }
  opacity: 0;
  transition: all 0.5s ease-in-out;
  &:not(:first-child) {
    margin-top: 150px;
    @include premobile {
      margin-top: 140px;
    }
  }
}
.about-us {
  &__left {
    max-width: 582px;
    @include tablet {
      max-width: 100%;
    }
    &__description {
      margin-top: 24px;
      @include tablet {
        margin-top: 30px;
      }
    }
    &__button {
      margin-top: 50px;
    }
  }
  &__right {
    @include tablet {
      margin-top: 50px;
    }
  }
}
.portfolio {
  &__nav {
    &__title {
      max-width: 600px;
      margin-right: 20px;
      @include tablet {
        max-width: 100%;
        margin-right: 0px;
      }
    }
    &__description {
      @include tablet {
        margin-top: 30px;
      }
    }
  }
  &__projects {
    margin-top: 50px;
    height: 670px;
    @include premobile {
      height: 470px;
    }
  }
}

.service {
  &__title {
    max-width: 695px;
    @include tablet {
      max-width: 100%;
    }
  }
  &__items {
    margin-top: 50px;
    row-gap: 24px;
    column-gap: 24px;
    @include mobile {
      grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
    }
    &__item {
      max-width: 384px;
      min-height: 300px;
      @include tablet {
        max-width: 100%;
      }
      &__container {
        max-width: 300px;
        min-height: 203px;
        @include tablet {
          max-width: 100%;
        }
        &__icon {
          width: 69px;
          height: 69px;
        }
        &__title {
          margin: 20px;
          @include mobile {
            font-size: 24px;
            line-height: 32px;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
@import "@/assets/styles/mixins";
.vueperslides__inner,
.vueperslides__parallax-wrapper {
  height: inherit;
}
.vueperslide__content-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  justify-content: flex-start !important;
  align-items: flex-end !important;
  opacity: 0.8;
  padding-top: 0.5em;
  padding-right: 1em;
  color: var(--white);
}
.vueperslide__title {
  font-size: 2.3em;
  @include mobile {
    font-size: 1.5em;
  }
}
[class^="vueperslide"] {
  border-radius: 8px;
}
.vueperslides__bullet .default {
  background-color: var(--black);
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
}

.vueperslides__bullet--active .default {
  background-color: var(--purple);
}
.vueperslides__arrow {
  color: var(--purple);
}
</style>
