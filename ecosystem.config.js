module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'cnode-express',
      script    : './bin/www',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'root',
      host : '47.95.218.214',
      ref  : 'origin/master',
      repo : 'git@github.com:rocwangv/cnode-express.git',
      path : '/home/project/cnode-express',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
};
