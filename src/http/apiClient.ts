import { NewsletterDto } from "@/dto/newsletter";
import { UserDto } from "@/dto/user";

const baseUrl = "http://localhost:3000";

const endpoints = {
  currentUser: `${baseUrl}/api/current-user`,
  newsletters: `${baseUrl}/api/newsletters`,
} as const;

const httpClient = {
  get: <T>(url: string, config: RequestInit = {}) => {
    return fetch(url, config).then((r) => r.json()) as T;
  },
};

const getApiClient = () => {
  return {
    getCurrentUser: async () => httpClient.get<UserDto>(endpoints.currentUser),
    getNewsletters: async () =>
      httpClient.get<NewsletterDto[]>(endpoints.newsletters),
  };
};

export const apiClient = getApiClient();
