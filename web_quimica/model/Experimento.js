module.exports = class Experimento { 
    constructor() {
        this.idexperimentos ="";
        this.nome = "";
        this.descricao = "";
        this.videolink = "" ;
    }
    listar(conexao, callback) {
        var sql = "select * from experimentos";
    
        conexao.query(sql, 
              function (err, result) {
                if (err) throw err;
                return  callback(result);
              }
        );
    }
    
    inserir(conexao) {
        var sql = "insert into into experimentos (nome, abbreviation, descricao, numatom) values (?, ?, ?, ?)";
        conexao.query(sql, 
                    [this.nome, this.abbreviation, this.descricao, this.numAtom],
                    function (err, result) {
                        if (err) throw err;
                    }
        );

  }
}