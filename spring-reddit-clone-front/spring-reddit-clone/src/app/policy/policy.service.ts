import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PolicyModel} from './policy-model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllPolicies(): Observable<Array<PolicyModel>> {
    return this.http.get<Array<PolicyModel>>(this.baseUrl + 'api/policy');
  }

  getPolicyById(id: number): Observable<PolicyModel> {
    return this.http.get<PolicyModel>(this.baseUrl + 'api/policy/' + id);
  }

  getPoliciesByProductId(productId: number): Observable<Array<PolicyModel>> {
    return this.http.get<Array<PolicyModel>>(this.baseUrl + 'api/policy/by-product/' + productId);
  }

  getPoliciesByKeyword(theKeyword: string): Observable<Array<PolicyModel>> {
    console.log('theKeyword (in policy.service) = ' + theKeyword);
    return this.http.get<Array<PolicyModel>>(this.baseUrl + 'api/policy/by-name-containing/' + theKeyword);
  }

  createPolicy(policyModel: PolicyModel): Observable<any> {
    return this.http.post(this.baseUrl + 'api/policy/', policyModel);
  }

  updatePolicy(id: number, policy: PolicyModel): Observable<any>  {
    return this.http.put(this.baseUrl + 'api/policy/' + id, policy);
  }

  deletePolicy(id: number): Observable<any>  {
    return this.http.delete(this.baseUrl + 'api/policy/' + id);
  }
}
