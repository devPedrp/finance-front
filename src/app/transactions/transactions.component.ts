import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TransactionService } from '../core/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  transactions: any[] = [];
  displayedColumns: string[] = ['description', 'amount', 'type', 'category', 'actions'];

  newTransaction = {
    description: '',
    amount: 0, // Garante que o tipo seja 'number'
    type: 'income', // Tipo padrão: Receita
    category: 'Outros', // Categoria padrão
  };

  constructor(
    private transactionService: TransactionService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadTransactions();
  }

  /**
   * Carrega a lista de transações do serviço
   */
  loadTransactions() {
    this.transactionService.getAll().subscribe({
      next: (data) => (this.transactions = data),
      error: () => this.showSnackBar('Erro ao carregar transações.', 'error-snackbar'),
    });
  }

  /**
   * Cria uma nova transação
   */
  createTransaction() {
    if (!this.isValidTransaction()) {
      this.showSnackBar('Preencha os campos obrigatórios corretamente.', 'error-snackbar');
      return;
    }

    // Ajusta o valor da transação para negativo se for despesa
    if (this.newTransaction.type === 'expense') {
      this.newTransaction.amount = -Math.abs(this.newTransaction.amount);
    }

    this.transactionService.create(this.newTransaction).subscribe({
      next: () => {
        this.loadTransactions();
        this.resetForm();
        this.showSnackBar('Transação criada com sucesso!', 'success-snackbar');
      },
      error: () => this.showSnackBar('Erro ao criar transação.', 'error-snackbar'),
    });
  }

  /**
   * Edita uma transação existente
   * @param transaction Transação a ser editada
   */
  editTransaction(transaction: any) {
    this.transactionService.update(transaction.id, transaction).subscribe({
      next: () => {
        this.loadTransactions();
        this.showSnackBar('Transação editada com sucesso!', 'success-snackbar');
      },
      error: () => this.showSnackBar('Erro ao editar transação.', 'error-snackbar'),
    });
  }

  /**
   * Exclui uma transação pelo ID
   * @param id ID da transação a ser excluída
   */
  deleteTransaction(id: number) {
    this.transactionService.delete(id).subscribe({
      next: () => {
        this.loadTransactions();
        this.showSnackBar('Transação excluída com sucesso!', 'success-snackbar');
      },
      error: () => this.showSnackBar('Erro ao excluir transação.', 'error-snackbar'),
    });
  }

  /**
   * Reseta o formulário de criação
   */
  resetForm() {
    this.newTransaction = {
      description: '',
      amount: 0,
      type: 'income',
      category: 'Outros',
    };
  }

  /**
   * Exibe um snackbar com mensagem
   * @param message Mensagem a ser exibida
   * @param panelClass Classe CSS para estilização
   */
  showSnackBar(message: string, panelClass: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000,
      panelClass: [panelClass],
    });
  }

  /**
   * Valida os campos do formulário
   * @returns true se válido, false caso contrário
   */
  isValidTransaction(): boolean {
    return (
      this.newTransaction.description.trim() !== '' &&
      this.newTransaction.amount !== null &&
      this.newTransaction.amount > 0
    );
  }
}
