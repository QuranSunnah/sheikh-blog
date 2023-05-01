module.exports = {
  apps: [
    {
      name: "nextjs-template",
      script: "node_modules/.bin/next",
      args: "start -p 4000",
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "nextjs-template-storybook",
      script: "node_modules/.bin/storybook",
      args: "dev -p 4040 --no-open",
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
