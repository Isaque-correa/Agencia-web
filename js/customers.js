    let client = [{
            "img": "perfil.png",
            "nome": "User name",
            "profision": "ui designer",
            "descrition": "Janen The standard chunk of Lorem Ipsum used since reproduced below for those interested awesome design i love it so much for being awesome and great"
        },
        {
            "img": "perfil.png",
            "nome": "User name",
            "profision": "ui designer",
            "descrition": "Janen The standard chunk of Lorem Ipsum used since reproduced below for those interested awesome design i love it so much for being awesome and great"
        },
        {
            "img": "perfil.png",
            "nome": "User name",
            "profision": "ui designer",
            "descrition": "Janen The standard chunk of Lorem Ipsum used since reproduced below for those interested awesome design i love it so much for being awesome and great"
        },
        {
            "img": "perfil.png",
            "nome": "User name",
            "profision": "ui designer",
            "descrition": "Janen The standard chunk of Lorem Ipsum used since reproduced below for those interested awesome design i love it so much for being awesome and great"
        },
        {
            "img": "perfil.png",
            "nome": "User name",
            "profision": "ui designer",
            "descrition": "Janen The standard chunk of Lorem Ipsum used since reproduced below for those interested awesome design i love it so much for being awesome and great"
        },
        {
            "img": "perfil.png",
            "nome": "User name",
            "profision": "ui designer",
            "descrition": "Janen The standard chunk of Lorem Ipsum used since reproduced below for those interested awesome design i love it so much for being awesome and great"
        },
        {
            "img": "perfil.png",
            "nome": "User name",
            "profision": "ui designer",
            "descrition": "Janen The standard chunk of Lorem Ipsum used since reproduced below for those interested awesome design i love it so much for being awesome and great"
        },
        {
            "img": "perfil.png",
            "nome": "User name",
            "profision": "ui designer",
            "descrition": "Janen The standard chunk of Lorem Ipsum used since reproduced below for those interested awesome design i love it so much for being awesome and great"
        }

    ]

    carregarClient(client);

    function carregarClient(data) {

        for (var item of data) {
            let card = $('#carousel');
            var dados = `
            <div class="card">
            <div class="card__user">
            <div class="col-md-6 card__titulo">
            <img src="./assets/imagens/${item.img}"  class="card__img" alt="">
            <div class="col-md-9 card__info">
                <p class="card__nome">${item.nome}</p>
                <p class="card__profision">${item.profision}</p>
            </div>
        </div>
        <p class="card__descrition justify-content-center">${item.descrition}</p>
            </div>
         </div> 
                    `

            teste = card.append(dados)
            teste.innerHTML = dados;


        }


    }