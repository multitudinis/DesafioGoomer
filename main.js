//Pega o arquivo json
var JSON_Obj = require('./lista.json')

//Converte as chaves para o nome em português
var obj = JSON_Obj.orders.map(({ id, price:valor, scheduled:agendamento,
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

    for (var i in obj)
        resposta.push(obj[i])

        //console.log(obj)
        //console.log(typeof resposta[7])
        console.log(resposta)
}
pusher()

// PostgreSQL query
/*INSERT INTO pedidos_dim
    (id, valor, agendamento, data, meio_de_pagamento, tipo_da_entrega, cidade)
VALUES( 726692, 51.49, true, '2021-08-05', 'cash', 'takeaway', 'São Paulo - SP')
ON CONFLICT(id) DO UPDATE SET agendamento = excluded.agendamento;*/