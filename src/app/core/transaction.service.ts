import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = 'http://localhost:8080/api/transactions';

  constructor(private http: HttpClient) {}

  // Método para obter todas as transações
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Método para deletar uma transação
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }


  create(transaction: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, transaction); // Envia os dados no formato correto
  }  

  // Método para atualizar uma transação existente
  update(id: number, transaction: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, transaction).pipe(
      catchError(this.handleError)
    );
  }

  // Método para capturar e tratar erros das requisições HTTP
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Erro na requisição, tente novamente mais tarde.'));
  }
}
