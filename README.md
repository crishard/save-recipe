# Recipe Manager App

Uma aplicação web moderna para gerenciamento de receitas culinárias, construída com React, TypeScript e Tailwind CSS.

## 📋 Funcionalidades

- Cadastro e edição de receitas
- Lista de ingredientes dinâmica
- Sistema de favoritos
- Pesquisa por nome ou ingredientes
- Visualização detalhada de receitas
- Interface responsiva
- Validação de formulários

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface
- **TypeScript**: Superset JavaScript para tipagem estática
- **Tailwind CSS**: Framework CSS utilitário
- **Shadcn/ui**: Componentes de UI reutilizáveis
- **React Hook Form**: Gerenciamento de formulários
- **Yup**: Validação de esquemas
- **Lucide React**: Ícones

## 💻 Pré-requisitos

- Node.js 18.0 ou superior
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/crishard/save-recipe.git
cd save-recipe
```

2.Instale as dependências:

```bash
npm install
# ou
yarn install
```

3.Inicie o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

## 🔨 Principais Componentes

### RecipeManager

Componente principal que coordena toda a aplicação. Gerencia o estado global das receitas e coordena as interações entre os componentes.

### RecipeForm

Formulário para criação e edição de receitas. Utiliza React Hook Form para gerenciamento de estado e Yup para validação.

### RecipeList

Lista todas as receitas cadastradas com opções de filtro e pesquisa. Permite favoritar, editar e excluir receitas.

### RecipeCard

Componente de apresentação para cada receita individual, exibindo informações básicas e ações disponíveis.

## 📝 Tipos

### Recipe

```typescript
interface Recipe {
    id: string
    name: string
    ingredients: string[]
    instructions: string
    favorite: boolean
}
```

## 🔍 Hooks Personalizados

### useRecipes

Gerencia todas as operações CRUD relacionadas às receitas.

### useRecipeForm

Encapsula a lógica do formulário de receitas, incluindo validação e gerenciamento de estado.

### useFilteredRecipes

Gerencia a lógica de filtragem e pesquisa de receitas.

## ⚙️ Configuração

### Validação de Formulários

O schema de validação está definido em `lib/schema.ts` usando Yup:

```typescript
const schema = yup.object({
    name: yup.string().required('Nome é obrigatório'),
    ingredients: yup.array()
        .of(yup.string().required('Ingrediente é obrigatório'))
        .required('Adicione pelo menos um ingrediente'),
    instructions: yup.string().required('Instruções são obrigatórias'),
})
```

## 🎨 Estilização

A aplicação utiliza Tailwind CSS para estilização, combinado com componentes do Shadcn/ui para uma interface moderna e consistente.

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Próximos Passos

- [ ] Implementar sistema de categorias
- [ ] Adicionar suporte a imagens
- [ ] Criar sistema de compartilhamento
- [ ] Adicionar tempo de preparo
- [ ] Implementar sistema de avaliações
- [ ] Adicionar modo escuro
- [ ] Criar sistema de unidades de medida
- [ ] Implementar exportação de receitas

## 📞 Suporte

Para reportar bugs ou sugerir novas features, por favor abra uma [issue](https://github.com/crishard/save-recipe/issues).
