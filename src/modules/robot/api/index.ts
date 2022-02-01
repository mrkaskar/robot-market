import { backendURL, backendRoutes } from 'config/backend';

const { getRobot } = backendRoutes;

export default async function getAllRobots():Promise<unknown> {
  return window.fetch(`${backendURL}${getRobot}`).then(async (res) => {
    const data = await res.json();
    if (res.ok) {
      return data;
    }

    return Promise.reject(data);
  });
}
