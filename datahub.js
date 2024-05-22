const DataHub = require('macaca-datahub');

const datahub = new DataHub({
  port: 9200,
  store: './data' 
  
});

datahub.startServer();
