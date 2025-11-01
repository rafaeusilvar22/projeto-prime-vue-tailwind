# ⚙️ Configurações App — Vue + PrimeVue + Tailwind
Aplicação desenvolvida consiste em uma tela de configurações inspirada em apps modernos, contendo menu lateral, subrotas, tema claro/escuro, uso de PrimeVue, Tailwind e gerenciamento assíncrono usando Vue Query.

---

## 📥 Instalação e dependências
git clone [https://github.com/SEU-USUARIO/NOME-REPO.git](https://github.com/rafaeusilvar22/projeto-prime-vue-tailwind.git)
cd NOME-REPO
npm install

---

## 🚀 Como rodar
npm run dev

---

## 📦 Build
npm run build

---

## 🏗️ Tecnologias utilizadas
| Tecnologia                         | Uso                                            |
| ---------------------------------- | ---------------------------------------------- |
| Vue 3 + Vite                       | Framework principal                            |
| TypeScript                         | Tipagem estática                               |
| Tailwind CSS                       | Estilização utilitária                         |
| PrimeVue + PrimeIcons + Aura Theme | Componentes UI                                 |
| Vue Router                         | Rotas + layouts aninhados                      |
| Pinia                              | State management global                        |
| TanStack Query                     | Gerenciamento reativo de requisições           |
| Storybook                          | Documentação de componentes (component-driven) |

---

## 📂 Estrutura de Pastas
| Pasta             | Função                                    |
| ----------------- | ----------------------------------------- |
| `src/components`  | Componentes reutilizáveis                 |
| `src/layouts`     | Layouts estruturais (Main e Settings)     |
| `src/router`      | Configuração de rotas e navegação         |
| `src/views`       | Páginas da aplicação                      |
| `src/composables` | Hooks reutilizáveis (`useDarkMode`, etc.) |
| `src/services`    | Consumo de API / camadas de integração    |
| `public/`         | Assets estáticos                          |


---

## 🎯 Requisitos atendidos
| Item                                     | Status                                    |
| ---------------------------------------- | ----------------------------------------- |
| Vue 3 + TS configurado                   | ✅                                         |
| PrimeVue e Tailwind                      | ✅                                         |
| Tema light/dark                          | ✅                                         |
| Rotas com layout e subrotas              | ✅                                         |
| Menu responsivo com comportamento mobile | ✅                                         |
| TanStack Query                           | ✅                                         |
| Modal de Logout                          | ✅                                         |
| Storybook                                | 🔄 *(pendente — você irá instalar agora)* |

---

## 🗂️ Decisões técnicas
- Pinia como store pela simplicidade com Vue 3
- TanStack Query para dados reativos simulados
- Composables para lógica desacoplada
- Layouts para manter navbar/sidebars consistentes

---


## 📱 Responsividade
- Layout fluido e responsivo
- No mobile, menu abre isolado e possui botão de voltar, conforme UX do desafio

---

## 📝 Considerações finais
Projeto desenvolvido com foco em arquitetura, organização e experiência moderna.
Foram seguidas boas práticas de Vue 3, Composables, rotas aninhadas e componentes desacoplados.

---

# 👤 Autor
Rafael Silva
Desenvolvedor FullStack | Vue.js | Quasar | PrimeVue | Node
