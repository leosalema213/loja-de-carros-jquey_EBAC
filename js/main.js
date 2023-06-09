$(document).ready(function(){
    $('#carousel-imagens').slick({ // comando slick cria o carousel,o autoplay em baixo faz com q ele inciie automaticamente.
        autoplay:true,
    });


$('.menu-hamburguer').click(function(){
    $('nav').slideToggle(); //slide faz com que o item apareça,para cima usa slideup para baixo slidedown,o toogle verifica sozinho,não precisando criar uma função pra ele sumir e uma pra aparecer.
})

$('#telefone').mask('(00) 00000-0000') /*.maks mais o codigo adicionam uma mascara ao campo,o usuario so pode digitar numeros,e no formato que esta ali.
data de nascimento ficaria assim 00/00/0000 podemos adicionar um placeholder para o usuario ver como queremos que seja prenchido o campo exemplo:
$('#telefone').mask('(00) 00000-0000',
{placeholder:'(00) 00000-0000'}) 
para adicionar numeros usamos o 0 e para adiconar letras usamos a letra: s
*/
$('form').validate({ //.validate é pra inciarmor o plugin de validação
    rules:{  //o rules pega o name do campo,e não o id,aqui é onde adiconamos as regras
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        mensagem:{
            required: true
        },
        veiculoDeInteresse:{
            required: false
        }
    },
    messages: {  //modifica a mensagem padrão do plugin
        nome: 'Por favor, insira o seu nome',
        email:'Por favor,insira seu e-mail',
        telefone: 'Por favor,insira seu telefone',
        mensagem:'Por favor,insira uma mensagem'
    },
    submitHandler: function(form) { //se o formulario estiver correto
        console.log(form)
    },
    invalidHandler: function(evento, validador) { //se o formulario estiver incorreto,o validador mostra quantos campos estão incorretos.
        let camposIncorretos = validador.numberOfInvalids();
        if(camposIncorretos){
            alert(`existem ${camposIncorretos} campos incorretos. `)
        }
    }
})
    $('.lista-veiculos button').click(function(){ //funçao quando clicamos no botao tenho interesse
        const nomeVeiculo = $(this).parent().find('h3').text(); /*aqui ele pega o elemento botao(this é esse),e com .parent ele pega seus "parentes"
         com o find ele procura um elemento especifico e retorna oque queremos,no caso ali foi o texto do h3 */

        $('#veiculo-interesse').val(nomeVeiculo) //define o valor do campo veiculo-interesse com a const criada acima

        const destino = $('#contato'); // destino,pra onde queremos ser levados na pagina

        $('html').animate({  //animação que faz com que a pagina desca até o destino
            scrollTop: destino.offset().top
        },1000)
    })
})