package bank;

import model.Account;

public class Bank {

	public static void main(String[] args) {
		Account contaAcessada = new Account();
		contaAcessada.nomeConta = "moPai";
		contaAcessada.numeroConta = "015097210";
		
		contaAcessada.account();
		contaAcessada.depositar(10);
		contaAcessada.sacar(5);
		System.out.println(contaAcessada.toString());
		System.out.println(contaAcessada.teste);
	}

}
