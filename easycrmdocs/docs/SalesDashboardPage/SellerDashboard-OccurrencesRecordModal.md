---
id: OccurencesRecordModal
title: Modal de Registro de Ocorrências
sidebar_position: 1
stoplight-id: iov2t3xbqawx4
tags: [Mocks, dashboard, seller, vendedor]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Registro de Ocorrências - modal
## Método: OccurrencesRecordModal 
___

![image.png](img/OccurrencesRecordModal.png)



## Sintaxe
____

Com o erro ou falha da função, o resultado é setado como `undefined`.

<Tabs defaultValue="Função"
values={[
  {label:  'Função', value:'Função' },
  {label:  'Interface', value:'interface' },
  {label:  'Retorno', value:'retorno'}
  ]
}>
<TabItem  value="Função">

```typescript title="src/pages/Seller/Dashboard/components/OccurrencesRecord/Modal\index.tsx"

export function OccurrencesRecordModal({ ocurrenceId, onClose }: Props) {
  const [result, setResult] = useState<IOcurrenceRecord[] | undefined | null>(
    null
  )

  const fetchData = useCallback(async (ocurrenceId: number) => {
    try {
      setResult(null)

      await fakeRequest(2000, { ocurrenceId })

      setResult([
        {
          customerId: 123451,
          companyName: 'Exemplo de Razão Social LTDA',
          ocurrenceId: 12341,
          invoicingId: 12345671,
          officeName: 'Nome do Escritório',
          creationDate: '2022-08-19',
          occurrenceName: 'Concluída'
        },
        {
          customerId: 123452,
          companyName: 'Exemplo de Razão Social LTDA',
          ocurrenceId: 12342,
          invoicingId: 12345672,
          officeName: 'Nome do Escritório',
          creationDate: '2022-08-19',
          occurrenceName: 'Concluída'
        },
        {...}
      ])
    } catch {
      setResult(undefined)
    }
  }, [])

  useEffect(() => {
    ocurrenceId && fetchData(ocurrenceId)
  }, [fetchData, ocurrenceId])

  const handleOcurrenceName = useCallback((ocurrenceName: string) => {
    switch (ocurrenceName) {
      case 'Em análise':
        return 'default'

      case 'Sinalização':
        return 'helper'

      case 'Reclamação':
        return 'warning'

      default:
        return 'success'
    }
  }, [])

  return (...)
}
```

</TabItem>

<TabItem value="interface">

```typescript  title="src/pages/Seller/Dashboard/components/OccurrencesRecord/Modal/index.tsx"
interface IOcurrenceRecord {
  customerId: number
  companyName: string
  ocurrenceId: number
  invoicingId: number
  officeName: string
  creationDate: string
  occurrenceName: string
}

interface Props {
  ocurrenceId: number | null
  onClose: () => void
}
```

</TabItem>

<TabItem value="retorno">

```typescript  title="src/pages/Seller/Dashboard/components/OccurrencesRecord/Modal/index.tsx"
const res: Props = {
  data: [
    {     
      customerId: 123451,
      tradingName: 'Exemplo de Nome Fantasia',
      phone: '(99) 99999-9999',
      email: 'exemplodeemail@email.com.br'
    },
    {
      customerId: 123452,
      tradingName: 'Exemplo de Nome Fantasia',
      phone: '(99) 99999-9999',
      email: 'exemplodeemail@email.com.br'
    },
    {...}
  ]
}
```

</TabItem>

</Tabs>

## Descrição
A função `OccurrencesRecordModal{}` ativada com clique no gráfico de registro de ocorrências, utiliza o hook `useState()`  retomando os elementos de `IOccurenceRecord` aplicando os valores `result` e `setResult`.

Com o erro ou falha da função, o resultado é setado como `undefined`.

## Parâmetros

Parâmetros |Requerimento|Tipo de dado  | definição|
---------|-----|----------|---------
`customerId`|Requerido|number | Número de identificação do cliente
`companyName`|Requerido|string | Nome da companhia envolvida na ocorrência
`OccurenceId`|Requerido|number | Número de identificação da ocorrência
`invoicingId`|Requerido|number | Número de identificação do boleto/cobrança
`officeName`|Requerido|string | Nome do escritório envolvido na ocorrência
`creationDate`|Requerido|string | Data de criação da ocorrência
`occurrenceName`|Requerido|string | Nome da ocorrência 



## Procedures
### `????_????_????_????`
Os parâmetros referidos seguem estas definições nas procedures do banco de dados:
Parâmetros |Requerimento|Tipo de dado  
---------|-----|----------
 `???` |???|??? 
 `???`|???|???
 `???`|???|???


## Valores de retorno
Com o sucesso da função a recuração `Read_only`dos dados é recuperado no display da home page. Um valor vazio não não gerará erro, contudo, não deverá apresentado em gráfico

<p></p>
<table>
<tr>
    <td>Request</td>
    <td>components/Rules/Customer/Modal/Details</td>
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

Nome do erro | Código de erro |Definição
---|---|---
?????|?????|?????
