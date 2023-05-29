---
id: Home
title: Nome do usuário
sidebar_position: 1
tags: [Home, API, usuário, user, nome]
---
import {MDXProvider, MDXEmbedProvider,DocsContainer} from '@mdx-js/react'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Home/User: nome do usuário

## Método: Home
--- 
![image.png](img/homeUserTag.png)

### Resumo
Hook para a população do espaço de usuário.

## Sintaxe
---


<Tabs
defaultValue="Função"
values={[
  {label: 'Função', value:'Função' },
  {label: 'Schema', value:'interface' },
]
}>
<TabItem value="Função">

```typescript title=src/pages/Home/components/SalesChart/index.tsx
export function SalesChart() {
  const theme = useTheme()

  const [loading, setLoading] = useState(false)
  const [annualSales, setAnnualSales] = useState<IAnnualSales[] | null>(null)

  const fetchData = useCallback(async () => {
    if (!loading) {
      try {
        setLoading(true)

        const { data } = await fakeRequest(2000, {
          sales: [
            {
              date: new Date('2022-01-31').getTime(),
              value: 80
            },
            {
              date: new Date('2022-02-28').getTime(),
              value: 124
            },
            {...}
          ]
        })

        if (data) {
          setAnnualSales(data.sales)
        }
      } catch {
        setAnnualSales([])
      } finally {
        setLoading(false)
      }
    }
  }, [loading])

  useEffect(() => {...}, [annualSales, theme])

  return (...)
}
```
</TabItem>
<TabItem value="interface">

```json title="Schema de resposta"

{
  "$schema": "http://services/api"

  "Home": {
    "type": "object",
    "properties": {
      "user.firstName": {
        "type": "string",
        "format": "name",
        "pattern": "[A-Z  a-z]",
        "example": "Manu"
        }
    }
  }
}
```
</TabItem>
</Tabs>

## Descrição 
---
A função `Home` retoma o valor elemento `user` em `useAuthContext`, preenchendo o elemento `Pageheading` com o hook `useEffect()`. O UseEffect() chamando setPageHeading() recupera os dados de `user` em UserContextData() que retira os elementos do objeto `UserAuth` endereçados em `src\context\Auth\index.tsx`. A rota para o estabelecimento de `user.firstname` utilizam o hook `useEffect` para retormar a função `useAuthContext`com um `useContext` permitindo o gerenciamento global do efeito.

## Parâmetros
---

Parâmetros |Requerimento|Tipo de dado  | definição|
---------|-----|----------|---------
 `auth.expiresIn` |Requerido|number| tempo de expiração de autenticação
 `auth.token` |Requerido|string| Ficha de autenticação
 `auth.refreshToken` |Requerido|string| Renovação de ficha de autenticação
 `username` |Requerido|string| Nome de usuário
 `firstName` |Requerido|string| Primeiro nome social do usuário
 `companyName` |Requerido|string| Nome da companhia
 `lastAccessDate` |Requerido|string| Última data de acesso
 `acceptedTermsOfUseDate` |Requerido|string| Data da última aceitação dos termos de serviço
 `lastChangeTermsOfUse` |Requerido|string| Data de última atualização dos termos de serviço


### Procedures
### `???`

Os parâmetros referidos seguem estas definições nas procedures do banco de dados:

Parâmetros |Requerimento|Tipo de dado  
---------|-----|----------
 `???` |???|??? 
 `???`|???|???
 `???`|???|???

## Valores de retorno
---
Com o sucesso da função a recuração `Read_only`dos dados é recuperado no display da home page. No caso de ausência de valores, será apresentado o valor `0` nas três  lacunas


<p></p>
<table>
<tr>
    <td>Request</td>
    <td>pages/User/Profile</td>
</tr>
<tr>
    <td>Request Method</td>
    <td>GET</td>
</tr>
<tr>
    <td>Status Code:</td>
    <td>200</td>
</tr>
</table>

No caso de falha, alguma das mensagens de erro listadas serão apresentadas.

## Errors
---

Nome do erro | Código de erro |Definição
---|---|---
USER_NOT_FOUND| |Id do cliente não foi encontrada
