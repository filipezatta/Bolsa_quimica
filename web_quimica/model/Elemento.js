module.exports = class Elemento { 
    constructor() {
      this.nome = "";
      this.descricao = "";
      this.abbreviation = "" ;
      this.numAtom = "";
    }

    listar(conexao, callback) {
        var sql = "select * from elemento";
    
        conexao.query(sql, 
              function (err, result) {
                if (err) throw err;
                return  callback(result);
              }
        );
    }
    
    
    inserir(conexao) {
    var sql = "insert into elemento (nome, abbreviation, descricao, numatom) values (?, ?, ?, ?)";
    conexao.query(sql, 
                  [this.nome, this.abbreviation, this.descricao, this.numAtom],
                  function (err, result) {
                    if (err) throw err;
                  }
    );

  }
}

