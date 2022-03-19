<template>
  <nav
    id="navbar"
    class="navbar sticky top-0 w-full border-b z-fixed"
    :class="
      isScrolled
        ? 'bg-black border-grey base-animation'
        : 'border-transparent base-animation'
    "
  >
    <div class="container flex">
      <BaseLogo />
      <ul class="navbar__links flex md:hidden">
        <li
          v-for="(link, key) in navLinks"
          :key="key"
          :class="{ 'active-section': isActive(link.path) }"
          class="navbar__links__link text-grey text-sm cursor-pointer base-animation hover:-translate-y-1"
        >
          <a :href="`#${link.path}`">
            {{ link.text }}
          </a>
        </li>
      </ul>
      <base-button variant="outline" :href="email" class="md:hidden">
        Contact us
      </base-button>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import navbar from "@/static/navbar.json";
export default {
  data() {
    return {
      navLinks: navbar,
      section: navbar[0].path,
      isScrolled: false,
      width: 0,
    };
  },
  computed: {
    ...mapGetters(["email"]),
    getWidth() {
      if (this.width >= 851) {
        return 150;
      }
      return 140;
    },
  },
  methods: {
    changeSection(path) {
      this.section = path;
    },
    isActive(path) {
      return this.section == path;
    },
    sectionGroup(s) {
      const section = document.getElementById(s);
      let position =
        Math.ceil(window.pageYOffset) +
        document.documentElement.clientHeight / 2 +
        this.getWidth;
      if (
        section &&
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        this.changeSection(s);
        section.style.opacity = "1";
      }
    },
    updateSection() {
      this.sectionGroup("about");
      this.sectionGroup("service");
      this.sectionGroup("projects");
      this.sectionGroup("contact-us");
    },
    onScroll() {
      this.width = document.documentElement.clientWidth;
      this.updateSection();
      if (window.top) {
        let windowTop = window.top.scrollY;
        if (windowTop - 30 >= 0) {
          this.isScrolled = true;
        } else {
          this.isScrolled = false;
        }
      }
    },
  },
  mounted() {
    window.addEventListener("load", () => {
      window.addEventListener("scroll", this.onScroll);
      this.onScroll();
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 20px 0px;
  &__links {
    &__link {
      &:not(:first-child) {
        margin-left: 40px;
      }
    }
  }
}
</style>
