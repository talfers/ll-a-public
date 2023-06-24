import { FaRegEnvelope, FaRegHandshake, FaRegNewspaper, FaRegQuestionCircle } from "react-icons/fa";
import { GrDocument } from "react-icons/gr";

const tabs = [
    {
        id: 0,
        shortName: "advertising",
        shortDescription: "Please provide some information about the property so that I can create a compelling advertisement that highlights the best features and attracts suitable tenants.",
        name: "Advertising",
        icon: <FaRegNewspaper/>,
        title: 'Create Advertising Message',
        text: "For me to write an advertisement for an apartment or rental house you have for rent, it would be helpful for you to provide some information about the property. With the information below, I can create a compelling advertisement that highlights the best features of your property and attracts suitable tenants.",
        submitMessage: "Create Advertising",
        step: 0,
        loading: false,
        response: "",
        inputs: {
            "property": {
                "bedrooms": {
                    title: "Bedrooms",
                    placeholder: "",
                    type: "number",
                    size: 100,
                    step: 1,
                    value: 0
                },
                "bathrooms": {
                    title: "Bathrooms",
                    placeholder: "",
                    type: "number",
                    size: 100,
                    step: 1,
                    value: 0
                },
                "sqft": {
                    title: "Sqft",
                    placeholder: "",
                    type: "number",
                    size: 100,
                    step: 50,
                    value: 500
                    
                }},
            "features": {
                "features": {
                    title: "Property features",
                    placeholder: "Be sure to include any notable features such as a balcony, yard, parking or pool that help your property stand out..",
                    name: "features",
                    type: "cluster",
                    // type: "textarea",
                    size: 100,
                    // value: ''
                    value: {
                        'central_ac': false,
                        'central_heat': false,
                        'off_street_parking': false,
                        'washer_and_dryer': false,
                        'pool': false,
                        'patio': false,
                        'hardwood_floors': false,
                        'garage': false,
                        'good schools': false,
                        'views': false,
                        'freshly_renovated': false,
                        'garden': false,
                        'energy_efficient': false,
                    }
                }
            },
            "additional_features": {
                "additional_features": {
                    title: "Additional features",
                    placeholder: "Be sure to include any notable features that help your property stand out..",
                    name: "additional_features",
                    type: "textarea",
                    size: 100,
                    value: ''
                }
            },
            "terms": {
                "terms": {
                    title: "Lease terms & requirements",
                    placeholder: "Include details about lease terms like rental price or utilities as well as any tenant requirements such as no pets or a minimum credit score.",
                    name: "terms",
                    type: "textarea",
                    size: 100,
                    value: ''
                }
            }       
        }, 
    },
    {
        id: 1,
        shortName: "messaging",
        shortDescription: "Please provide some background information on the situation so that I can draft a clear and professional message that effectively communicates the needs and expectations to the recipient.",
        name: "Messages",
        icon:  <FaRegEnvelope/>,
        title: 'Write a Email or Text Message',
        text: "For me to write a message for a landlord that needs to correspond with a tenant or contractor or otherwise for important business, it would be helpful to provide some background information on the situation and the purpose of the message. With the information below, I can draft a clear and professional message that effectively communicates the landlord's needs and expectations to the recipient.",
        submitMessage: "Create Message",
        step: 0,
        loading: false,
        response: "",
        inputs: {
            "message": {
                "recipient": {
                    title: "Recipient",
                    placeholder: "Recipient title or relation to you",
                    type: "text",
                    size: 50,
                    value: ''
                },
                "message": {
                    title: "Message explaination",
                    placeholder: "Please include any details about important issues or concerns, specific requests or instructions, and/or any deadlines or time-sensitive information.",
                    type: "textarea",
                    size: 100,
                    value: ''
                }
            }
        }
    },
    {
        id: 2,
        shortName: "leases",
        shortDescription: "Please provide a detailed breakdown of the information and provisions to include in your lease agreements so that I can provide a simple lease agreement. Please note it is important to consult with a licensed attorney to ensure agreement is legally sound and protects your interests.",
        name: "Leases",
        icon: <GrDocument/>,
        title: 'Write a Lease Agreement',
        text: "For me to write a simple lease agreement for you to use with tenants, I will need a detailed breakdown of the information and provisions you would like to include in your lease agreement. Be as descriptive as possible. With this information, I can provide you with a simple lease agreement between a landlord and tenant(s), but it is important to consult with a licensed attorney to ensure that the lease agreement is legally sound and properly protects your interests.",
        submitMessage: "Write Lease",
        step: 0,
        loading: false,
        response: "",
        inputs: {
            "location": { 
                "state": {
                    title: "State",
                    placeholder: "",
                    type: "select",
                    size: 10,
                    value: ''
                }
                
            },
            "participants": {
                "landlord_name": {
                    title: "Landlord Name/Company",
                    placeholder: "Landlord Name or Company, LLC",
                    type: "text",
                    size: 40,
                    value: ''
                },
                "tenant_name": {
                    title: "Tenant Name",
                    placeholder: "John Smith",
                    type: "text",
                    size: 40,
                    value: ''
                },
                "landlord_address": {
                    title: "Landlord Address",
                    placeholder: "123 S Main St Town, State 55555",
                    type: "text",
                    size: 40,
                },
                "property_address": {
                    title: "Property Address",
                    placeholder: "456 N Main St Town, State 55555",
                    type: "text",
                    size: 40,
                    value: ''
                }
            },
            "timeframe": {
                "start": {
                    title: "Start date",
                    placeholder: "Start date",
                    type: "date",
                    size: 30,
                    value: ''
                },
                "end": {
                    title: "End date",
                    placeholder: "End date",
                    type: "date",
                    size: 30,
                    value: ''
                },
                "lease_term": {
                    title: "Lease Term",
                    placeholder: "1 year, 6 months",
                    type: "text",
                    size: 70,
                    value: ''
                },
                
            },
            "payment": {
                "rent_amount": {
                    title: "Rent amount",
                    placeholder: "$1,000",
                    type: "number",
                    size: 100,
                    step: 25,
                    value: 0
                },
                "security_deposit": {
                    title: "Security deposit",
                    placeholder: "$1,000",
                    type: "number",
                    size: 100,
                    step: 25,
                    value: 0
                },
                "rent_due_date": {
                    title: "Rent Due Date",
                    placeholder: "First of the Month",
                    type: "text",
                    size: 20,
                    value: ''
                },
                "payment_methods": {
                    title: "Payment methods",
                    placeholder: "Cash, check, Venmo, etc.",
                    type: "text",
                    size: 30,
                    value: ''
                }
                
                
            },
            "pets": {
                "pets_allowed": {
                    title: "Pets allowed?",
                    placeholder: "",
                    type: "checkbox",
                    size: 10,
                    value: ''
                },
                "pet_deposit": {
                    title: "Pet deposit",
                    placeholder: "$500",
                    type: "number",
                    size: 100,
                    step: 25,
                    value: 0
                },
                "pet_rent": {
                    title: "Pet rent",
                    placeholder: "$50",
                    type: "number",
                    size: 100,
                    step: 25,
                    value: 0
                },
            },
            "late_fees": {
                "late_fee_amount": {
                    title: "Late fee amount",
                    placeholder: "$50",
                    type: "number",
                    size: 100,
                    step: 5,
                    value: 0
                },
                "late_fee_start": {
                    title: "Late fee start",
                    placeholder: "5th of the month",
                    type: "text",
                    size: 20,
                    value: ''
                },
                "late_fee_recurring": {
                    title: "Late fee recurring?",
                    placeholder: "",
                    type: "checkbox",
                    size: 10,
                    value: ''
                },
                "late_fee_recurring_amount": {
                    title: "Recurring amount",
                    placeholder: "$10 per day",
                    type: "text",
                    size: 20,
                    value: ''
                },
                "bad_check_penalty": {
                    title: "Bad check penalty",
                    placeholder: "$50",
                    type: "number",
                    size: 100,
                    step: 5,
                    value: 0
                },
                
            },
            "utilities": {
                "utilities_landlord": {
                    title: "What utilities are paid by landlord?",
                    placeholder: "Trash, sewer",
                    type: "text",
                    size: 45,
                    value: ''
                },
                "utilities_tenant": {
                    title: "What utilities are paid by tenant?",
                    placeholder: "Electric, gas, water, phone, internet",
                    type: "text",
                    size: 45,
                    value: ''
                }
            },
            "maintenance": {
                "maintenance_name": {
                    title: "Maintenance name",
                    placeholder: "George Smith",
                    type: "text",
                    size: 30,
                    value: ''
                },
                "maintenance_contact": {
                    title: "Maintenance contact",
                    placeholder: "Phone #, email of maintenance",
                    type: "text",
                    size: 60,
                    value: ''
                },
                "maintenance_landlord": {
                    title: "What maintenance responibilities are expected of the landlord?",
                    placeholder: "Snow removal, gutter cleaning",
                    type: "text",
                    size: 45,
                    value: ''
                },
                "maintenance_tenant": {
                    title: "What maintenance responibilities are expected of the tenant?",
                    placeholder: "Landscaping, cleaning, etc.",
                    type: "text",
                    size: 45,
                    value: ''
                }
            },
            "furnishings": {
                "furnishings": {
                    title: "List furnishing provided by landlord",
                    placeholder: "Fridge, stove, microwave",
                    type: "text",
                    size: 45,
                    value: ''
                }
            },
            "privileges":{
                "storage_privilege": {
                    title: "Storage policy and privileges",
                    placeholder: "Storage policy for tenant(s)",
                    type: "text",
                    size: 45,
                    value: ''
                },
                "parking_privilege": {
                    title: "Parking policy and privileges",
                    placeholder: "Parking policy for tenant(s)",
                    type: "text",
                    size: 45,
                    value: ''
                }
            },
            "usage": {
                "num_guests": {
                    title: "# of guests allowed",
                    placeholder: "5",
                    type: "number",
                    size: 100,
                    step: 1,
                    value: 0
                },
                "guest_stay_short": {
                    title: "How long can they stay at a time",
                    placeholder: "7 days",
                    type: "text",
                    size: 30,
                    value: ''
                },
                "guest_stay_long": {
                    title: "How long can they stay total per year",
                    placeholder: "3 weeks",
                    type: "text",
                    size: 30,
                    value: ''
                },
                "sublet_allowed": {
                    title: "Tenant sublet allowed?",
                    placeholder: "",
                    type: "checkbox",
                    size: 30,
                    value: ''
                },
                "smoking_allowed": {
                    title: "Smoking allowed on-prem?",
                    placeholder: "",
                    type: "checkbox",
                    size: 30,
                    value: ''
                },
                "lead_paint": {
                    title: "Built prior to 1978?",
                    placeholder: "",
                    type: "checkbox",
                    size: 30,
                    value: ''
                },
            },
            "termination": {
                "tenant_termination_notice": {
                    title: "Notice for termination",
                    placeholder: "45 days",
                    type: "text",
                    size: 30,
                    value: ''
                },
                "tenant_termination_fee": {
                    title: "Fee for termination",
                    placeholder: "4 months rent",
                    type: "text",
                    size: 20,
                    value: ''
                }
            },
            "property_damage": {
                "unexpected_property_damage": {
                    title: "Who pays unexpected property damage?",
                    placeholder: "Landlord",
                    type: "text",
                    size: 40,
                    value: ''
                },
                "unexpected_property_damage_amount_landlord": {
                    title: "Amount landlord will pay",
                    placeholder: "50% up to $1,000",
                    type: "text",
                    size: 70,
                    value: ''
                }
            },
            "keys": {
                "num_keys": {
                    title: "Number of keys",
                    placeholder: "5",
                    type: "number",
                    size: 100,
                    step: 1,
                    value: 0
                },
                "key_replacement_amount": {
                    title: "New key fee",
                    placeholder: "$150",
                    type: "number",
                    size: 100,
                    step: 10,
                    value: 0
                },
                "lockout_amount": {
                    title: "Lockout fee",
                    placeholder: "$300",
                    type: "number",
                    size: 100,
                    step: 10,
                    value: 0
                }
            },
            "provisions": {
                "special_provisions": {
                    title: "Special Provisions",
                    placeholder: "Please enter any other provisions you would like to include in the lease agreement, i.e. dispute resolution",
                    type: "textarea",
                    size: 100,
                    value: ''
                },
                "other_provisions": {
                    title: "Other Provisions",
                    placeholder: "Please enter any other provisions you would like to include in the lease agreement",
                    type: "textarea",
                    size: 100,
                    value: ''
                },
            }
        }
    },
    {
        id: 3,
        shortName: "contracts",
        shortDescription: "Please provide a detailed breakdown of the information to include in your agreement so that I can provide a simple service agreement. Please note it is important to consult with a licensed attorney to ensure agreement is legally sound and protects your interests.",
        name: "Contracts",
        icon: <FaRegHandshake/>,
        title: 'Write a Contract Agreement',
        text: "For me to write a simple service contract for you to use with a contractor, maintenance company and more, I will need a detailed breakdown of the information you would like to include in your agreement. Be as descriptive as possible. With this information, I can provide you with a simple agreement between a landlord and service provider, but it is important to consult with a licensed attorney to ensure that the agreement is legally sound and properly protects your interests.",
        submitMessage: "Write Contract",
        step: 0,
        loading: false,
        response: "",
        inputs: {
            "location": { 
                "state": {
                    title: "State",
                    placeholder: "",
                    type: "select",
                    size: 10,
                    value: ''
                }
            },
            "participants": {
                "recipient_name": {
                    title: "Recipient Name",
                    placeholder: "John Smith",
                    type: "text",
                    size: 40,
                    value: ''
                },
                "recipient_title": {
                    title: "Recipient Title",
                    placeholder: "Property Owner",
                    type: "text",
                    size: 50,
                    value: ''
                },
                "provider_name": {
                    title: "Provider Name",
                    placeholder: "George Doe",
                    type: "text",
                    size: 40,
                    value: ''
                },
                "provider_title": {
                    title: "Provider Title",
                    placeholder: "Property Manager",
                    type: "text",
                    size: 50,
                    value: ''
                },
                "service": {
                    title: "Service to be provided",
                    placeholder: "Please explain in detail the service to be provided",
                    type: "textarea",
                    size: 100,
                    value: ''
                },
            },
            "timeframe": {
                "start": {
                    title: "Start date",
                    placeholder: "Start date",
                    type: "date",
                    size: 30,
                    value: ''
                },
                "end": {
                    title: "End date",
                    placeholder: "End date",
                    type: "date",
                    size: 30,
                    value: ''
                },
                "termination": {
                    title: "Termination",
                    placeholder: "What will terminate this contract",
                    type: "text",
                    size: 70,
                    value: ''
                },
            },
            "payment": {
                "payment_method": {
                    title: "Payment method",
                    placeholder: "Cash, check, money order, Venmo",
                    type: "text",
                    size: 30,
                    value: ''
                },
                "payment_amount": {
                    title: "Payment amount",
                    placeholder: "$1,000",
                    type: "text",
                    size: 40,
                    value: ''
                },
                "payment_freq": {
                    title: "Payment freq",
                    placeholder: "Monthly, Quarterly",
                    type: "text",
                    size: 30,
                    value: ''
                },
            },
            "questions": {
                "contractor_insurance": {
                    title: "Contractor must obtain insurance?",
                    placeholder: "",
                    type: "checkbox",
                    size: 20,
                    value: ''
                },
                "contractor_liable": {
                    title: "Contractor is liable for claims against recipient?",
                    placeholder: "",
                    type: "checkbox",
                    size: 20,
                    value: ''
                },
                "contractor_return_property": {
                    title: "Contractor is required to return property of recipient at termination?",
                    placeholder: "",
                    type: "checkbox",
                    size: 20,
                    value: ''
                },
            },
            "provisions": {
                "deadlines": {
                    title: "Important deadlines",
                    placeholder: "Please enter any important deadlines you would like to include in the agreement",
                    type: "textarea",
                    size: 100,
                    value: ''
                },
                "special_provisions": {
                    title: "Special Provisions",
                    placeholder: "Please enter any special provisions you would like to include in the agreement",
                    type: "textarea",
                    size: 100,
                    value: ''
                },
                "other_provisions": {
                    title: "Other Provisions",
                    placeholder: "Please enter any other provisions you would like to include in the agreement",
                    type: "textarea",
                    size: 100,
                    value: ''
                },
            }
        }
    },
    {
        id: 4,
        shortName: "advice",
        shortDescription: "Please provide details about the legal matter you are asking about so that I can provide you with information related to the matter in question. Please note this information should not be used as a substitute for advice from a licensed attorney.",
        name: "Advice",
        icon: <FaRegQuestionCircle/>,
        title: 'Ask a Legal Assistant',
        text: "For me to assist you with legal matters in the real estate industry, it would be helpful to provide as much detail as possible about the legal matter you are asking about. With this information, I can provide you with general information and resources related to the legal matter in question, but it is important to note that this information should not be considered as a substitute for legal advice from a licensed attorney.",
        submitMessage: "Send to Assistant",
        step: 0,
        loading: false,
        response: "",
        inputs: {
            "advice": {
                "question": {
                    title: "Question",
                    placeholder: "Enter your legal question. Please include any relevant background information, specific questions, and any relevant laws or regulations that may be applicable.",
                    type: "textarea",
                    size: 100,
                    value: ''
                }
            }
        }
    }
];

export default tabs