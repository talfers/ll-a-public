import createDataContext from './createDataContext';
import tabs from '../data/tabs';
import * as prompts from '../prompts'
import config from '../config'


const taskReducer = (state, action) => {
  switch(action.type) {
    case 'update_value':
      const updateState = {...state}
      updateState.tabs[action.payload.tab].inputs[action.payload.section][action.payload.name].value = action.payload.value
      return updateState;
    case 'post_response':
      const postState = {...state}
      postState.tabs[action.payload.tabId].response = action.payload.response
      return postState;
    case 'increment_step':
      if (state.tabs[action.payload.tabId].step >= Object.keys(state.tabs[action.payload.tabId].inputs).length - 1){
        return state
      } else {
        const incrementState = {...state}
        incrementState.tabs[action.payload.tabId].step = action.payload.step
        return incrementState;
      }
    case 'decrement_step':
      if (state.tabs[action.payload.tabId].step <= 0){
        return state
      } else {
        const decrementState = { ...state }
        decrementState.tabs[action.payload.tabId].step = action.payload.step
        return decrementState;
      }
    case 'reset_response':
      const resetState = {...state}
      resetState.tabs[action.payload.tabId].response = ""
      return resetState;
    case 'update_loading':
      const updateLoadingState = {...state}
      updateLoadingState.tabs[action.payload.tabId].loading = action.payload.value
      return updateLoadingState;
    case 'reset_state':
      return { tabs: [...tabs]}
    default:
      return state;
  }
}

const updateLoading = (dispatch) => {
  return (tabId, value) => {
    dispatch({ type: 'update_loading', payload: { tabId, value } })
  }
}

const postTaskData = (dispatch) => {
  return async (tab) => {
    try {
    let message = prompts.process_request(tab)
    console.log(message);
    // Fetch the response from the OpenAI API with the signal from AbortController
    const response = await fetch(config.REACT_APP_OPENAI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
        stream: true, // For streaming responses
      }),
    });
    
    // Read the response as a stream of data
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    dispatch({ type: 'update_loading', payload: { tabId: tab.id, value: false } })
    while (true) {
      const { done, value } = await reader.read();
      
      if (done) {
        break;
      }
      // Massage and parse the chunk of data
      const chunk = decoder.decode(value);
      const lines = chunk.split("\n");
      const parsedLines = lines
        .map((line) => line.replace(/^data: /, "").trim()) // Remove the "data: " prefix
        .filter((line) => line !== "" && line !== "[DONE]") // Remove empty lines and "[DONE]"
        .map((line) => JSON.parse(line)); // Parse the JSON string
      
      for (const parsedLine of parsedLines) {
        const { choices } = parsedLine;
        const { delta } = choices[0];
        const { content } = delta;
        
        // Update the UI with the new content
        if (content) {
          if(content === '' || content === ' ') dispatch({type: 'post_response', payload: {response: tab.response += '\n', tabId: tab.id}})
          else dispatch({type: 'post_response', payload: {response: tab.response += content, tabId: tab.id}})
        }
      }
    }
    }
    catch(err) {
      updateLoading(tab.id, false)
      console.log(`Error posting to the assistant API. Error: ${err}`);
    }
  }
}

const updateValue = (dispatch) => {
  return (value, tab, section, name) => {
    dispatch({ type: 'update_value', payload: {tab, section, name, value }})
  }
}

const incrementStep = (dispatch) => {
  return (tabId, step) => {
    let newStep = step + 1
    dispatch({ type: 'increment_step', payload: { tabId, step: newStep } })
  }
}

const decrementStep = (dispatch) => {
  return (tabId, step) => {
    let newStep = step - 1
    dispatch({ type: 'decrement_step', payload: { tabId, step: newStep } })
  }
}

const resetResponse = (dispatch) => {
  return (tabId) => {
    dispatch({ type: 'reset_response', payload: { tabId } })
  }
}

const resetState = (dispatch) => {
  return () => {
    dispatch({ type: 'reset_state' })
  }
}


export const { Provider, Context } = createDataContext(
  taskReducer,
  { postTaskData, updateValue, updateLoading, incrementStep, decrementStep, resetResponse, resetState },
  {tabs: [...tabs]}
)