import { signIn, signUp } from '../controllers/authController';
import { authorization } from '../middlewares/auth';

import express from 'express';
import { signInValidator, signUpValidator } from '../validators/authValidator';
import { editInfo, getInfo } from '../controllers/userController';
import { editAction } from '../validators/userValidator';

export const routes = express.Router();

// routes.get('/users',authorization, getUser);
// routes.get('/users/:id/profile', getUserProfile);
// routes.post('/user', createUser );

routes.get('/ping', authorization, (req, res)=> {
  console.log(req.body)
  res.json('pong')
})
routes.post('/produto/filtrar', (req, res)=> {
  const filtros = req.body





  let where = ''
        const whereBoolean = (dado:any, campo:any) => {
          let result = ''
          if (dado == '0' || dado == '1') {
            result = ' and ' + campo + ' = ' + dado
          }
          return result
        }
        const whereEquals = (dado:any, campo:any) => {
          let result = ''
          if (typeof dado !== 'undefined' && dado != '00' && dado != '') {
            result = ' and ' + campo + ' = "' + dado + '"'
          }
          return result
        }

        const whereLike = (dado:any, campo:any) => {
          let result = ''
          if (typeof dado !== 'undefined' && dado != '00' && dado != '') {
            result = ' and ' + campo + ' like "%' + dado + '%"'
          }
          return result
        }

        const whereIn = (dados:any, campo:any) => {
          let result = ''
          if (typeof dados !== 'undefined' &&
            dados.length > 0) {
            let strIn = ''
            for (let i = 0; i < dados.length; i++) {
              strIn += ' ' + dados[i]

              if (i + 1 < dados.length) {
                strIn += ','
              }
            }
            result = ' and ' + campo + ' in (' + strIn + ')'
          }
          return result
        }
        const whereInColumn = (dados:any, campo:any, column:any) => {
          let result = ''
          if (typeof dados !== 'undefined' &&
            dados.length > 0) {
            let strIn = ''
            for (let i = 0; i < dados.length; i++) {
              strIn += '' + dados[i][column] + ''

              if (i + 1 < dados.length) {
                strIn += ','
              }
            }
            result = ' and ' + campo + ' in (' + strIn + ')'
          }
          return result
        }
        const whereBetween = (dados:any, dados_fim:any, campo:any) => {
          let result = ''
          if ((typeof dados !== 'undefined' && dados != '00' && dados != '') &&
            (typeof dados_fim !== 'undefined' && dados_fim != '00' && dados_fim != '')) {
            let dtInicio = dados.substr(6, 4) + '-' + dados.substr(3, 2) + '-' + dados.substr(0, 2)
            let dtFim = dados_fim.substr(6, 4) + '-' + dados_fim.substr(3, 2) + '-' + dados_fim.substr(0, 2)
            result = ' and ' + campo + ' between \'' + dtInicio + '\' and \'' + dtFim + '\''
          }
          return result
        }

        if (filtros.meus_cadastros == true) {
          where += ' and ((p.user_id_integracao = ' + filtros.user_id_integracao + ') or (pr.user_id = ' + filtros.user_id_integracao + ')) '
        }
        where += whereBetween(filtros.periodo_criacao, filtros.periodo_criacao_fim, 'p.data_criacao')
        where += whereBetween(filtros.periodo_atualizacao, filtros.periodo_atualizacao_fim, 'p.data_alteracao')
        where += whereEquals(filtros.num_ordem_prod, 'p.num_ordem_prod')
        where += whereEquals(filtros.idt_projetos, 'pr.idt_projeto')
        where += whereLike(filtros.codigo_produto_erp, 'p.codigo_produto_erp')
        where += whereEquals(filtros.idt_produtos, 'p.idt_produtos')
        where += whereInColumn(filtros.desc_familia_projeto, 'fp.id_familia_projeto', 'id_familia_projeto')
        where += whereInColumn(filtros.desc_colecao, 'colecao.id_colecao', 'id_colecao')
        where += whereEquals(filtros.id_status, 's.id_status')
        where += whereEquals(filtros.id_estagio, 'estagio.id_estagio')
        where += whereInColumn(filtros.tipo_usuario, 'pc.id_tipo_usuario', 'id_tipo_usuario')
        where += whereInColumn(filtros.id_disciplina, 'disciplina.id_disciplina', 'id_disciplina')
        where += whereLike(filtros.nome_produto, 'p.nome_produto')

        where += whereInColumn(filtros.id_modalidade_projetos_itens, 'mpi.id_modalidade_projetos_itens', 'id_modalidade_projetos_itens')
        where += whereInColumn(filtros.unidade, 'u.idt_unidade', 'idt_unidade')

        where += whereInColumn(filtros.idt_formato_item, 'pric.idt_formato_item', 'idt_formato_item')
        where += whereInColumn(filtros.idt_versao, 'versao.idt_versao', 'idt_versao')
        where += whereInColumn(filtros.id_tipo_produto, 'tp.id_tipo_produto', 'id_tipo_produto')
        where += whereInColumn(filtros.desc_nivel_ensino, 'ne.id_nivel_ensino', 'id_nivel_ensino')

        where += whereBoolean(filtros.prod_grafica_externa, 'pc.prod_grafica_externa')
        where += whereBoolean(filtros.prod_grafica_interna, 'pc.prod_grafica_interna')
        where += whereBoolean(filtros.prod_editorial, 'pc.prod_editorial')
        where += whereBoolean(filtros.fornecedor_externo, 'pc.fornecedor_externo')
        where += whereBoolean(filtros.lancamento, 'produtos_detalhes.lancamento')
        where += whereBoolean(filtros.visualizar_aplicativo, 'p.visualizar_aplicativo')
        where += whereEquals(filtros.edicao, 'produtos_detalhes.edicao')

        where += whereInColumn(filtros.idt_tipo_funcao, 'pp.idt_tipo_funcao', 'idt_tipo_funcao')
        where += whereInColumn(filtros.participantes, 'pp.idt_pessoas', 'idt_pessoas')

        where += whereEquals(filtros.isbn, 'produtos_detalhes.isbn')
        where += whereEquals(filtros.ean, 'produtos_detalhes.ean')
        where += whereEquals(filtros.num_nopi, 'p.num_nopi')
        where += whereInColumn(filtros.id_certificacao, 'produtos_certificacao.id_certificacao', 'id_certificacao')
        where += whereInColumn(filtros.id_tipo_papel, 'p.id_tipo_papel', 'id_tipo_papel')

        where += whereLike(filtros.descricao_comercial, 'p.desc_comercial')
        where += whereLike(filtros.desc_produto, 'p.desc_produto')

        where += whereLike(filtros.nome_comercial, 'p.nome_comercial')
        where += whereEquals(filtros.id_classificacao, 'p.id_classificacao')

        var rodape = ''

        console.log(where)


        if (filtros.count) {
          var select = 'SELECT ' +
            '  count(distinct p.codigo_produto_erp) as Qtd ';
          rodape = '';
        } else {
          var select = 'SELECT ' +
            '  distinct ' +
            '  p.codigo_produto_erp, ' +
            '  p.idt_produtos, ' +
            '  produtos_detalhes.isbn, ' +
            '  produtos_detalhes.ean, ' +
            '  p.nome_produto, ' +
            '  ne.desc_nivel_ensino, ' +
            '  fp.desc_familia_projeto, ' +
            '  colecao.desc_colecao, ' +
            '  tp.desc_tipo_produto, ' +
            '  tipo_usuario.desc_tipo_usuario, ' +
            '  p.data_criacao, ' +
            '  p.data_alteracao, ' +
            '  mpi.desc_modalidade, ' +
            '  sub_tipo_produto.desc_sub_tipo_produto, ' +
            '  versao.desc_versao, pr.idt_projeto, se.desc_selo_editorial, p.fluig_processinstanceid, p.visualizar_aplicativo, ' +
            '  s.desc_status,estagio.id_estagio, estagio.desc_estagio, estagio.help_texto, estagio.icone, estagio.cor, pr.idt_tipo_cadastro, p.nome_comercial, s.id_status,pr.ano, ifnull(cl.desc_classificacao,"") as desc_classificacao ';
          rodape = ' group by   p.codigo_produto_erp, ' +
            '  p.idt_produtos, ' +
            '  produtos_detalhes.isbn, ' +
            '  produtos_detalhes.ean, ' +            
            '  p.nome_produto, ' +
            '  ne.desc_nivel_ensino, ' +
            '  fp.desc_familia_projeto, ' +
            '  colecao.desc_colecao, ' +
            '  tp.desc_tipo_produto, ' +
            '  tipo_usuario.desc_tipo_usuario, ' +
            '  p.data_criacao, ' +
            '  p.data_alteracao, ' +
            '  mpi.desc_modalidade, ' +
            '  sub_tipo_produto.desc_sub_tipo_produto, ' +
            '  versao.desc_versao, pr.idt_projeto, se.desc_selo_editorial, p.fluig_processinstanceid, ' +
            ' s.desc_status,estagio.id_estagio, estagio.desc_estagio, estagio.help_texto, estagio.icone, estagio.cor, pr.idt_tipo_cadastro, p.nome_comercial, s.id_status,pr.ano  ';
          if (filtros.page > 0) {
            var limiteInicial = parseInt(filtros.page) - 1
            if (limiteInicial < 0) { limiteInicial = 9999999999999 }

            rodape += ' LIMIT ' + (limiteInicial * 10) + ',10'

          }
        }
       var newSelect = select +
          'FROM produtos p ' +
          'left join produtos_cabecalho pc ' +
          '  on pc.idt_produtos_cabecalho = p.idt_produtos_cabecalho ' +
          'left join nivel_ensino ne ' +
          '  on ne.id_nivel_ensino = pc.id_nivel_ensino ' +
          'left join familia_projeto fp ' +
          '  on fp.id_familia_projeto = pc.id_familia_projeto ' +
          'left join projetos_itens_cabecalho pric ' +
          '  on pric.idt_projetos_itens_cabecalho = pc.idt_projetos_itens_cabecalho ' +
          'left join unidade u on u.idt_unidade = pric.idt_unidade ' +
          'left join projetos pr ' +
          '  on pr.idt_projeto = pric.idt_projeto ' +
          'left join empresa e ' +
          '  on e.id_empresa = pr.id_empresa ' +
          'left join colecao ' +
          '  on colecao.id_colecao = pr.id_colecao ' +
          'left join tipo_produto tp ' +
          '  on tp.id_tipo_produto = pc.id_tipo_produto ' +
          'left join selo_editorial se ' +
          '  on se.id_selo_editorial = pr.id_selo_editorial ' +
          'left join produtos_disciplina pd ' +
          '  on pd.idt_produtos = p.idt_produtos ' +
          'left join disciplina ' +
          '  on disciplina.id_disciplina = pd.id_disciplina ' +
          'left join versao ' +
          '  on versao.idt_versao = pc.idt_versao ' +
          'left join produtos_serie_ano psa ' +
          '  on psa.idt_produtos = p.idt_produtos ' +
          'left join serie_ano ' +
          '  on serie_ano.id_serie_ano = psa.id_serie_ano ' +
          'left join tipo_usuario ' +
          '  on tipo_usuario.id_tipo_usuario = pc.id_tipo_usuario ' +
          'left join estagio ' +
          '  on estagio.id_estagio = p.id_estagio ' +
          'left join modalidade_projetos_itens mpi ' +
          '  on mpi.id_modalidade_projetos_itens = pc.id_modalidade_projetos_itens ' +
          'left join status s ' +
          '  on s.id_status = p.id_status ' +
          'left join produtos_detalhes ' +
          '  on produtos_detalhes.idt_produtos = p.idt_produtos ' +
          'left join participantes_produtos pp ' +
          '  on pp.idt_produtos = p.idt_produtos ' +
          'left join pessoas ' +
          '  on pessoas.idt_pessoas = pp.idt_pessoas ' +
          'left join produtos_certificacao ' +
          '  on p.idt_produtos = produtos_certificacao.idt_produtos ' +
          'left join sub_tipo_produto ' +
          '  on sub_tipo_produto.id_sub_tipo_produto = pc.id_sub_tipo_produto ' +
          'left join classificacao cl on p.id_classificacao = cl.id_classificacao' +
          ' where 1 = 1 ' + where +
          ' and p.codigo_produto_erp > 0 ' +
          ' and p.status_integracao > 1 ' +
          ' ' + rodape

  res.send(newSelect)
})

routes.post('/user/signin', signInValidator, signIn);
routes.post('/user/signup', signUpValidator, signUp);

routes.get('/user/me', authorization, getInfo);
routes.put('/user/me', editAction, authorization, editInfo);

//Doações
routes.put('/donations');