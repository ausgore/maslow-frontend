import axios from "axios";

class Maslow {
  private history: Message[] = [];
  private need: number | null = null;

  async start() {
    const response = await axios.get<{ need: number, message: Message }>(`${import.meta.env.VITE_API}/start`);
    this.history.push(response.data.message);
    this.need = response.data.need;
    return response.data.message;
  }

  async reply(content: string) {
    const response = await axios.post<Message>(`${import.meta.env.VITE_API}/reply`, { content, history: this.history, need: this.need });
    return response.data;
  }
}

export default new Maslow;