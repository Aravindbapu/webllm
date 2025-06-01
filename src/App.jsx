import { use, useEffect, useState } from 'react'
import * as webllm from "@mlc-ai/web-llm";
import "./app.css"


function App() {
  const [ count, setCount ] = useState(0)
  const [ input, setInput ] = useState("")
  const [ messages, setMessages ] = useState([ {
    role: "system",
    content: "You are a helpful assistant."
  }])
  const [ engine, setEngine ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    const selectedmodel = "Llama-3.1-8B-Instruct-q4f32_1-MLC";
    webllm.CreateMLCEngine(
      selectedmodel, 
      {
        initProgressCallback: (initProgress) => {
          console.log("init progress", initProgress);
        }
      }).then(engine => {
        setEngine(engine);
        
      })   
  }, [])


  async function sendMessageToLlm() {
    const tempMessages = [...messages];
    tempMessages.push({
      role: "user",
      content: input
    });
    setMessages(tempMessages);
    setInput("");

    // Await the result if create is async
    const reply = await engine.chat.completions.create({
      messages: tempMessages,
    });

    console.log("reply", reply);
    const text = reply.choices[0].message.content;

    setMessages([...tempMessages, {
      role: "assistant",
      content: text
    }]);
  }

  return (
    <main>
      <section>
        <div className="conversation-area">

          <div className="messages">
            {
              messages.filter((message) => message.role !== "system").map((message,index) => {
                return (
                  <div className={`message ${message.role}`} key={index}>
                    {message.content}
                  </div>

                )
              })
            }
          </div>

          <div className="input-area">
            <input 
              onChange={(e) => {
                
                setInput(e.target.value)

              }}

              value={input}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessageToLlm()
                }
              }}
              type="text" placeholder='Message LLm' />
            <button
              onClick={() => {
                sendMessageToLlm()
              }}
              className="send-button">Send</button>
            
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
