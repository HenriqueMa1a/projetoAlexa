/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const telaAula = require('./telaAula.js');
const nota = require('./telaNotas.js')
const telaCoordenador = require('./telaCoordenador');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Universidade Sena. Compromisso para a vida toda. Você poderá acessar o seu calendário de aulas, o boletim de notas, horário do seu coordenador e mais. O que você gostaria?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt()
            .getResponse();
    }
};


const AulaPastIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AulaPastIntent';
    },
    handle(handlerInput) {
        const parDiaDaSemana = handlerInput
        .requestEnvelope
        .request
        .intent
        .slots
        .diaPastSemana
        .value;
        
        
        let speakOutput = 'Não entendi. Pode repetir?';
        
        
            
       switch (parDiaDaSemana){
            case 'ontem': 
                speakOutput = 'ontem, você teve aula de infraestrutura e redes';
                telaAula.telaAula(handlerInput);        
                   
            break;
            
            case 'hoje': 
                speakOutput = 'Hoje, você teve aula de álgebra linear';
                telaAula.telaAula(handlerInput);
            break;
        
            case '2.ª feira':
            case '2ª': 
                speakOutput = 'você teve aula de estatística e de probabilidade';
                telaAula.telaAula(handlerInput);
            break;
            
            case 'terça':
            case 'terça-feira':
            case '3.ª feira':
            case '3ª':
                speakOutput = 'você teve aula de gestão de projetos';
                telaAula.telaAula(handlerInput);
            break;
            
            case '4.ª feira':
            case '4ª':
                speakOutput = 'você teve aula de orientação a ojetos';
                telaAula.telaAula(handlerInput);
            break;

            case '5.ª feira':
            case '5ª':
                speakOutput = 'Você não teve aula neste dia';
                telaAula.telaAula(handlerInput);
            break;
            
            case '6ª':
            case '6.ª feira':
            case '6.ª':
                speakOutput = 'você teve aula de filosofia';
                telaAula.telaAula(handlerInput);
            break;
            
            case 'sábado': 
                speakOutput = 'você teve aula de geografia e de história';
                telaAula.telaAula(handlerInput);
            break;
            case 'domingo': 
                speakOutput = 'Você não teve aula neste dia';
                telaAula.telaAula(handlerInput);
            break;
        }
        
    return handlerInput.responseBuilder.speak(speakOutput).reprompt().getResponse();

  }
};


const AulaFutureIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AulaFutureIntent';
    },
    handle(handlerInput) {
        const parDiaDaSemana = handlerInput
        .requestEnvelope
        .request
        .intent
        .slots
        .diaSemana
        .value;
        
        
        let speakOutput = 'Não entendi. Pode repetir?';
        
        
            
       switch (parDiaDaSemana){
            
            case 'hoje': 
                speakOutput = 'Hoje, você terá aula de álgebra linear';
                telaAula.telaAula(handlerInput);
            break;
            
            case 'amanhã': 
                speakOutput = 'amanhã, será aula de matrizes e de vetores';
                telaAula.telaAula(handlerInput);
            break;
        
            case '2.ª feira':
            case '2ª': 
                speakOutput = 'Você terá aula de estatística e de probabilidade';
                telaAula.telaAula(handlerInput);
            break;
            
            case 'terça':
            case 'terça-feira':
            case '3.ª feira':
            case '3ª':
                speakOutput = 'Você terá aula de gestão de projetos';
                telaAula.telaAula(handlerInput);
            break;
            
            case '4.ª feira':
            case '4ª':
                speakOutput = 'Você terá aula de orientação a ojetos';
                telaAula.telaAula(handlerInput);
            break;

            case '5.ª feira':
            case '5ª':
                speakOutput = 'Você não terá aula neste dia';
                telaAula.telaAula(handlerInput);
            break;
            
            case '6ª':
            case '6.ª feira':
            case '6.ª':
                speakOutput = 'Você terá aula de filosofia';
                telaAula.telaAula(handlerInput);
            break;
            
            case 'sábado': 
                speakOutput = 'Você terá aula de geografia e de história';
                telaAula.telaAula(handlerInput);
            break;
            case 'domingo': 
                speakOutput = 'Você não terá aula neste dia';
                telaAula.telaAula(handlerInput);
            break;
        }
        
    return handlerInput.responseBuilder.speak(speakOutput).reprompt().getResponse();

  }
};




const NotasIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NotasIntent';
},
    handle(handlerInput) {
        const speakOutput = `Você tirou 9.3 na AC, e 9.1 na AI. Portanto a sua média semestral ficou 9.2`;
        nota.telaNotas(handlerInput)
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HorarioCoordenadorIntentHandler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HorarioCoordenadorIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Seu coordenador está disponível de segunda a sexta, das 14:30h às 18:30h na unidade Maracanã';
        telaCoordenador.telaCord(handlerInput);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt()
            .getResponse();
    }
};


const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        AulaFutureIntentHandler,
        AulaPastIntentHandler,
        NotasIntentHandler,
        HorarioCoordenadorIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();