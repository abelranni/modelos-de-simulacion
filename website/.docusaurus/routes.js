import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/modelos-de-simulacion/__docusaurus/debug',
    component: ComponentCreator('/modelos-de-simulacion/__docusaurus/debug', 'ceb'),
    exact: true
  },
  {
    path: '/modelos-de-simulacion/__docusaurus/debug/config',
    component: ComponentCreator('/modelos-de-simulacion/__docusaurus/debug/config', '238'),
    exact: true
  },
  {
    path: '/modelos-de-simulacion/__docusaurus/debug/content',
    component: ComponentCreator('/modelos-de-simulacion/__docusaurus/debug/content', '573'),
    exact: true
  },
  {
    path: '/modelos-de-simulacion/__docusaurus/debug/globalData',
    component: ComponentCreator('/modelos-de-simulacion/__docusaurus/debug/globalData', '792'),
    exact: true
  },
  {
    path: '/modelos-de-simulacion/__docusaurus/debug/metadata',
    component: ComponentCreator('/modelos-de-simulacion/__docusaurus/debug/metadata', '787'),
    exact: true
  },
  {
    path: '/modelos-de-simulacion/__docusaurus/debug/registry',
    component: ComponentCreator('/modelos-de-simulacion/__docusaurus/debug/registry', '041'),
    exact: true
  },
  {
    path: '/modelos-de-simulacion/__docusaurus/debug/routes',
    component: ComponentCreator('/modelos-de-simulacion/__docusaurus/debug/routes', '82a'),
    exact: true
  },
  {
    path: '/modelos-de-simulacion/blog',
    component: ComponentCreator('/modelos-de-simulacion/blog', 'e4e'),
    exact: true
  },
  {
    path: '/modelos-de-simulacion/blog/archive',
    component: ComponentCreator('/modelos-de-simulacion/blog/archive', 'b46'),
    exact: true
  },
  {
    path: '/modelos-de-simulacion/blog/tags',
    component: ComponentCreator('/modelos-de-simulacion/blog/tags', 'e85'),
    exact: true
  },
  {
    path: '/modelos-de-simulacion/blog/tags/c',
    component: ComponentCreator('/modelos-de-simulacion/blog/tags/c', '1fa'),
    exact: true
  },
  {
    path: '/modelos-de-simulacion/blog/tags/intro',
    component: ComponentCreator('/modelos-de-simulacion/blog/tags/intro', '196'),
    exact: true
  },
  {
    path: '/modelos-de-simulacion/blog/tags/lenguajes',
    component: ComponentCreator('/modelos-de-simulacion/blog/tags/lenguajes', '80f'),
    exact: true
  },
  {
    path: '/modelos-de-simulacion/blog/welcome',
    component: ComponentCreator('/modelos-de-simulacion/blog/welcome', 'c65'),
    exact: true
  },
  {
    path: '/modelos-de-simulacion/markdown-page',
    component: ComponentCreator('/modelos-de-simulacion/markdown-page', 'f65'),
    exact: true
  },
  {
    path: '/modelos-de-simulacion/docs',
    component: ComponentCreator('/modelos-de-simulacion/docs', '69b'),
    routes: [
      {
        path: '/modelos-de-simulacion/docs/category/01---introducción',
        component: ComponentCreator('/modelos-de-simulacion/docs/category/01---introducción', '354'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/modelos-de-simulacion/docs/category/02---variables-aleatorias',
        component: ComponentCreator('/modelos-de-simulacion/docs/category/02---variables-aleatorias', '1f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/modelos-de-simulacion/docs/category/03---simulación',
        component: ComponentCreator('/modelos-de-simulacion/docs/category/03---simulación', 'f85'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/modelos-de-simulacion/docs/intro',
        component: ComponentCreator('/modelos-de-simulacion/docs/intro', '364'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/modelos-de-simulacion/docs/Introduccion/01.01_introduccion',
        component: ComponentCreator('/modelos-de-simulacion/docs/Introduccion/01.01_introduccion', '16f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/modelos-de-simulacion/docs/Introduccion/01.02_numeros_pseudoaleatorios',
        component: ComponentCreator('/modelos-de-simulacion/docs/Introduccion/01.02_numeros_pseudoaleatorios', '12e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/modelos-de-simulacion/docs/Introduccion/01.03_metodos_congruenciales_lineales',
        component: ComponentCreator('/modelos-de-simulacion/docs/Introduccion/01.03_metodos_congruenciales_lineales', '83b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/modelos-de-simulacion/docs/Introduccion/01.04_py_numeros_pseudoaleatorios',
        component: ComponentCreator('/modelos-de-simulacion/docs/Introduccion/01.04_py_numeros_pseudoaleatorios', '63f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/modelos-de-simulacion/docs/Simulacion/Anylogic/Ejemplo/banco_fase_1',
        component: ComponentCreator('/modelos-de-simulacion/docs/Simulacion/Anylogic/Ejemplo/banco_fase_1', '125'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/modelos-de-simulacion/docs/Simulacion/Anylogic/Ejemplo/banco_fase_2',
        component: ComponentCreator('/modelos-de-simulacion/docs/Simulacion/Anylogic/Ejemplo/banco_fase_2', 'ab5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/modelos-de-simulacion/docs/Simulacion/Anylogic/Ejemplo/banco_fase_3',
        component: ComponentCreator('/modelos-de-simulacion/docs/Simulacion/Anylogic/Ejemplo/banco_fase_3', 'd0b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/modelos-de-simulacion/docs/Simulacion/Anylogic/Ejemplo/banco_fase_4',
        component: ComponentCreator('/modelos-de-simulacion/docs/Simulacion/Anylogic/Ejemplo/banco_fase_4', '258'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/modelos-de-simulacion/docs/Variables Aleatorias/02.01_variables_aleatorias',
        component: ComponentCreator('/modelos-de-simulacion/docs/Variables Aleatorias/02.01_variables_aleatorias', '004'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/modelos-de-simulacion/docs/Variables Aleatorias/02.02_pruebas_de_bondad',
        component: ComponentCreator('/modelos-de-simulacion/docs/Variables Aleatorias/02.02_pruebas_de_bondad', '9d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/modelos-de-simulacion/docs/Variables Aleatorias/02.03_py_app_bondad',
        component: ComponentCreator('/modelos-de-simulacion/docs/Variables Aleatorias/02.03_py_app_bondad', '588'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/modelos-de-simulacion/docs/Variables Aleatorias/02.04_distribuciones',
        component: ComponentCreator('/modelos-de-simulacion/docs/Variables Aleatorias/02.04_distribuciones', 'e1d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/modelos-de-simulacion/docs/Variables Aleatorias/02.05_transformada_inversa',
        component: ComponentCreator('/modelos-de-simulacion/docs/Variables Aleatorias/02.05_transformada_inversa', '3b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/modelos-de-simulacion/docs/Variables Aleatorias/02.06_interpretacion_bondad_de_ajuste',
        component: ComponentCreator('/modelos-de-simulacion/docs/Variables Aleatorias/02.06_interpretacion_bondad_de_ajuste', '91c'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/modelos-de-simulacion/',
    component: ComponentCreator('/modelos-de-simulacion/', 'e04'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
