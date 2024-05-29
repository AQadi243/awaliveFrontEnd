export default {
  apps: [{
    name: 'my-next-app',
    script: 'npm',
    args: 'start',
    watch: true,
    ignore_watch: ["node_modules"],
    env: {
      NODE_ENV: 'production',
    }
  }]
};
