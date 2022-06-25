import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ServersRoutingService} from '../servers-routing.service';

interface ServerRouting {
  id: number;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServerRoutingResolverService implements Resolve<ServerRouting>{

  constructor(private serversRoutingService: ServersRoutingService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ServerRouting> | Promise<ServerRouting> | ServerRouting {
    return this.serversRoutingService.getServerRouting(+route.params['id']);
  }
}
