// pm2 start ecosystem.config.cjs --env prod
module.exports = {
  apps : [{
    name: "woodstock-obd-api",
    script: "./server.js",
    instances : "1",
    exec_mode : "cluster",
    env_prod: {
      RUNTIME_ENV: "prod",
      HTTPS_PROXY: "",
      HTTP_PROXY: ""
    }
  }]
}
