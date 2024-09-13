$(document).ready(function() {
    console.log(document.querySelector('header button')) /* Pega o primeiro elemento relacionado */
    console.log($('#btn-cancel')) /* Pega o elemento pelo ID */

    /* Forma de add um .addEventListener usando JQuery */
    $('header button').click(function(){
        $('form').slideDown();
    });

    $('#btn-cancel').click(function(){
        $('form').slideUp();
    });

    /* Função de prevenir a atualização da página ao clicar no botão submit usando JQuery */
    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-img-new').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-img-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(850);
        $('#endereco-img-new').val('');
    });
});