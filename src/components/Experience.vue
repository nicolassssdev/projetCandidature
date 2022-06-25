<template>
  <div>
    <div
      class="
        scroll-smooth
        flex flex-col
        justify-center
        md:items-center
        h-screen
      "
    >
      <h2 class="text-8xl font-bold">Nicolas LANOTTE</h2>
      <h3 class="ml-16 mt-8 text-4xl">Apprenti développeur</h3>
    </div>
    <div
      id="tdm"
      class="
        scroll-smooth
        flex
        justify-center
        flex-col
        md:items-center
        h-screen
      "
    >
      <h2 class="ml-16 md:mr-96 mb-20 font-bold text-4xl">
        Table des matières
      </h2>

      <div class="ml-20 underline underline-offset-8 text-2xl leading-loose">
        <!-- <div class="flex flex-row"><img class="h-10 mt-2" src = "./icons/contact.svg" alt=""><router-link to="/Contact">Contact</router-link></div>
            <div class="flex flex-row"><img class="h-10 mt-2" src = "./icons/smiley.svg" alt=""><router-link to="/Profil">Profil</router-link></div>
            <div class="flex flex-row"><router-link to='#' v-scroll-to="'#test'">Profil</router-link></div> 
            <div class="flex flex-row"><img class="h-10 mt-2" src = "./icons/1F4AA.svg" alt=""><router-link to="/Profil">Atouts</router-link></div>
            <div class="flex flex-row"><img class="h-10 mt-2" src = "./icons/exp.svg" alt=""><router-link to="/experience">Expérience Professionnelle</router-link></div>
            <div class="flex flex-row"><img class="h-10 mt-2" src = "./icons/interets.svg" alt=""><router-link to="/interet">Centres d'intérêt</router-link></div>
            <div class="flex flex-row"><img class="h-10 mt-2" src = "./icons/ordi.svg" alt=""><router-link to="/interet">Compétences</router-link></div>
            <div class="flex flex-row"><img class="h-10 mt-2" src = "./icons/parcours.svg" alt=""><router-link to="/parcours">Parcours</router-link></div>   -->

        <div class="flex flex-row">
          <img class="h-10 mt-2" src="./icons/smiley.svg" alt="" /><router-link
            to="/"
            v-scroll-to="'#profil'"
            >Profil</router-link
          >
        </div>
        <div class="flex flex-row">
          <img class="h-10 mt-2" src="./icons/1F4AA.svg" alt="" /><router-link
            to="/"
            v-scroll-to="'#profil'"
            >Atouts</router-link
          >
        </div>
        <div class="flex flex-row">
          <img class="h-10 mt-2" src="./icons/exp.svg" alt="" /><router-link
            to="/"
            v-scroll-to="'#experience'"
            >Expérience professionnelle</router-link
          >
        </div>
        <div class="flex flex-row">
          <img
            class="h-10 mt-2"
            src="./icons/interets.svg"
            alt=""
          /><router-link to="/" v-scroll-to="'#experience'"
            >Centres d'intérêt</router-link
          >
        </div>
        <div class="flex flex-row">
          <img class="h-10 mt-2" src="./icons/ordi.svg" alt="" /><router-link
            to="/"
            v-scroll-to="'#competences'"
            >Compétences</router-link
          >
        </div>
        <div class="flex flex-row">
          <img
            class="h-10 mt-2"
            src="./icons/parcours.svg"
            alt=""
          /><router-link to="/" v-scroll-to="'#competences'"
            >Parcours</router-link
          >
        </div>
        <div class="flex flex-row">
          <img class="h-10 mt-2" src="./icons/contact.svg" alt="" /><router-link
            to="/"
            v-scroll-to="'#contact'"
            >Contact</router-link
          >
        </div>
      </div>
    </div>
    <div
      id="profil"
      class="
        flex flex-col
        justify-center
        md:items-center md:flex-row md:h-screen
        divide-x-4
      "
    >
      <div class="flex-1 space-x-24 mr-32">
        <h2 class="ml-16 mb-20 mt-24 font-bold text-4xl">Profil</h2>
        <p class="text-justify text-xl leading-loose">
          Etudiant à CESI Strasbourg dans le bachelor Responsable en Ingénierie
          des Logiciels, je souhaite continuer mon alternance chez Arturia en
          tant que développeur Web.
        </p>
      </div>
      <div id="atouts" class="flex-1 space-x-24 mr-32">
        <h2 class="ml-16 mb-20 mt-24 font-bold text-4xl">Atouts</h2>
        <li
          v-for="item in items"
          :key="item.comp"
          class="text-justify text-xl leading-loose"
        >
          {{ item.comp }}
        </li>
      </div>
    </div>
    <div
      id="experience"
      class="
        flex flex-col
        justify-center
        md:items-center md:flex-row md:h-screen
        divide-x-4
      "
    >
      <div class="flex-1 space-x-24 mr-32">
        <h2 class="ml-16 mb-20 mt-16 font-bold text-4xl">
          Expérience Professionnelle
        </h2>
        <h3 class="ml-16 mb-4 mt-16 font-bold text-2xl">
          Analyste développeur chez Soprofen (en cours)
        </h3>
        <p class="text-justify text-xl leading-loose">
          J’ai découvert pour la première fois le monde de l’entreprise. Je
          voulais avoir l’expérience concrète du travail et savoir si je verrai les
          mêmes sujets, abordés dans mes études, en entreprise. J’ai appris
          beaucoup de choses notamment ma vision du travail d’un informaticien.
          Parmi ces découvertes : le développeur n’écrit pas des lignes de codes
          toute la journée ou que la communication est plus importante qu’elle
          en a l’air…
        </p>
        <h3 class="ml-16 mb-4 mt-16 font-bold text-2xl">
          Stage de fin de D.U.T. chez Sikim Santé - Okédoc
        </h3>
        <p class="text-justify text-xl leading-loose">
          J’ai beaucoup apprécié l’ambiance start-up pendant ce stage. Un projet
          très intéressant où j’ai pu avoir de vraies missions (refonte d'une
          partie du site et développement frontend sur le portail web)
          malgré ma faible expérience. Une de mes découvertes durant ce stage :
          le CSS peut largement suffire à réaliser de beaux visuels modernes.
        </p>
      </div>
      <div id="centresInteret" class="flex-1 space-x-24 mr-32">
        <h2 class="ml-16 mt-16 font-bold text-4xl">Centres d'intérêt</h2>
        <h3 class="ml-16 mt-16 font-bold text-2xl">Musique</h3>
        <li
          v-for="item in interet"
          :key="item.m"
          class="text-justify text-xl leading-loose"
        >
          {{ item.m }}
        </li>
        <h3 class="ml-16 mt-16 font-bold text-2xl">Sport</h3>
        <li class="text-justify text-xl leading-loose">
          {{ sport }}
        </li>
      </div>
    </div>
    <div
      id="competences"
      class="
        flex flex-col
        justify-center
        md:items-center md:flex-row md:h-screen
        divide-x-4
      "
    >
      <div class="flex-1 space-x-24 mr-32">
        <h2 class="ml-16 mt-16 font-bold text-4xl">Compétences</h2>
        <h3 class="ml-16 mt-8 font-bold text-2xl">Informatique</h3>
        <p class="text-justify text-xl leading-loose">
          Bases de données, développement web, programmation orientée objet
        </p>
        <p class="text-justify text-xl leading-loose">
          Langages de programmation : SQL, Java, JavaScript, PHP
        </p>
        <h3 class="ml-16 mt-8 font-bold text-2xl">Logiciels</h3>
        <p class="text-justify text-xl leading-loose">
          Salesforce (badge Montaineer sur Trailhead )
        </p>
        <p class="text-justify text-xl leading-loose">Talend Open Studio</p>
        <h3 class="ml-16 mt-8 font-bold text-2xl">Langues</h3>
        <p class="text-justify text-xl leading-loose">Anglais - Avancé(B2)</p>
        <p class="text-justify text-xl leading-loose">
          Allemand - Indépendant (B1), Certification B1 KMK (2017)
        </p>
      </div>
      <div id="parcours" class="flex-1 space-x-24 mr-32">
        <h2 class="ml-16 mt-8 font-bold text-4xl">Parcours</h2>
        <h3 class="ml-16 mt-8 font-bold text-2xl">
          CESI Strasbourg (depuis 2021)
        </h3>
        <p class="text-justify text-xl leading-loose">
          Bachelor Responsable en Ingénierie des Logiciels
        </p>
        <h3 class="ml-16 mt-8 font-bold text-2xl">
          I.U.T. de Saint-Dié-Des-Vosges
        </h3>
        <p class="text-justify text-xl leading-loose">
          D.U.T. Informatique mention assez bien
        </p>
        <h3 class="ml-16 mt-8 font-bold text-2xl">Lycée Kléber</h3>
        <p class="text-justify text-xl leading-loose">
          Baccalauréat Scientifique, S.V.T options Informatique et Sciences du
          Numérique, Discipline Non Linguistique Allemand, Latin mention
          européenne 2019
        </p>
      </div>
    </div>

    <footer id="contact" class="flex justify-center md:items-center mb-8">
      <div class="flex flex-row space-x-24">
        <p class="text-justify text-xl leading-loose mt-4">
          nicolas.lanotte@viacesi.fr
        </p>
        <a href="https://github.com/nicolas2ul/"
          ><img class="h-16 ml-1" src="./icons/E045.svg" alt=""
        /></a>
      </div>
    </footer>
    <!-- <div class="static bg-sky-500 rounded ml-16 w-10 h-10">
      
          <router-link
            to="/"
            v-scroll-to="'#tdm'"
            ><img class="h-8 ml-1" src="./icons/2B06.svg" alt=""/></router-link
          >
      </div> -->
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        { comp: "Calme" },
        { comp: "Sociable" },
        { comp: "Patient" },
        { comp: "Appliqué" },
      ],
      interet: [
        { m: "Conservatoire de Saint-Dié en piano jazz (1 an)" },
        { m: "Conservatoire de Nancy : guitare (5ans) et piano (3ans)" },
      ],
      sport: "Plongeon (5ans) participation aux championnats de France",
    };
  },
};
</script>
