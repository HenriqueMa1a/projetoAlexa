const Alexa = require("ask-sdk-core");

const DOCUMENT_ID = "interface";

const datasource = {
    "textListData": {
        "type": "object",
        "objectId": "textListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAclBMVEUAAABoaGiwsLCGhoaMjIyRkZGlpaWcnJy3t7d3d3dmZmbAwMDExMSzs7NeXl6Dg4NQUFAhISFYWFg1NTVDQ0M8PDx9fX2qqqrNzc02NjZSUlKVlZWgoKApKSkiIiLCwsLU1NQRERHj4+NJSUlxcXELCwvsC3ASAAABfElEQVR4nO3T24rcMAyAYdmJD4kd5zhJJsl0s5v0/V+xGXrRlt4slO6y8H9gCQQGSSARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4JfmcYVSa0lX+lkqHtJ2V35Uupekhj8/ZM+Qi9S/1b55fX/m8QMa/g8K82Ilu5V1Fqps9HWMTTX5vA5Bhq0281bPZopFdNfbY9++7CoY8dcafEwhmOb0s/R2NMGv0+6GIsT8qH08566aP3u4d8ptN0nWZIXVjZ167dZRz/ZVO3u/BfXIXa707Eyaosu2ejmMziv93IHVyY16OvPwJn1Uzaq96Eo5M1m1zZPya9jbz57ufTp1O2XZjJS1Ke92UOlwmXpNeSaPJG0qF3so1wzFqjq19GLWzhVyuqTOofF7tx2r+95eh2RGJabcDr832zKuvR1W90V28E/q5u/a2H18HwDwhfwAf1wQi18Sf/QAAAAASUVORK5CYII=",
                    "size": "large"
                }
            ]
        },
        "title": "Universidade Sena",
        "listItems": [
            {
                "primaryText": "Texto"
            },
            {
                "primaryText": "Áudio"
            },
            {
                "primaryText": "Data"
            }
        ],
        "logoUrl": "https://gastromotiva.org/wp-content/uploads/2018/12/unisuam.png"
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

/*const SampleAPLRequestHandler = {
    canHandle(handlerInput) {
        // handle named intent
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'INTENT_NAME';
    },*/
    
   module.exports = { 
       teste: (handlerInput)=> {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
}
      /*  // send out skill response
        return handlerInput.responseBuilder.getResponse();*/
    }

/*    
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(SampleAPLRequestHandler)
    .lambda(); */