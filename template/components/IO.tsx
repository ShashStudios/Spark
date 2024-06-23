import React, { useState, useEffect, useRef } from 'react';

interface Message {
  text: string;
  role: 'user' | 'model';
}

interface ChatbotProps {
  sendMessageToAI: (messages: Message[], input: string) => Promise<string>;
}

const Chatbot: React.FC<ChatbotProps> = ({ sendMessageToAI }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === '' && bio.trim() === '') return;

    const userInput = input.trim() !== '' ? input : bio;
    const newMessages: Message[] = [...messages, { text: userInput, role: 'user' }];
    setMessages(newMessages);
    setInput('');
    setBio('');
    setLoading(true);

    try {
      const responseText = await sendMessageToAI(newMessages, userInput);
      setMessages([...newMessages, { text: responseText, role: 'model' }]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '10px', textAlign: message.role === 'user' ? 'right' : 'left' }}>
            <div style={{ display: 'inline-block', padding: '10px', borderRadius: '5px', background: message.role === 'user' ? '#daf8cb' : '#f1f1f1' }}>
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div style={{ display: 'flex', padding: '10px', borderTop: '1px solid #ddd' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
          style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
        />
        <button onClick={handleSendMessage} disabled={loading} style={{ marginLeft: '10px', padding: '10px', borderRadius: '5px', background: '#007bff', color: 'white', border: 'none' }}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

const IO: React.FC = () => {
  const sendMessageToAI = async (messages: Message[], input: string): Promise<string> => {
    // Replace this with the actual implementation of sending a message to your AI model
    // For now, it returns a placeholder response after a short delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("This is a placeholder response from the AI model.");
      }, 1000);
    });
  };

  const [input, setInput] = useState('');
  const [bio, setBio] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === '' && bio.trim() === '') return;

    const userInput = input.trim() !== '' ? input : bio;
    const newMessages: Message[] = [...messages, { text: userInput, role: 'user' }];
    setMessages(newMessages);
    setInput('');
    setBio('');
    setLoading(true);

    try {
      const responseText = await sendMessageToAI(newMessages, userInput);
      setMessages([...newMessages, { text: responseText, role: 'model' }]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-4 left-0 right-0 flex flex-col items-center">
      <div className="fixed bottom-4 left-0 right-0 flex justify-center">
        <div className="flex flex-col bg-gray-800 bg-opacity-50 backdrop-blur-md border rounded-lg p-2">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="input input-bordered bg-transparent flex-grow"
            />
            <input
              type="file"
              className="file-input file-input-bordered file-input-accent ml-2"
            />
            <button 
              className="btn btn-accent ml-2" 
              onClick={handleSendMessage} 
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
          <textarea
            className="textarea textarea-success mt-2 p-2 rounded flex-grow"
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', height: '50vh', width: '100%', overflowY: 'auto', padding: '350px' }}>
  {messages.map((message, index) => (
    <div key={index} style={{ marginBottom: '10px', textAlign: message.role === 'user' ? 'right' : 'left' }}>
      <div 
        style={{ 
          display: 'inline-block', 
          padding: '10px', 
          borderRadius: '5px', 
          background: message.role === 'user' ? '#daf8cb' : '#f1f1f1', 
          whiteSpace: 'pre-wrap', 
          overflowWrap: 'break-word', 
          textIndent: '20px' 
        }}>
        {message.text}
      </div>
    </div>
  ))}
</div>
        <div ref={messagesEndRef} />
      </div>
  );
};

export default IO;
