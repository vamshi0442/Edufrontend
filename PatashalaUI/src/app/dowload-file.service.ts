import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DowloadFileService {

  constructor(private httpClient:HttpClient) { }

  public downloadImage(){
    return this.httpClient.get("https://patshalastorage.blob.core.windows.net/patshalagallery/",
      {observe:'response',responseType:'blob'}
    )
  }
}
