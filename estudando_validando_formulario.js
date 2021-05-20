//ATRIBUTOS DE VALIDAÇÃO DE FORMULÁRIO:

//requiered: incluir no final do input (e outras tags) no html com preenchimento obrigatório.
//autocomplete="none" : COLOCAR NO form e no imput, para não autocompletar os inputs.
//title= Mensagem de erro na validação: "A senha deve conter entre 6 à 12 caracteres".

//type="email" para pré validação.
//type="password" - minlength ? maxlenght ? -usar REGEX. usar title para msg de erro.
//type="date" - Data de nascimento.

//REGEX PARA SENHA: 
//Nesta regex é necessário pelo menos 1 caracter maiusculo, 1 minusculo, 1 número, 
// e não permitido caracter especial, mínumo 6 máximo 12.
// São 4 conjuntos de regras delimitados por pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$"
//^(?=.*[a-z]) ?=permitimos alguns caracteres menos a quebra de linha(o ponto). * pelo menos um caracter minúsculos de [a-z]
//(?=.*[A-Z]) repete acima, pelo menos um caracter de [A-Z] maiusculas
//(?=.*[0-9]) repete acima, pelo menos um caracter de [0-9]
//(?!.*[ !@#$%^&*_=+-]) ?! interrogação caracteres não permitidos
//.{6,12}$  mínimo seis e máximo 12 caracteres

//REGEX PARA VALIDAR O CPF:
//pattern="[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}"

//REGEX PARA VALIDAR O CEP:
//pattern="[\d]{5}-?[\d]{3}"

//JAVASCRIPT para validar idade maior que 18 anos.
//JAVASCRIPT para validar CPF repetido.
//JAVASCRIPT para validar CEP via API via CEP.

//Como adicionar máscara monetária para o campo de preço:
//github: https://github.com/codermarcos/simple-mask-money
//colocar script abaixo do script js no html
//seguir exemplo no readme do github, eliminado regras não utilizadas.

//DICA:
//O evento blur ocorre quando um objeto perde o foco.
//O evento blur é usado na validação do formulário 
//(por exemplo, quando o usuário sai de um campo do formulário).
//Dica: O evento blur é o oposto do evento focus .

//repositório do projeto estudado neste curso: darre_dashboard