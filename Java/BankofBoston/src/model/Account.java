package model;

public class Account {
    float saldo;
    public String nomeConta;
    public String numeroConta;
    public int limiteEspecial;
    public String teste = "GodDemais";

    public void account() {
        saldo = 0;

    }

    public void depositar(float deposito) {
        saldo += deposito;
    }

    public void sacar(float sacar) {
        try {
            if (sacar > saldo) {
                throw new NullPointerException("Saldo Insulficiente, seu Saldo: " +saldo);
            } else {
                saldo -= sacar;
            }
        } catch (NullPointerException e) {
            throw e;
        }
    }

    public String toString() {
        return "Conta: "+nomeConta +" - " +"Numero da Conta: "+numeroConta+" Saldo Atual: "+ saldo+ " - "+"Limite: "+limiteEspecial;
    }

}
