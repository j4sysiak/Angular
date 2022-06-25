import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServersRoutingService {

  private serversRouting = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServersRouting() {
    return this.serversRouting;
  }

  getServerRouting(id: number) {
    const serverRouting = this.serversRouting.find(
      (s) => {
        return s.id === id;
      }
    );
    return serverRouting;
  }

  updateServerRouting(id: number, serverRoutingInfo: { name: string, status: string }) {
    const serverRouting = this.serversRouting.find(
      (s) => {
        return s.id === id;
      }
    );
    if (serverRouting) {
      serverRouting.name = serverRoutingInfo.name;
      serverRouting.status = serverRoutingInfo.status;
    }
  }
}
