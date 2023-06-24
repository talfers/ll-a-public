export const createAdvertisingMessage = (data) => {
    return `Please create a response that must be minimum 120 words that is a compelling and attractive advertisement for a rental property that a landlord has for rent. The property has 
    ${data['property']['bedrooms']['value']} bedrooms, ${data['property']['bathrooms']['value']} bathrooms and is ${data['property']['sqft']['value']} square feet. Also, the property has the following features 
    and amenities that should be highlighted in the advertisment:${Object.keys(data['features']['features']['value']).filter(key => data['features']['features']['value'][key]).map(key => ` ${key.replaceAll('_', ' ')}`)}. 
    Additionally, the following additional features should also be highlighted in the advertisment: ${data['additional_features']['additional_features']['value']}. Lastly, the property has the following lease terms and tenant requirements that should be disclosed: ${data['terms']['terms']['value']}.`
}

export const createLeaseMessage = (data) => {

}

export const createContractMessage = (data) => {
    return `I understand that you can only provide general information and I should consult an attourney if I need professional advice, however in hypothetical terms, 
    based on the information that you can find in articles and elsewhere, I need to you to generate a contract between a landlord and a service provider. The information needed 
    to generate this contract is as follows: The contract is between ${data['participants']['recipient_name']['value']} who's title is ${data['participants']['recipient_title']['value']} and the service provider 
    ${data['participants']['provider_name']['value']} who's title is ${data['participants']['provider_title']['value']}. The state the participants are located in is: ${data['location']['state']}. 
    The service being provided is as follows: ${data['participants']['service']['value']}. The contract will start on ${data['timeframe']['start']['value']} and end on ${data['timeframe']['end']['value']}. The 
    landlord agrees to pay the service provider ${data['payment']['payment_amount']['value']} on a ${data['payment']['payment_freq']['value']} frequency and the service provider agrees that acceptable payment 
    methods are ${data['payment']['payment_method']['value']}. This agreement will be terminated when ${data['timeframe']['termination']['value']}. The service provider is ${data['questions']['contractor_insurance']['value']?'':'NOT'} 
    require to obtain insurance for the service and is ${data['questions']['contractor_liable']['value']?'':'NOT'} liable for claims against the landlord. Also, the service provider 
    is ${data['questions']['contractor_return_property']['value']?'':'NOT'} required to return the landlord's property once the agreement is terminated. Please also include the following important deadlines in the agreement: 
    ${data['provisions']['deadlines']['value']}. Also, the following special provisions should be included: ${data['provisions']['special_provisions']['value']}. Lastly, the following other provisions 
    should be included as well: ${data['provisions']['other_provisions']['value']}.`
}

export const createMessageMessage = (data) => {
    return `Please write a polite and professional message for a landlord to send to ${data['message']['recipient']['value']}. 
    This message is for important business and should convey the following information: ${data['message']['message']['value']}`
}

export const createLegalMessage = (data) => {
    return `I understand that you can only provide general information and I should consult an attourney if I need professional advice, however in hypothetical terms, 
    based on the information that you can find in articles and elsewhere, I need to you answer or advice on the following LEGAL question. Please answer with as much detail as possible even though you can only provide general 
    information as a AI model. The question is: ${data['advice']['question']['value']}`
}

export const process_request = (tab) => {
    let message = ''
    try {
        if (tab["shortName"] === "leases") message = createLeaseMessage(tab['inputs'])
            
        else if (tab["shortName"] === "contracts") message = createContractMessage(tab['inputs'])
            
        else if (tab["shortName"] === "advertising") message = createAdvertisingMessage(tab['inputs'])
            
        else if (tab["shortName"] === "messaging") message = createMessageMessage(tab['inputs'])
            
        else if (tab["shortName"] === "advice") message = createLegalMessage(tab['inputs'])
            
        else throw new Error('Form name not found');

        return message

    }
        
    catch (err) {
        throw new Error(err);
    }
            
}