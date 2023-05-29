---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Mermaid from '@site/src/theme/Mermaid';



<Tabs
defaultValue="javascript"
values={[
  {label: 'Função', value:'javascript' },
  {label: 'Interface', value:'interface' },
]
}>
<TabItem value="javascript">

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

```typescript title="src/pages/Home/components/SalesChart/index.tsx"

interface IAnnualSales {
  date: number
  value: number
```
</TabItem>
</Tabs>





# Tutorial Intro

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
