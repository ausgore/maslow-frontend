type Role = 'system' | 'user' | 'assistant';

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}