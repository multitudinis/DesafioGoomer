//Pega o arquivo json
//var JSON_Obj = require('./lista.json')

const data =() => {
    var request = require('request');
    var options = {
      'method': 'GET',
      'url': 'https://n8n.goomer.app/webhook/automation-internship-challenge',
      'headers': {
        'Authorization': 'Basic Y2FuZGlkYXRlOlNhUC1SUzQwalEtaG5qZXNXU2k5MWx3LXFqaEt1eA=='
      }
    };
    
    request(options, function (error, response) {
      if (error) throw new Error(error);
      const lista = response.body
      const list = JSON.parse(lista)
      const orders = list.orders
      //console.log(orders)
      //Converte as chaves para o nome em português
      var obj = orders.map(({ id, price:valor, scheduled:agendamento,
          ordered_at:data, method:meio_de_pagamento, type:tipo_da_entrega, city:cidade }) => ({
              id,
               valor,
               agendamento,
               data,
               meio_de_pagamento,
               tipo_da_entrega,
               cidade
        })
        );
        //console.log(obj)
        //Cria o array resposta e empurra os objetos pra dentro.
        function pusher() {
            //var obj = JSON_Obj.orders
            var resposta = [];
            obj.forEach(element => {
                resposta.push(element)
            });
            //for (var i in obj)
        
                //console.log(obj)
                //console.log(typeof resposta[7])
                console.log(resposta)
        }
        pusher()
    })
    };
data()
// PostgreeSQL query
/*INSERT INTO pedidos_dim
    (id, valor, agendamento, data, meio_de_pagamento, tipo_da_entrega, cidade)
VALUES( 726691, 51.49, true, '2021-08-05', 'cash', 'takeaway', 'São Paulo - SP')
ON CONFLICT(id) DO UPDATE SET agendamento = excluded.agendamento;*/