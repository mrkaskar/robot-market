import { backendURL, backendRoutes } from 'config/backend';
import { IRobot } from 'types/robot';

const { getRobot } = backendRoutes;

export default async function getAllRobots():Promise<IRobot[]> {
  return window.fetch(`${backendURL}${getRobot}`).then(async (res) => {
    const data = await res.json();
    if (res.ok) {
      return data.data;
    }

    return Promise.reject(data);
  });
}
