using System;

namespace DIO.Series
{
    public class Serie : EntidadeBase
    {
        private Genero Genero {get; set;}

        private string Titulo {get; set;}

        private string Descricao {get; set;}

        private int Ano {get; set;}

        private bool Ativo {get; set;}

        //construtor
        public Serie(int id, Genero genero, string titulo, string descricao, int ano, bool ativo){

            this.Id = id;
            this.Genero = genero;
            this.Titulo = titulo;
            this.Descricao = descricao;
            this.Ano = ano;
            this.Ativo = true;
        }

        public override string ToString()
        {
            string retorno = "";
            retorno += "Genero: " + this.Genero + Environment.NewLine; 
            retorno += "Titulo: " + this.Titulo + Environment.NewLine; 
            retorno += "Descricao: " + this.Descricao + Environment.NewLine; 
            retorno += "Ano de Inicio " + this.Ano;
            return retorno;
        }

        public string retornaTitulo(){
            return this.Titulo;
        }


        public int retornaId(){
            return this.Id;
        }

        public bool retronaExcluido(){
            return this.Ativo = false;
        }


        public void Excluir(){
            this.Ativo = false;
        }
    }
}