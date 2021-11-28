module.exports = (plop) => {
  plop.setGenerator('Component', {
    description: 'Component generator',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Component Type?',
        choices: [
          { name: 'Feature', value: 'feature' },
          { name: 'Shared', value: 'shared' },
          { name: 'Global', value: 'global' },
        ],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component Name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{type}}/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'add',
        path: 'components/{{type}}/{{pascalCase name}}/types.ts',
        templateFile: 'templates/types.hbs',
      },
      {
        type: 'add',
        path: 'components/{{type}}/{{pascalCase name}}/styles.js',
        templateFile: 'templates/component-styles.hbs',
      },
      {
        type: 'add',
        path: 'components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/component-story.hbs',
      },
      {
        type: 'add',
        path: 'components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.accessibility.stories.mdx',
        templateFile: 'templates/component-accessibility.hbs',
      },
      {
        type: 'add',
        path: 'components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.overview.stories.mdx',
        templateFile: 'templates/component-overview.hbs',
      },
      {
        type: 'add',
        path: 'components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.variants.stories.mdx',
        templateFile: 'templates/component-variants.hbs',
      },
    ],
  });
};
