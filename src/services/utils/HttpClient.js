import delay from '../../utils/delay';
import APIError from '../../errors/APIError';

class HttpClient {
  get(path, options) {
    return this.makeRequest(path, {
      method: 'GET',
      headers: options?.headers,
    });
  }

  post(path, options) {
    return this.makeRequest(path, {
      method: 'POST',
      body: options?.body,
      headers: options?.headers,
    });
  }

  async makeRequest(path, options) {
    await delay(500);
    const headers = new Headers();

    if (options.body) {
      headers.append('Content-Type', 'application/json');
    }

    const response = await fetch(path, {
      method: options.method,
      body: JSON.stringify(options.body),
      headers,
    });

    const contentType = response.headers.get('Content-Type');
    let responseBody = null;

    if (contentType.includes('application/json')) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }
    throw new APIError(responseBody?.error || `${response.status}${response.statusText}`);
  }
}

export default new HttpClient();
