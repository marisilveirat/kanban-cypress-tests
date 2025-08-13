# features/testes_quadro_kaban.feature

Funcionalidade: Testes da funcionalidade do Quadro Kanban

  Cenário 1: Validar DarkMode e LightMode:
    Dado que o usuário está na página do Quadro Kanban
    Quando o usuário clica no modo Claro (LightMode)
    Então o texto "Quadro Kanban" deve ficar preto
    Quando o usuário clica no modo Escuro (DarkMode)
    Então o texto "Quadro Kanban" deve ficar branco

  Cenário 2: Deletar uma tabela:
    Dado que a tabela "Done" está visível
    Quando o usuário clica no ícone de lixeira na tabela "Done" para deletar
    Então o título "Done" não deve existir mais na página

  Cenário 3: Adicionar uma nova lista:
    Dado que o usuário está na página do Quadro Kanban
    Quando o usuário clica no campo "Adicionar outra lista"
    E digita "Feito"
    E clica em "Adicionar lista" e sistema aprova a ação
    Então o título "Feito" deve aparecer na página

  Cenário 4: Adicionar tarefa:
    Dado que o usuário está na lista "To Do"
    Quando o usuário clica em "Adicionar tarefa"
    E digita "Teste Cypress"
    E clica em "Enviar"
    Então a tarefa "Teste Cypress" deve aparecer no card da lista (validação feita por clique no card)

  Cenário 5: Editar nome da tarefa:
    Dado que a tarefa "UX Review" está na lista "Done"
    Quando o usuário clica no card da tarefa
    E clica no texto da tarefa para editar
    E digita "Teste Cypress"
    E clica em "Editar nome da task"
    Então a tarefa deve ter o nome "Teste Cypress"

  Cenário 6: Deletar tarefa:
    Dado que a tarefa "UX Review" está na lista "Done"
    Quando o usuário clica no ícone de lixeira para deletar
    Então a tarefa "UX Review" não deve existir mais na lista "Done"

  Cenário 7: Criar nova tag:
    Dado que o usuário está visualizando um card
    Quando o usuário clica no card e seleciona a cor azul para a tag
    E clica no texto "Adicionar nova tag"
    E digita "Urgente"
    E clica em "Enviar"
    Então a tag "Urgente" deve aparecer no card
