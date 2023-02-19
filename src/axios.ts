const token =
  "skFuCyQUqRz60y2ZqFqNxBKlm6dYH7RgJSo0wz4TpbdQWHpJBCcTYaaU3aKkPQzwvYoOg4fBX0kgeGDylhKAYvjfSE1Rn9dp0bxVOLkXtdqOqhs7DqR7YcGPNHHY2AUHE04LdBViOQ40MBj0oitjpqqzDIEX3nv8yh4Uq8NgFZv8d3iCMOz6";

import axios from "axios";

export const api = axios.create();

api.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ${token}`;

  return config;
});
