import delay from '../../utils/delay';
import APIError from '../../errors/APIError';

class HttpClient {
  async get(path) {
    await delay(500);
    const response = await fetch(path);
    const contentType = response.headers.get('Content-Type');
    let body = null;
    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }
    throw new APIError(body?.error || `${response.status}${response.statusText}`);
  }
}

export default new HttpClient();
