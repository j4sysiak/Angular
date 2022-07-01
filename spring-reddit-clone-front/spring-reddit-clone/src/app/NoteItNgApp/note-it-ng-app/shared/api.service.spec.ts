import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import {ApiService} from './api.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Notebook} from "../notes/model/notebook";


describe('ApiService', () => {

  let httpMock: HttpTestingController;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [ApiService]
    });

    httpMock = getTestBed().get(HttpTestingController);
    apiService = getTestBed().get(ApiService);

  });

  it('it is created', () => {
    expect(apiService).toBeTruthy();
  });

  it('should get all notebooks from http', () => {
    // arrange
    let dummyNotebooks:Notebook[] = [
      {id:'1', name:'default', nbOfNotes:0}
    ];

    //act
    apiService.getAllNotebooks().subscribe(
      response => {
        expect(response.length).toBe(1);
        expect(response).toEqual(dummyNotebooks);
      }
    );

    //http mock
    let  request = httpMock.expectOne(apiService.ALL_NOTEBOOKS_URL);
    expect(request.request.method).toBe('GET');
    request.flush(dummyNotebooks);
  });

});
