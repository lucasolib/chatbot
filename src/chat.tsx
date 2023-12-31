import { useState } from 'react'
import './App.css'

function Chat() {
  const [message, setMessage] = useState('');

  function messageHandler ({ target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { value } = target;
    setMessage(value);
  }

  function sendMessage() {
    const iniciateWords = ['hello', 'good', 'i want'];
    const lowerMessage = message.toLowerCase();
    for (let i = 0; i < iniciateWords.length; i += 1) {
      const element = iniciateWords[i];
      if(lowerMessage.includes(element)) {
        return initiateConversation();
      } if(lowerMessage.includes('loan')) {
        return loanOptions();
      } if(lowerMessage.includes('goodbye')) {
        return endConversation();
      }
    } 
  }

  function initiateConversation() {
    // PEDIR USUÁRIO E SENHA E PARAMETRIZAR ELAS

    // PARA CADA OPÇÃO MOSTRE INFORMAÇÕES RELEVANTES COM UM LINK DE REFERÊNCIA

  }

  function loanOptions() {
    // MOSTRAR AS OPÇÕES QUE AO SEREM CLICADAS RENDERIZA INFORMAÇÕES E UM LINK SOBRE O ASSUNTO
  }

  function endConversation() {
    // FINALIZE A CONVERSA E ARMAZENE-A
  }

  return (
    <>
      <div>
        <input
          type='text'
          placeholder='Hello to initiate'
          value={ message }
          onChange={ messageHandler }
        />
        <button type='button' onClick={ sendMessage }>
          <img src='../public/send-icon.png'/>
        </button>
      </div>
    </>
  )
}

export default Chat
