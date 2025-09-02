// =======================
// LÓGICA DO CHAT WHATSAPP
// =======================
const chatToggleButton = document.getElementById('chat-toggle-button');
const chatPopup = document.getElementById('chat-popup');
const closeChatBtn = document.getElementById('close-chat-btn');
const chatForm = document.getElementById('chat-form');
const chatMessageInput = document.getElementById('chat-message');
const phoneNumber = '5511981772139'; // Número no formato internacional: 55 + código de área + número

// Adiciona um evento de clique para o botão flutuante
// Ao clicar, ele exibe o pop-up do chat e esconde o botão
chatToggleButton.addEventListener('click', () => {
    chatPopup.style.display = 'flex';
    chatToggleButton.style.display = 'none';
});

// Adiciona um evento de clique para o botão de fechar (X)
// Ao clicar, ele esconde o pop-up e exibe o botão novamente
closeChatBtn.addEventListener('click', () => {
    chatPopup.style.display = 'none';
    chatToggleButton.style.display = 'block';
});

// Adiciona um evento de 'submit' ao formulário do chat
chatForm.addEventListener('submit', (e) => {
    // Impede o envio padrão do formulário para que a página não recarregue
    e.preventDefault();

    // Pega o texto da mensagem e remove espaços em branco extras
    const message = chatMessageInput.value.trim();

    // Verifica se a mensagem não está vazia
    if (message) {
        // Codifica a mensagem para ser incluída na URL do WhatsApp
        const encodedMessage = encodeURIComponent(message);
        
        // Constrói a URL completa para abrir o WhatsApp com a mensagem
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Abre a URL em uma nova aba do navegador
        window.open(whatsappUrl, '_blank');
        
        // Opcional: limpa o campo de texto e esconde o chat após o envio
        chatPopup.style.display = 'none';
        chatToggleButton.style.display = 'block';
        chatMessageInput.value = '';
    } else {
        // Alerta o usuário se o campo estiver vazio
        alert('Por favor, digite uma mensagem para enviar.');
    }
});


// =======================
// LÓGICA DO POP-UP
// =======================
document.addEventListener('DOMContentLoaded', () => {
    const promoPopup = document.getElementById('promo-popup');
    const closeButtons = document.querySelectorAll('.close-popup-btn');

    // Exibe o pop-up 1 segundo após a página carregar
    setTimeout(() => {
        promoPopup.style.display = 'flex';
    }, 1000);

    // Adiciona evento de clique para todos os botões de fechar
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            promoPopup.style.display = 'none';
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const promoPopup = document.getElementById('promo-popup');
    const closeButtons = document.querySelectorAll('.close-popup-btn');

    // Exibe o pop-up 1 segundo após a página carregar
    setTimeout(() => {
        promoPopup.style.display = 'flex';
    }, 1000);

    // Adiciona evento de clique para todos os botões de fechar
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            promoPopup.style.display = 'none';
        });
    });
});