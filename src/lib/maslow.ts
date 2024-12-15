import axios from "axios";
import { get } from "svelte/store";
import { history } from "./stores/history";
class Maslow {
  private need: number | null = null;

  async send(content: string) {
    history.update(current => [...current, { role: 'user', content }]);
    if (get(history).length == 1) {
      const response = await axios.post<{ need: number, message: Message }>(`${import.meta.env.VITE_API}/start`, { content });
      this.need = response.data.need;
      history.update(current => [...current, response.data.message]);
      return response.data.message;
    }
    else {
      const response = await axios.post<Message>(`${import.meta.env.VITE_API}/reply`, { content, history: get(history), need: this.need });
      history.update(current => [...current, response.data]);
      return response.data;
    }
  }

  async analyse(content: string) {
    const response = await axios.post<string>(`${import.meta.env.VITE_API}/analyse`, { content, history: get(history), need: this.need });
    return response.data;
  }
}

export default new Maslow;