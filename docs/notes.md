## Next.js
* `next js` umožňuje renderovat na serveru a uživatel si je jenom zobrazí, což je dobré, protože je to rychlejší, než kdyby si klient muset řešit všechny JS věci. Navíc někteří klienti nemají aktivovaný JS a to je ak problém
    * další výhoda je, že na straně klienta je to klasický `html`, coř je super pro SEO (search engine optimization), který by jinak musel do JS a to nedokáže
    * s tím jdou i problémy, kdy chceme třeba některé komponenty interaktivní, ale přitom je nemáme kativní u klienta, což je potřeba obejít
* každá komponenta, která je v `app`, tak je automaticky na straně serveru (nedostaneme se k ní u klienta). To lze obejít tím, že se u komponenty přidá `'use client'` při definování komponenty, ale jakmile jsou na této komponentě závislé ostatní komponenty, tak ty jsou automaticky taky dostupné u klienta
**Fetch**
* posílání http requestů, abych získal data, které jsou normálně na straně uživatele, ale tady se to dá vhodně udělat, aby se většina věcí děla na serveru
    * jelikož se čeká na ten výsledek z nějakého zdraje, tak musím použít `await` a `async`
* `interface`` -> definování datové struktury, kterou třeba mohu přiřadit k datům, které z někama fetchuji, abych si pak urychlil přiřazování
    * tohle je asi specialitka TypeScriptu
* je to dobré, když třeba držím databázi s daty někde bokem a nechci ji posílat s obsahem na uživatele?

**Cache**
* data se cachují, abych při opakovaném přístupu nemusel znovu načítat pomocí fetch. Když vím, že se moje data často mění, tak mohu cachování vypnout
* cachované věci v `prod` jsou považovány jako static, což znamená, že se neobnovují dokud se nezmění obsah
* dynamický rendering je v případě, kdy třeba necachuji a rendering se pak děje přímo u uživatele

**Styling**
* `@media ...` je css featura, která detekuje, zda je uživatel například v dark mode a pak mohu automaticky měnit pozadí aplikace
* `global.css` se používá pro nastavení opravdu globálních věcí jako pozadí atd, které se propíše na všechny stránky.
* vše co se týká komponent jenom by se mělo měnit přímo u komponenty -> css module
* `css module` je css, které definuji přímo pro danou komponentu nebo stránku, aby se mi například nemlátili stejné názvy komponent atd. Název je například stejný jako komponenta, ale koncovka je `.module.css`
    * styl pak naimportuji přímo v komponentě a je to pro mě potom JS objekt
    * styl zase přiřazuji komponentě přes `className={}` podobně jako jsou přiřazovány class v html
    * každý module a jméno je pak přejmenováno automaticky, aby se to právě nepletlo s jinými nadefinovanými styly. Proto když se člověk podívá ve vývojáři, tak uvidí něco trochu jiného než jak to má pojmenováno v projektu
* `tailwindcss` je další možnost, jak nastavovat styling komponent přímo v komponentě, takže nemusím ani vytvářet css module. Tailwindcss definuje nějaké utility classes, které mohu použít. Je jich hodně a když se to člověk naučí, tak to může ulehčit práci.
    * je to trochu jednodušší, protože se to nerozdělí na dva soubory (definovaná komponenta a styl), ale zase to může být méně přehlednější při složitějších stylování
* `DaisyUI` je určitá nádstavba nad tailwindcss, kde mám předdefinované nějaké styly třeba pro tlačítko atd atd
    * je potřeba nainstalovat a použít jako tailwind plugin

## React
* nejrozšířenější framework pro front-end (Meta)
* normální DOM (document object model) je statický (strom) v čistě HTML a CSS, takže JS přidává funkcionalitu, která umožní třeba obnovení jenom určité části aplikace
* V reactu máme jednotlivé části jako komponenty, takže mohu každou část DOM měnit nezávisle 
* jedná se o strom složený z komponent. Každá komponenta může mít i podkomponenty (třeba like)
* pro čistě react app se může použít `vite`
* když vytvářím komponentu, tak je s koncovkou `.tsx`, kde to `x` mi naznačuje, že se jedná o react
* dnes se nejčastěji používají JS funkce a už se tak nepoužívají class, ale dříve se to používalo více, takže záleží na projektu
    * používá se PascalCasing pro pojmenování funkcí
* syntax se používá uvnitř je JS XML, což je to, co vypadá jako HTML... každopádně je to pak zkompolováno na JS
* ty komponenty potom volám v dalších komponentech jakoby to bylo HTML, takže zase otevřu a zavřu.. je potřeba importovat vždy
* JS vytváří `virtual DOM` a react obnovuje pouze ty změněné komponenty. Jedná se tedy o obnovení nodu stromu, který je vytvořený
    * tohle řeší knihovna `react-dom` 
    * mám někde `main.tsx`, který řeší to renderování pomocí `ReactDOM`. Mohu použít i jiné rendering možnosti jako `ReactNative`, který je pro mobilní zařízení
* `library` -> nástroj, který umožňuje využít nějakou funkcionalitu (REACT)
* `framework` –> sada nástrojů a pokynů pro tvorbu aplikací 
    * řeší i další věci jako rounting, http requests, ...

**Rounting**
* umožnění jít z jedné stránky na druhou. Zde není myšleno na úplně jinou stránku, ale na další jakoby záložku té dané aplikace

* `bootstrap` je knihovna pro css, která má nějaké věci předdefinované, ať to nestylizujeme od začátku
    * je potřeba jej nainstalovat a správně importovat v hlavní části aplikace
    * mám tam předdefinované nějaké věci, které mohou vypadat pěkně, takže mi to staší následovat a využít pro nějakou mou komponentu
* abych mohl rozšířit js kód do více řádků, tak musí být v závorkách!
* komponenta nemůže vrátit více jako jednu `jsx` komponentu (třeba jeden `<h1>`), takže to musím případně wrapnout do `<div>` a vrátit to tak. Příůadně lze využít přímo react věc `Fragment`, který je potřeba z reactu naimportovat a pak vložit tu danou jsx věc do fragmentu
    * ještě zjednodušení je vložit jenom do `<> </>`, což react sám pochopí, že se jedná o Fragment a není to ani potřeba importovat!

**Dynamické alokování**
* používáme `{}` pro přiřazení proměnné někam
* vždy si ve funkci vytvořím většinou proměnnou přes `const`, kam mohu pak přiřazovat třeba data z databáze
    * `const` je nějaká fixní hodnota specifikovaná!
    * `let` je variable!
* jsx nemá for loop, takže je potřeba používat `map`
* i když chci měnit dynamicky nějakou xml (jsx) komponentu, tak to celé musím dát do `{ }`
    * to co je v `return`. Před return mohu používat obecně JS?? 
* react a map chce i `key` pro každý `item`, aby to mohlo dobře mapovat (často třeba ID produktu)

**Click**
* každý element má metodu `onClick`, což může třeba vypsat něco do console (samozřejmě mohu i něco uložit, což je pro mě zajímavé chování uživatelů?)
* jsou tam dokonce i attributy toho kliknutí, což má doplňující informace třeba kde uživatel kliknul v souřadnici atd
* nejlepší je to hned alokovat do konstanty

* TypeScript má taky type annotations, které jsou ale asi statické pro compiler?

* i CSS mohu definovat dynamicky zase přes `{ }`, kde tomu dám podle splněných podmínek třeba jiný styling
* React musí znát i stav proměnné, abych mohl třeba přistupovat k něčemu, co je lokální ve funkci, v rámci celé aplikace
    * `useState()` -> z Reactu
    * každá komponenta má stav, takže se k němu musím dostat... NEní potřeba měnit nic v DOMu, ale právě v komponentě
    * každá instance komponenty má vlastní stav, takže když ji využívám třeba vícekrát, tak se neovlivňují

**Obecnost komponenty**
* přes parametry funkce, která definuje tu komponentu
* využíváme zde `interface`, který definuje typy vstupu

* vstup do funkce může bát i funkce, který mi pak řeší tředa následné akce. Když mám komponentu, kterou když zvolím, tak by měla něco udělat. Může to být otevření něčeho dalšího nebo tak něco.
    * takže třeba to akorát zavolá jen další komponentu nebo tak něco

* parametry funkcí jsou imutable!
* state je mutable -> stav komponenty se může měnit, což je dobře

**Children**
* každá komponenta má tuto metodu
* při definování parametrů mohu nastavit název proměnné jako `children: ReactNode`, což pak mohu vkládat klidně i HTML nebo něco složitějšího

### Click
* musím vlastně vytvořit funkci pro kliknutí, kterou pak přiřadím třeba tlačítku
* jelikož často můžu chtít něco třeba udělat se vstupem po kliknutí, tak je vhodné to dát jako anonymní funkci (není definovaná přes `cons`). Taková funkce bude aktivována až po kliknutí. 
    * je to vlastně tak, že normálně si vytvořím funkci, která něco dělá a tu dám do anonymní funkce, která je v tlačítku 
```
const Neco () => {

    const clickEvent(name) => {
        console.log('hello' + name)
    }


    return (
        <button onClick={() => {    # tady právě dávám do anonymní funkce tu vytvořenou
                clickEvent('hello')
        }}
        >Click me</button>
    )
}

``` 


### useState
* state je objekt (data), který se může dynamicky měnit. V rámci react je to i právě změna v renderu dynamická
* na základě hodnoty toho stavu mohu zobrazovat jiné věci
* `useState` je react hook, který se používá právě k manipulaci stavu
**useState**
* má vždy dvě části:
    * první proměnná je to, co chceme měnit. Třeba counter, který se bude měnit podle kliknutí
    * druhá část je updater function, která mění stav té první proměnné
* při inicializaci `useState` udávám defaul hodnotu


### TypeScript
* upravuje nějaké neduhy JavaScriptu (přidané featury). Každý JS script je i TS script
* i když je to dynamický jazyk, tak TS přidává Type Checking. S těmi anotacemi to jde do compileru, takež uvidíme, zda je to ok nebo ne
* stejně jako JS jej mohu použít na FE i BE
* je nutná kompilace do JS, protože by tomu jinak prohlížeče nerozuměly
    * doporučeno pro větší a střední projekty, jinak na malé stačí jen vanilla JS
* `tsc` pro třeba zjištění verze TS compileru
* jakmile vytvořím nějaký skript v `.ts`, tak compiler `npx tsc script.ts` mi vytvoří `.js` soubor
    * zde už type notation nebude, protože je jen pro compiler 

**Config**
* compiler mohu i konfigurovat (například když vytvořím projekt v `next js`, tak ten mi vytvoří `tsconfig.json`). Zde je třeba i verze JS, na kterou míří TS při kompilaci do JS.
    * ty verze jsou `ES2016` například. Je to nějaký standard, který JS jenom implementuje
* je tam možné nastavit vstupní / výstupní soubor, kde třeba ukládá ty JS soubory
* jakmile nastavím cestu ke zdrojům, tak pak při kompilování nemusím pak zadáat ani název souboru, ale jen volám `tsc`

* VSC má dobré tooly pro debug, ale je potřeba spolupracovat i s tím configem (nastavit cestu k němu)
    * Dá se debugovat krok po kroku a dokonce i lozit do funkcí. Tohle musí být velice zajímavé i pro python, ne jen TS

**DataTypes**
* k JS přidává any, unknown, never, enum a tuple
* nemusíme vždy přiřazovat typ, on si podle té variable přiřadí. Jakmile nepřiřadím hodnotu, tak má `any`
    * nepoužívat `any`, protože pak ztrácíme výhody TS
* parametry funkcí by se měly typovat explicitně!

**Arrays**
* `let number = [1, 2, '3']` -> array je dynamické, takže budu muset explicitně přidat typ pro chycení chyb
*  `let number: number[] = [1, 2, '3']`
* podle typu vidím hned i metody, které se dají aplikovat.. to v JS nejde
    * pozor na to, že to kompiluje do JS, takže do dtype, který má JS. Pak mi může TS nabízet metody, které ale reálně nebudou aplikovatelné 

* tuple umožňuje jiný dtype pro každý element
    * `let number: [number, string] = [1, 'Ondra']` -> tohle je přesně dvojice a nevytvořím více elementů!
* `enum` asi něco jako enumerate v pythonu, kde mi k nějakému vstupu přiřadí tuple i nějaké číslo od 0
    * je tak možné vytvořit prostě key-value dvojici
    * po kompilaci to vede k celkem složité implementaci do JS

**Functions**
* zase mohu typovat i výstup, případně si něchat defaultně otypovat podle toho, co dám jako výstup (`return`)
```
function calculateTax(income: number): number {
    return 0;
}
```
* parametrům zase můžeme přidávat defaul hodnoty `tax: number = 200`
* když mám více parametrů, ale všechny nejsou potřeba, tak se dá přidat `tax?: number` ten `?` z toho udělá `Optional`

**Objects**
* object je asi definován v `{}`
```
let employee: {
    id: number,
    name: string
} = { id: 1, name: undefined }
```
* zde zase některé prvky nemusím definovat a dám je jako optional, ale lepší je přímo je definovat, protože to alespoň využívá funkcionalitu TS pořádně
* můžeme přidat `readonly` k prvku v objektu, aby to bylo jen readonly a nemohli jsme to přepsat


**Type alias**
* když mám složitý objekt, tak mohu vytvořit alias, který pak přidávám objektům a nemusím množit definici typů
```
type Employee = {
    ...
}
```
* jakmile pak vytvářím nový objekt, tak type mu můžu dát právě ten vytvořený a pak bude očekávat jednotlivé prvky
* je to podobné jako `interface`, ale s `type` můhu například přidávat kombinací typů atd

* jde zadat i více možných typů `weight: number | string`
    * tohle má ale nějaké omezení, tak mohu použít "narrowing", kde pak uvidím alespoň metod validní ke každému typu. NArrowing je vytvoření podmínek třeba ve funkci, když mám ten nebo ten type
*  jde i kombinovat více typů možných `parametr: string & number`
    * má to smysl hlavně v případě, kdy máme vlastní typy pro funkci, které musí vpodstatě implementovat všechny metody

* dokonce můžeme i omezit interval, kam mi může variable padnout `Literal`
```
type Quantity = 50 | 100;
let quantity: Quantity = 100;
```
* takhle omezím, co může proměná být!

* TS je hodně proti používání `null`, ale ta se může někdy hodit! Je potřeba přidat možnost v typování
```
function greet(name: string | null | undefined) {
    ...
}
```

### Pagination
* https://www.youtube.com/watch?v=SXmni_7B0r4
    * pěkná ukázka, vyzkoušet!